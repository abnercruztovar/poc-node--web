const express = require("express");
const router = express.Router();
const { methods } = require("../controllers/user.controller");

router.get("/", methods.getUsers);
router.get("/:id", methods.getUser);
router.post("/", methods.addUser);
router.put("/", methods.updateUser);
router.delete("/:id", methods.deleteUser);

module.exports = router;
