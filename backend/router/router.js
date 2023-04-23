const express = require('express');
const student = require('../modals/StudentSchema');


const router = express.Router();


// register Student
router.post("/register", async (req,res)=>{
    console.log(req.body)
    const {name, email, mobile,add, desc } = req.body;

    if(!name || !email || !mobile || !add || !desc ){
        res.status(422).send("Please Fill the data");
    }

    try{
        const preuser = await student.findOne({email:email});
        console.log(preuser);

        if(preuser){
            res.status(422).json("this is user is already present");
        }else{
            const addStudent = new student({
                name,email,mobile,add,desc
            });

            await addStudent.save();
            res.status(201).json(addStudent);
            console.log(addStudent);
        }

    }catch(error){
        res.status(422).json(error);
    }
})


//Get Studet Data
router.get("/getdata", async(req,res)=>{
    try {
        const studentData = await student.find();
        res.status(201).json(studentData);
        console.log(student);

    } catch (error) {
        res.status(422).json();
    }
})

// get individual user

router.get("/getuser/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await student.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})

// update user data

router.patch("/updateuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updatedStudent = await student.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updatedStudent);
        res.status(201).json(updatedStudent);

    } catch (error) {
        res.status(422).json(error);
    }
})


// delete user
router.delete("/deleteuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const deletStudent = await student.findByIdAndDelete({_id:id})
        console.log(deletStudent);
        res.status(201).json(deletStudent);

    } catch (error) {
        res.status(422).json(error);
    }
})

module.exports = router