/**
 * 省市区联动选择
 */

var province = ["北京市", "广东省", "江苏省", "湖北省"];

var city = [
    ["北京市"],
    ["广州市", "深圳市", "珠海市", "东莞市"],
    ["南京市", "苏州市", "南通市", "常州市"],
    ["武汉市", "宜昌市"]
];


var areas = [
    [
        ["东城区", "西城区", "宣武区"]
    ],
    [
        ["天河区", "海珠区", "白云区", "番禺区"],
        ["南山区", "宝安区", "福田区"],
        ["香洲区", "斗门区", "金湾区"],
        ["东城区", "莞城区", "万江区"]
    ],
    [
        ['玄武区', '白下区', '秦淮区', '建邺区'],
        ['沧浪区', '平江区', '金阊区', '虎丘区'],
        ['崇川区', '港闸区', '海安县', '如东县'],
        ['天宁区', '钟楼区', '新北区']
    ],
    [
        ["武昌区", "洪山区", "江汉区", "江岸区"],
        ["西陵区", "伍家岗区", "夷陵区", "猇亭区"]
    ]
];


var res = new Array(3);
var indexArr = [];

$("#search,#search~span").mouseover(function(event) {
    /* Act on the event */
    if ($("#search").text() != "请选择") {
        $("#search").next('span').removeClass('icon-jiantouxia').addClass('icon-guanbi');
    }
});

$("#search,#search~span").mouseout(function(event) {
    /* Act on the event */
    $("#search").next('span').removeClass('icon-guanbi').addClass('icon-jiantouxia');
});

$("#search~span").click(function(event) {
    /* Act on the event */
    if ($(this).hasClass('icon-guanbi')) {
        $(this).prev('#search').text('请选择')
        $(this).removeClass('icon-guanbi').addClass('icon-jiantouxia');
        $("#search~span").removeClass('active')

    } else {
        $(this).prev('#search').click();
    }

    $(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active');
});

//选择框点击，打开省级列表
$("#search").click(function(event) {
    /* Act on the event */
    $(this).addClass('active');
    setData($("#province"), province);
    $("#province").toggle();
    $("#search~span").addClass('active')
});


//省级选择
$("#province").on("click", "li", function(event) {
    /* Act on the event */
    var target = $(event.target);
    var index = target.data('index');
    res[0] = target.text();
    indexArr[0] = index;
    var cityData = city[index];
    setData($("#city"), cityData);
    $("#city").show();
    $("#areas").hide();
});

//市级选择
$("#city").on("click", "li", function(event) {
    /* Act on the event */
    var target = $(event.target);
    var index = target.data('index');
    res[1] = target.text();
    indexArr[1] = index;
    var areasData = areas[indexArr[1]][index];
    setData($("#areas"), areasData);
    $("#areas").show();
});

//区域选择
$("#areas").on("click", "li", function(event) {
    /* Act on the event */
    var target = $(event.target);
    var index = target.data('index');
    res[2] = target.text();
    $(".list").hide();
    $("#search").text(res.join('/'));
    $(this).removeClass('active');
    $("#search~span").removeClass('active');

});

$(".search-container").mouseout(function(event) {
    /* Act on the event */
    $(this).removeClass('active');

});


/**
 * [setProvince 设定省市区列表]
 * @param {[type]} ele  [目标元素]
 * @param {[type]} data [填充数据]
 */
function setData(ele, data) {
    ele.empty();
    for (var i in data) {
        var li = $("<li data-index=" + i + ">" + data[i] + " </li>");
        ele.append(li)
    }
}

function getCity() {

}

function getAreas() {

}

function changeCSS() {

}


function stopBubble(e) {
    getEvent(e)
    if (e && e.stopPropagation) {
        e.stopPropagation(); //非IE下  
    } else {
        window.event.cancelBubble = true; //IE下  
    }
};

function preventDefault(e) {
    if (window.event) {
        //IE中阻止函数器默认动作的方式  
        window.event.returnValue = false;
    } else {
        //阻止默认浏览器动作(W3C)  
        e.preventDefault();
    }
}


//获取event对象
function getEvent(event) {
    return event || window.event;
}