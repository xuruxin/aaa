


var express = require("express")
var app = express()
// 链接mongodb客户端
var mongoClient = require("mongodb").MongoClient
app.get("/add", (req, res) => {
    mongoClient.connect("mongodb://127.0.0.1:27017", (err, db) => {
        // 创建数据库
        var dbName = db.db("adminuser")

        // 连接集合
        dbName.collection("test").insert({
            "username": "jack"
        }, function (err) {
            if (err) {
                throw err
            }
            res.send("插入成功")
            db.close()
        })
    })
})

app.get("/del", (req, res) => {
    mongoClient.connect("mongodb://127.0.0.1:27017", (err, db) => {
        // 创建数据库
        var dbName = db.db("adminuser")

        // 连接集合
        dbName.collection("test").deleteOne({
            "username": "jack"
        }, function (err) {
            if (err) {
                throw err
            }
            res.send("插入成功")
            db.close()
        })
    })
})
app.listen(3000)


//封装

var mongoClient = require("mongodb").mongoclient
var url = "mongodb://127.0.0.1:27017"

function connectDB(callback) {
    mongoClient.connect(url, (err, db) => {
        // 客户端链接  路径
        var dbName = db.db("adminuser")
        if (err) {
            callback(err, null)
        }
        callback(err, db, dbName)

    })
}
exports.add = function (collectionName, json, callback) {
    ConnectDB(functinon(err, mongo, dbName) {
        dbName.collection(collectionName).insert(json, function (err, res) {
            if (err) {
                callback(err, null)
            }
            callback(err, result)
            mongo.close()
        })
    })
}


// 封装

exports.find = function (collectionName, json, callback) {
    ConnectDB(function (err, mongo, dbName) {
        // 因为插入数据里面是以数组形式存在
        dbName.collection(collectionName).find(json).toArray(function (err, res) {
            if (err) {
                callback(err, null)
            }
            callback(err, result)
            mongo.close()
        })
    })
}