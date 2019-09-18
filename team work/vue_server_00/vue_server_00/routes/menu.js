const express = require("express");
const router = express.Router();
const pool = require("../pool");

//http://127.0.0.1:5050/menu
router.get('/', (req, res) => {
    var sql = "SELECT FT_ID,FT_Name FROM diancan_foodtype";
    pool.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "查询失败", data: result });
        } else {
            res.send({ code: 1, msg: "查询成功", data: result });
        }
    })
})

router.get('/food', (req, res) => {
    var type = req.body.foodType
    var sql = "SELECT F_ID,F_FTID,F_Name,F_Url,F_Price FROM diancan_food";
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