# coding: utf-8
#!/usr/bin/env python
import time
import json
import re
import os
import random
import requests
import urllib
from bs4 import BeautifulSoup
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from html2text import HTML2Text
from datetime import datetime

LOGIN_URL = 'https://mp.weixin.qq.com/'
SEARCH_URL = 'https://mp.weixin.qq.com/cgi-bin/searchbiz?'
APPMSG_URL = 'https://mp.weixin.qq.com/cgi-bin/appmsg?'
#auth_user = '@163.com'
#auth_pwd = ''
auth_user = '@163.com'
auth_pwd = ''
#auth_public = ''
auth_public = ''
def get_cookies():
    cookies = {}
    with open('cookie.txt', 'r', encoding='utf-8') as f:
        cookies = json.load(f)
    return cookies

# 获取 token beautifulsoup4 html2text datetime
def get_token(response):
    return re.findall(r'token=(\d+)', str(response.url))[0]

# 模拟登录获取 Cookie
def login_and_get_cookie(auth_user, auth_pwd):
    options = webdriver.ChromeOptions()
    # driver = webdriver.Chrome(executable_path='C:\chromedriver.exe')
    # driver = webdriver.Chrome(ChromeDriverManager().install())
    #options.add_argument("--headless")
    #options.add_argument('--no-sandbox')
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    print('chrome安装路径#######', ChromeDriverManager().install())

    driver.get(LOGIN_URL)
    time.sleep(2)
    
    driver.find_element(By.XPATH,"./*//a[@class='login__type__container__select-type']").click()
    try:
    # 这里放置可能会引发异常的代码
        driver.find_element(By.XPATH,"./*//input[@name='account']").clear()
    except AttributeError as e:
        print("An AttributeError occurred:", e)
    # 其他处理错误的操作，如果需要的话

    driver.find_element(By.XPATH,"./*//input[@name='account']").send_keys(auth_user)
    
    driver.find_element(By.XPATH,"./*//input[@name='password']").clear()
    driver.find_element(By.XPATH,"./*//input[@name='password']").send_keys(auth_pwd)
    
    time.sleep(5)
    driver.find_element(By.XPATH,"./*//a[@class='btn_login']").click()
    time.sleep(15)
    driver.get('https://mp.weixin.qq.com/')
    
    cookie_items = driver.get_cookies()
    print("An cookie_items occurred:", cookie_items)
    post = {}
    for cookie_item in cookie_items:
        post[cookie_item['name']] = cookie_item['value']
    
    cookie_str = json.dumps(post)
    with open('cookie.txt', 'w+', encoding='utf-8') as f:
        f.write(cookie_str)
    
    return get_cookies()

def main():
    #cookies = get_cookies() or login_and_get_cookie(auth_user, auth_pwd)
    cookies = login_and_get_cookie(auth_user, auth_pwd)
    response = requests.get(url=LOGIN_URL, cookies=cookies)
    token = get_token(response)
    
    gzlist = [auth_public]  # 公众号列表
    
    header = {
        "HOST": "mp.weixin.qq.com",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
    }

    for query in gzlist:
        query_id = {
            'action': 'search_biz',
            'token': token,
            'lang': 'zh_CN',
            'f': 'json',
            'ajax': '1',
            'random': random.random(),
            'query': query,
            'begin': '0',
            'count': '5',
        }
        
        search_response = requests.get(SEARCH_URL, cookies=cookies, headers=header, params=query_id)
        lists = search_response.json().get('list')[0]
        fakeid = lists.get('fakeid')
        print('fakeid ###################',fakeid)
        query_id_data = {
            'token': token,
            'lang': 'zh_CN',
            'f': 'json',
            'ajax': '1',
            'random': random.random(),
            'action': 'list_ex',
            'begin': '0',
            'count': '5',
            'query': '',
            'fakeid': fakeid,
            'type': '9'
        }
        
        appmsg_response = requests.get(APPMSG_URL, cookies=cookies, headers=header, params=query_id_data)
        max_num = appmsg_response.json().get('app_msg_cnt')	
        print('allpage ###################',max_num)        
        num = int(int(max_num) / 5)
        begin = 0
        links_processed = []  # 用于存储所有处理过的链接
        
        while num + 1 > 0:
            query_id_data = {
                'token': token,
                'lang': 'zh_CN',
                'f': 'json',
                'ajax': '1',
                'random': random.random(),
                'action': 'list_ex',
                'begin': '{}'.format(str(begin)),
                'count': '5',
                'query': '',
                'fakeid': fakeid,
                'type': '9'
            }
            
            #print('翻页###################', begin)
            query_fakeid_response = requests.get(APPMSG_URL, cookies=cookies, headers=header, params=query_id_data)
            fakeid_list = query_fakeid_response.json().get('app_msg_list')
            if not fakeid_list:
                print("No more data or data format is incorrect. Exiting the loop.")
                break
            # for item in fakeid_list:
            #print(fakeid_list)
            links_to_process = [item["link"] for item in fakeid_list]
            
            
            links_processed.extend(links_to_process)
            
            num -= 1
            begin = int(begin)
            begin += 5
            time.sleep(random.uniform(2, 5))
            
        process_links(links_processed)

