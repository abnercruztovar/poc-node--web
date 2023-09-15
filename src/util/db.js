import config from "../config.js";

import { default as mongodb } from "mongodb";
let MongoClient = mongodb.MongoClient;

const uri = `${config.mongoURI}`;
const DATABASE_NAME = `${config.DATABASE_NAME}`;

export const dbConn = async (operations, response) => {
  try {
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (DATABASE_NAME) {
      const db = client.db(DATABASE_NAME);
      console.log("connected successfully to mongo server");
      await operations(db);
      client.close();
    }
  } catch (err) {
    console.error({ message: "Error conecting to database ", err });
  }
};
