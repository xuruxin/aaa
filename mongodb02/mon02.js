var express = reequire("express")
var app = express()
// 使用路由中间件
var router = express Router()
// 处理post的  json请求
var bodyParser = require("body-parser")
// 处理post字符换请求
app.user(bodyParser.urlencoded({
    extends: false
}))
// 使用路由 
app.user(router)
// 登录接口
router.get("/login", (req, res) => {
    // 1.接受前端传输过来的值
    // 2.根据前端的值和数据库里面的数据进行对比
    //      2.1判断是否存在用户
    //      2.2再与数据库里面的数据进行对比
    // 3.前端进行登录成功的跳转

    //   接受前端传输过来的值 
    var userData = {
        username: req.query.username,
        password: req.query.password
    }

    // 进行数据库的检索
    db.find("userData", userdata, (err, result) => {
        if (result.length == 0) {
            res.send({"error":"无此用户"})
        }else if(result.length!=0 && result[0].password ==== req.query.password){
            res.send({"susses":"登录成功"})
        }
    })

router.get("/login",(req,res)=>{
    
})

})



// 注册接口
router.post("/register") {
    var qu
    username: req.body.username,
        passsword "

}

// 先把数据库里面所有数据取出