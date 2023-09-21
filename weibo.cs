using System;
using System.IO;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Text.Json;
using NodaTime;
using System.Globalization;


class Program
{
    static async Task Main()
    {
        try
        {
            var hotTopics = await GetHotTopics();
            if (hotTopics != null)
            {
                AddHotTopicsToRepository(hotTopics);
            }
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine("Failed to get or process hot topics: " + ex.Message);
        }
    }

    static async Task<string> GetHotTopicsDataAsync()
    {
        string url = "https://weibo.com/ajax/side/hotSearch";

        using var client = new WebClient();
        var data = await client.DownloadDataTaskAsync(new Uri(url));
        return Encoding.UTF8.GetString(data);
    }

    static async Task<string[]> GetHotTopics()
    {
        try
        {
            var data = await GetHotTopicsDataAsync();
            var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
            var result = JsonSerializer.Deserialize<HotTopicsResponse>(data, options);

            return result?.Data?.Realtime?.Select(topic => topic.Word).ToArray();
        }
        catch
        {
            return null;
        }
    }

    static void AddHotTopicsToRepository(string[] hotTopics)
    {
        var currentTime = SystemClock.Instance.GetCurrentInstant();
        var dateStr = currentTime.ToString("yyyyMMdd", CultureInfo.InvariantCulture);
        var folderName = $"weibo/{dateStr}";
        Directory.CreateDirectory(folderName);

        var fileName = $"hot_topics_{currentTime.ToString("HHmmss", CultureInfo.InvariantCulture)}.md";
        var filePath = Path.Combine(folderName, fileName);
        var markdownContent = GenerateMarkdownContent(hotTopics);

        File.WriteAllText(filePath, markdownContent);
    }

    static string GenerateMarkdownContent(string[] hotTopics)
    {
        var markdownContent = "# 微博热点话题\n\n";
        foreach (var word in hotTopics)
        {
            var link = $"https://s.weibo.com/weibo?q={word}";
            markdownContent += $"- [{word}]({link})\n";
        }
        return markdownContent;
    }
}

class HotTopicsResponse
{
    public Data Data { get; set; }
}

class Data
{
    public Realtime[] Realtime { get; set; }
}

class Realtime
{
    public string Word { get; set; }
}
