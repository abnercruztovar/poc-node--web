const  config = require('dotenv');

// config();

// export default {
  module.exports = {
  mongoURI: process.env.MONGO_URI || "mongodb://0.0.0.0:27017/",
  DATABASE_NAME: process.env.DATABASE_NAME || "azuredemo",
  ASSIGMENT_SERVICE_URL : process.env.ASSIGMENT_SERVICE_URL || "http://0.0.0.0:7071/api/HttpTrigger1?type=antonia",
  
};
