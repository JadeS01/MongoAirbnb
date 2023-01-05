const express = require("express");
const {
    getAllListings,
    createListing,
    getListingById,
    updateListing,
    deleteListing
} = require("../controllers/ListingController");
const router = express.Router();

router.route("/").get(getAllListings).post(createListing);
router.route("/:id").get(getListingById).put(updateListing).delete(deleteListing);

module.exports = router;