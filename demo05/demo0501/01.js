var express = require("express")
var path = require("path")
var app = express()
// 使用引擎
app.engine("art",require("express-art-template"))
// 设置引擎
// app.set("view",path.join(__dirname,"view"))
// view可以不加s   
app.set("view engine","art")
// 强制的  views
app.get("/",(req,res,next)=>{
    var list = ["煎饼","手抓饼","凉皮"]
    res.render("list02",{list:list})
})
app.listen(3000)