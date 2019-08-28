var http=require("http")
var url = require("url")
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
    if(req.url == "/favicon.ico"){
        return
    }
    var obj1 = url.parse(req.url,true)
    var obj = url.parse(req.url,true).query
    console.log(obj)
    console.log(obj1)
    res.end("用户名为" + obj.username)
}).listen(3000)
