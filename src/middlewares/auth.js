
const adminAuth = (req,res,next)=>{
    let token = "xyz";
    console.log("Admin auth is checked")
    let isAuthorized = token==="xyz";
    if(isAuthorized){
        next();
    }
    else{
        res.sendStatus(401).send("You are not authorized as Admin.")
    }
}

const userAuth = (req,res,next)=>{
    let token = "xyz";
    console.log("user auth is checked")
    let isAuthorized = token==="xyz";
    if(isAuthorized){
        next();
    }
    else{
        res.sendStatus(401).send("You are not authorized as Admin.")
    }
}



module.exports = {adminAuth,userAuth}