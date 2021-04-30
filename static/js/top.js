var userCode;

// 截取参数值
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var loc = decodeURI(window.location.search);
     var r = loc.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

//获取用户id或者出现登陆注册字样
function get(){
	// userCode = GetQueryString("userCode");
	userCode = localStorage.getItem("userCode");
	if (userCode) {
		$("#top").append("<div id='userArea' class='p'></div>");
		$("#userArea").append("<div id='head'><a href='./person_center.html'><img id ='headImg'></a></div>");
		// $("#userArea").append("<div id='menu'></div>");
		// $("#menu").append("<li class='menuLi' display='online'>个人中心</li>");
		// $("#menu").append("<li class='menuLi' display='online'>个人中心</li>");
		// $("#menu").append("<li class='menuLi' display='online'>个人中心</li>");
		// $("#menu").append("<li class='menuLi' display='online'>个人中心</li>");

		// $("#menu").append("我的关注");
		// $("#menu").append("我的关注");
		// $("#menu").append("我的关注");
		// $("#top").append("<p id='userCode' class='p' name=userCode>" + userCode + "</p>");
		$("#top").append("<p id='posting' class='p' name=posting>发帖</p>");
	}else{
		$("#top").append("<p id='regist' class='p'>注册</p><p id='load' class='p'>登陆</p>");
	}
}
get();

function to_post(){
	window.location.href=decodeURI("./addPost.html?userCode="+userCode);
}
//跳转到发帖页
$(document).on("click","#posting",to_post)


//渲染头像
function setHead(){
	// userCode = GetQueryString("userCode");
	$("#headImg").attr("src","../img/baobao.jpg");
}
setHead();

// 用户名-鼠标悬浮-个人中心
function on1(){
	// $("#userArea").append("<li id='personalcenter' display='online'>个人中心</li>");
	// $("#userArea").append("<p id='personalcenter' class='p' display='online'>个人中心</p>");
}
// $(document).on('click','#head',to_person_center);

function to_person_center(){
	window.location.href=encodeURI("./person_center.html");
}
// $(document).on("click","#head",to_person_center);