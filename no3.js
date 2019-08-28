var url = require("url")
    // console.log(url)
    // var obj = url.resolve("http://127.0.0.1:3000/a/c", "/b")
    // console.log(obj)
    // var obj = url.format("http://127.0.0.1:3000/a/c")
var obj = url.format({
    protocol: null,
    slashes: null,
    auth: null,
    host: null,
    port: null,
    hostname: "http://127.0.0.1",
    hash: null,
    search: '?username=54',
    query: "username=54",
    pathname: '/send',
    path: '/send?username=54',
    href: '/send?username=54'
})
console.log(obj)