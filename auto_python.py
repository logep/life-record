import requests
import os
from datetime import datetime

def get_hot_topics():
    # 使用相关API获取最新热点内容
    # 这里只是一个示例，你需要根据你的需求进行修改
    response = requests.get("https://weibo.com/ajax/side/hotSearch")
    if response.status_code == 200:
        data = response.json()
        return data.get("data", {}).get("realtime", [])
    else:
        return None

def generate_markdown_content(hot_topics):
    markdown_content = "# 微博热点话题\n\n"
    for topic in hot_topics:
        word = topic.get("word", "")
        link = f"https://s.weibo.com/weibo?q={word}"
        markdown_content += f"- [{word}]({link})\n"

    return markdown_content

def add_hot_topics_to_repository(hot_topics):
    # 获取当前时间并生成文件名
    current_time = datetime.now()
    date_str = current_time.strftime("%Y%m")
    folder_name = os.path.join("weibo", date_str)
    os.makedirs(folder_name, exist_ok=True)

    # 生成文件路径和文件名
    file_name = f"hot_topics_{current_time.strftime('%H%M%S')}.md"
    file_path = os.path.join(folder_name, file_name)
    # 生成 Markdown 内容
    markdown_content = generate_markdown_content(hot_topics)
    # 创建目录（如果不存在）
    # os.makedirs(os.path.dirname(file_path), exist_ok=True)

    # 将最新热点内容写入文件
    with open(file_path, "w", encoding="utf-8") as file:
       file.write(markdown_content)

# 获取最新热点内容
hot_topics = get_hot_topics()
if hot_topics:
    # 将最新热点内容写入仓库
    add_hot_topics_to_repository(hot_topics)
