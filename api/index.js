const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")
dotenv.config();
const connection_string = process.env.MONGO_URL

mongoose.connect(connection_string, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connection established.'))
.catch((error) => console.error("MongoDB connection failed:", error.message))

app.listen("5000",()=>{
    console.log("hello")
});
console.log("Hello")
console.log("Hello")
