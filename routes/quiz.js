const router = require('express').Router();
const {v4:uuid}=require('uuid');
const db=require('../database');

const sessions={};

router.post('/start',(req,res)=>{
 const id=uuid();
 sessions[id]=true;
 res.json({sessionId:id});
});

router.get('/steps',(req,res)=>{
 res.json(db.steps);
});

router.post('/event/view',(req,res)=>{
 db.events.push({...req.body,type:'view'});
 res.json({ok:true});
});

router.post('/event/answer',(req,res)=>{
 db.events.push({...req.body,type:'answer'});
 res.json({ok:true});
});

module.exports=router;
