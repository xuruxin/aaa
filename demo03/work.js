var path = require("path")
// var obj = path.resolve("../demo02/form.html") 
// 后缀
// var obj = path.basename("../demo02/form.html")
// 文件名       
var obj = path.format({
    root:""
})
console.log(obj)