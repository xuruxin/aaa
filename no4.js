var fs = require("fs")
var http = require("http")
http.createServer((req, res) => {
    if (req.url == "/favicon.ico") {
        return
    }

    //1. 读文件   readFile(url, options, callback)  异步
    // fs.readFile("./456.txt", (err, data) => {
    //         res.end(data)
    //     })
    // fs.readFileSync()  同步



    //2. 写文件    writFile(url,option,data,callback)    异步
    // flag  a  append  r  read  w   write
    // fs.writeFile("./456.txt", "我",{"flag":"w"}, (err) => {
    //     if (err) {
    //         // throw   抛出
    //         throw err
    //     }
    //     res.end("success")
    // })



    //3. rename  文件改名
    // fs.rename("./789.txt", "555.txt", (err, data) => {
    //     if (err) {
    //         throw err
    //     }
    //     res.end("success")
    // })


    // 4.unlink   删除文件
    // fs.unlink("./555.txt", (err, data) => {
    //     if (err) {
    //         throw err
    //     }
    //     res.end("success")
    // })


    // 5.创建文件夹
    // fs.mkdir("./nordea/aa", (err) => {
    //     if (err) {
    //         throw err
    //     }
    //     res.end("success")
    // })
    // 6.删除文件夹
    // fs.rmdir("./../static/yuk", (err) => {
    //     if (err) throw err
    //     res.end("success")
    // })
    // 7.读取文件夹
    // fs.readdir("./nodata", (err, data) => {
    //     if (err) throw err
    //     for (let x = 0; x < data.length; x++) {
    //         fs.stat("./nodata/" + data[x], (err, stats) => {
    //             if (!stats.isFile()) {
    //                 console.log(data[x])
    //             }
    //         })
    //     }
    //     res.end("success")
    // })

    // 8.判断是不是文件夹
    // fs.exists("./nodata", (err) => {
    //     if (err) {
    //         throw err
    //     }
    //     res.end("success")
    // })


    //9. 判断是文件还是文件夹   stat
    // fs.stat("./nodata", (err, data) => {
    //     console.log(data.isFile())
    //     res.end("success")
    // })

}).listen(3000)