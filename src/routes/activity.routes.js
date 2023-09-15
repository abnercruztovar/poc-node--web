
const express = require("express");
const router = express.Router();
const { methods } = require("../controllers/activity.controller.js");

router.get("/", methods.getActivities);
router.get("/:id", methods.getActivity);
router.post("/", methods.addActivity);
router.delete("/:id", methods.deleteActivity);
router.put("/", methods.updateActivity);

module.exports = router;
