var http = require("http")
var fs = require("fs")
// var ejs = require("ejs")
// http.createServer((req,res)=>{
//     // var str = "我想买iphone<%= datas%> s"
//     var list = ["首页","新闻","关于"]
//     fs.readFile("./ejs01.ejs",(err,data)=>{
//         var template = data.toString()
//         var str = ejs.render(template,{list:list})
//         res.end(str)
//     })
// }).listen(3000,function(){
//         console.log("挂载")
//  })


var art = require("art-template")
http.createServer((req,res)=>{
    var list = ["小龙虾","帝王蟹","海星"]
    fs.readFile("./list.art",(err,data)=>{
        var template = data.toString()
        var str = art.render(template,{list:list})
        res.end(str)
    })
}).listen(3000,function(){
    console.log("挂载")
})
