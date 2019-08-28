var http = require("http")
var fs = require("fs")
http.createServer((req, res) => {
    if (req.url == "/favicon.ico") {
        return
    }
    fs.readdir("../nodata", (err, data) => {
        if (err) throw err
        for (let x = 0; x < data.length; x++) {
            fs.stat("../nodata/" + data[x], (err, stats) => {
                if (!stats.isFile()) {
                    console.log(data[x])
                }
            })
        }
        res.end("success")
    })
}).listen(3000)