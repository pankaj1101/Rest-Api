const mongoose = require('mongoose');

uri = "mongodb+srv://pankajram1101:pankaj12@cluster0.cwarxe0.mongodb.net/Sales?retryWrites=true&w=majority";

const connectDB = () => {
    console.log("connected to Database");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connectDB;