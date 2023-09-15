const express = require("express");
const router = express.Router();
const { methods } = require("../controllers/assign.controller");
const path = require("path");
const rootDir = require("../util/path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "send-assignments.html"));
});

router.post("/send-assigment", (req, res, next) => {
  res.redirect("/");
});

module.exports = router;
