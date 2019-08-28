// 接口编写文件
var express = require("express")
var router = express.Router()
router.get("/login",(req,res)=>{
    // 数据库存放的内容
    var data = {
        username:"admin",
        password:"123"
    }
    // 数据库返回的内容
    var result = [{"username":"admin","password":123,"phone":12123}]
    if(req.body.username == data.username && req.body.password == data.password){
        res.send({"success":"ok","data":result})
    }else{
        res.send({"error":"用户名错误"})
    }
}).listen(3000)




// postman  接口测试工具 