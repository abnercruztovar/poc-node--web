import express from "express";
import morgan from "morgan";

const app = express();

//Settings
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("port", 4000);

//Middleware
app.use(morgan("dev"));

app.use("/", (req, res) => {
  res.status(200);
  res.json("hola mundo");
});

export default app;
