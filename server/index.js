const express = require("express");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const port = process.env.PORT || 3001
const app = express();
const cors = require("cors");
const sampleRouter = require("./routes/SampleRoutes");
const listingRouter = require("./routes/ListingRoutes");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => { res.send("Landing page1") });
app.get("/api", (req, res) => { res.send("Landing page2") });
app.use("/api/listings", listingRouter);
app.use("/api/sample", sampleRouter);

app.listen(port, async () => {
    try {
        console.log(`Server running on ${port}`);
    } catch (err) {
        console.log(err)
        console.error("Error with server");
    }
});

module.exports = app;