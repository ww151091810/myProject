/*
 *easyTable.js
 *表格插件
 */
;
(function($) {
    $.fn.easyTable = function(opts) {
        var defaults = {
            data: [], //表格数据
            show_per_page: 10, //默认一页显示行数
            getUrl: '',
            upLoadUrl: ''
        }
        var option = $.extend(defaults, opts);
        // 通用函数集合
        var F = {}

        //设定表格title  
        var _ele = this;
        var curData = option.data;
        var headList = Object.keys(curData[0]);
        var rows = curData.length;
        var cols = headList.length;
        var number_of_items = rows + 1;
        var show_per_page = option.show_per_page;
        var number_of_pages = Math.ceil(number_of_items / show_per_page);
        var index_of_pages = number_of_pages - 1;
        var current_link = 1;
        var manager = {
            init: function() {
                var table = $('<table id="table" class="table-border"><thead></thead><tbody></tbody></table>');
                _ele.append(table);
                setHead();
                setContent();
                console.log(this)
                this.createPaginBar();

                function setHead() {
                    var th = $('<th><input type="checkbox" id="checkAll" class="checkbox" value=""></th>');
                    $("thead").append(th);
                    for (var n = 0; n < cols; n++) {
                        var th = $("<th>" + headList[n] + "</th>");
                        $("thead").append(th);

                    }
                    $("thead").append($("<th>操作</th>"))
                    $("thead").append(th);
                }

                function setContent() {
                    for (var i = 0; i < rows; i++) {
                        var tr = $("<tr></tr>");
                        var td = $('<td><input type="checkbox" class="singlecheckbox" value=""></td>');
                        $(td).appendTo(tr);
                        for (var j = 0; j < cols; j++) {
                            var td = $('<td>' + curData[i][headList[j]] + '</td>');
                            $(tr).append(td);
                        }
                        $(tr).append($('<td><div class="btn-blue">编辑</div><div class="btn-red delete">删除</div></td>'));
                        $("tbody").append(tr);
                    }
                }
            },

            createPaginBar: function() {
                var table = $("#table");
                var navigation_html = '<div id="page_navigation">' +
                    '<div id="pre-page" class=" iconfont icon-fanhui"></div>' +
                    '<div id="next-page" class=" iconfont icon-jiantouyou"></div>' +
                    '<span class="page_span">到</span>' +
                    '<input type="text" class="num_box" longdesc="' + current_link + '" value="' + current_link + '">' +
                    '<span class="page_span">页</span>' +
                    '<button class="page_btn">确定</button>' +
                    '<span class="page_span">共 ' + number_of_pages + ' 页</span>' +
                    '<span class="page_span">共 ' + number_of_items + ' 条数据</span>';


                _ele.append($(navigation_html));
                renderPage();

                $(table).find("tr").css({ 'display': 'none' });
                $(table).find("tr").slice(0, show_per_page - 1).css({
                    "display": "table-row",
                    "width": "100%;"
                });


                function renderPage() {
                    var $ul = $('<ul></ul>');
                    if (number_of_pages < 6) {
                        for (var i = 1; i <= number_of_pages; i++) {
                            var li = $('<li>' + i + '</li>');
                            $ul.append(li);
                        }
                    } else {

                    }
                    $ul.children('li').eq(current_link - 1).addClass('active')
                    $('#pre-page').after($ul);
                };
                this.bindHandle();
            },

            bindHandle: function() {
                $(document).on("click", "#pre-page", function(event) {
                    /* Act on the event */
                    goForward();
                });

                $(document).on("click", "#next-page", function(event) {
                    /* Act on the event */
                    goNext();
                });

                $(document).on('click', '.page_btn', function(event) {
                    event.preventDefault();
                    /* Act on the event */
                    var new_page = $(".num_box").val();
                    if(new_page <= 0) new_page = 1;
                    if(new_page > number_of_pages) new_page = number_of_pages;
                    go_to_page(new_page);   
                });

                $("ul").on('click', 'li', function(event) {
                    event.preventDefault();
                    /* Act on the event */
                    if( !$(this).hasClass('active')) {
                        $(this).addClass('active');
                        $(this).siblings('li').removeClass('active');
                        var new_page = $(this).text();
                        console.log(new_page)
                        go_to_page(new_page);
                    }
                });

                function goForward() {
                    current_link = parseInt($(".num_box").val(), 10);
                    var new_page = current_link - 1;
                    if (new_page >= 0) {
                        go_to_page(new_page);
                    }
                };

                function goNext() {
                    current_link = parseInt($(".num_box").val(), 10);
                    var new_page = current_link + 1;
                    console.log("new_page==",new_page)
                    if (new_page <= number_of_pages) {
                        go_to_page(new_page);
                    }
                };

                function go_to_page(page_num) {
                    $(".num_box").val(page_num)
                    page_num --;
                    start_from = (page_num * show_per_page) ? (page_num * show_per_page - 1) : 0;
                    end_on = start_from + show_per_page - 1;
                    $(table).find("tr").css('display', 'none').slice(start_from, end_on).css({
                        "display": "table-row",
                        "width": "100%;"
                    });
                };
            }
        }
        manager.init();
    }
}(jQuery));