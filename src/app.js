const express = require("express");

const app = express();

// app.use("/admin",(req,res,next)=>{
//     let token = "xyz";
//     console.log("Admin auth is checked")
//     let isAuthorized = token==="xyz";
//     if(isAuthorized){
//         next();
//     }
//     else{
//         res.sendStatus(401).send("You are not authorized as Admin.")
//     }
// })

const {adminAuth,userAuth} = require('./middlewares/auth')

app.use("/admin", adminAuth)

app.post("/user/login",(req,res)=>{
    console.log("login called.. auth is not needed so auth middleware is not used here");
    res.send("login called");
});


app.get("/user/data",userAuth ,(req,res)=>{
    console.log("got user data !!")
    res.send("got user data")
})

app.get("/admin/getAllData",(req,res)=>{
    console.log("data retrieved!!")
    res.send("All data retreived");
})

app.delete("/admin/deleteAllData",(req,res)=>{
    console.log("data dele ted!!")
    res.send("All data deleted")
})

app.post("/admin/updateData",(req,res)=>{
    res.send("Data updated successfully");
})

app.listen(3000,()=>{
    console.log("server started")
})


