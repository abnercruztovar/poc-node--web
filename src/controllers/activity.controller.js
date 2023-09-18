const dbConn =require('../util/db');

const getActivities = (req, res) => {
  dbConn(async (db) => {
    const activities = await db.collection("Activity").find({}).toArray();
    if (activities) {
      return res.json(activities);
    }
    return res.status(500).json({ message: "No users found" });
  }, res);
};

const addActivity = (req, res) => {
  dbConn(async (db) => {
    let _id = new Date().getTime(),
      name = req.body.name,
      userId = req.body.userId;

    if (name === undefined || userId === undefined) {
      res.status(400).json({ message: "Bad request, please fill all fields." });
    }

    let activity = {
      _id: _id,
      name: name,
      userId: userId,
    };

    const result = await db
      .collection("Activity")
      .insertOne(activity, (err, resu) => {
        if (err) throw err;
        console.log("Activity created");
        return res.json(activity);
      });

    res.json({ result, activity });
  }, res);
};

const getActivity = (req, res) => {
  const id = Number(req.params.id);

  dbConn(async (db) => {
    const activity = await db.collection("Activity").find({ _id: id }).toArray();
    if (activity) {
      return res.json(activity);
    }
    return res.status(500).json({ message: "No activities found" });
  }, res);
};


const deleteActivity = (req, res) => {
  const id = Number(req.params.id);

  dbConn(async (db) => {
    const activity = await db.collection("Activity").deleteOne({ _id: id });
    if (activity) {
      return res.json(activity);
    }
    return res.status(500).json({ message: "No activities found" });
  }, res);
};

const updateActivity = (req, res) => {
  let id = Number(req.body._id),
      name = req.body.name,
      userId = req.body.userId;

      console.log('este es el id: ',id);

    if (id === undefined || name === undefined || userId === undefined) {
      res.status(400).json({ message: "Bad request, please fill all fields." });
    }

    let query = { _id: id };
    let newValues = { $set: {name: name, userId: userId } };

    let activity = {
      _id: id,
      name: name,
      userId: userId,
    };

  dbConn(async (db) => {
    const result = await db
      .collection("Activity")
      .updateOne(query, newValues, (err, resu) => {
        if (err) throw err;
        console.log("product Updated");
        return res.json(activity);
      });

    res.json({ result, activity });
  }, res);
};

exports.methodsactivities = {
  getActivities,
  addActivity,
  getActivity,
  deleteActivity,
  updateActivity,

};
