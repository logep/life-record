// https://www.v2ex.com/api/v2/nodes/hot/topics?p=1


// https://www.v2ex.com/api/v2/nodes/python/topics?p=1
// https://www.v2ex.com/api/topics/hot.json
 // https://www.v2ex.com/api/topics/latest.json

// https://www.v2ex.com/api/v2/topics/962106/replies?p=1
const fs = require('fs');
const https = require('https');
const { DateTime } = require('luxon');

const axios = require('axios');


// 从环境变量中获取 SECRET_TOKEN 的值
const authToken = process.env.AUTH_TOKEN;
console.log('authToken',authToken)
async function getTopicData() {
  const topicsResponse = await fetchPaginatedData('https://www.v2ex.com/api/topics/hot.json', 'topics');
 console.log('topicsResponse')

  const topics = topicsResponse.flatMap(response => response);

  const combinedData = [];

  for (const topic of topics) {
    const repliesResponse = await fetchPaginatedData(`https://www.v2ex.com/api/v2/topics/${topic.id}/replies`, 'replies');
    const replies = repliesResponse.flatMap(response => response.result);

    const combinedItem = {
      title: topic.title,
      content: topic.content,
      replies: replies.map(reply => reply.content),
    };

      // 为每个话题创建单独的文件并写入内容
    writeTopicToFile(combinedItem);
    // combinedData.push(combinedItem);
  }

  return combinedData;
}

async function fetchPaginatedData(url, key) {
  const allData = [];
  let page = 1;
  // 获取所有回复
  let totalPages =key==='replies'?10:1;

  do {
    const data = await fetchData(`${url}?p=${page}`);
    allData.push(data);

    if (data.result&&data.result.length) {
          // if (key in data) {
    //  totalPages = data[key].total_pages || 1;
    } else {
      break;
    }

    page++;
  } while (page <= totalPages);

  return allData;
}




async function fetchData(url) {
  try {
    const options = {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    };
    const response = await axios.get(url, options);

      console.log(options)
    return response.data;
  } catch (error) {
    throw error;
  }
}

function generateMarkdownContent(combinedData) {
  let markdownContent = '# 热点话题\n\n';
  for (const item of combinedData) {
    markdownContent += `## ${item.title}\n\n${item.content}\n\n`;
    for (const reply of item.replies) {
      markdownContent += `${reply}\n\n`;
    }
    markdownContent += '---\n\n';
  }

  return markdownContent;
}
function writeTopicToFile(topicData) {
  const currentTime = DateTime.now();
  const dateStr = currentTime.toFormat('yyyyMMdd');
  const folderName = `v2ex/hot/${dateStr}`;
  fs.mkdirSync(folderName, { recursive: true });

  // const fileName = `${topicData.title}.md`.replace(/[^\w\s]/gi, ''); // 移除文件名中的非法字符
   const regex = /[^\u4e00-\u9fa5a-zA-Z0-9_\-]/g;
   const fileName = `${topicData.title}.md`;
  // 使用replace方法替换匹配到的字符为空字符串
  const resultName = fileName.replace(regex, '');
 
 
  const filePath = `${folderName}/${resultName}`;

  let markdownContent = `### ${topicData.title}\n\n${topicData.content}\n\n`;
  for (const reply of topicData.replies) {
    markdownContent += `---------------------------------------------------\n\n`;
    markdownContent += `${reply}\n\n`;
  }

  fs.writeFileSync(filePath, markdownContent);
  console.log('Topic data successfully saved to', filePath);
}
async function main() {
  try {

    //按照主题分类文件
    
 const data =  await getTopicData();
    console.log('Data:', data);
    //把所有主题放到一个文件里
  } catch (error) {
    console.error('Error fetching and processing data:', error);
  }
}

main();
