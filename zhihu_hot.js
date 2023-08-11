const fs = require('fs');
const https = require('https');
const { DateTime } = require('luxon');

const axios = require('axios');

const htmlToText = require('html-to-text') // 引入 Node.js 的 html-to-text 库
const cheerio = require('cheerio')
const request = require('request-promise')
const { JSDOM } = require('jsdom')
// const fetch = require('node-fetch')

const path = require('path')

// 从环境变量中获取 SECRET_TOKEN 的值
const authToken = process.env.AUTH_TOKEN;
console.log('authToken',authToken)

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getTopicData() {
  const topicsResponse = await fetchPaginatedData('https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=100', 'topics');
 console.log('topicsResponse')
   console.log(topicsResponse)
  const topics = topicsResponse.flatMap(response => response.data);

  const combinedData = [];
   let zhihu = new ZhiHu()
  for (const topic of topics) {
    // const repliesResponse = await fetchPaginatedData(`https://www.v2ex.com/api/v2/topics/${topic.id}/replies`, 'replies');
    // const replies = repliesResponse.flatMap(response => response.result);
const answerUrl = 'https://www.zhihu.com/question/'+topic.target.id
// const answerUrl = 'https://www.zhihu.com/question/27621722/answer/48658220'
await zhihu.getSingleAnswerContent(answerUrl,1,topic)
   await delay(2000); // 延迟 2 秒   
    // const combinedItem = {
    //   title: topic.title,
    //   content: topic.content,
    //   replies: replies.map(reply => reply.content),
    // };

      // 为每个话题创建单独的文件并写入内容
    // writeTopicToFile(combinedItem);
    // combinedData.push(combinedItem);
  }

  // return combinedData;
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
    // const options = {
    //   headers: {
    //     Authorization: `Bearer ${authToken}`
    //   }
    // };
        // const response = await axios.get(url, options);
    const response = await axios.get(url);
   console.log(response)
      // console.log(options)
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
  const dateStr = currentTime.toFormat('yyyyMM');
   const dateStr2 = currentTime.toFormat('yyyyMMdd');
  const folderName = `v2ex/${dateStr}/${dateStr2}`;
  fs.mkdirSync(folderName, { recursive: true });

  // const fileName = `${topicData.title}.md`.replace(/[^\w\s]/gi, ''); // 移除文件名中的非法字符
  const fileName = `${topicData.title}.md`;
  const filePath = `${folderName}/${fileName}`;

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

////////////////////////////////////////////////////////
class ZhiHu {
  constructor() {
    this.requestContent = null
  }

  async requestNode(url, retryTimes = 1) {
    const header = {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
      // authorization: authorization, // Make sure you have authorization defined somewhere
      Host: 'www.zhihu.com'
    }

    let times = 0
    while (retryTimes > 0) {
      times += 1
      console.log(`request ${url}, times: ${times}`)
      try {
        const response = await request({
          uri: url,
          headers: header,
          timeout: 10000
        })
        this.requestContent = response
        break
      } catch (error) {
        console.error(error)
        retryTimes -= 1
      }
    }
    return this.requestContent
  }

  //   let times = 0,retryTimes = 10
  //   while (retryTimes > 0) {
  //   times += 1
  //   console.log(times +`request , times:`)
  //   try {
  //   const response = await fetch('https://www.baidu.com', {timeout: 10000 })
  // console.log(response)
  // break
  // } catch (error) {
  //   console.error("===="+error)
  //   retryTimes -= 1
  // }
  // }

  //用 fetch方式实现的请求 重试次数修改成1
  async requestBrowser(url, retryTimes = 1) {
    const header = {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
      authorization: authorization,
      Host: 'www.zhihu.com'
    }

    let times = 0
    while (retryTimes > 0) {
      times += 1
      console.log(`request ${url}, times: ${times}`)
      try {
        const response = await fetch(url, { headers: header, timeout: 10000 })
        this.requestContent = await response.text()
        break
      } catch (error) {
        console.error(error)
        retryTimes -= 1
      }
    }
    return this.requestContent
  }

  async get_all_answer_content(question_id, flag = 2) {
    const firstUrlFormat = `https://www.zhihu.com/api/v4/questions/${question_id}/answers?sort_by=default&include=data%5B%2A%5D.is_normal%2Cis_collapsed%2Ccollapse_reason%2Cis_sticky%2Ccollapsed_by%2Csuggest_edit%2Ccomment_count%2Ccan_comment%2Ccontent%2Ceditable_content%2Cvoteup_count%2Creshipment_settings%2Ccomment_permission%2Cmark_infos%2Ccreated_time%2Cupdated_time%2Crelationship.is_authorized%2Cis_author%2Cvoting%2Cis_thanked%2Cis_nothelp%2Cupvoted_followees%3Bdata%5B%2A%5D.author.follower_count%2Cbadge%5B%3F%28type%3Dbest_answerer%29%5D.topics&limit=20&offset=3`
    const firstUrl = firstUrlFormat.replace('${question_id}', question_id)

    const response = await this.requestNode(firstUrl)
    if (response) {
      let contents = JSON.parse(response)
      console.log(contents.paging.is_end)

      while (!contents.paging.is_end) {
        for (const content of contents.data) {
          this.parse_content(content, flag)
        }
        const next_page_url = contents.paging.next.replace('http', 'https')
        const nextResponse = await this.requestNode(next_page_url)
        contents = JSON.parse(nextResponse)
      }
    } else {
      throw new Error('request failed, quit......')
    }
  }

  async getSingleAnswerContent(answerUrl, flag = 1,topic) {
    console.log(answerUrl)
    console.log(flag)
    const allContent = {}
    // const [, questionId, answerId] = answerUrl.match(/https:\/\/www.zhihu.com\/question\/(\d+)\/answer\/(\d+)/)
    const [, questionId] = answerUrl.match(/https:\/\/www.zhihu.com\/question\/(\d+)/)
    const answerId = ''
    console.log(questionId, answerId)
    // https://www.zhihu.com/question/616551821
    const htmlContent = await this.requestNode(answerUrl)
    console.log(htmlContent)
    console.log('-------------============================')
    if (htmlContent) {
      allContent['main_content'] = htmlContent
    } else {
      throw new Error('request failed, quit......')
    }

    // const ajaxAnswerUrl = `https://www.zhihu.com/api/v4/answers/${answerId}`
    // const ajaxContent = await this.requestNode(ajaxAnswerUrl)
    // if (ajaxContent) {
    //   allContent['ajax_content'] = JSON.parse(ajaxContent)
    // } else {
    //   throw new Error('request failed, quit......')
    // }
    this.parse_content(allContent, flag, questionId, answerId,topic)
  }

  parse_content(content, flag = null, questionId, answerId,topic) {
    let data = this.parseFun(content, flag, questionId, answerId,topic)
    this.transform_to_markdown(data)
  }

  parseFun(content, flag, questionId, answerId,topic) {
    if (flag === 1) {
      return this.parseSingleFun(content, flag, questionId, answerId,topic)
    }
    return this.parseAllFun(content, flag)
  }

  async parseAllFun(content) {
    const data = {}

    const answer_content = content.content
    const author_name = content.author.name
    const answer_id = content.id
    const question_id = content.question.id
    const question_title = content.question.title
    const vote_up_count = content.voteup_count
    const created_time = new Date(content.created_time * 1000)
    const create_time = created_time
      .toISOString()
      .replace('T', ' ')
      .split('.')[0]

    const htmlTemplate = `
        <html>
        <head></head>
        <body>${answer_content}</body>
        </html>
    `

    const $ = cheerio.load(htmlTemplate, { decodeEntities: false })
    const answer = $('body').html()

    const dom = new JSDOM(htmlTemplate)
    const soup = cheerio.load(dom.window.document)

    soup('body').empty()
    soup('head').after('<body class="zhi"></body>')

    soup('body').append(answer)

    soup('img.content_image.lazy').each((index, img) => {
      const actualSrc = img.attribs['data-actualsrc']
      img.attribs.src = actualSrc
    })

    soup('img.origin_image.zh-lightbox-thumb.lazy').each((index, img) => {
      const actualSrc = img.attribs['data-actualsrc']
      img.attribs.src = actualSrc
    })

    soup('noscript').each((index, noscript) => {
      soup(noscript).remove()
    })

    data.content = soup.html()
    data.author_name = author_name
    data.answer_id = answer_id
    data.question_id = question_id
    data.question_title = question_title
    data.vote_up_count = vote_up_count
    data.create_time = create_time

    return data
  }

  // 针对单个answers使用
  // ajaxContent 由于需要通过接口获取  这个方法里的 关于 ajaxContent的内容全部删除掉
  parseSingleFun(content, flag, questionId, answerId,topic) {
    console.log(flag)
    console.log('------------------------------')
    console.log(content)
    const data = {}
    const mainContent = content.main_content
    // const ajaxContent = content.ajax_content
    console.log(mainContent)
    console.log('=--=-=-=-=-=-=-=-=-=-')
    const $2 = cheerio.load(mainContent, { decodeEntities: false })
    const answer2 = $2('span.RichText.CopyrightRichText-richText')
    const questionTitle = $2('title').text()
    console.log(answer2)
    console.log(questionTitle)
    //在这里找到文章标题 和 作者

    // const authorName = ajaxContent.author.name
    // const answerId = ajaxContent.id
    // const questionId = ajaxContent.question.id
    // const questionTitle = ajaxContent.question.title
    // const voteUpCount = $('meta[itemprop="upvoteCount"]').attr('content')
    // const createTimestamp = ajaxContent.created_time * 1000
    // const createTime = new Date(createTimestamp)
    //   .toISOString()
    //   .replace('T', ' ')
    //   .substr(0, 19)
    // console.log(authorName, answerId, questionId, questionTitle, voteUpCount, createTime)

    // 采用自己组装dom
    // html 里 加上这段代码 才能不乱码
    const htmlTemplate = `
        <html>
        <head><meta charSet="utf-8"/></head>
        <body>${answer2}</body>
        </html>
    `

    const $ = cheerio.load(htmlTemplate, { decodeEntities: false })
    // const answer = $('body').html()
    // const dom = new JSDOM(htmlTemplate)
    // const soup = cheerio.load(dom.window.document)
    // soup('body').empty()
    // soup('head').after('<body class="zhi"></body>')
    //
    // soup('body').append(answer)

    $('img.content_image.lazy').each((index, img) => {
      const actualSrc = img.attribs['data-actualsrc']
      img.attribs.src = actualSrc
    })

    $('img.origin_image.zh-lightbox-thumb.lazy').each((index, img) => {
      const actualSrc = img.attribs['data-actualsrc']
      img.attribs.src = actualSrc
    })

    $('noscript').each((index, noscript) => {
      $(noscript).remove()
    })

    ////////////////////////////////////////////////////
    //用这种方式 会有多余的dom元素
    // answer.parent().remove()
    // $('head').after(
    //   $('<body>')
    //     .addClass('zhi')
    //     .append(answer)
    // )
    //
    // const imgList = $('img.content_image.lazy')
    // imgList.each((_, img) => {
    //   const $img = $(img)
    //   $img.attr('src', $img.attr('data-actualsrc'))
    // })
    //
    // const originImgList = $('img.origin_image.zh-lightbox-thumb.lazy')
    // originImgList.each((_, img) => {
    //   const $img = $(img)
    //   $img.attr('src', $img.attr('data-actualsrc'))
    // })
    //
    // $('noscript').remove()

    ///////////////////////////////////////////////////////////
    // 只保留问题的回答第一个 其余的全部删除
    // console.log($.html())
    data.content = $.html()
    // data.content = $.html()
    // data.author_name = authorName
    data.question_title = questionTitle
    // data.vote_up_count = voteUpCount
    // data.create_time = createTime
    data.answer_id = answerId
    data.question_id = questionId
    data.excerpt=topic.excerpt

    return data
  }

  transform_to_markdown(data) {
    const content = data.content
    const author_name = data.author_name
    const question_title = data.question_title
    const answer_id = data.answer_id
    const question_id = data.question_id
    const vote_up_count = data.vote_up_count
    const create_time = data.create_time
    const excerpt = data.excerpt
    // const file_name = `${question_title}--${author_name}的回答[${answer_id}].md`
    const file_name = `${question_title}--的回答[${answer_id}].md`
    const currentTime = DateTime.now()
    const dateStr = currentTime.toFormat('yyyyMM')
      const dateStr2 = currentTime.toFormat('yyyyMMdd')
    // windows 和mac 不一样需要改造 todo
    // const folder_name = `zhihu/${dateStr}/${question_title}`
    const folder_name = path.join(__dirname, `zhihu/${dateStr}/${dateStr2}`)

    // 如果有多层的文件夹 可能 需要分别创建
    // Ensure parent directories are created
    try {
      fs.mkdirSync(path.join(__dirname, 'zhihu')) // Create 'zhihu' directory
       fs.mkdirSync(path.join(__dirname, `zhihu/${dateStr}`)) // Create 'zhihu/2023-08-10' directory
    } catch (error) {
      // Ignore errors if directories already exist
    }

    // Now create the final directory
    try {
      fs.mkdirSync(folder_name)
      console.log('Folder created:', folder_name)
    } catch (error) {
      console.error('Error creating folder:', error)
    }

    // 注释这段 用上面 两个 try catch 包裹
    // if (!fs.existsSync(folder_name)) {
    //   fs.mkdirSync(folder_name)
    // }
    process.chdir(folder_name)

    const f = fs.createWriteStream(file_name)
    f.write('-'.repeat(40) + '\n')
    const origin_url = `https://www.zhihu.com/question/${question_id}/answer/${answer_id}`
    // const origin_url = `https://www.zhihu.com/question/${question_id}/answer/${answer_id}`
    f.write(`## 本答案原始链接: ${origin_url}\n`)
    f.write(`### 大概简介: ${excerpt}\n`)
    // f.write(`### Author_Name: ${author_name}\n`)
    // f.write(`### Answer_ID: ${answer_id}\n`)
    // f.write(`### Question_ID ${question_id}:\n`)
    // f.write(`### VoteCount: ${vote_up_count}\n`)
    // f.write(`### Create_Time: ${create_time}\n`)
    f.write('-'.repeat(40) + '\n')

    let text = htmlToText.convert(content, { wordwrap: null })
    // let text = htmlToText.fromString(content, { wordwrap: null })
    // 标题
    let r = text.match(/\*\*(.*?)\*\*/g)
    if (r) {
      for (let i = 0; i < r.length; i++) {
        const match = r[i]
        const strippedMatch = match.replace(/\*\*/g, '').trim()
        text = text.replace(match, strippedMatch)
      }
    }

    r = text.match(/_(.*?)_/g)
    if (r) {
      for (let i = 0; i < r.length; i++) {
        const match = r[i]
        const strippedMatch = match.replace(/_/g, '').trim()
        text = text.replace(match, strippedMatch)
      }
    }
    text = text.replace(/_ _/g, '')

    // 图片
    r = text.match(/!\[\]\((.*?)\)/g)
    if (r) {
      for (let i = 0; i < r.length; i++) {
        const match = r[i]
        text = text.replace(match, match + '\n\n')
      }
    }

    f.write(text)

    f.close()
  }
}





main();
