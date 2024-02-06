const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());

//home route
app.get("/", (req, res) => {
    res.send("Home route");
});

app.listen(8080, () => {
    console.log("APP IS LISTENING ON PORT 8080");
});