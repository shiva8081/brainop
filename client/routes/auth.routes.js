import express from "express";
const router=express.Router();



router.get("/login",(req,res)=>{
    res.send("login routes")
}
)
router.get("/signup",(req,res)=>{
    res.send("signup routes")
}
)
router.get("/logout",(req,res)=>{
    res.send("logout routes")
}
)shiva


export default router;