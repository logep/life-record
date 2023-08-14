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
auth_public = ''

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
            print(img_url)
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






   
def process_links2():
    
    #links = ['http://mp.weixin.qq.com/s?__biz=Mzg5MDc4MTE4NQ==&mid=2247483709&idx=1&sn=f245ead1bf880736a171e02f88e2868b&chksm=cfd62a53f8a1a345878872bb0cc49b7a76439a8c3fd6b08ac9d1ce8042681db7afb0fd137424#rd', 'http://mp.weixin.qq.com/s?__biz=Mzg5MDc4MTE4NQ==&mid=2247483709&idx=2&sn=827ad3b20cf2854df616515623900da2&chksm=cfd62a53f8a1a3455948bd0f731286b2c02edb9d819939f5158021a1685d95d91e46674896cc#rd', 'http://mp.weixin.qq.com/s?__biz=Mzg5MDc4MTE4NQ==&mid=2247483709&idx=3&sn=3d046b6f61500eaec263746980e0b6fc&chksm=cfd62a53f8a1a345437825bf354354bb0f3d7891b9514f1c66cc94663448bb78e7925f6aba4c#rd', 'http://mp.weixin.qq.com/s?__biz=Mzg5MDc4MTE4NQ==&mid=2247483709&idx=4&sn=fea01d18e7c74b9266a48e8606edaccf&chksm=cfd62a53f8a1a3458a8a4d4f66cbf9cf5481957f6974cd513f15ec8b7f3d3703c9155160608e#rd', 'http://mp.weixin.qq.com/s?__biz=Mzg5MDc4MTE4NQ==&mid=2247483709&idx=5&sn=7ef5b287f85e3a95437772c84c54b0bc&chksm=cfd62a53f8a1a34562ea1a2bcb552995e60190492a4dd3f4d13177c27f7b72ab57f7bb12505e#rd', 'http://mp.weixin.qq.com/s?__biz=Mzg5MDc4MTE4NQ==&mid=2247483709&idx=6&sn=c8c6a1414cada6f327375cb0767ca552&chksm=cfd62a53f8a1a3452a23df825de6b3a413ef4c323ec31e6b1c68fc0cbe48c07376028b621b4b#rd', 'http://mp.weixin.qq.com/s?__biz=Mzg5MDc4MTE4NQ==&mid=2247483709&idx=8&sn=4cb37e6d03f752ee4bfd853aefdba19d&chksm=cfd62a53f8a1a345ed997fb2ab1bf99b21fdce1febe8ce625d3e4dc8c74b26bf35988d5a5c52#rd']
    links = []
    with open("links.txt", "r", encoding="utf-8") as file:
        for line in file:
            link = line.strip()  # 去除行末尾的换行符和空格
            if link:
                links.append(link)
    
    for idx, link in enumerate(links, start=1):
        #response = requests.get(link)
        content = get_page_content(link)
        #rich_media_area_primary_inner
        #if response.status_code == 200:
        #content = response.text
        filename = extract_title(content) or f"content_{idx}.md"
        data = process_content(content)
        transform_to_markdown(data,filename)
        #save_to_md(content, filename)
        print(f"Saved content from link {idx} to {filename}")
        #else:
        #    print(f"Failed to fetch content from link {idx}")
        time.sleep(2)  # 可选：等待一段时间再处理下一个链接


if __name__ == "__main__":
    process_links2()
