// https://www.v2ex.com/api/v2/nodes/hot/topics?p=1
const fs = require('fs');
const https = require('https');
const { DateTime } = require('luxon');

const https = require('https');
const fs = require('fs');
const { DateTime } = require('luxon');
// 从环境变量中获取 SECRET_TOKEN 的值
const authToken = process.env.AUTH_TOKEN;
function getHotTopics(page) {
  return new Promise((resolve, reject) => {
    // 发送请求获取指定页码的热点内容
        const options = {
      headers: {
      Authorization: `Bearer ${authToken}` // 使用获取的 authToken
      }
    };
    https.get(`https://www.v2ex.com/api/v2/nodes/hot/topics?page=${page}`,options, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        try {
          const { data } = JSON.parse(data);
          resolve(data);
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
  let markdownContent = '# 热点话题\n\n';
  for (const topic of hotTopics) {
    const title = topic.title;
    const content = topic.content;
    const link = `https://www.v2ex.com/t/${topic.id}`;
    markdownContent += `## [${title}](${link})\n\n${content}\n\n---\n\n`;
  }

  return markdownContent;
}

function addHotTopicsToRepository(hotTopics, page) {
  const currentTime = DateTime.now();
  const dateStr = currentTime.toFormat('yyyyMM');
  const folderName = `v2ex/${dateStr}`;
  fs.mkdirSync(folderName, { recursive: true });

  const fileName = `hot_topics_${currentTime.toFormat('HHmmss')}_page${page}.md`;
  const filePath = `${folderName}/${fileName}`;
  const markdownContent = generateMarkdownContent(hotTopics);

  fs.writeFileSync(filePath, markdownContent);
}

// 获取最新热点内容
function fetchHotTopicsAndSave(page) {
  getHotTopics(page)
    .then((hotTopics) => {
      // 将最新热点内容写入仓库
      addHotTopicsToRepository(hotTopics, page);
    })
    .catch((error) => {
      console.error('Failed to get hot topics:', error);
    });
}

// 分页获取热点内容并保存
const totalPages = 2; // 设置要获取的总页数
for (let page = 1; page <= totalPages; page++) {
  fetchHotTopicsAndSave(page);
}
