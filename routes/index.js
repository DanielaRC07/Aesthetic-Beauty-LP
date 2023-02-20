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

    res.render("users", { users: results });
  })
});
router.get("/api/v1/users/:userId", (req, res) => {
  const query = "SELECT id, name FROM users WHERE id = ?"
  connection.query(query, req.params.userId, function (error, results) {
    if (error) throw error

    if (results.length) {
      res.json(results[0])
    }
    res.status(204).send();
  })
});
router.post("/api/v1/users", (req, res) => {
  const query = "INSERT INTO users SET name = ?"
  connection.query(query, req.body.name, function (error, results) {
    if (error) throw error

    res.status(201).send()
  })
});
router.put("/api/v1/users/:userId", (req, res) => {
  const query = "UPDATE users SET name = ? WHERE id = ?"
  connection.query(query, [req.body.name, req.params.userId], function (error, results) {
    if (error) throw error

    res.status(200).send()
  })
});

module.exports = router;
