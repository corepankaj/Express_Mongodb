const express = require("express");
const router = express.Router();
const Student = require("../models/students.model");


//get all data
router.get("/", async (req, res)=>{

    try{
        const students = await Student.find();
        res.json(students);

    }catch(err){
      res.status(500).json({message: err.message});
    }

})
// get 1 data
router.get("/:id", async (req, res)=>{

    try{
        const students = await Student.findById(req.params.id);
        if(!students){
          return res.status(404).json({message:"data not found"})
        }
        res.json(students);

    }catch(err){
      res.status(500).json({message: err.message});
    }

})

// save data
router.post("/", async (req, res) => {
    try {
        const students = await Student.create(req.body);
        res.status(201).json(students);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//update data
router.put("/:id", async (req, res)=>{

    try{
        const updteStudents = await Student.findByIdAndUpdate(req.params.id , req.body,{new:true})
        if(!updteStudents){
          return res.status(404).json({message:"data not found"})
        }
        res.json(updteStudents);

    }catch(err){
      res.status(500).json({message: err.message});
    }

})

//delete data
// get 1 data
router.delete("/:id", async (req, res)=>{

    try{
        const deleteStudents = await Student.findByIdAndDelete(req.params.id);
        if(!deleteStudents){
          return res.status(404).json({message:"data not found"})
        }
        res.json({message:"Data deleted"});

    }catch(err){
      res.status(500).json({message: err.message});
    }

})

module.exports = router;
