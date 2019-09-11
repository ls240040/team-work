const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get('/recommend',(req,res)=>{
    var sql="SELECT C_Place,C_Href FROM diancan_carousel";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({code:-1,msg:"查询失败",data:result});
        }else{
            res.send({code:1,msg:"查询成功",data:result});
        }
        
    })
})

module.exports=router;