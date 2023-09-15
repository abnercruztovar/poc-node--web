import { dbConn } from "./../util/db.js";

const getUsers = (req, res) => {
  dbConn(async (db) => {
    const users = await db.collection("User").find({}).toArray();
    if (users) {
      return res.json(users);
    }
    return res.status(500).json({ message: "No users found" });
  }, res);
};

const addUser = (req, res) => {
  dbConn(async (db) => {
    let _id = req.body.id,
      name = req.body.name,
      workArea = req.body.workArea;

    if (name === undefined || workArea === undefined) {
      res.status(400).json({ message: "Bad request, please fill all fields." });
    }

    let user = {
      _id: _id,
      name: name,
      workArea: workArea,
    };

    const result = await db.collection("User").insertOne(user, (err, resu) => {
      if (err) throw err;
      console.log("User created");
      return res.json(user);
    });

    res.json({ result, user });
  }, res);
};

const getUser = (req, res) => {};

const updateUser = (req, res) => {};

const deleteUser = (req, res) => {};

export const methods = {
  getUsers,
  addUser,
  getUser,
  updateUser,
  deleteUser,
};
