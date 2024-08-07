var express=require("express");
const { default: mongoose } = require("mongoose");
var server = express();
var port =5000;
var mangoose =require("mongoose");
var db=require();
server.use(express.json())

mongoose.connect("mongodb+srv://yashinid:yalurohi@yashini.9dm0dpx.mongodb.net/")
.then(()=>console.log("DB is connected.."))
.catch(()=>console.log("DB is not connected.."))
//server.get("/",(req,res)=>{
  //  res.status(200).send("hello world")
//})

//create
server.post("/post",async(req,res)=>{
    var result =await db.create({
        user_name:req.body.user_name,
        user_id:req.body.user_id,
        mail_id:req.body.mail_id,
        qualification:req.body.qualification,
        gender:req.body.gender
    })
    res.send({mse:"data fetched..",data:result})
    
})

//get
server.get("/getalluser",async(req,res)=>{
  var result= await db.find()

  res.status(200).send(result)
})

//read data -id
server.get("/getalluser/:_id",async(req,res)=>{
  var result= await db.findById({_id:req.params._id})

  res.status(200).send(result)
})

//read data -any data
server.get("/get/:user_id",async(req,res)=>{
  var result= await db.findById({user_id:req.params.user_id})

  res.status(200).send(result)
})

//delete
server.delete("/delete/:_id",async(req,res)=>{
  var result= await db.findByIdAndDelete({_id:req.params._id})

  res.status(200).send("data deleted")
})

//update

server.put("/delete/:_id",async(req,res)=>{
  var result= await db.findByIdAndUpdate({_id:req.params._id},
    {
        user_name:req.body.user_name,
        user_id:req.body.user_id,
        mail_id:req.body.mail_id,
        qualification:req.body.qualification,
        gender:req.body.gender
    })


  res.status(200).send({mse:"updated",data:result})
})




server.listen(port,()=>{
     console.log("server is running...");
})
