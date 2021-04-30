// var href = "http://localhost:8081";
var userId;
var userName;
var data = {"userId":userId}

//返回主页
$("#toHomepage").click(function(){
	var href = encodeURI("./homepage.html?userId=" + userId + "&userName=" + userName);
	window.location.href = href;
});

// 截取参数值
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var loc = decodeURI(window.location.search);
     var r = loc.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
userId = GetQueryString("userId");

//获得帖子列表
function httpRequest(){
	$.get(
		ip_and_port + "/post/getPosts",
		data,
		function(data){
			for (var i = data.length - 1; i >= 0; i--) {
				var postId=data[i].id;
				var title = data[i].title;
				$("#ul").append("<li class = 'li' name = " + postId + ">" + data[i].title +"</li><br>");
			}
		}
	);
}
httpRequest();

//点击帖子名字获得帖子详情
function get_post_info(){
	var postId = $(this).attr("name");
	$.get(
		ip_and_port + "/post/getPostInfo",
		{"postId":postId},
		function(data){
			$("#right").html("<h2 id='title'>" + data.title + "</h2>"
			+ "<p>创建于"+ data.createdDate +"</p><br>"
			+ "<p>" + data.textString + "</p>");
		}
	);
}
$(document).on("click",".li",get_post_info);

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
