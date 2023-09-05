cmake_minimum_required(VERSION 3.0)
project(WeiboHotTopics)  # 替换为你的项目名称

# 查找 CMake 所需的包，这里假设你的项目依赖 cpprestsdk 和 jsoncpp
find_package(cpprestsdk REQUIRED)
find_package(JsonCpp REQUIRED)

# 添加可执行文件并链接依赖库
add_executable(weibo_hot_topics main.cpp)  # 替换为你的源文件名称
target_link_libraries(weibo_hot_topics PRIVATE cpprestsdk::cpprest JsonCpp::JsonCpp)

# 如果需要设置其他编译选项，可以在此处添加
# target_compile_options(weibo_hot_topics PRIVATE ...)

# 如果需要设置其他包含目录，可以在此处添加
# target_include_directories(weibo_hot_topics PRIVATE ...)

# 如果需要设置其他链接目录，可以在此处添加
# target_link_directories(weibo_hot_topics PRIVATE ...)
