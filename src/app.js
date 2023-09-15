const path = require('path');
const express = require("express");
const callApi = require("./util/NodeJsCall");

const bodyParser = require("body-parser");

// Routes
const userRoutes = require('./routes/user.routes');
const activityRoutes = require('./routes/activity.routes');
const assignRoutes = require('./routes/assign.routes');


const app = express();

//Settings
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// App constants
app.set("port", process.env.PORT || 3000);


//Routes
app.use("/api/activities",activityRoutes);
app.use("/api/users", userRoutes);
app.use("/api/assigments", assignRoutes);

// app.get("/api/assign/:type", (req, res) => {
//   callApi(function (response) {
//     res.write(response);
//     res.end();
//   });
// });

app.get("/", function (req, res) {
  res.status(404).sendFile(path.join(__dirname, 'views', 'page-error.html'));
  // res.redirect("/");
  // return res.send("Hello World!");
});

module.exports = app;
