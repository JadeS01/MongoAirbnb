require("dotenv").config();
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

const dbConnection = () => {
    let db = null;

    async function dbConnect() {
        try {
            let uri = process.env.MONGODB_URI;
            let connection = new MongoClient(uri, { useUnifiedTopology: true });
            return connection;
        } catch (err) {
            return err;
        }
    }

    async function getDb() {
        try {
            if (db == null) {
                db = await dbConnect();
                return db;
            } else {
                return db;
            }
        } catch (err) {
            return err;
        }
    }
    // Singleton object
    return {
        getDb: getDb
    }
}

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    }
);

module.exports = dbConnection();
