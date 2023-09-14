import app from "./app.js";
// import config from "./config.js";



// Start the server
const main = () => {
  const port = app.get("port");
//   app.listen(config.APP_PORT);
  app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
  });
};

main();