var zhuCe2 = document.getElementsByClassName("zhuCe2")[0];
var username2 = document.getElementsByClassName("username2")[0];
var pass2 = document.getElementsByClassName("pass2")[0];
var mi = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
zhuCe2.onclick = function() {
    if (username.value == "") {
        alert("用户名不能为空")
    } else if (!pass.value.match(mi)) {
        alert("密码格式不对")
    } else if (pass.value == "") {
        alert("密码不能为空")
    } else {
        alert('登录成功')
        sessionStorage.setItem('user', username2.value);
        sessionStorage.setItem('password', pass2.value);
    }

}