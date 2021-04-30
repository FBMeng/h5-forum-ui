//加密方法
function encryptPadding(data) {
        var key  = CryptoJS.enc.Utf8.parse("tkcloudtkcloud11");
        var iv   = CryptoJS.enc.Utf8.parse("tkcloudtkcloud11");
        return CryptoJS.AES.encrypt(data, key, {iv:iv,mode:CryptoJS.mode.CBC}).toString();
}
//调用加密方法
// var password = document.getElementsByName('password');
var password = "FBMeng0918";
var encyptPass = encryptPadding(password);	//加密后的密文
window.alert(encyptPass);
