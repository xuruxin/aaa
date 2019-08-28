var http = require('http')
var fs = require('fs')
var url = require('url')
var server = http.createServer();
server.listen(3000,function(){console.log("挂载")})
server.on('request',function(req,res){
	var urls = url.parse(req.url,true)
	if(urls.pathname == "/green"){
		fs.readFile("./green.html",function(err,data){
			if(!err){
				res.end(data)
			}else{
				console.log(err)
			}
		})
	}else{
		fs.readFile('.'+req.url,function(err,data){
			if(!err){
				res.end(data)
			}else{
				console.log(err)
			}
		})
	}
})




// 
// 
// 
// var http = require('http')
// var fs = require('fs')
// var url = require('url')
// var server = http.createServer();
// server.listen(3000,function(){console.log("挂载")})
// server.on('request',function(req,res){
// 	var urls = url.parse(req.url,true)
// 	if(urls.pathname == "/"){
// 		fs.imgFile("./tu.png",function(err,data){
// 			if(!err){
// 				res.end(data)
// 			}else{
// 				console.log(err)
// 			}
// 		})
// 	}else{
// 		fs.readFile('.'+req.url,function(err,data){
// 			if(!err){
// 				res.end(data)
// 			}else{
// 				console.log(err)
// 			}
// 		})
// 	}
// })
