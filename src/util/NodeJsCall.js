const config = require("../config");
const http = require("http");

const _EXTERNAL_URL = config.ASSIGMENT_SERVICE_URL;

const callExternalApiUsingHttp = (callback) => {
  http
    .get(_EXTERNAL_URL, (resp) => {
      let data = "";

      // A chunk of data has been recieved.
      resp.on("data", (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on("end", () => {
        return callback(data);
        // console.log(JSON.stringify(data));
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
};

module.exports = callExternalApiUsingHttp;
