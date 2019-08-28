var http = require("http")
var url = require("url")
var router = require("../buoy/router")
http.createServer((req, res) => {
    // console.log(router)
    if (req.url == "/") {
        router.souYe(req, res)
    } else if (req.url == "/Ye1") {
        router.souYe1(req, res)
    } else if (req.url == "/Ye2") {
        router.souYe2(req, res)
    } else {
        res.end("404")
    }
}).listen(3000)