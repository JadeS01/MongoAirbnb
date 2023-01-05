const { Decimal128 } = require('mongodb');
const dbConnection = require('../db');

const test = async (req, res) => {
    try {
        const client = await dbConnection.getDb();
        const db = client.db("sample_airbnb");
        const collection = db.collection("listingsAndReviews")
        const listing = await collection.findOne({ name: "Ribeira Charming Duplex" });
        res.json({
            data: listing, status: "success"
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getAllListings = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 12;
        const pageNo = parseInt(req.query.pageNo) || 1;
        // const minPrice = req.query.minPrice || -Infinity;
        // const maxPrice = req.query.maxPrice || Infinity;
        const skip = pageNo > 1 ? ((pageNo - 1) * limit) : 0;
        const client = await dbConnection.getDb();
        const db = client.db("sample_airbnb");
        const collection = db.collection("listingsAndReviews");
        const count = await collection.estimatedDocumentCount({ price: { $lte: Decimal128(`${req.query.cost}`) } });
        const listings = await collection.find({ price: { $lte: Decimal128(`${req.query.cost}`) } }).skip(skip).limit(limit).toArray();
        const pageCount = count / limit;
        // const [resCount, resListings] = await collection.find({ $all: [count, listings] });
        // const pageCount = resCount / limit;
        res.json({
            data: {
                pagination: {
                    count,
                    pageCount
                },
                listings
            },
            status: "success"
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getListingById = async (req, res) => {
    try {
        const client = await dbConnection.getDb();
        const db = client.db("sample_airbnb");
        const collection = db.collection("listingsAndReviews");
        const listing = await collection.findOne({ _id: req.params.id });
        res.json({
            data: listing, status: "success"
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteListingById = async (req, res) => {
    try {
        const client = await dbConnection.getDb();
        const db = client.db("sample_airbnb");
        const collection = db.collection("listingsAndReviews");
        const listing = await collection.deleteOne({ _id: req.params.id });
        res.json({
            data: listing, status: "success"
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { test, getAllListings, getListingById, deleteListingById };