window.onload = function() {
    /**
     * js 原生计时器
     */
    //启动与复位一组;停止和计次一组
    var started = false;
    var count = 0;
    var timer1;
    m = 0;
    s = 0;
    a = 0;

    cm = 0;
    cs = 0;
    ca = 0;

    function setTime(t) {
        if (t < 10) {
            t = "0" + t;
        }
        return t;
    }

    function startTime() {
        a = parseInt(a, 10);
        s = parseInt(s, 10);
        m = parseInt(m, 10);
        a++;
        if (a == 10) {
            a = 0;
            s++;
        }
        if (s == 60) {
            s = 0;
            m++;
        }

        ca++;
        if (ca == 10) {
            ca = 0;
            cs++;
        }
        if (cs == 60) {
            cs = 0;
            cm++;
        }
        var showm = setTime(m);
        var shows = setTime(s);
        var showcm = setTime(cm);
        var showcs = setTime(cs);

        document.getElementsByClassName("time-detail")[0].innerHTML = showm + ":" + shows + "." + a;
        document.getElementsByClassName("count-time")[0].innerHTML = showcm + ":" + showcs + "." + ca;
    }

    function stopTime() {
        clearInterval(timer1);

    }

    function reset() {
        clearInterval(timer1);
        m = 0;
        s = 0;
        a = 0;
        cm = 0;
        cs = 0;
        ca = 0;
    }




    var start_stop_btn = document.getElementsByClassName("start-stop-btn")[0];
    var count_reset_btn = document.getElementsByClassName("count-reset-btn")[0];

    start_stop_btn.onclick = function() {
        if (!started) {
            started = true;
            timer1 = setInterval(startTime, 100);
            start_stop_btn.style.backgroundColor = 'red';
            start_stop_btn.innerHTML = "停止";
            count_reset_btn.innerHTML = "计次";
        } else {
            started = false;
            stopTime();
            start_stop_btn.style.backgroundColor = 'green';
            start_stop_btn.innerHTML = "开始";
            count_reset_btn.innerHTML = "复位";
        }
    }

    count_reset_btn.onclick = function() {
        if (started) {
            count++;
            var value = document.getElementsByClassName("time-detail")[0].innerHTML;
            var li = document.createElement('li');
            li.className = "time-item";
            li.innerHTML = '<span>计次' + count + '</span><span>' + value + '</span>';
            document.getElementsByClassName("time-list")[0].appendChild(li);
           
            document.getElementsByClassName("count-time")[0].innerHTML = "00:00.0"
            cm = 0;
            cs = 0;
            ca = 0;
        } else {
			reset();
            document.getElementsByClassName("time-detail")[0].innerHTML = "00:00.0";
             document.getElementsByClassName("count-time")[0].innerHTML = "00:00.0"
        }
    }
}