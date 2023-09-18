const dbConn = require("../util/db");
const config = require("../config");

const getDashboard = (req, res, filtertype) => {
  dbConn(async (db) => {
    let data = [];
    console.log(filtertype);
    const activities = await db.collection("Activity").find({}).toArray();
    const users = await db.collection("User").find({}).toArray();

    if (activities && users) {
      data.push({
        type: filtertype || "",
        activities: activities,
        users: users,
      });

      let apiUrl = config.ASSIGMENT_SERVICE_URL;
      //se obtiene los datos de azure function
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });

      return res.send(data);
      // return data;
    }
    // return data;
    return res.status(500).json({ message: "No data found" });
  }, res);
};

exports.methods = {
  assignByActivities: getDashboard,
};
