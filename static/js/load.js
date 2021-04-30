// var href = "http://localhost:8081";
var userId;
var randomStr_;
var access_token;
$("#button").click(function(){
  	var userCode=$("#in1").val();
  	var userPwd=$("#in2").val();
    var code=$("#code").val();
  	$.ajax({
  		url: auth_address + "/oauth/token" + sys_user_token_param + "&code="+code + "&randomStr=" + randomStr_,
  		type: "post",
  		data: {"userCode":userCode,"userPwd":userPwd},
  		success: function(data,status){
        access_token = data.access_token;
          if (access_token!=null) {
            // alert("登陆成功");
            localStorage.setItem("access_token",access_token);
            localStorage.setItem("userCode",userCode);
            var searchUrl =encodeURI("./homepage.html?userCode=" + userCode);
            window.location.href=searchUrl;
          }else{
            alert(data.msg);
          }
		}
  	});
});

$("#regist").click(function(){
    window.location.href="./regist.html";
});

$("#homepage").click(function(){
  window.location.href="./homepage.html?access_token=" + access_token;
});

function getRandomStr(){
    var randomStr = parseInt(Math.random() * 9000 + 1000);
    randomStr_ = randomStr;
    return randomStr;
}

$("#imageCode").click(function(){
  document.getElementById('imageCode').src = code_url+getRandomStr();
});
