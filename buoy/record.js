var dengLu = document.getElementsByClassName("dengLu")[0];
var zhuCe = document.getElementsByClassName("zhuCe")[0];
var username = document.getElementsByClassName("username")[0];
var pass = document.getElementsByClassName("pass")[0];
var mi = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
dengLu.onclick = function() {
    if (username.value == "") {
        alert("用户名不能为空")
    } else if (!pass.value.match(mi)) {
        alert("密码格式不对")
    } else if (pass.value == "") {
        alert("密码不能为空")
    } else {
        alert('登录成功')
    }

}