const express = require("express");
const fs = require("fs");
const path = require("path");
const { send } = require("process");
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, "Front-branch-name")));

app.get("/",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-branch-name","index.html"));
});

app.get("/index.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-branch-name","index.html"));
});

app.get("/about.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-branch-name/about-page","about.html"));
});

app.get("/profile.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-branch-name/profile-page","profile.html"));
});

app.get("/signin.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-branch-name/profile-page","sign-in.html"));
});

app.get("/signup.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-branch-name/profile-page","sign-up.html"));
});


app.use(express.static(path.join(__filename,"Front-branch-name")))

app.get("/Front-semester-name/Mechanical/mecha-semester.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-semester-name/Mechanical","mecha-semester.html"))
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})