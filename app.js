// =========================
// IMPORT THƯ VIỆN
// =========================
const express = require("express");
const path = require("path");
require("dotenv").config();

// =========================
// KHỞI TẠO EXPRESS
// =========================
const app = express();
const PORT = process.env.PORT || 3000;

// =========================
// VIEW ENGINE
// =========================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// =========================
// MIDDLEWARE
// =========================
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// =========================
// TRANG ĐĂNG NHẬP
// =========================
app.get("/", (req, res) => {
    res.render("login", { error: null });
});

// =========================
// XỬ LÝ ĐĂNG NHẬP
// =========================
app.post("/login", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    if (username === "admin" && password === "climate2026") {
        res.render("dashboard");
    } else {
        res.render("login", {
            error: "Sai tên đăng nhập hoặc mật khẩu"
        });
    }

});

// =========================
// DASHBOARD
// =========================
app.get("/dashboard", (req, res) => {
    res.render("dashboard");
});

// =========================
// HẠ TẦNG XANH
// =========================
app.get("/hsng", (req, res) => {

    const data = [

        {
            id: 1,
            name: "Công viên Thống Nhất",
            trees: 500,
            area: "10 ha",
            status: "Tốt"
        },

        {
            id: 2,
            name: "Hồ Hoàn Kiếm",
            trees: 250,
            area: "5 ha",
            status: "Tốt"
        },

        {
            id: 3,
            name: "Khu đô thị phía Bắc",
            trees: 120,
            area: "3 ha",
            status: "Trung bình"
        }

    ];

    res.render("hsng", {
        data: data
    });

});

// =========================
// DỮ LIỆU KHÍ HẬU
// =========================
app.get("/climate", (req, res) => {

    const climateData = [

        {
            id: "CS01",
            area: "Trung tâm",
            temp: 28.5,
            humidity: 65,
            rain: 120,
            wind: 3.5,
            aqi: 42,
            status: "Tốt"
        },

        {
            id: "CS02",
            area: "Phía Bắc",
            temp: 26.2,
            humidity: 72,
            rain: 150,
            wind: 2.8,
            aqi: 38,
            status: "Tốt"
        },

        {
            id: "CS03",
            area: "Phía Nam",
            temp: 29.8,
            humidity: 58,
            rain: 90,
            wind: 4.1,
            aqi: 56,
            status: "Trung bình"
        },

        {
            id: "CS04",
            area: "Phía Đông",
            temp: 27.6,
            humidity: 70,
            rain: 110,
            wind: 3.2,
            aqi: 48,
            status: "Tốt"
        },

        {
            id: "CS05",
            area: "Phía Tây",
            temp: 30.1,
            humidity: 60,
            rain: 80,
            wind: 4.5,
            aqi: 62,
            status: "Trung bình"
        }

    ];

    res.render("climate", {
        climateData: climateData
    });

});

// =========================
// ĐĂNG XUẤT
// =========================
app.get("/logout", (req, res) => {
    res.redirect("/");
});

// =========================
// CHẠY SERVER
// =========================
app.listen(PORT, () => {

    console.log(`Server đang chạy tại: http://localhost:${PORT}`);

});
app.get("/hsng", (req, res) => {

    const data = [

        {
            id: 1,
            name: "Công viên Thống Nhất",
            trees: 500,
            area: "10 ha",
            type: "Cây bóng mát",
            cover: 85,
            status: "Tốt"
        },

        {
            id: 2,
            name: "Hồ Hoàn Kiếm",
            trees: 250,
            area: "5 ha",
            type: "Cây cảnh",
            cover: 72,
            status: "Tốt"
        },

        {
            id: 3,
            name: "Khu đô thị phía Bắc",
            trees: 120,
            area: "3 ha",
            type: "Cây xanh đô thị",
            cover: 58,
            status: "Trung bình"
        }

    ];

    res.render("hsng", { data });

});