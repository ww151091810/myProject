$(document).ready(function() {
    var tableData = [{
        "文章ID": "1",
        "文章标签": "散文",
        "文章标题": "吃饭",
        "文章作者": "啊过火海他人家庭"
    }, {
        "文章ID": "2",
        "文章标签": "诗歌",
        "文章标题": "离骚吃饭",
        "文章作者": "王玮王玮大大"
    }, {
        "文章ID": "3",
        "文章标签": "繁华似非",
        "文章标题": "啊过火海他人家庭",
        "文章作者": "大家看看"
    }, {
        "文章ID": "4",
        "文章标签": "诗歌",
        "文章标题": "吃饭",
        "文章作者": "反季节框i"
    }, {
        "文章ID": "5",
        "文章标签": "繁华似非",
        "文章标题": "离骚吃饭",
        "文章作者": "王玮王玮大大"
    }, {
        "文章ID": "6",
        "文章标签": "散文",
        "文章标题": "大家看看",
        "文章作者": "王玮王玮大大"
    }, {
        "文章ID": "7",
        "文章标签": "诗歌",
        "文章标题": "离骚吃饭",
        "文章作者": "王玮"
    }, {
        "文章ID": "8",
        "文章标签": "繁华似非",
        "文章标题": "离骚",
        "文章作者": "王玮大大"
    }, {
        "文章ID": "10",
        "文章标签": "繁华似非",
        "文章标题": "离骚吃饭",
        "文章作者": "王玮王玮大大"
    }, {
        "文章ID": "11",
        "文章标签": "散文",
        "文章标题": "大家看看",
        "文章作者": "王玮王玮大大"
    }, {
        "文章ID": "12",
        "文章标签": "诗歌",
        "文章标题": "离骚吃饭",
        "文章作者": "王玮"
    }, {
        "文章ID": "13",
        "文章标签": "繁华似非",
        "文章标题": "离骚",
        "文章作者": "王玮大大"
    }, {
        "文章ID": "1",
        "文章标签": "散文",
        "文章标题": "吃饭",
        "文章作者": "啊过火海他人家庭"
    }, {
        "文章ID": "2",
        "文章标签": "诗歌",
        "文章标题": "离骚吃饭",
        "文章作者": "王玮王玮大大"
    }, {
        "文章ID": "3",
        "文章标签": "繁华似非",
        "文章标题": "啊过火海他人家庭",
        "文章作者": "大家看看"
    }, {
        "文章ID": "4",
        "文章标签": "诗歌",
        "文章标题": "吃饭",
        "文章作者": "反季节框i"
    }, {
        "文章ID": "5",
        "文章标签": "繁华似非",
        "文章标题": "离骚吃饭",
        "文章作者": "王玮王玮大大"
    }, {
        "文章ID": "6",
        "文章标签": "散文",
        "文章标题": "大家看看",
        "文章作者": "王玮王玮大大"
    }, {
        "文章ID": "7",
        "文章标签": "诗歌",
        "文章标题": "离骚吃饭",
        "文章作者": "王玮"
    }, {
        "文章ID": "8",
        "文章标签": "繁华似非",
        "文章标题": "离骚",
        "文章作者": "王玮大大"
    }, {
        "文章ID": "10",
        "文章标签": "繁华似非",
        "文章标题": "离骚吃饭",
        "文章作者": "王玮王玮大大"
    }, {
        "文章ID": "11",
        "文章标签": "散文",
        "文章标题": "大家看看",
        "文章作者": "王玮王玮大大"
    }, {
        "文章ID": "12",
        "文章标签": "诗歌",
        "文章标题": "离骚吃饭",
        "文章作者": "王玮"
    }, {
        "文章ID": "13",
        "文章标签": "繁华似非",
        "文章标题": "离骚",
        "文章作者": "王玮大大"
    }];

    var config = {
        data: tableData, //表格数据
        show_per_page: 10
    }

    $("#table-container").easyTable(config);
});