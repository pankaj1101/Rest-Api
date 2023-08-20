
const Product = require('../models/products');


const getAllProucts = async (req, res) => {

    const Products = await Product.find({});
    res.status(200).json({ Products });

}

const getAllProuctsTesting = async (req, res) => {
    res.status(200).json({ msg: "Get All Products Testing" });
}

module.exports = { getAllProucts, getAllProuctsTesting };