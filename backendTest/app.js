const express = require("express");
const router = require("./routes/route");
const mongoose = require("mongoose");
const cors = require("cors");

const url = "mongodb://localhost:27017/form";

const app = express();
mongoose.connect(url, {useNewUrlParser: true});
const con = mongoose.connection;
con.on("open", () => {
    console.log("connected...");
})

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(9000, () => {
    console.log("Listening on port 9000");
});