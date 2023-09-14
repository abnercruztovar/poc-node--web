import app from "./app.js";
// import config from "./config.js";


const main = () => {
//   app.listen(config.APP_PORT);
  app.listen(app.get("port"));
  console.log(`Server on port : ` + app.get("port"));
};

main();