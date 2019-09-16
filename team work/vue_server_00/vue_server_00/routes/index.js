const express = require("express");
const router = express.Router();
const pool = require("../pool");

//http://127.0.0.1:5050/index/shoplist
router.get('/shoplist', (req, res) => {
    var sql = "SELECT M_Name,M_Address,M_Distance FROM diancan_Mer";
    pool.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败", data: result });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
})

router.get('/carousel', (req, res) => {
    var sql = "SELECT C_Href FROM diancan_carousel WHERE C_Place='indexTop'";
    pool.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败", data: result });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
})
router.get('/shop', (req, res) => {
    var sql = "SELECT S_Href,S_Title,S_price,S_Count FROM diancan_shop";
    pool.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败", data: result });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
})

module.exports = router;