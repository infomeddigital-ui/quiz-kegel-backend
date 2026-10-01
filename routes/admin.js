const router=require('express').Router();
const db=require('../database');

router.get('/steps',(req,res)=>{
 res.json(db.steps);
});

module.exports=router;
