import express from "express";
import morgan from "morgan";

const app = express();

//Settings
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// App constants
app.set("port", process.env.PORT || 3000);

//Middleware
app.use(morgan("dev"));

app.get('/', function (req, res) {
  return res.send("Hello World!");
})

export default app;
