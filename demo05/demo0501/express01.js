var express = require("express")
// var bodyParser = require("body-parser")
var app = express()
var path = require("path")
// app.use(bodyParser.urlencoded({extended:false}))
// app.use("/about/:id",(req,res)=>{
//     res.send(req.params.id)
// })
// app.use(bodyParser.json())
// // app.get("/second",(req,res)=>{
// //     res.send("second")
// // })
// app.get("/",(req,res)=>{
//     res.send("首页")
// })
// app.get("/list",(req,res)=>{vft
//     console.log(req.query)
//     res.send("username为" + req.query.username)
// })
// app.post("/dopost",(req,res)=>{
//     console.log(req.body)
//     res.send("dopost"+ req.body.username)
// })
// set  设置     engine  引擎
// 如何设置模板引擎
app.set("views",path.join(__dirname,"/view"))
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    var list = ["首页","新闻","关于"]
    res.render("index.ejs",{
        list:list
    })
})

// app.get("/",(req,res)=>{
//     res.send("index")
// })






app.listen(3000)
