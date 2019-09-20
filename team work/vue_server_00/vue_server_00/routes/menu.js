const express = require("express");
const router = express.Router();
const pool = require("../pool");
//urlmodule解析params
const url = require('url');

//http://127.0.0.1:5050/menu
//根据店铺ID获取它的菜品类别
router.get('/', (req, res) => {
    var params = url.parse(req.url, true).query;
    let M_ID = params.M_ID;//店铺ID

    var sql = "SELECT FT_ID,FT_Name FROM diancan_foodtype where FT_MID=?";
    pool.query(sql,[M_ID] ,(err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败", data: result });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
})

//根据店铺ID获取里面所有菜品
router.get('/food', (req, res) => {
    var params = url.parse(req.url, true).query;
    let M_ID = params.M_ID;//店铺ID

    var sql = "SELECT F_ID,F_FTID,F_Name,F_Url,F_Price FROM diancan_food where F_MID=?";
    pool.query(sql,[M_ID],(err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败", data: result });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
})




module.exports = router;