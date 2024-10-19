const express = require("express");

const app = express();






app.use("/profile",(req,res)=>{
    res.send("Hello from Profile")
})


app.use("/test",(req,res)=>{
    res.send("Hello from Test")
})

app.use("/",(req,res)=>{
    res.send("Hello from Home")
})

app.listen(3000,()=>{
    console.log("server is here")
})


