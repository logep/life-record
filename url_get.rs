use std::fs::File;
use std::io::{self, Write};
use reqwest;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // 发送 HTTP GET 请求并获取响应
    let response = reqwest::get("https://example.com").await?;

    // 检查响应状态码是否为 200 OK
    if !response.status().is_success() {
        eprintln!("HTTP request failed with status code: {:?}", response.status());
        return Ok(());
    }

    // 读取响应体的字节数据
    let bytes = response.bytes().await?;

    // 指定本地文件路径
    let file_path = "output.txt";

    // 打开或创建文件并写入响应数据
    let mut file = File::create(file_path)?;

    // 将字节数据写入文件
    file.write_all(&bytes)?;

    println!("Data saved to {}", file_path);

    Ok(())
}
