#include <iostream>
#include <fstream>
#include <ctime>
#include <string>
#include <vector>
#include <cpprest/http_client.h>

using namespace web::http;
using namespace web::http::client;

// Function to send a GET request to the specified URL and return the response as a string
pplx::task<std::string> send_get_request(const std::wstring& url) {
    http_client client(url);
    return client.request(methods::GET).then([](http_response response) {
        if (response.status_code() == status_codes::OK) {
            return response.extract_string();
        } else {
            return pplx::task_from_result(std::string());
        }
    });
}

// Function to generate Markdown content from hot topics
std::string generate_markdown_content(const std::vector<std::wstring>& hot_topics) {
    std::wstring markdown_content = L"# 微博热点话题\n\n";
    for (const std::wstring& topic : hot_topics) {
        std::wstring link = L"https://s.weibo.com/weibo?q=" + topic;
        markdown_content += L"- [" + topic + L"](" + link + L")\n";
    }
    return utility::conversions::to_utf8string(markdown_content);
}

// Function to add hot topics to a repository
void add_hot_topics_to_repository(const std::vector<std::wstring>& hot_topics) {
    // Get the current time and generate a file name
    std::time_t current_time = std::time(nullptr);
    std::tm current_tm;
    localtime_s(&current_tm, &current_time);
    char date_str[10];
    std::strftime(date_str, sizeof(date_str), "%Y%m", &current_tm);
    
    std::wstring folder_name = L"weibo\\" + utility::conversions::to_wstring(date_str);
    _wmkdir(folder_name.c_str());

    char time_str[10];
    std::strftime(time_str, sizeof(time_str), "%H%M%S", &current_tm);
    std::wstring file_name = L"hot_topics_" + utility::conversions::to_wstring(time_str) + L".md";
    std::wstring file_path = folder_name + L"\\" + file_name;

    // Generate Markdown content
    std::string markdown_content = generate_markdown_content(hot_topics);

    // Write the latest hot topics to the file
    std::wofstream file(file_path);
    file << utility::conversions::to_utf16string(markdown_content);
}

int main() {
    // Send a GET request to fetch hot topics
    std::wstring url = L"https://weibo.com/ajax/side/hotSearch";
    pplx::task<std::string> response_task = send_get_request(url);

    try {
        std::string response = response_task.get();
        
        // Parse the JSON response to extract hot topics (you'll need a JSON library for this)
        // Here, we assume you have a JSON library to extract the hot topics into a vector of wstrings
        std::vector<std::wstring> hot_topics; // Replace this with actual extraction

        if (!hot_topics.empty()) {
            // Add the hot topics to the repository
            add_hot_topics_to_repository(hot_topics);
        }
    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << std::endl;
    }

    return 0;
}