def save_to_md(content, filename):
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

def extract_title(html):
    soup = BeautifulSoup(html, 'html.parser')
    #title_tag = soup.find('title')
    meta_tag = soup.find('meta', {'property': 'og:title'})
    if meta_tag:
        #title = title_tag.text.strip()
        content = meta_tag.get('content')
        
        print(f"content  {content}")
        # Remove invalid characters from title to use as a filename
        filename = re.sub(r'[\/:*?"<>|]', '', content) + '.md'
        return filename
    return ''
def get_page_content(link):
    options = webdriver.ChromeOptions()
    #driver = webdriver.Chrome(options=options)
    options.add_argument("--headless")
    options.add_argument('--no-sandbox')
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    driver.get(link)

    # 等待页面加载完成，可以根据具体的元素等待条件进行调整 js_pc_qr_code_img
    wait = WebDriverWait(driver, 10)
    wait.until(EC.presence_of_element_located((By.ID, "js_article")))

    content = driver.page_source
    driver.quit()
    return content

def process_content(mainContent):
    data = {}
    
    soup1 = BeautifulSoup(mainContent, 'html.parser')
    answer2 = soup1.find('div', class_='rich_media_area_primary_inner')
    #questionTitle = soup1.find('h1', class_='rich_media_title').text
    
    htmlTemplate = f'''
        <html>
        <head><meta charSet="utf-8"/></head>
        <body>{answer2}</body>
        </html>
    '''
    soup2 = BeautifulSoup(htmlTemplate, 'html.parser')
    
    for img in soup2.find_all('img', class_='rich_pages wxw-img js_img_placeholder wx_img_placeholder'):
        actualSrc = img['data-src']
        img['src'] = actualSrc
    
    # for img in soup2.find_all('img', class_='origin_image zh-lightbox-thumb lazy'):
        # actualSrc = img['data-src']
        # img['src'] = actualSrc
    
    # for noscript in soup2.find_all('noscript'):
        # noscript.extract()
    
    data['content'] = str(soup2)
    #data['question_title'] = questionTitle
    # Add other properties as needed
    return data

def transform_to_markdown(data,file_name):
    content = data['content']
    #question_title = data['question_title']

    #file_name = f"{question_title}.md"
    #folder_name = question_title

    #if not os.path.exists(os.path.join(os.getcwd(), folder_name)):
    #    os.mkdir(folder_name)

    #file_path = os.path.join(os.getcwd(), folder_name, file_name)
    current_time = datetime.now()
    date_str = current_time.strftime("%Y%m")
    date_str2 = current_time.strftime("%Y%m%d")
    folder_name = os.path.join("weixin", date_str+'/'+date_str2)
    os.makedirs(folder_name, exist_ok=True)

    # 生成文件路径和文件名
    #file_name = f"hot_topics_{current_time.strftime('%H%M%S')}.md"
    file_path = os.path.join(folder_name, file_name)
    # 生成 Markdown 内容
    # 创建目录（如果不存在）
    #os.makedirs(os.path.dirname(file_path), exist_ok=True)
    
    
    

    with open(file_path, "w", encoding="utf-8") as f:
        f.write("-" * 40 + "\n")
        #origin_url = f"answer/{answer_id}"
        # f.write(f"## 本原始链接: {origin_url}\n")
        #f.write(f"### question_title: {question_title}\n")
        f.write("-" * 40 + "\n")

        html2text_converter = HTML2Text()
        text = html2text_converter.handle(content)

        # 处理图片
        img_urls = re.findall(r'!\[\]\((.*?)\)', text)
        img_folder = os.path.join(os.getcwd(), folder_name, "images")
        os.makedirs(img_folder, exist_ok=True)

        for img_url in img_urls:
            save_name = img_url.split('/')[-1]
            pic_file_path = os.path.join(img_folder, save_name)

            try:
                urllib.request.urlretrieve(img_url, pic_file_path)
            except Exception as e:
                print(e)
            else:
                text = text.replace(img_url, os.path.join("images", save_name))

        f.write(text)
        f.close()

    print(f"Markdown content saved to {file_path}")

def process_links(links):
    print('页面链接###################', links)
    # 将链接数组的内容写入文件
    file_path = "links.txt"  # 指定文件路径
    with open(file_path, "w") as file:
        file.write("\n".join(links))

    print("链接已写入文件：", file_path)
    # for idx, link in enumerate(links, start=1):
        # content = get_page_content(link)
        # filename = extract_title(content) or f"content_{idx}.md"
        #save_to_md(content, filename)
        # data = process_content(content)
        # transform_to_markdown(data,filename)
        # print(f"Saved content from link {idx} to {filename}")
        # time.sleep(2)



if __name__ == "__main__":
    main()
