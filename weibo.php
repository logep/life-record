<?php
function get_hot_topics() {
    // 使用相关API获取最新热点内容
    // 这里只是一个示例，你需要根据你的需求进行修改
    $response = file_get_contents("https://weibo.com/ajax/side/hotSearch");
    $data = json_decode($response, true);
    return $data['data']['realtime'] ?? [];
}

function generate_markdown_content($hot_topics) {
    $markdown_content = "# 微博热点话题\n\n";
    foreach ($hot_topics as $topic) {
        $word = $topic['word'];
        $link = "https://s.weibo.com/weibo?q=" . urlencode($word);
        $markdown_content .= "- [$word]($link)\n";
    }

    return $markdown_content;
}

function add_hot_topics_to_repository($hot_topics) {
    // 获取当前时间并生成文件名
    $current_time = new DateTime();
    $date_str = $current_time->format("Ymd");
    $folder_name = "weibo/$date_str";
    if (!file_exists($folder_name)) {
        mkdir($folder_name, 0777, true);
    }

    // 生成文件路径和文件名
    $file_name = "hot_topics_" . $current_time->format("His") . ".md";
    $file_path = "$folder_name/$file_name";
    // 生成 Markdown 内容
    $markdown_content = generate_markdown_content($hot_topics);

    // 将最新热点内容写入文件
    file_put_contents($file_path, $markdown_content);
}

// 获取最新热点内容
$hot_topics = get_hot_topics();
if (!empty($hot_topics)) {
    // 将最新热点内容写入仓库
    add_hot_topics_to_repository($hot_topics);
}
?>
