const express = require("express");
const router = express.Router();
const pool = require("../pool");
//urlmodule解析params
const url = require('url');

//http://127.0.0.1:5050/menu
//根据店铺ID获取它的菜品类别
router.get('/', (req, res) => {
    var params = url.parse(req.url, true).query;
    let M_ID = params.M_ID; //店铺ID
    var sql = "SELECT FT_ID,FT_Name FROM diancan_foodtype where FT_MID=?";
    pool.query(sql, [M_ID], (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败", data: result });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
});
router.get('/rowMsg', (req, res) => {
    var uid = req.query.U_ID
    console.log(uid)
    var sql = "SELECT R_ID,R_Time,R_People FROM diancan_rownum WHERE U_ID=?";
    pool.query(sql, uid, (err, result) => {
        if (err) throw err;
        console.log(result)
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败", data: result });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
});
//根据店铺ID获取里面所有菜品
router.get('/food', (req, res) => {
    var params = url.parse(req.url, true).query;
    let M_ID = params.M_ID; //店铺ID

    var sql = "SELECT F_ID,F_FTID,F_Name,F_Url,F_Price FROM diancan_food where F_MID=?";
    pool.query(sql, [M_ID], (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败", data: result });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
});

//根据店铺ID获取它的店铺所有信息
router.get('/getMerName', (req, res) => {
    var params = url.parse(req.url, true).query;
    let M_ID = params.M_ID; //店铺ID

    var sql = "SELECT * FROM diancan_mer where M_ID=?";
    pool.query(sql, [M_ID], (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败", data: result });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
});

//根据食物ID获取它的食物所有信息
router.get('/getFoodName', (req, res) => {
    var params = url.parse(req.url, true).query;
    let F_ID = params.F_ID; //食物ID

    var sql = "SELECT * FROM diancan_food where F_ID=?";
    pool.query(sql, [F_ID], (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败", data: result });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
});

//添加到订单
router.get('/addOrder', (req, res) => {
    var params = url.parse(req.url, true).query;
    let O_MID = params.O_MID,
        O_DID = params.O_DID,
        O_UID = params.O_UID,
        O_Time = params.O_Time,
        O_Statue = params.O_Statue,
        O_Phone = params.O_Phone,
        O_FID = params.O_FID,
        O_Totle = params.O_Totle,
        O_Dis = params.O_Dis,
        O_PayStatue = params.O_PayStatue,
        O_Note = params.O_Note;

    var sql = "INSERT INTO diancan_order VALUES (null,?,?,?,?,?,?,?,?,?,?,?)";
    pool.query(sql, [O_MID, O_UID, O_DID, O_Time, O_Statue, O_Phone, O_FID, O_Totle, O_Dis, O_PayStatue, O_Note],
        (err, result) => {
            if (err) throw err;
            if (result.affectedRows == 0) {
                res.send({ code: -1, msg: "插入失败", data: result });
            } else {
                res.send({ code: 1, msg: "插入成功", data: result });
            }
        })
});


//根据用户ID获取这个用户所有外卖订单
router.get('/getUserOrder', (req, res) => {
    var params = url.parse(req.url, true).query;
    let U_ID = params.U_ID; //用户ID
    var sql = "SELECT * FROM diancan_order where O_UID=?";
    pool.query(sql, [U_ID], (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败", data: result });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
});

//根据用户ID获取这个用户所有外卖订单
router.get('/getOrder', (req, res) => {
    var params = url.parse(req.url, true).query;
    let O_ID = params.O_ID;//用户ID

    var sql = "SELECT * FROM diancan_order where O_ID=?";
    pool.query(sql,[O_ID] ,(err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败", data: result });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
});

//删除订单
router.get('/deleteOrder', (req, res) => {
    var params = url.parse(req.url, true).query;
    let O_ID = params.O_ID;//用户ID

    var sql = "DELETE FROM diancan_order WHERE O_ID = ?";
    pool.query(sql,[O_ID] ,(err, result) => {
        if (err) throw err;
        if (result.affectedRows == 0) {
            res.send({ code: -1, msg: "删除失败", data: result });
        } else {
            res.send({ code: 1, msg: "删除成功", data: result });
        }
    });
});


module.exports = router;