package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"path/filepath"
	"time"
)

type HotTopic struct {
	Word string `json:"word"`
}

type HotTopicsResponse struct {
	Data struct {
		Realtime []HotTopic `json:"realtime"`
	} `json:"data"`
}

func getHotTopics() ([]HotTopic, error) {
	resp, err := http.Get("https://weibo.com/ajax/side/hotSearch")
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var hotTopicsResponse HotTopicsResponse
	err = json.Unmarshal(body, &hotTopicsResponse)
	if err != nil {
		return nil, err
	}

	return hotTopicsResponse.Data.Realtime, nil
}

func generateMarkdownContent(hotTopics []HotTopic) string {
	markdownContent := "# 微博热点话题-go语言生成\n\n"
	for _, topic := range hotTopics {
		word := topic.Word
		link := fmt.Sprintf("https://s.weibo.com/weibo?q=%s", word)
		markdownContent += fmt.Sprintf("- [%s](%s)\n", word, link)
	}

	return markdownContent
}

func addHotTopicsToRepository(hotTopics []HotTopic) error {
	currentTime := time.Now()
	dateStr := currentTime.Format("200601")
	folderName := filepath.Join("weibo", dateStr)
	err := os.MkdirAll(folderName, os.ModePerm)
	if err != nil {
		return err
	}

	fileName := fmt.Sprintf("hot_topics_%s.md", currentTime.Format("150405"))
	filePath := filepath.Join(folderName, fileName)
	markdownContent := generateMarkdownContent(hotTopics)

	err = ioutil.WriteFile(filePath, []byte(markdownContent), os.ModePerm)
	if err != nil {
		return err
	}

	return nil
}

func main() {
	hotTopics, err := getHotTopics()
	if err != nil {
		fmt.Println("Failed to get hot topics:", err)
		return
	}

	err = addHotTopicsToRepository(hotTopics)
	if err != nil {
		fmt.Println("Failed to add hot topics to repository:", err)
		return
	}

	fmt.Println("Hot topics added to repository successfully!")
}
