const listingService = require("../services/ListingService");

exports.getAllListings = async (req, res) => {
    try {
        const listings = await listingService.getAllListings();
        res.json({ data: listings, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createListing = async (req, res) => {
    try {
        const listing = await listingService.createListing(req.body);
        res.json({ data: listing, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getListingById = async (req, res) => {
    try {
        const listing = await listingService.getListingById(req.params.id);
        res.json({ data: listing, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateListing = async (req, res) => {
    try {
        const listing = await listingService.updateListing(req.params.id, req.body);
        res.json({ data: listing, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteListing = async (req, res) => {
    try {
        const listing = await listingService.deleteListing(req.params.id);
        res.json({ data: listing, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}