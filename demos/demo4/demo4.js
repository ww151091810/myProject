window.onload = function() {

    /**
     * 轮播图代码start
     */
    var list = document.getElementById('img-list');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var container = document.getElementById('img-container');
    var tab2 = document.getElementById('tab2');
    var timer1;
    var timer2;


    container.onmouseover = stop;
    container.onmouseout = play;
    play();

    //自动轮播
    function play() {
        timer = setInterval(function() {
            next.onclick()
        }, 4000)
    }

    //清除定时器
    function stop() {
        clearInterval(timer);
    }

    //切换动画
    function switchAnimate(offset) {
        //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
        //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
        var count = 0;
        clearInterval(timer2); //执行当前动画同时清除之前的动画
        timer2 = setInterval(function() {
            var speed = offset / 30;
            if (count == offset) {
                clearInterval(timer2);
            } else {
            	var curLeft = parseInt(list.style.left);
                list.style.left = curLeft + speed + 'px';
                var newLeft = parseInt(list.style.left);
                count += speed;
                console.log(speed);
                if (newLeft <= (-3600)) {
                    list.style.left = -600 + 'px';
                }
                if (newLeft >= 0) {
                    list.style.left = -3000 + 'px';
                }
            }

        }, 10)

        // var newLeft = parseInt(list.style.left) + offset;
        // console.log(newLeft);
        // $(list).animate({ 'left': newLeft + 'px' }, 1000, 'swing', function() {
        //     if (newLeft <= (-3600)) {
        //         list.style.left = -600 + 'px';
        //     }
        //     if (newLeft >= 0) {
        //         list.style.left = -3000 + 'px';
        //     }
        // });
    }

    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var index = 1;

    //小按钮点击
    for (var i = 0; i < buttons.length; i++) {
        // 这里使用的是立即执行函数
        (function(i) {
            buttons[i].onclick = function() {
                var clickIndex = parseInt(this.getAttribute('index'));
                var offset = 600 * (index - clickIndex);
                animate(offset);
                index = clickIndex;
                buttonsShow();
            }
        })(i)
    }

    function buttonsShow() {
        //这里需要清除之前的样式
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                buttons[i].className = '';
            }
        }
        //数组从0开始，故index需要-1
        buttons[index - 1].className = 'on';
    }

    //向前点击
    prev.onclick = function() {
        index -= 1;
        if (index < 1) {
            index = 5;
        }
        buttonsShow();
        switchAnimate(600);
    }

    //向后点击
    next.onclick = function() {
        //由于上边定时器的作用，index会一直递增下去，我们只有5个小圆点，所以需要做出判断
        index += 1;
        if (index > 5) {
            index = 1;
        }
        buttonsShow();
        switchAnimate(-600);
    }
    /**
     * 轮播图代码end
     */
}