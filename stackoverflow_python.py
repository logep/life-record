import requests
import os
from datetime import datetime
from bs4 import BeautifulSoup
import mistune

# def get_hot_topics():
#     # 这里只是一个示例，你需要根据你的需求进行修改
#     response = requests.get("https://stackoverflow.com/questions?sort=MostFrequent&edited=true")
#     if response.status_code == 200:
#         html_content = response.text
#         soup = BeautifulSoup(html_content, "html.parser")
#         post_summaries = soup.find_all(class_="s-post-summary--content")
#         if post_summaries:
#             markdown_content = ""
#             for summary in post_summaries:
#                 markdown_content += mistune.markdown(summary.get_text()) + "\n\n"
#             return markdown_content
#         else:
#             return None
#     else:
#         return None
def get_hot_topics():
    # 这里只是一个示例，你需要根据你的需求进行修改
    response = requests.get("https://stackoverflow.com/questions?sort=MostFrequent&edited=true")
    if response.status_code == 200:
        html_content = response.text
        soup = BeautifulSoup(html_content, "html.parser")
        post_summaries = soup.find_all(class_="s-post-summary--content")
        if post_summaries:
            markdown_content = ""
            for summary in post_summaries:
                # 提取标题和链接
                title_elem = summary.find(class_="s-post-summary--content-title")
                title = title_elem.get_text().strip()
                link = "https://stackoverflow.com" + title_elem.find("a")["href"]

                # 提取摘要内容
                excerpt_elem = summary.find(class_="s-post-summary--content-excerpt")
                excerpt = excerpt_elem.get_text().strip()

                # 转换为 Markdown 格式
                markdown_content += f"- [{title}]({link})\n\n{excerpt}\n\n"

            return markdown_content
        else:
            return None
    else:
        return None
        
def generate_markdown_content(hot_topics):
    markdown_content = "# stackoverflow热点话题\n\n"
    for topic in hot_topics:
        word = topic.get("word", "")
        link = f"https://s.weibo.com/weibo?q={word}"
        markdown_content += f"- [{word}]({link})\n"

    return markdown_content

def add_hot_topics_to_repository(hot_topics):
    # 获取当前时间并生成文件名
    current_time = datetime.now()
    date_str = current_time.strftime("%Y%m")
    folder_name = os.path.join("stackoverflow", date_str)
    os.makedirs(folder_name, exist_ok=True)

    # 生成文件路径和文件名
    file_name = f"hot_topics_{current_time.strftime('%H%M%S')}.md"
    file_path = os.path.join(folder_name, file_name)
    # 生成 Markdown 内容
    # markdown_content = generate_markdown_content(hot_topics)
    # 创建目录（如果不存在）
    # os.makedirs(os.path.dirname(file_path), exist_ok=True)

    # 将最新热点内容写入文件
    with open(file_path, "w", encoding="utf-8") as file:
       file.write(hot_topics)

# 获取最新热点内容
hot_topics = get_hot_topics()
if hot_topics:
    # 将最新热点内容写入仓库
    add_hot_topics_to_repository(hot_topics)
