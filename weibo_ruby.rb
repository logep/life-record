require 'net/http'
require 'json'
require 'fileutils'
require 'date'

def get_hot_topics
  response = Net::HTTP.get(URI.parse('https://weibo.com/ajax/side/hotSearch'))
  data = JSON.parse(response)
  data['data']['realtime']
end

def generate_markdown_content(hot_topics)
  markdown_content = "# 微博热点话题\n\n"
  hot_topics.each do |topic|
    word = topic['word']
    link = "https://s.weibo.com/weibo?q=#{word}"
    markdown_content += "- [#{word}](#{link})\n"
  end
  markdown_content
end

def add_hot_topics_to_repository(hot_topics)
  # 获取当前时间并生成文件名
  current_time = DateTime.now
  date_str = current_time.strftime('%Y%m%d')
  folder_name = File.join('weibo', date_str)
  FileUtils.mkdir_p(folder_name)

  # 生成文件路径和文件名
  file_name = "hot_topics_#{current_time.strftime('%H%M%S')}.md"
  file_path = File.join(folder_name, file_name)

  # 生成 Markdown 内容
  markdown_content = generate_markdown_content(hot_topics)

  # 将最新热点内容写入文件
  File.write(file_path, markdown_content)
end

# 获取最新热点内容
hot_topics = get_hot_topics
if hot_topics
  # 将最新热点内容写入仓库
  add_hot_topics_to_repository(hot_topics)
end
