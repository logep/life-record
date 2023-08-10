import time
import json
import re
import random
import requests
import os
from selenium import webdriver
LOGIN_URL = 'https://mp.weixin.qq.com/'
SEARCH_URL = 'https://mp.weixin.qq.com/cgi-bin/searchbiz?'
APPMSG_URL = 'https://mp.weixin.qq.com/cgi-bin/appmsg?'
authUser = os.environ.get('AUTH_USER')
authUser = os.environ.get('AUTH_PWD')
def get_cookies():
    cookies = {}
with open('cookie.txt', 'r', encoding = 'utf-8') as f:
    cookies = json.load(f)
return cookies
def get_token(response):
    return re.findall(r 'token=(\d+)', str(response.url))[0]
def login_and_get_cookie():
    driver = webdriver.Chrome(executable_path = 'C:\chromedriver.exe')
driver.get(LOGIN_URL)
time.sleep(2)
post = {}
driver.find_element_by_xpath("./*//input[@id='account']")
    .clear()
driver.find_element_by_xpath("./*//input[@id='account']")
    .send_keys(authUser)
driver.find_element_by_xpath("./*//input[@id='pwd']")
    .clear()
driver.find_element_by_xpath("./*//input[@id='pwd']")
    .send_keys(authPwd)
time.sleep(5)
driver.find_element_by_xpath("./*//a[@id='loginBt']")
    .click()
time.sleep(15)
driver.get('https://mp.weixin.qq.com/')
cookie_items = driver.get_cookies()
for cookie_item in cookie_items:
    post[cookie_item['name']] = cookie_item['value']
cookie_str = json.dumps(post)# 返回登录后的Cookie
with open('cookie.txt', 'w+', encoding = 'utf-8') as f:
    f.write(cookie_str)
return get_cookies()
def main():
    cookies = get_cookies() or login_and_get_cookie()
response = requests.get(url = LOGIN_URL, cookies = cookies)
token = get_token(response)
gzlist = ['gh_15928b5b199d']
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
search_response = requests.get(SEARCH_URL, cookies = cookies, headers = header, params = query_id)
max_num = search_response.json()
    .get('app_msg_cnt')
num = int(int(max_num) / 5)
begin = 0
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
print('翻页###################', begin)
query_fakeid_response = requests.get(APPMSG_URL, cookies = cookies, headers = header, params = query_id_data)
fakeid_list = query_fakeid_response.json()
    .get('app_msg_list')
for item in fakeid_list:
    print(item.get('link'))
num -= 1
begin = int(begin)
begin += 5
time.sleep(random.uniform(1, 3))
if __name__ == "__main__":
    main()
