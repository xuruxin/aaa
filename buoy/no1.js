var http = require("http")
var fs = require("fs")
var url = require("url")
http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html;charset=utf8" })
    if (req.url == "/favicon.ico") {
        return
    }
    var obj = url.parse(req.url, true).query
    var data = [{
        "username": "admin",
        "password": 123
    }]
    // console.log(obj)
    if (obj.username == data[0].username && obj.password == data[0].password) {
        res.end("success")
    } else {
        res.end("fail")
    }
}).listen(3000)