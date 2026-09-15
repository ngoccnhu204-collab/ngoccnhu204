
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.render("dashboard"));
app.get("/dashboard", (req, res) => res.render("dashboard"));
app.get("/map", (req, res) => res.render("map"));
app.get("/climate", (req, res) => res.render("climate", { climateData: [] }));
app.get("/warning", (req, res) => res.render("warning"));
app.get("/statistics", (req, res) => res.render("statistics"));

app.listen(PORT, () => {
    console.log(`🌊 WebGIS đang chạy tại http://localhost:${PORT}`);
});