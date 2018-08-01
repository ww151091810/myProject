/**
 * demo2 原生确认框
 */



window.onload = function() {
    function parseUrl() {
        var url = location.href;
        var i = url.indexOf('?');
        if (i == -1) return;
        var querystr = url.substr(i + 1);
        var arr1 = querystr.split('&');
        var arr2 = new Object();
        for (i in arr1) {
            var ta = arr1[i].split('=');
            arr2[ta[0]] = ta[1];
        }
        return arr2;
    }
    var v = parseUrl(); //解析所有参数
    console.log(v); //就是你要的结果


    var data = [{
        id: 1,
        name: '美食'
    }, {
        id: 2,
        name: '新闻'
    }, {
        id: 3,
        name: '八卦'
    }, {
        id: 4,
        name: '体育'
    }, {
        id: 5,
        name: '运动'
    }];

    var table = document.getElementById('table');
    var trs = table.getElementsByTagName('tr');
    var deleteBtns = document.getElementsByClassName('delete');
    var conPopover = document.getElementById('confirm-popover');
    var backUp = document.getElementById('backup');
    var confirm = conPopover.getElementsByClassName('btn-confirm')[0];
    var cancel = conPopover.getElementsByClassName('btn-cancel')[0];
    var close = conPopover.getElementsByClassName('popover-close')[0];
    var element;

    console.log("deleteBtns==", deleteBtns);
    console.log("trs==", trs);
    for (var i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].onclick = function() {
            console.log(this);
            element = this;
            showPopover();
        }
    }

    confirm.onclick = function() {
        console.log('element==', element);
        var target = element.parentNode.parentNode;
        console.log(target);
        var tbody = target.parentNode;
        tbody.removeChild(target);
        var curTr = tbody.getElementsByTagName('tr');
        for (var i = 0; i < curTr.length; i++) {
            curTr[i].cells[0].innerText = i + 1;
        }
        hidePopover();
        element = null;
    }

    cancel.onclick = function() {
        hidePopover();
        element = null;
    }

    close.onclick = function() {
        hidePopover();
        element = null;
    }

    function showPopover() {
        conPopover.style.display = 'block';
        backUp.style.display = 'block';
    }

    function hidePopover() {
        conPopover.style.display = 'none';
        backUp.style.display = 'none';
    }
}