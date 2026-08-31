const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// =========================
// EJS
// =========================

app.set("view engine", "ejs");

app.set(
    "views",
    path.join(__dirname, "views")
);


// =========================
// STATIC FILE
// =========================

app.use(
    express.static(
        path.join(__dirname, "public")
    )
);


// =========================
// TRANG CHỦ
// =========================

app.get("/", (req, res) => {

    res.render("dashboard");

});


// =========================
// DASHBOARD
// =========================

app.get("/dashboard", (req, res) => {

    res.render("dashboard");

});


// =========================
// DỮ LIỆU NGẬP
// =========================

app.get("/climate", (req, res) => {

    res.render("climate" , {
        climateData: []
    });

});


// =========================
// BẢN ĐỒ
// =========================

app.get("/map", (req, res) => {

    res.render("dashboard");

});


// =========================
// CẢNH BÁO
// =========================

app.get("/warning", (req, res) => {

    res.render("warning");

});


// =========================
// THỐNG KÊ
// =========================

app.get("/statistics", (req, res) => {

    res.render("statistics");

});


// =========================
// DỰ BÁO NGẬP
// =========================

app.get("/forecast", (req, res) => {

    res.render("forecast");

});


// =========================
// CHẠY SERVER
// =========================

app.listen(PORT, () => {

    console.log(
        `🌊 WebGIS quản lý ngập lụt TP.HCM đang chạy tại http://localhost:${PORT}`
    );

});
