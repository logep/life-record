package com.weibo;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import com.google.gson.Gson;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class Main {

    public static class HotTopic {
        private String word;

        public String getWord() {
            return word;
        }
    }

    public static class HotTopicsResponse {
        private List<HotTopic> realtime;

        public List<HotTopic> getRealtime() {
            return realtime;
        }
    }

    public static void main(String[] args) {
        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder()
                .url("https://weibo.com/ajax/side/hotSearch")
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (response.isSuccessful()) {
                Gson gson = new Gson();
                HotTopicsResponse hotTopicsResponse = gson.fromJson(response.body().string(), HotTopicsResponse.class);
                List<HotTopic> hotTopics = hotTopicsResponse.getRealtime();

                if (hotTopics != null && !hotTopics.isEmpty()) {
                    addHotTopicsToRepository(hotTopics);
                }
            } else {
                System.out.println("Failed to get hot topics: " + response.code());
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static String generateMarkdownContent(List<HotTopic> hotTopics) {
        StringBuilder markdownContent = new StringBuilder("# 微博热点话题\n\n");
        for (HotTopic topic : hotTopics) {
            String word = topic.getWord();
            String link = "https://s.weibo.com/weibo?q=" + word;
            markdownContent.append("- [").append(word).append("](").append(link).append(")\n");
        }

        return markdownContent.toString();
    }

    private static void addHotTopicsToRepository(List<HotTopic> hotTopics) {
        LocalDateTime currentTime = LocalDateTime.now();
        String dateStr = currentTime.format(DateTimeFormatter.ofPattern("yyyyMM"));
        String folderName = "weibo" + File.separator + dateStr;
        new File(folderName).mkdirs();

        String fileName = "hot_topics_" + currentTime.format(DateTimeFormatter.ofPattern("HHmmss")) + ".md";
        String filePath = folderName + File.separator + fileName;
        String markdownContent = generateMarkdownContent(hotTopics);

        try (FileWriter writer = new FileWriter(filePath)) {
            writer.write(markdownContent);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
