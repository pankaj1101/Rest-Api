const Product = require("../models/products");

const getAllProucts = async (req, res) => {
  const { title, app } = req.query;
  const queryObject = {};

  if (title) {
    //regular Expression...
    queryObject.title = { $regex: title, $options: "i" };
  }

  if (app) {
    queryObject.app = app;
  }

  const Products = await Product.find(queryObject);
  res.status(200).json({ Products });
};

const getAllProuctsTesting = async (req, res) => {
  const Products = await Product.find(req.query);

  res.status(200).json({ Products });

  // res.status(200).json({ msg: "Get All Products Testing" });
};

module.exports = { getAllProucts, getAllProuctsTesting };
