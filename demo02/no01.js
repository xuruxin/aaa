var url = require("url")
var obj = url.resolve("http://127.0.0.1:3000","/src")
console.log(obj)
// var obj = url.format({
//     protocol: null,
//     slashes: null,
//     auth: null,
//     host: null,
//     port: null,
//     hostname: "http://127.0.0.1:3000",
//     hash: null,
//     search: '?username=125',
//     query: "username= 125",
//     pathname: '/send',
//     path: '/send?username=125',
//     href: '/send?username=125'
// })
// console.log(obj) 