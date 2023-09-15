const app =require('./app.js');

// Start the server
const main = () => {
  const port = app.get("port");

  app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
  });
};

main();