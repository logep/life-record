const std = @import("std");
const http = @import("std").http;
const time = @import("std").time;
const os = @import("std").os;

pub fn getHotTopics() ![]string {
    const url = "https://weibo.com/ajax/side/hotSearch";
    const client = try http.Client.create();
    defer client.deinit();

    const response = try client.get(url);
    if (response.status_code != 200) {
        return null;
    }

    const data = try response.textAlloc();
    const jsonData = try @json.decode(data, []u8);
    const realtime = try @field(jsonData, "data").get("realtime");
    if (realtime == null) {
        return null;
    }

    var topics = []string{};

    for (realtime) |topic| {
        const word = try @field(topic, "word").string();
        const link = "https://s.weibo.com/weibo?q=" ++ word;
        topics = topics ++ [link];
    }

    return topics;
}

pub fn generateMarkdownContent(topics: []string) string {
    var markdownContent = "# 微博热点话题\n\n";
    for (topics) |topic| {
        markdownContent += "- [" ++ topic ++ "]\n";
    }
    return markdownContent;
}

pub fn addHotTopicsToRepository(topics: []string) !void {
    const currentTime = time.currentTime();
    const dateStr = @intToStr(@time.Year, currentTime) ++ @intToStr(@time.Month, currentTime);
    const folderName = "weibo" ++ std.fs.pathSeparator ++ dateStr;
    try os.mkdir(folderName, .{});

    const fileTime = @time.decode(time.Time{});
    const fileName = "hot_topics_" ++ @intToStr(@time.Hour, fileTime)
        ++ @intToStr(@time.Minute, fileTime)
        ++ @intToStr(@time.Second, fileTime) ++ ".md";
    const filePath = folderName ++ std.fs.pathSeparator ++ fileName;
    const markdownContent = generateMarkdownContent(topics);

    const file = try std.fs.cwd().createFile(filePath);
    defer file.close();

    try file.writeAll(markdownContent);
}

pub fn main() void {
    const hotTopics = try getHotTopics();
    if (hotTopics != null) {
        try addHotTopicsToRepository(hotTopics);
    }
}
