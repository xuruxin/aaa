var sd = require("silly-datetime")
var time = sd.format(new Date(),"YYYY-MM-DD-TT-mm-ss")
// var time = sd.formNow(new Date())
// var time = sd.locate()   
// 参数为时间的编码   中文  zh-cn     英文
console.log(time)