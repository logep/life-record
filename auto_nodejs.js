const fs = require('fs');
const https = require('https');
const { DateTime } = require('luxon');

function getHotTopics() {
  return new Promise((resolve, reject) => {
    // 发送请求获取最新热点内容
    https.get('https://weibo.com/ajax/side/hotSearch', (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        try {
          const { data: { realtime } } = JSON.parse(data);
          resolve(realtime);
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

function generateMarkdownContent(hotTopics) {
  let markdownContent = '# 微博热点话题\n\n';
  for (const topic of hotTopics) {
    const word = topic.word;
    const link = `https://s.weibo.com/weibo?q=${word}`;
    markdownContent += `- [${word}](${link})\n`;
  }

  return markdownContent;
}

function addHotTopicsToRepository(hotTopics) {
  const currentTime = DateTime.now();
  const dateStr = currentTime.toFormat('yyyyMM');
  const folderName = `weibo/${dateStr}`;
  fs.mkdirSync(folderName, { recursive: true });

  const fileName = `hot_topics_${currentTime.toFormat('HHmmss')}.md`;
  const filePath = `${folderName}/${fileName}`;
  const markdownContent = generateMarkdownContent(hotTopics);

  fs.writeFileSync(filePath, markdownContent);
}

// 获取最新热点内容
getHotTopics()
  .then((hotTopics) => {
    // 将最新热点内容写入仓库
    addHotTopicsToRepository(hotTopics);
  })
  .catch((error) => {
    console.error('Failed to get hot topics:', error);
  });
