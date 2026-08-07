const express = require("express");

const app = express();
const PORT = 3000;

// Cho phép sử dụng thư mục public
app.use(express.static("public"));

// Sử dụng EJS
app.set("view engine", "ejs");

// Trang chủ
app.get("/", (req, res) => {
    res.render("index");
});

// Chạy server
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
