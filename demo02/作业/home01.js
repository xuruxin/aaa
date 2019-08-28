5t// 取出目录里所有文件夹
var fs = require("fs")
var http = require("http")
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
    if(req.url == "/favicon.ico"){
        return
    }
    fs.readdir("../../demo02",(err,data)=>{
        if(err){
            throw err
        }
    //    for(let i = 0;i < data.length; i ++){
    //        fs.stat("../../demo02/" + data[i],(err,stats)=>{
    //            if(stats.isDirectory()){
    //                console.log(data[i])
                   
    //            }
    //        })
    //    } 
    // 提升版   递归   
    //  迭代处理函数    函数自己回调自己
       res.end("susses")
    })

}).listen(3000)