var express = require("express")
var app = express()
app.get("/",(req,res)=>{
    var data = res.cookie("name","tom",{maxAge:90000})
    res.send(data)
})

app.get("/login",(req,res)=>{
    var data = req.cookies.name
})
app.listen(3000)