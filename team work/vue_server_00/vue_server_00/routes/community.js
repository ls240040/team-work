const express=require("express");
const router=express.Router();
const pool=require("../pool");

//http://127.0.0.1:5050/community/carousel
router.get('/carousel',(req,res)=>{
    var sql="SELECT C_Href FROM diancan_carousel WHERE C_Place='community'";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({code:-1,msg:"查询失败",data:result});
        }else{
            res.send({code:1,msg:"查询成功",data:result});
        }
    })
})

//http://127.0.0.1:5050/community/recommend
router.get('/recommend',(req,res)=>{
    var sql="SELECT R_Avatar,R_Name,R_Title,R_Vip,R_Comment,R_img1,R_img2,R_img3,R_Time,R_Come,R_Comnum,R_Collect FROM recommend";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({code:-1,msg:"查询失败"});
        }else{
            res.send({code:1,msg:"查询成功",data:result});
        }
    })
})

//http://127.0.0.1:5050/community/dweek
router.get('/dweek',(req,res)=>{
    var sql="SELECT R_Back,R_Avatar,R_Name,R_Title,R_Label FROM doyen WHERE R_Id=1";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({code:-1,msg:"查询失败"});
        }else{
            res.send({code:1,msg:"查询成功",data:result});
        }
    })
})

//http://127.0.0.1:5050/community/dmonth
router.get('/dmonth',(req,res)=>{
    var sql="SELECT R_Back,R_Avatar,R_Name,R_Title,R_Label FROM doyen WHERE R_Id=2";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({code:-1,msg:"查询失败"});
        }else{
            res.send({code:1,msg:"查询成功",data:result});
        }
    })
})

//http://127.0.0.1:5050/community/dyear
router.get('/dyear',(req,res)=>{
    var sql="SELECT R_Back,R_Avatar,R_Name,R_Title,R_Label FROM doyen WHERE R_Id=3";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({code:-1,msg:"查询失败"});
        }else{
            res.send({code:1,msg:"查询成功",data:result});
        }
    })
})

module.exports=router;