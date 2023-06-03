const express = require("express");
const { logReq } = require("./src/utils/middleware");
const mariadb = require("mariadb");

const app = express();
require("dotenv").config();

app.use(logReq, express.json());
app.get("/", (req, res) => res.send({ msg: "hello world" }));

// Database connection setup
const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// Routes
// เส้นทางของ API

// Admin routes
// เส้นทางสำหรับผู้ดูแลระบบ

// User routes
// เส้นทางสำหรับผู้ใช้งาน
// app.use("/v1/user", user);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server is running on port", port));
