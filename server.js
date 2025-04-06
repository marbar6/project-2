const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 8000;


app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/Front-branch-name/index", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/Front-branch-name/index.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/about.html", (req, res) => {
    res.sendFile(path.join(__dirname, "about.html"));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})