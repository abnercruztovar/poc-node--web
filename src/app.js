import express from "express";
import morgan from "morgan";

// Routes
import productRoutes from "./routes/product.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

//Settings
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// App constants
app.set("port", process.env.PORT || 3000);

//Middleware
app.use(morgan("dev"));

//Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.get("/", function (req, res) {
  return res.send("Hello World!");
});

export default app;
