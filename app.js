require("dotenv").config();

const express = require('express');
const app = express();
const connectDB = require("./db/connect")

const PORT = process.env.PORT || 1000;

const products_routes = require("./routes/products")

app.get("/", function name(req, res) {
    res.send("App Working...");
});

//middleware or to set router
app.use("/api/products", products_routes);

const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log("Server Started at : " + PORT);
        });
    } catch (error) {
        console.log(error);
    }
};

start();