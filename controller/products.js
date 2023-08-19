
const getAllProucts = async (req, res) => {
    res.status(200).json({ msg: "Get All Products" });
}

const getAllProuctsTesting = async (req, res) => {
    res.status(200).json({ msg: "Get All Products Testing" });
}

module.exports = { getAllProucts, getAllProuctsTesting };