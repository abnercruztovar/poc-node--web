import { dbConn } from "../util/db.js";

const assignByActivity = (req, res) => {
  dbConn(async (db) => {
    let data = [];

    const activities = await db.collection("Activity").find({}).toArray();
    const users = await db.collection("User").find({}).toArray();

    if (activities && users) {
      data.push({
        type: req.params.type || "",
        activities: activities,
        users: users,
      });
      
      res.send(data);
    }
    return res.status(500).json({ message: "No data found" });
  }, res);
};
export const methods = {
  assignByActivities: assignByActivity,  
};

