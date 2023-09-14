import {dbConn} from "./../util/db.js";

const getProducts = (req, res) => {
  dbConn(async (db) => {
    const products = await db.collection("Product").find({}).toArray();
    if (products) {
      return res.json([products]);
    }
    return res.status(500).json({ message: "No products found" });
  }, res);
};

const addProduct = (req, res) => {
  dbConn(async (db) => {
    let _id = new Date().getTime(),
      name = req.body.name,
      category = req.body.category;

    if (name === undefined || category === undefined) {
      res.status(400).json({ message: "Bad request, please fill all fields." });
    }

    let product = {
      _id: _id,
      name: name,
      category: category,
    };

    const result = await db
      .collection("Product")
      .insertOne(product, (err, resu) => {
        if (err) throw err;
        console.log("product inserted");
        return res.json(product);
      });

    res.json({ result, product });
  }, res);
};

const getProduct = (req, res) => {
  const id = Number(req.params.id);

  dbConn(async (db) => {
    const products = await db.collection("Product").find({ _id: id }).toArray();
    if (products) {
      return res.json(products);
    }
    return res.status(500).json({ message: "No products found" });
  }, res);
};


const deleteProduct = (req, res) => {
  const id = Number(req.params.id);

  dbConn(async (db) => {
    const products = await db.collection("Product").deleteOne({ _id: id });
    if (products) {
      return res.json(products);
    }
    return res.status(500).json({ message: "No products found" });
  }, res);
};

const updateProduct = (req, res) => {
  let id = Number(req.body._id),
      name = req.body.name,
      category = req.body.category;

      console.log('este es el id: ',id);

    if (id === undefined || name === undefined || category === undefined) {
      res.status(400).json({ message: "Bad request, please fill all fields." });
    }

    let query = { _id: id };
    let newValues = { $set: {name: name, category: category } };

    let product = {
      _id: id,
      name: name,
      category: category,
    };

  dbConn(async (db) => {
    const result = await db
      .collection("Product")
      .updateOne(query, newValues, (err, resu) => {
        if (err) throw err;
        console.log("product Updated");
        return res.json(product);
      });

    res.json({ result, product });
  }, res);
};

export const methods = {
  getProducts,
  addProduct,
  getProduct,
  deleteProduct,
  updateProduct,
};
