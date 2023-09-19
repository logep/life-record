import java.io.{BufferedWriter, File, FileWriter}
import java.net.{HttpURLConnection, URL}
import java.nio.file.{Files, Paths}
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import scala.util.{Failure, Success, Try}
import io.circe.Json
import io.circe.parser.parse
import io.circe._
import io.circe.generic.semiauto._

object WeiboHotTopics {
  case class HotTopic(word: String)
  case class HotTopicsResponse(data: Data)
  case class Data(realtime: List[HotTopic])
  implicit val hotTopicDecoder: Decoder[HotTopic] = deriveDecoder[HotTopic]
  def main(args: Array[String]): Unit = {
    val hotTopics = getHotTopics()
    hotTopics match {
      case Success(topics) =>
        addHotTopicsToRepository(topics) match {
          case Success(_) => println("Hot topics added to repository successfully!")
          case Failure(e) => println(s"Failed to add hot topics to repository: $e")
        }
      case Failure(e) => println(s"Failed to get hot topics: $e")
    }
  }

  def getHotTopics(): Try[List[HotTopic]] = {
    Try {
      val url = new URL("https://weibo.com/ajax/side/hotSearch")
      val connection = url.openConnection().asInstanceOf[HttpURLConnection]
      connection.setRequestMethod("GET")
      connection.connect()

      val inputStream = connection.getInputStream
      val responseBody = scala.io.Source.fromInputStream(inputStream).mkString

      val parsedJson = parse(responseBody)
      parsedJson match {
        case Right(json) =>
          val data = json.hcursor.downField("data").downField("realtime").as[List[HotTopic]](Decoder.decodeList(hotTopicDecoder))
          data.getOrElse(List.empty)
        case Left(_) => List.empty
      }
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

  def addHotTopicsToRepository(hotTopics: List[HotTopic]): Try[Unit] = {
    Try {
      val currentDateTime = LocalDateTime.now()
      val dateFormatter = DateTimeFormatter.ofPattern("yyyyMMdd")
      val timeFormatter = DateTimeFormatter.ofPattern("HHmmss")

      val dateStr = currentDateTime.format(dateFormatter)
      val folderName = s"weibo/$dateStr"
      val folderPath = Paths.get(folderName)

      if (!Files.exists(folderPath)) {
        Files.createDirectories(folderPath)
      }

      val fileName = s"hot_topics_${currentDateTime.format(timeFormatter)}.md"
      val filePath = Paths.get(folderName, fileName)
      val markdownContent = generateMarkdownContent(hotTopics)

      val writer = new BufferedWriter(new FileWriter(filePath.toString))
      writer.write(markdownContent)
      writer.close()
    }
  }
}
