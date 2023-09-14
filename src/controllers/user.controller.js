import {dbConn} from "./../util/db.js";

const getUsers = (req, res) => {
  dbConn(async (db) => {
    const users = await db.collection("User").find({}).toArray();
    if (users) {
      return res.json([users]);
    }
    return res.status(500).json({ message: "No users found" });
  }, res);
};

const addUser = (req, res) => {

}

const getUser = (req, res) => {

}

const updateUser = (req, res) => {

}

const deleteUser = (req, res) => {

}

export const methods = {
  getUsers,
  addUser,
  getUser,
  updateUser,
  deleteUser,

};
