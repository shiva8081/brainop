import express from "express";
import dotenv from "dotenv";
import authroutes from "./routes/auth.routes.js"
const app=express();
dotenv.config();
const PORT = process.env.PORT || 4000;

app.get("/",(req,res)=>{
    res.send("helloo!!!!")
})

app.use("/api/auth",authroutes)



app.listen(PORT,()=>console.log(`server running on port ${PORT}`))











