import java.io.{BufferedWriter, File, FileWriter}
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

import scala.io.Source
import scala.util.{Failure, Success, Try}
import sttp.client3._
import io.circe.parser._

object WeiboHotTopics {
  def main(args: Array[String]): Unit = {
    val hotTopics = getHotTopics()
    hotTopics.foreach { topics =>
      addHotTopicsToRepository(topics)
    }
  }

  def getHotTopics(): Option[List[HotTopic]] = {
    val response = basicRequest.get(uri"https://weibo.com/ajax/side/hotSearch").send()
    response.body match {
      case Right(jsonStr) =>
        val parsedJson = parse(jsonStr)
        parsedJson match {
          case Right(json) =>
            val data = json.hcursor.downField("data").downField("realtime").as[List[HotTopic]]
            data match {
              case Right(topics) => Some(topics)
              case Left(_)       => None
            }
          case Left(_) => None
        }
      case Left(_) => None
    }
  }

  def generateMarkdownContent(hotTopics: List[HotTopic]): String = {
    val header = "# 微博热点话题\n\n"
    val topicList = hotTopics.map { topic =>
      val word = topic.word
      val link = s"https://s.weibo.com/weibo?q=$word"
      s"- [$word]($link)\n"
    }.mkString
    header + topicList
  }

  def addHotTopicsToRepository(hotTopics: List[HotTopic]): Unit = {
    val currentDateTime = LocalDateTime.now()
    val dateFormatter = DateTimeFormatter.ofPattern("yyyyMMdd")
    val timeFormatter = DateTimeFormatter.ofPattern("HHmmss")

    val dateStr = currentDateTime.format(dateFormatter)
    val folderName = s"weibo/$dateStr"
    val folder = new File(folderName)
    if (!folder.exists()) {
      folder.mkdirs()
    }

    val fileName = s"hot_topics_${currentDateTime.format(timeFormatter)}.md"
    val filePath = s"$folderName/$fileName"
    val markdownContent = generateMarkdownContent(hotTopics)

    val file = new File(filePath)
    val writer = new BufferedWriter(new FileWriter(file))
    writer.write(markdownContent)
    writer.close()
  }
}

case class HotTopic(word: String)

