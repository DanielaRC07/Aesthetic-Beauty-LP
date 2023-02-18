const express = require("express");
const router = express.Router();
const connection = require("../database/db");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/index", (req, res) => {
  res.render("index");
});

router.get("/registro", (req, res) => {
  res.render("registro");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/consulta", (req, res) => {
  res.render("consulta");
});

router.get("/users", (req, res) => {
  connection.query("SELECT id, name FROM users", function (error, results) {
    if (error) throw error

    console.log(results)
    res.json(results)
  })
});

module.exports = router;
