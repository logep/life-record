use std::fs::File;
use std::io::prelude::*;
use std::path::Path;
use chrono::Local;
use serde::Deserialize;
use serde_json; // 这里导入serde_json::Value以便处理JSON响应
use reqwest::Client;
use tokio::fs;

#[derive(Deserialize)]
struct HotTopic {
    word: String,
}


#[derive(Deserialize)]
struct HotTopicsData {
    #[serde(rename = "data")] // 映射到 "data" 字段
    data: HotTopicsInnerData,
}

#[derive(Deserialize)]
struct HotTopicsInnerData {
    realtime: Vec<HotTopic>,
}




async fn get_hot_topics() -> Result<Vec<HotTopic>, reqwest::Error> {
    let client = Client::new();
    let response = client.get("https://weibo.com/ajax/side/hotSearch")
        .send()
        .await?;
    // 打印响应的文本内容
    let response_text = response.text().await?;
    println!("HTTP Response:\n{}", response_text);
    let text = "tsf11111111111";
    println!("HTTP Response:\n{}", text);
    // 尝试将响应解析为JSON
    // let hot_topics: Result<HotTopicsData, SerdeJsonError> = serde_json::from_str(&response_text);
    // let hot_topics: HotTopicsData = serde_json::from_str(&response_text).expect("Failed to parse JSON");
    let hot_topics: HotTopicsData = serde_json::from_str(&response_text).unwrap();

    Ok(hot_topics.data.realtime)
   
}

fn generate_markdown_content(hot_topics: &[HotTopic]) -> String {
    let mut markdown_content = String::from("# 微博热点话题\n\n");
    for topic in hot_topics {
        let word = &topic.word;
        let link = format!("https://s.weibo.com/weibo?q={}", word);
        markdown_content.push_str(&format!("- [{}]({})\n", word, link));
    }
    markdown_content
}

async fn add_hot_topics_to_repository(hot_topics: &[HotTopic]) -> Result<(), std::io::Error> {
    let current_time = Local::now();
    let date_str = current_time.format("%Y%m%d").to_string();
    let folder_name = format!("weibo/{}", date_str);
    let file_name = format!("hot_topics_{}.md", current_time.format("%H%M%S"));
    let file_path = Path::new(&folder_name).join(&file_name);
    fs::create_dir_all(&folder_name).await?;

    let markdown_content = generate_markdown_content(hot_topics);

    let mut file = File::create(file_path)?;
    file.write_all(markdown_content.as_bytes())?;
    Ok(())
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let hot_topics = get_hot_topics().await?;
    if !hot_topics.is_empty() {
        add_hot_topics_to_repository(&hot_topics).await?;
    }
    Ok(())
}
