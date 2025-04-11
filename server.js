const express = require("express");
const fs = require("fs");
const path = require("path");
const { send } = require("process");
const app = express();
const port = 8000;



// css style 
app.use(express.static(path.join(__dirname, "Front-branch-name")));
app.use(express.static(path.join(__dirname,"Front-semester-name/Mechanical/1st-sem")))



// Front semester

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


// mechanical semester 
app.get("/Front-semester-name/Mechanical/mecha-semester.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-semester-name/Mechanical","mecha-semester.html"));
});
app.get("/Front-semester-name/Mechanical/1st-sem/1st-sem-year.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-semester-name/Mechanical/1st-sem","1st-sem-year.html"));
});
app.get("/Front-semester-name/Mechanical/2nd-sem/2nd-sem-year.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-semester-name/Mechanical/2nd-sem","2nd-sem-year.html"));
});
app.get("/Front-semester-name/Mechanical/3rd-sem/3rd-sem-year.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-semester-name/Mechanical/3rd-sem","3rd-sem-year.html"));
});
app.get("/Front-semester-name/Mechanical/4th-sem/4th-sem-year.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-semester-name/Mechanical/4th-sem","4th-sem-year.html"));
});
app.get("/Front-semester-name/Mechanical/5th-sem/5th-sem-year.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-semester-name/Mechanical/5th-sem","5th-sem-year.html"));
});
app.get("/Front-semester-name/Mechanical/6th-sem/6th-sem-year.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-semester-name/Mechanical/6th-sem","6th-sem-year.html"));
});
app.get("/Front-semester-name/Mechanical/7th-sem/7th-sem-year.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-semester-name/Mechanical/7th-sem","7th-sem-year.html"));
});
app.get("/Front-semester-name/Mechanical/8th-sem/8th-sem-year.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-semester-name/Mechanical/8th-sem","8th-sem-year.html"));
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})