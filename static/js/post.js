var userCode = GetQueryString("userCode");

//判断用户是否登陆
function isLoad(){
	if(userCode){
		$("#head").append("<p class='sign'>"+ userCode +"</p>");
	}else{
		$("#head").append("<p id='regist' class='sign'>注册</p><p id='load' class='sign'>登陆</p>");
	}
}
isLoad();

//获取帖子类别列表
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
				$("#categoryKeySelect").append("<option value=" + categoryKey + ">" + categoryDesc +"</option>");

			}
		}
	});
}
httpRequest();

//提交帖子
$("#submit").click(function(){
	var categoryKey = document.getElementById("categoryKeySelect").value;
	var title = $("#title").val();
	var text = $("#text").val();
	var data = '{"userCode":"'+userCode
			+'","categoryKey":"'+categoryKey
			+'","title":"'+title
			+'","text":"'+text
			+'"}';

	$.ajax({
		headers: {
			Authorization: "Bearer " +access_token
		},
  		url: forum_url + "/post",
		type: "post",
		contentType: "application/json",
  		data: data,
  		success: function(data,status){
        	if (data.code==0) {
         		window.location.reload();
				alert("发帖成功");
        	};
        	if (data.code==1) {
          		alert(data.msg)
        	};
        }
	})
});


//返回主页
$("#toHomepage").click(function(){
	var href = encodeURI("./homepage.html?userCode=" + userCode);
	window.location.href = href;
});