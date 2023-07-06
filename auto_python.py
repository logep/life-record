import requests
from datetime import datetime

def get_hot_topics():
    # 使用相关API获取最新热点内容
    # 这里只是一个示例，你需要根据你的需求进行修改
    response = requests.get("https://weibo.com/ajax/side/hotSearch")
    if response.status_code == 200:
        return response.json()
    else:
        return None

def add_hot_topics_to_repository(hot_topics):
    # 获取当前时间并生成文件名
    current_time = datetime.now().strftime("%Y%m%d_%H%M%S")
    file_name = f"hot_topics_{current_time}.txt"

    # 定义文件路径（相对于仓库根目录）
    file_path = os.path.join("weibo", file_name)  # 替换为你想要的目录路径

    # 创建目录（如果不存在）
    os.makedirs(os.path.dirname(file_path), exist_ok=True)

    # 将最新热点内容写入文件
    with open(file_path, "a") as file:
        for topic in hot_topics:
            file.write(topic + "\n")

# 获取最新热点内容
hot_topics = get_hot_topics()
if hot_topics:
    # 将最新热点内容写入仓库
    add_hot_topics_to_repository(hot_topics)
