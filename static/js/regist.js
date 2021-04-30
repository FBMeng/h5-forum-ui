var userCode;
function load(userCode,userPwd){
	$.ajax({
		url: auth_address + "/oauth/token" + sys_user_token_param,
		type: "post",
		data: {"userCode":userCode,"userPwd":userPwd},
		success: function(data,status){
			var access_token = data.access_token;
			if (access_token!=null) {
        alert("登陆成功");
        alert(access_token);
        localStorage.setItem("access_token",access_token);
        localStorage.setItem("userCode",userCode);
        var searchUrl =encodeURI("./homepage.html?userCode=" + userCode);
        window.location.href=searchUrl;
      }else{
        alert(data.msg);
			}
		}
	});
}

$("#button").click(function(){
  	var userCode=$("#in1").val();
  	var userPwd=$("#in2").val();
    // alert('{"userCode":"' + userCode + '","userPwd":"' + userPwd + '"}');
  	$.ajax({
  		url: forum_address + "/forumuser",
  		type: "post",
      contentType: "application/json",
  		data: '{"userCode":"' + userCode + '","userPwd":"' + userPwd + '"}',
  		success: function(data,status){
        if (data.code==0) {
          // alert("注册成功");
          load(userCode,userPwd);
          var searchUrl =encodeURI("./homepage.html?userCode=" + userCode);
          window.location.href=searchUrl;
        }
        if (data.code==1) {
          alert(data.msg)
        }
		}
  	});
});

$("#load").click(function(){
    window.location.href="./load.html";
});

$("#homepage").click(function(){
  window.location.href="./homepage.html";
});