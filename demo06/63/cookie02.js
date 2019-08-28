// cookie- parser
var express = require("express")
// 可以存储二级域名
// www.ddd.com          一级
// www.ddd.con.cn       二级

var cookie = require("cookie-parser")
var app = express()
app.use(cookie())
app.get("/set", (req, res) => {
    res.cookie("username", "tom", {
        maxAge: 90000
    })
    res.send("cookie设置成功")
})
app.get("/get", (req, res) => {
    var data = res.cookies.username
    res.send({
        "data": data
    })
})

app.listen(3000)
