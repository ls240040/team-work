const express = require("express");
const router = express.Router();
const pool = require("../pool");
//urlmodule解析params
const url = require('url');

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

router.post('/comment', (req, res) => {
    var id = req.body.id
    var sql = "SELECT R_Comment,R_img1,R_img2,R_img3,R_Name,R_Title FROM recommend WHERE ID=?";
    pool.query(sql, [id], (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败" });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
})
router.post('/content', (req, res) => {
    var id = req.body.id
    var sql = "SELECT U_ID,CO_Content,U_Img,U_Name,beClick,CO_ID FROM diancan_comment WHERE ID=?";
    pool.query(sql, [id], (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败" });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
})
router.post('/name', (req, res) => {
    var U_ID = req.body.U_ID
    var sql = "SELECT U_Name FROM diancan_user WHERE U_ID=?";
    pool.query(sql, [U_ID], (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败" });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
})

router.post('/cNice', (req, res) => {
    var id = req.body.id
    var isClick = req.body.isClick
    var CO_ID = req.body.coid
    var sql = "UPDATE diancan_comment SET beClick=?,ID=? WHERE CO_ID=?";
    pool.query(sql, [isClick, id, CO_ID], (err, result) => {
        if (err) throw err;
        if (result.affectedRows == 0) {
            res.send({ code: -1, msg: "修改失败" });
        } else {
            res.send({ code: 1, msg: "修改成功", data: result });
        }
    })
})

router.post('/qname', (req, res) => {
    var uid = req.body.uid
    var sql = "SELECT U_Name FROM diancan_user WHERE U_ID=?";
    pool.query(sql, [uid], (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "修改失败" });
        } else {
            res.send({ code: 1, msg: "修改成功", data: result });
        }
    })
})




router.post('/addComment', (req, res) => {
    var idd = req.body.idd
    var comment = req.body.val
    var U_ID = req.body.uid
    var U_Img = req.body.U_Img
    var beClick = U_ID.toString()
    var sql1 = "SELECT U_Name FROM diancan_user WHERE U_ID=?";
    pool.query(sql1, [U_ID], (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败" });
        } else {
            var U_Name = result[0].U_Name
            console.log(U_Name)
            var sql = "INSERT INTO diancan_comment VALUES (null,?,?,?,?,?,?)";
            pool.query(sql, [U_ID, comment, U_Img, U_Name, idd, beClick], (err, result) => {
                if (err) throw err;
                if (result.affectedRows == 0) {
                    res.send({ code: -1, msg: "修改失败" });
                } else {
                    res.send({ code: 1, msg: "修改成功", data: result });
                }
            })
        }
    })

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
});

//根据用户ID获取用户所有信息
router.get('/getUser', (req, res) => {
    var params = url.parse(req.url, true).query;
    let U_ID = params.U_ID; //用户ID

    var sql = "SELECT * FROM diancan_user where U_ID=?";
    pool.query(sql, [U_ID], (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败", data: result });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
});

//根据用户ID获取用户信息
router.get('/getUser2', (req, res) => {
    var U_ID = req.query.uid;
    var sql = "SELECT U_LoginID,U_Name FROM diancan_User where U_ID=?";
    pool.query(sql, [U_ID], (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败", data: result });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
});

//检查账号
router.get('/checkLoginID', (req, res) => {
    var U_LoginID = req.query.U_LoginID;
    var sql = "SELECT U_LoginID,U_Name FROM diancan_User where U_LoginID=?";
    pool.query(sql, [U_LoginID], (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败", data: result });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
});
//拿到用户ID by LoginID
router.get('/getUserID', (req, res) => {
    var U_LoginID = req.query.U_LoginID;
    var sql = "SELECT U_ID FROM diancan_User where U_LoginID=?";
    pool.query(sql, [U_LoginID], (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败", data: result });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
});

//用户注册
router.get('/userRegister', (req, res) => {
    let params = url.parse(req.url, true).query;
    let U_LoginID = params.U_LoginID,
        U_Name = params.U_Name,
        U_PassWord = params.U_PassWord;

    var sql = "INSERT INTO diancan_user (U_ID,U_LoginID,U_Name,U_PassWord) VALUES (null,?,?,?)";
    pool.query(sql, [U_LoginID, U_Name, U_PassWord],
        (err, result) => {
            if (err) throw err;
            if (result.affectedRows == 0) {
                res.send({ code: -1, msg: "注册失败", data: result });
            } else {
                res.send({ code: 1, msg: "注册成功", data: result });
            }
        })
});


module.exports = router;