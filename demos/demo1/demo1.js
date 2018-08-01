/**
 * demo1 原生弹框
 * BY 王玮
 */
window.onload = function() {
    //获取文本输入框
    var cur_password = document.getElementsByTagName('input')[0];
    var new_password = document.getElementsByTagName('input')[1];
    var confirm_password = document.getElementsByTagName('input')[2];

    var cur_password_popover = document.getElementsByClassName('password-popover')[0];
    var new_password_popover = document.getElementsByClassName('password-popover')[1];
    var confirm_password_popover = document.getElementsByClassName('password-popover')[2];
    var oldPassword = '';
    var newPassword = '';
    var conPassword = '';


    //当前密码验证
    cur_password.addEventListener('focusin', function() {
        oldPassword = this.value;
        if (oldPassword == '')
            cur_password_popover.style.display = 'block';
    });

    cur_password.addEventListener('input', function() {
        cur_password_popover.style.display = 'none';
    });

    cur_password.addEventListener('focusout', function() {
        oldPassword = this.value;
        if (oldPassword == null || oldPassword == '') {
            this.className = 'password-input input-warning';
            cur_password_popover.style.display = 'block';
        } else {
            this.className = 'password-input';
        }
    });

    //新密码验证
    new_password.onfocus = function() {
        // new_password_popover.style.display = 'none';
    };

    new_password.oninput = function() {
        new_password_popover.style.display = 'none';
    }

    new_password.onblur = function() {
        newPassword = this.value;
        if (newPassword.length > 16 || newPassword.length < 6) {
            this.className = 'password-input input-warning';
            new_password_popover.style.display = 'block';
        } else {
            this.className = 'password-input';
        }
    }

    //密码确认验证


    confirm_password.oninput = function() {
        confirm_password_popover.style.display = 'none';
    }


    //确认修改
    var confirm = document.getElementsByClassName('password-confirm')[0];
    confirm.onclick = function() {
        window.location.href = "../demo2/demo2.html?loginId="+ "1"+"&channlId="+"3";
        conPassword = confirm_password.value;
        if (conPassword != newPassword) {
            confirm_password.className = 'password-input input-warning';
            confirm_password_popover.style.display = 'block';
        } else {
            confirm_password.className = 'password-input';
            document.getElementsByClassName('popover')[0].style.display = 'block';
            console.log(document.getElementsByClassName('popover')[0]);
            document.getElementsByClassName('popover')[0].innerText = 
            '当前密码:' + oldPassword + '; 新密码：' + newPassword + '; 确认密码：' + conPassword + '';
        }
    }
}