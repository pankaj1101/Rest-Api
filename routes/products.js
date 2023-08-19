const express = require('express');
const router = express.Router();

const { getAllProucts, getAllProuctsTesting } = require("../controller/products")

router.route("/").get(getAllProucts);
router.route("/testing").get(getAllProuctsTesting);

module.exports = router;