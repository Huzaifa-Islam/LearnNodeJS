const express = require("express");

const app = express();

//Error Handling scenario  -- write  Error handling always at the end
app.get("/getUserInfo",(req,res)=>{
    //Logic of DB call and get user data

    throw new Error("afkjnkjfna");
    res.send("user data sent");
})

app.use("/",(err,req,res,next)=>{
    if(err){
        res.status(500).send("something went wrong")
    }
})

// Error Handling scenario 2 -- best apprach use try catch
app.get("/getUserInfo2",(req,res)=>{
    try{
    //Logic of DB call and get user data
    throw new Error("Internal server error");
    res.send("user data sent");   
    }
    catch(err){
        res.status(500).send(err.message);
    }
})

app.listen(3000,()=>{
    console.log("server started")
})


