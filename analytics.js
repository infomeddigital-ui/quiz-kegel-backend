const router=require('express').Router();
const db=require('../database');

router.get('/funnel',(req,res)=>{
 const result=db.steps.map(step=>({
  stepId:step.id,
  title:step.title,
  users:new Set(
   db.events
   .filter(e=>e.stepId===step.id)
   .map(e=>e.sessionId)
  ).size
 }));

 res.json({steps:result});
});

module.exports=router;