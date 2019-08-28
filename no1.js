var fs = require("fs")
var http = require("http")

http.createServer(function(req, res) {
    res.writeHead(200, { "Content-type": "text/html;charset=utf8" })
    if (req.url == "/") {
        res.end("首页")
    } else if (req.url == "/red") {
        fs.readFile("../static/red.html", function(err, data) {
            res.end(data)
        })
    } else if (req.url == "/red.css") {
        res.writeHead(200, { "Content-type": "text/css" })
        fs.readFile("../static/red.css", function(err, data) {
            res.end(data)
        })
    }
}).listen(3000, function() {
    console.log("success")
})