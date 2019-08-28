//name:"fcht"   字符串  session 的名称   默认为connect-id
// secret;"fcht"         签名  防止信息被篡改
// resave:false    布尔值     强制保存为session的值
// cookie:("name","value",{maxAge:new Date()+30000,httpOnly})
// saveUninitialized:true    初始化

var express = require("express")
var app = express()
var session= require("session")

// app.get("/",(req,res)=>{

// })
app.listen(3000)

