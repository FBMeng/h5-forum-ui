// 截取参数值
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var loc = decodeURI(window.location.search);
     var r = loc.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}