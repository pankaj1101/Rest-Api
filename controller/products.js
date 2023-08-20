
const Product = require('../models/products');


const getAllProucts = async (req, res) => {

    const myData = await Product.find();
    res.status(200).json({ myData });

}

const getAllProuctsTesting = async (req, res) => {
    res.status(200).json({ msg: "Get All Products Testing" });
}

module.exports = { getAllProucts, getAllProuctsTesting };