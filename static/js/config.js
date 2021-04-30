//var ip_and_port = "http://www.meng.com:8080/postbar";
//var ip_and_port = "http://127.0.0.1:8081";
var ip_and_port = "http://127.0.0.1:9999";
var forum_address = ip_and_port + "/forum";
var auth_address = ip_and_port + "/auth";
var client_id = "api";
var client_secret = "api";
var forum_user_token_param = "?scope=server&grant_type=password&client_id=" + client_id + "&client_secret=" + client_secret;
var sys_user_token_param = "?scope=server&grant_type=client_credentials&client_id=" + client_id + "&client_secret=" + client_secret;
var code_url = ip_and_port + "/code?randomStr=";
var forum_url = ip_and_port + "/forum";

