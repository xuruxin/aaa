// fs.readFile(url，options,callback)  异步
// fs.readFileSync()     同步
// throw 抛出

// 写文件   writeFile(url.opction,data,callback)
var fs = require("fs")
var http = require("http")
http.createServer((req,res)=>{
//     fs.writeFile("./a.txt","我是内容",(err)=>{
//         if(err){
//             throw err
//         }
//     res.end("success")
// })



// // rename 改名
//     if(req.url == "/favicon.ico"){
//         return
//     }
//     fs.rename("./1.txt","./a.txt",(err)=>{
// if(err){
//     throw err
// }
// res.end("success")
// })



// // unlink   删除文件
//     if(req.url == "/favicon.ico"){
//         return
//     }
//     fs.unlink("./2.txt",(err)=>{
// if(err){
//     throw err
// }
// res.end("success")
// })

// mkdir  创建文件夹
//    fs.mkdir("./aa",(err)=>{
//        if(err){
//            throw err
//        }
//        res.end("sussess")
//    })

// rmdir    删除文件夹
// fs.rmdir("./aa",(err)=>{
//     if(err){
//         throw err
//     }
//     res.end("sussess")
// })


// readdir   读取文件夹
fs.readdir("./132",(err,data)=>{
    if(err){
        throw err
    }
    res.end(data.toString())
})


// exists 判断是否存在文件夹
// fs.exists("./a.txt",(exists)=>{
//     if(exists){
//         console.log("存在")
//     }else{
//         fs.mkdir("./a.txt",(err)=>{
//          if(err){
//              throw err
//          }
//         })
//     }
//     res.end("ye")
// })


// 
// stat  判断是文件还是文件夹
// fs.stat("./a.txt",(err,stats)=>{
//    if(err){
//        throw err
//    }

// console.log(stats.isDirectory())
// console.log(stats.isFile())
// res.end("ye")
// })

    // }).listen(3000)