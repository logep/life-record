use std::fs::File;
use std::io::prelude::*;
use std::path::Path;
use chrono::Local;
use reqwest::blocking::get;
use serde::Deserialize;

#[derive(Deserialize)]
struct HotTopic {
    word: String,
}

#[derive(Deserialize)]
struct HotTopicsData {
    realtime: Vec<HotTopic>,
}

fn get_hot_topics() -> Result<Vec<HotTopic>, reqwest::Error> {
    let response = get("https://weibo.com/ajax/side/hotSearch")?
        .json::<HotTopicsData>()?;
    Ok(response.realtime)
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

fn add_hot_topics_to_repository(hot_topics: &[HotTopic]) -> Result<(), std::io::Error> {
    let current_time = Local::now();
    let date_str = current_time.format("%Y%m%d").to_string();
    let folder_name = format!("weibo/{}", date_str);
    let file_name = format!("hot_topics_{}.md", current_time.format("%H%M%S"));
    let file_path = Path::new(&folder_name).join(&file_name);
    std::fs::create_dir_all(&folder_name)?;

    let markdown_content = generate_markdown_content(hot_topics);

    let mut file = File::create(file_path)?;
    file.write_all(markdown_content.as_bytes())?;
    Ok(())
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let hot_topics = get_hot_topics()?;
    if !hot_topics.is_empty() {
        add_hot_topics_to_repository(&hot_topics)?;
    }
    Ok(())
}
