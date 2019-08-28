var http = require("http")
var fs = require("fs")  
// file system  文件系统    
http.createServer(function(req,res){
	// 创建服务器
	res.writeHead(200,{"Content-type":"text/html;charset=UTF8"})
	
	if(req.url == "/"){
		res.end("首页")
		// 结束响应    里面字符串
		// argument   string   buffer  缓存区
	}else if(req.uel == "/red"){
		//   readfile 读文件
		//    /red 路由
		fs.readFile("./red.html",function(err,data){
			res.end(data)
		})
	}else if(req.url == "/green"){
		fs.readFile("./green.html",function(err,data){
			res.end(data)
		})
	}else if(req.url == "/no01.css"){
		res.writeHead(200,{"Content-type":"text/css"})
		fs.readFile("./no01.css",function(err,data){
			res.end(data)
		})
	}else if(req.url == "/yang.png"){
		res.writeHead(200,{"Content-type":"image/png"})
		fs.readFile("./yang.png",function(err,data){
			res.end(data)
		})
	}
	}).listen(3000,function(){
		// 监听的端口    不能80
		console.log("挂起")
	})
// localhost   http://127.0.0.1:3000   本地
			// 协议   域名  	 端口
// req  请求     res  响应
// 
