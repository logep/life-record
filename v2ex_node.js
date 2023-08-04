// https://www.v2ex.com/api/v2/nodes/hot/topics?p=1


// https://www.v2ex.com/api/v2/nodes/python/topics?p=1
// https://www.v2ex.com/api/topics/hot.json
 // https://www.v2ex.com/api/topics/latest.json

// https://www.v2ex.com/api/v2/topics/962106/replies?p=1
const fs = require('fs');
const https = require('https');
const { DateTime } = require('luxon');

// 从环境变量中获取 SECRET_TOKEN 的值
const authToken = process.env.AUTH_TOKEN;


async function getTopicData() {
  const topicsResponse = await fetchPaginatedData('https://www.v2ex.com/api/v2/nodes/tech/topics', 'topics');
  const topics = topicsResponse.flatMap(response => response.result);

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
    const data = await fetchData(`${url}&p=${page}`);
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

function fetchData(url) {
  return new Promise((resolve, reject) => {
            const options = {
      headers: {
      Authorization: `Bearer ${authToken}` // 使用获取的 authToken
      }
    };
    https.get(url,options, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        try {
          const parsedData = JSON.parse(data);
          resolve(parsedData);
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
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
  const dateStr = currentTime.toFormat('yyyyMM');
  const folderName = `v2ex/${dateStr}`;
  fs.mkdirSync(folderName, { recursive: true });

  const fileName = `${topicData.title}.md`.replace(/[^\w\s]/gi, ''); // 移除文件名中的非法字符
  const filePath = `${folderName}/${fileName}`;

  let markdownContent = `# ${topicData.title}\n\n${topicData.content}\n\n`;
  for (const reply of topicData.replies) {
    markdownContent += `${reply}\n\n`;
  }

  fs.writeFileSync(filePath, markdownContent);
  console.log('Topic data successfully saved to', filePath);
}
async function main() {
  try {

    //按照主题分类文件
     await getTopicData();

    //把所有主题放到一个文件里
    // const combinedData = await getTopicData();
    // const markdownContent = generateMarkdownContent(combinedData);

    // const currentTime = DateTime.now();
    // const dateStr = currentTime.toFormat('yyyyMM');
    // const folderName = `v2ex/${dateStr}`;
    // fs.mkdirSync(folderName, { recursive: true });

    // const fileName = `hot_topics_${currentTime.toFormat('HHmmss')}.md`;
    // const filePath = `${folderName}/${fileName}`;

    // fs.writeFileSync(filePath, markdownContent);
    // console.log('Data successfully saved to', filePath);
  } catch (error) {
    console.error('Error fetching and processing data:', error);
  }
}

main();


// function getHotTopics(page) {
//   return new Promise((resolve, reject) => {
//     // 发送请求获取指定页码的热点内容
//         const options = {
//       headers: {
//       Authorization: `Bearer ${authToken}` // 使用获取的 authToken
//       }
//     };
//     https.get(`https://www.v2ex.com/api/v2/nodes/hot/topics?page=${page}`,options, (response) => {
//       let data = '';

//       response.on('data', (chunk) => {
//         data += chunk;
//       });

//       response.on('end', () => {
//         try {
//           // const { data } = JSON.parse(data);
//           const responseData = JSON.parse(data);
          
//           resolve(responseData);
//         } catch (error) {
//           reject(error);
//         }
//       });
//     }).on('error', (error) => {
//       reject(error);
//     });
//   });
// }

// function generateMarkdownContent(hotTopics) {
//   let markdownContent = '# 热点话题\n\n';
//   for (const topic of hotTopics) {
//     const title = topic.title;
//     const content = topic.content;
//     const link = `https://www.v2ex.com/t/${topic.id}`;
//     markdownContent += `## [${title}](${link})\n\n${content}\n\n---\n\n`;
//   }

//   return markdownContent;
// }

// function addHotTopicsToRepository(hotTopics, page) {
//   const currentTime = DateTime.now();
//   const dateStr = currentTime.toFormat('yyyyMM');
//   const folderName = `v2ex/${dateStr}`;
//   fs.mkdirSync(folderName, { recursive: true });

//   const fileName = `hot_topics_${currentTime.toFormat('HHmmss')}_page${page}.md`;
//   const filePath = `${folderName}/${fileName}`;
//   const markdownContent = generateMarkdownContent(hotTopics);

//   fs.writeFileSync(filePath, markdownContent);
// }

// // 获取最新热点内容
// function fetchHotTopicsAndSave(page) {
//   getHotTopics(page)
//     .then((hotTopics) => {
//       // 将最新热点内容写入仓库
//       addHotTopicsToRepository(hotTopics, page);
//     })
//     .catch((error) => {
//       console.error('Failed to get hot topics:', error);
//     });
// }

// // 分页获取热点内容并保存
// const totalPages = 2; // 设置要获取的总页数
// for (let page = 1; page <= totalPages; page++) {
//   fetchHotTopicsAndSave(page);
// }
