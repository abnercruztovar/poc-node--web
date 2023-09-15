import express from "express";
import morgan from "morgan";
import { default as callApi } from "./util/NodeJsCall.js";

// Routes
import userRoutes from "./routes/user.routes.js";
import activityRoutes from "./routes/activity.routes.js";

const app = express();

//Settings
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// App constants
app.set("port", process.env.PORT || 3000);

//Middleware
app.use(morgan("dev"));

//Routes
app.use("/api/activities", activityRoutes);
app.use("/api/users", userRoutes);

app.get("/api/assign/:type", (req, res) => {
  callApi(function (response) {
    res.write(response);
    res.end();
  });
});

app.get("/", function (req, res) {
  return res.send("Hello World!");
});

export default app;
