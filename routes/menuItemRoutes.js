const express= require('express')
const router=express.Router();
const MenuItem = require('./../models/menu');
// POST AND GET METHOD FOR MENU
router.post('/',async(req,res)=>{
  try {
    const data=req.body
    const newMenu= new MenuItem(data);
    const response=await newMenu.save();
    console.log('DATA saved');
    res.status(200).json(response);
  
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'}); 
    }
  })

  router.get('/',async (req,res)=>{
    try{
      const data=await  MenuItem.find();
      console.log('data fetched',data);
      res.status(200).json(data);
  
    }catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
  
    }
  })

  router.get('/:taste',async(req,res)=>{
    try{
      const tastee=req.params.taste;
      if(tastee==='sweet'|| tastee==='sour'|| tastee==='spicy'){
        const response=await  MenuItem.find({taste:tastee});
        console.log('response fetched');
        res.status(200).json(response);
      }
      else{
        res.status(404).json({error:'Invalid work type'});
      }
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
    }
  })
  module.exports=router;
  

