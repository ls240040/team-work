const express = require("express");
const router = express.Router();
const pool = require("../pool");

//http://127.0.0.1:5050/user/login?U_LoginID=15312345678&U_PassWord=123456
router.post("/login", (req, res) => {
    //6.1:接收网页传递数据 用户名和密码
    var u = req.body.uname;
    var p = req.body.upwd;
    console.log(u, p)
        //6.2:创建sql
    var sql = "SELECT U_id FROM diancan_user";
    sql += " WHERE U_LoginID = ? AND U_PassWord =?";
    //6.3:执行sql语句并且获取返回结果
    pool.query(sql, [u, p], (err, result) => {
        //6.4:判断登录是否成功
        if (err) throw err;
        //6.5:将结果返回网页
        if (result.length == 0) {
            res.send({ code: -1, msg: "用户名或密码有误" })
        } else {
            //获取当前登录用户id
            //result=[{id:2}]
            var uid = result[0].U_id;
            //将用户id保存session对象中
            //uid当前登录：用户凭证
            console.log(uid)
                //console.log(req.session);
            res.send({ code: 1, msg: "登录成功", id: uid });
        }
    });
})
router.get("/getNum", (req, res) => {
    //6.1:接收网页传递数据 用户名和密码
    var u = req.query.uid;
    console.log(u)
        //6.2:创建sql
    var sql = "SELECT R_Address,R_ETime,R_People,R_Time,R_ID,R_ShopName FROM diancan_rownum WHERE U_ID=?";
    //6.3:执行sql语句并且获取返回结果
    pool.query(sql, [u], (err, result) => {
        //6.4:判断登录是否成功
        if (err) throw err;
        //6.5:将结果返回网页
        if (result.length == 0) {
            res.send({ code: -1, msg: "用户名或密码有误" })
        } else {
            console.log(result)
            res.send({ code: 1, msg: "登录成功", data: result });
        }
    });
})
module.exports = router;