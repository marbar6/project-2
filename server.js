const express = require("express");
const fs = require("fs");
const path = require("path");
const { send } = require("process");
const app = express();
const port = 8000;



// css style 
app.use(express.static(path.join(__dirname, "Front-branch-name")));
app.use(express.static(path.join(__dirname,"/Front-semester-name/Mechanical/1st-sem")));



// Front semester

app.get("/",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-branch-name","index.html"));
});

app.get("/index.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-branch-name","index.html")); // Index 
});

app.get("/about.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-branch-name/about-page","about.html")); // About page
});

app.get("/profile.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-branch-name/profile-page","profile.html")); //Profile
});

app.get("/signin.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-branch-name/profile-page","sign-in.html")); //Sign in
});

app.get("/signup.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-branch-name/profile-page","sign-up.html")); //Sign up
});


// Mechanical Branch
app.get("/Front-semester-name/Mechanical/mecha-semester.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-semester-name/Mechanical","mecha-semester.html"));
});
app.get("/Front-semester-name/Mechanical/1st-sem/1st-sem-year.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-semester-name/Mechanical/1st-sem","1st-sem-year.html"));  //1st semester 
});
app.get("/Front-semester-name/Mechanical/2nd-sem/2nd-sem-year.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-semester-name/Mechanical/2nd-sem","2nd-sem-year.html")); //2nd semester
});
app.get("/Front-semester-name/Mechanical/3rd-sem/3rd-sem-year.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-semester-name/Mechanical/3rd-sem","3rd-sem-year.html")); //3rd semester
});
app.get("/Front-semester-name/Mechanical/4th-sem/4th-sem-year.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-semester-name/Mechanical/4th-sem","4th-sem-year.html")); //4th semester
});
app.get("/Front-semester-name/Mechanical/5th-sem/5th-sem-year.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-semester-name/Mechanical/5th-sem","5th-sem-year.html")); //5th semester
});
app.get("/Front-semester-name/Mechanical/6th-sem/6th-sem-year.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-semester-name/Mechanical/6th-sem","6th-sem-year.html")); // 6th semester
});
app.get("/Front-semester-name/Mechanical/7th-sem/7th-sem-year.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-semester-name/Mechanical/7th-sem","7th-sem-year.html")); // 7th semester
});
app.get("/Front-semester-name/Mechanical/8th-sem/8th-sem-year.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-semester-name/Mechanical/8th-sem","8th-sem-year.html")); // 8th semester
});

// Mechanical 1st sem years
app.get("/Front-semester-name/Mechanical/1st-sem/1st-sem-2020/download-pdf-20.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-semester-name/Mechanical/1st-sem/1st-sem-2020","download-pdf-20.html")) // 1st sem 2020
});
app.get("/Front-semester-name/Mechanical/1st-sem/1st-sem-2021/download-pdf-21.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-semester-name/Mechanical/1st-sem/1st-sem-2021","download-pdf-21.html")) // 1st sem 2021
});
app.get("/Front-semester-name/Mechanical/1st-sem/1st-sem-2022/download-pdf-22.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-semester-name/Mechanical/1st-sem/1st-sem-2022","download-pdf-22.html")) // 1st sem 2022
});
app.get("/Front-semester-name/Mechanical/1st-sem/1st-sem-2023/download-pdf-23.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-semester-name/Mechanical/1st-sem/1st-sem-2023","download-pdf-23.html")) // 1st sem 2023
});
app.get("/Front-semester-name/Mechanical/1st-sem/1st-sem-2024/download-pdf-24.html",(req,res)=>{
    res.sendFile(path.join("D:/project/PYQ/Front-semester-name/Mechanical/1st-sem/1st-sem-2024","download-pdf-24.html")) // 1st sem 2020
});


// port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})