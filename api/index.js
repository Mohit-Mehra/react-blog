const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")

dotenv.config();
app.use(express.json())


const connection_string = process.env.MONGO_URL

mongoose.connect(connection_string, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connection established.'))
.catch((error) => console.error("MongoDB connection failed:", error.message))

app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/categories",categoryRoute)

app.listen("5000",()=>{
    console.log("hello")
});

