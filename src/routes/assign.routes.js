const express = require("express");
const router = express.Router();
const { methods } = require("../controllers/assign.controller");
const { methodsusers } = require("../controllers/user.controller");
const { methodsactivities } = require("../controllers/activity.controller");
const path = require("path");
const rootDir = require("../util/path");
const callExternalApiUsingHttp = require("../util/NodeJsCall");
const { response } = require("../app");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "send-assignments.html"));
});

router.post("/sendassignments", (req, res) => {
  let { filtertype } = req.body;
  console.log("Hi, from  ", filtertype);
  
  
  methods.assignByActivities(req, res, filtertype);;
  // methods.getdash2(req,res,filtertype);

 
  

  // res.redirect("http://www.google.com");
  // console.log(JSON.stringify(res));
  // .then((res) => res.json())
  // .then((data) => {
  //   console.log(data);
  // });
});

module.exports = router;
