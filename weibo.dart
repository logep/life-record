import 'dart:io';
import 'dart:convert';
import 'package:http/http.dart' as http;

Future<List<Map<String, dynamic>>> getHotTopics() async {
  final response = await http.get(Uri.parse("https://weibo.com/ajax/side/hotSearch"));
  // adding the http package to your pubspec.yaml file and running pub get
  if (response.statusCode == 200) {
    final data = json.decode(response.body);
    return (data['data']['realtime'] as List).cast<Map<String, dynamic>>();
  } else {
    return [];
  }
}

String generateMarkdownContent(List<Map<String, dynamic>> hotTopics) {
  final StringBuffer markdownContent = StringBuffer("# 微博热点话题\n\n");
  
  for (final topic in hotTopics) {
    final word = topic['word'] as String;
    final link = "https://s.weibo.com/weibo?q=$word";
    markdownContent.write("- [$word]($link)\n");
  }

  return markdownContent.toString();
}

void addHotTopicsToRepository(List<Map<String, dynamic>> hotTopics) {
  final currentDateTime = DateTime.now();
  final dateStr = currentDateTime.toString().substring(0, 7).replaceAll('-', '');
  final folderName = 'weibo/$dateStr';
  Directory(folderName).createSync(recursive: true);

  final fileName = 'hot_topics_${currentDateTime.toString().split(' ')[1].replaceAll(':', '')}.md';
  final filePath = '$folderName/$fileName';
  final markdownContent = generateMarkdownContent(hotTopics);

  File(filePath).writeAsStringSync(markdownContent, encoding: utf8);
}

void main() async {
  final hotTopics = await getHotTopics();

  if (hotTopics.isNotEmpty) {
    addHotTopicsToRepository(hotTopics);
  }
}
