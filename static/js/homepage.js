var userCode;


//加载帖子类型列表
function httpRequest(){
	access_token = localStorage.getItem("access_token");
	$.ajax({
		headers: {
			Authorization: "Bearer " +access_token
		},
		url: forum_url+"/postcategory",
		type: "get",
		success: function(data,status){
			var categorys = data.data;
			for (var i = categorys.length - 1; i >= 0; i--) {
				var categoryKey=categorys[i].categoryKey;
				var categoryDesc=categorys[i].categoryDesc;
				$("#ul").append("<li class = 'li' name='" + categoryKey + "'>" + categoryDesc +"</li><br>");
			}
		}
	});
}
httpRequest();


//点击类型，显示该类型post列表
$(document).on('click','.li',get_category_posts);
function get_category_posts(){
	var categoryKey = $(this).attr("name");
	$.ajax({
		headers: {
			Authorization: "Bearer " + localStorage.getItem("access_token")
		},
		url: forum_url+"/post/" + categoryKey,
		type: "get",
		success: function(data,status){
			$("#right").html(add_li(data.data));
		}
	});
}
function add_li(data){
	var lis = "";
	for (var i = data.length - 1; i >= 0; i--) {
		var postId=data[i].id;
		var title = data[i].title;
		var userCode = data[i].userCode;
		var text = data[i].text;

		var per = "<div class='right_list'><div class='right_list_top'><p id='"
			+ postId
			+ "'><b>"
			+ title
			+ "</b></p></div><div class='right_list_bottom'><img class='left_float' src='"
			+ "../img/baobao.jpg'"
			+ "/><span class='left_float'>"
			+ userCode
			+ "</span>"
			+ "<span class='left_float' id='context'>"
			+ text
			+ "</span></div></div>"

		lis = lis + per;
	}
	return lis;
}

function get_post_info(){
	var postId = $(this).attr("name");
	$.ajax({
		headers: {
			Authorization: "Bearer " + localStorage.getItem("access_token")
		},
		url: forum_url+"/post/getPostDetails/" + postId,
		type: "get",
		success: function(data,status){
			var result = data.data;
			$("#right_right").html("<h2 id='title' name=" + postId + ">" + result.title + "</h2>" 
				+ "<h3>作者：  " + result.userCode + "</h3>" 
				+ "<br>" + "<p>" + result.text + "</p><br>"
				+ "<h3>评论</h3>"
				+ getComment(postId)
				+ "<input id='comm' type='text'></input>"
				+ "<p id='comment_submit'>提交评论</p>");
		}
	});
}
//获得帖子详情
$(document).on("click",".post_li",get_post_info);

function submit_comment(){
	post_id = $("#title").attr("name");
	comment = $("#comm").val();
	$.ajax({
		headers: {
			Authorization: "Bearer " + localStorage.getItem("access_token")
		},
		url: forum_url+"/postcomment",
		type: "get",
		data: {"postId":"' + post_id +'","userCode":"' + userCode + '","comment":"' + comment + '"},
		success: function(data,status){
			alert(status);
		}
	});
}
function user_is_Exist(){
	if(userCode){
		submit_comment();
	}else{
		alert("请先登陆");
	}
}
//提交评论
$(document).on("click","#comment_submit",user_is_Exist);

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




//根据userId获得用户详情
function get_user_info(user_id,callback){
	$.ajaxSettings.async = false;
	var author;
	$.get(
		ip_and_port + "/user/getUsers",
		{"userId": user_id},
		function(data){
			// alert(data);
			// alert(data[0].userName);
			author = data[0].userName;
			// alert(author);
			// author = callback(data[0].userName);
		}
	);
	$.ajaxSettings.async = true;
	return author; 
}

//获得帖子的评论
function getComment(post_id){
	$.ajaxSettings.async = false;
	var comments = "";
	$.ajax({
		headers: {
			Authorization: "Bearer " + localStorage.getItem("access_token")
		},
		url: forum_url+"/postcomment/"+post_id,
		type: "get",
		success: function(data,status){
			for (var i = 0; i <= data.length - 1; i++) {
				comments = comments + "<p>" + i + "&nbsp&nbsp" + data[i].commentTextString + "</p>"
			}
		}
	});
	$.ajaxSettings.async = true;
	return comments;
}