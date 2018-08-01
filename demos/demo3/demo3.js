/**
 * demo2 原生确认框
 */


window.onload = function() {

	var data = [{
		id: 1,
		name: '美食'
	},{
		id: 2,
		name: '新闻'
	},{
		id: 3,
		name: '八卦'
	},{
		id: 4,
		name: '体育'
	},{
		id: 5,
		name: '运动'
	}];

    var addData = {
        username: '',
        tel: '',
        email: '',
        usertype: '',
        status: ''
    };

	var table = document.getElementById('table');
	var trs = table.getElementsByTagName('tr');

	var deleteBtns = document.getElementsByClassName('delete');
	var conPopover = document.getElementById('confirm-popover');
	var backUp = document.getElementById('backup');

	var confirm = conPopover.getElementsByClassName('btn-confirm')[0];
	var cancel = conPopover.getElementsByClassName('btn-cancel')[0];
	var close = conPopover.getElementsByClassName('popover-close')[0];


    var add = document.getElementsByClassName('btn-add')[0];
    var addPopover = document.getElementById('add-popover');
    var add_confirm = addPopover.getElementsByClassName('btn-confirm')[0];
    var add_cancel = addPopover.getElementsByClassName('btn-cancel')[0];
    var add_close = addPopover.getElementsByClassName('popover-close')[0];
	
    var deleteEle; 
    var addEle;
    var popoverEle;
	
	console.log("trs==",trs);

    //添加操作 
    add.addEventListener('click',function() {
        popoverEle = addPopover;
        showPopover(popoverEle);
    })

    //添加确认
    add_confirm.addEventListener('click', function() {
        //邮箱格式验证
        // if() {

        // }
        //电话验证  
        // if() {
            
        // }

        var username = document.getElementById('username').value;
        var tel = document.getElementById('tel').value;
        var email = document.getElementById('email').value;
        var type = document.getElementById('type').value;
        var status = '';

        console.log(username);
        if(document.getElementById('checkboxInput').checked) {
            status = '已审核';
        } else {
            status = '待审核';
        }
        var addTr = document.createElement('tr');
        addTr.innerHTML = '<td><input type="checkbox" class="checkbox" value="" ></td>'
                            +'<td></td>'
                            +'<td>'+ username +'</td>'
                            +'<td>'+ tel +'</td>'
                            +'<td>'+ email +'</td>'
                            +'<td>'+ type +'</td>'
                            +'<td><div class="btn-blue">编辑</div><div class="btn-red delete">删除</div></td>'

        // var newTd1 = document.createElement('td')
        // newTd1.innerHTML = '<input type="checkbox" class="checkbox" value="" >';

        // var newTd2 = document.createElement('td');
        // newTd2.innerText = '';

        // var newTd3 = document.createElement('td');
        // newTd3.innerText = username;

        // var newTd4 = document.createElement('td');
        // newTd4.innerText = tel;
                       
        // var newTd5 = document.createElement('td');
        // newTd5.innerText = email;  

        // var newTd6 = document.createElement('td');
        // newTd6.innerText = type;            
                       
        // var newTd7 = document.createElement('td');
        // newTd7.innerHTML = '<div class="btn-blue">编辑</div><div class="btn-red delete">删除</div';

        // addTr.appendChild(newTd1);
        // addTr.appendChild(newTd2);
        // addTr.appendChild(newTd3);
        // addTr.appendChild(newTd4);
        // addTr.appendChild(newTd5);
        // addTr.appendChild(newTd6);
        // addTr.appendChild(newTd7);

        updataTable(2, addTr);
        hidePopover(popoverEle);
    });
    //添加取消
    //添加关闭
    
    //删除操作
    for (var i = 0; i < deleteBtns.length; i++) {
    	deleteBtns[i].onclick = function() {
            popoverEle = conPopover;
            deleteEle = this.parentNode.parentNode;
    		showPopover(popoverEle);
    	}
    }

    //点击删除确认
    confirm.onclick = function() {
        updataTable(1, deleteEle);
    	hidePopover(popoverEle);
    	deleteEle = null;
    }

    //点击删除取消
    cancel.onclick = function() {
    	hidePopover(popoverEle);
    	deleteEle = null;
    }

    //点击删除关闭
    close.onclick = function() {
    	hidePopover(popoverEle);
    	deleteEle = null;
    }

    //显示弹框
    function showPopover(ele) {
    	ele.style.display = 'block';
    	backUp.style.display = 'block';	
    }

    //隐藏弹框
    function hidePopover(ele) {
    	ele.style.display = 'none';
    	backUp.style.display = 'none';	
    }

    //更新表单
    function updataTable(type, ele) {
        var tbody = document.getElementsByTagName('tbody')[0];
        console.log(ele);
        if(type == 1) 
            tbody.removeChild(ele);
        if(type == 2) 
            tbody.appendChild(ele);

        var allTr = tbody.getElementsByTagName('tr');
        for(var i = 0; i < allTr.length; i++) {
            allTr[i].cells[1].innerText = i+1;
        }
    }
}