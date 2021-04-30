//注册字样的点击跳转事件
function regist(){
	window.location.href="./regist.html";
}
$(document).on('click','#regist',regist);

//登陆字样的点击跳转事件
function load(){
	window.location.href="./load.html";
}
$(document).on('click','#load',load);

// 截取参数值
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var loc = decodeURI(window.location.search);
     var r = loc.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}