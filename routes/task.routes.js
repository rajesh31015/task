const expres = require("express");
// const taskController = require("../controller/task.controller");
const taskRouter = expres.Router();
const Task = require("../model/task.model");
taskRouter.get("/",async (req,res)=>{
    try{
        const dataRes = await Task.find();
        return res.status(200).json({
            data : dataRes
        });
        
    }catch(err){
        return res.status(501).json({
            error:err
        });
    }
});

taskRouter.post("/",async (req,res)=>{
    try{
        const {task_name,uid} = req.body;
        const datares = await Task.create({task_name,uid});
        return res.status(200).json({
            message:"Task addes!"
        });
        
    }catch(err){
        return res.status(501).json({
            error:err
        });
    }
});

taskRouter.delete("/",async (req,res)=>{
    try{
        const {task_id} = req.body;
        const datares = await Task.findByIdAndDelete(task_id);
        return res.status(200).json({
            message:"Task deleted!"
        });
        
    }catch(err){
        return res.status(501).json({
            error:err
        });
    }
});

taskRouter.put("/",async (req,res)=>{
    try{
        const {task_id,status,task_name} = req.body;
        const datares = await Task.findByIdAndUpdate(task_id,{
            task_name,
            status,
            updatedAt:new Date()
        });
        return res.status(200).json({
            message:"Task Updated!"
        });
        
    }catch(err){
        return res.status(501).json({
            error:err
        });
    }
});


module.exports = taskRouter;