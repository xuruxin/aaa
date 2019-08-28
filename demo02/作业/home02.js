// import { fdatasync, fstat } from "fs";

// var http = require("http")
// var url = require("url")
// http.createServer((req,res)=>{
//     // data比作数据库
//     var data =[
//         {
//             "username":"admin",
//             "password":123
//         },
//         {
//             "username":"tom",
//             "password":456
//         }
//     ]
//     if(req.url == "/favicon.ico"{
//         return
//     })
//     var obj = url.parse(req.url,true).query
//     if(obj.username == data[0].username && obj.passname == data[0].password){
//         console.log(obj.username)
//         console.log(obj.passname)
//     }
// res.end("susses")
// }).listen(3000)

var http = require("http")
var path = require("path")
var fs = require("fs")
var fd = require("formidable")
var sd = require("silly-datetime")
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
    if(req.url == "/send" && req.method == "POST"){
        var form = new fd.IncomingForm()
        
        form.parse(req,function(err,fields,files){
            form.uploadDir = "./upload"
            var oldpath = files.pic.path
            var extname = path.extname(files.pic.name)
            var tt = sd.format(new Date(),"YYYYMMDDHHmmss")
            var newpath = "./upload/"+ tt + extname
            fs.rename(oldpath,newpath,(err)=>{
                if(err){
                    throw err
                }
                console.log("success")
            })
            res.end("success")
        })
    } 
}).listen(3000)