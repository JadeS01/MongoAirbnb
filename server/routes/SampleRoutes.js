const express = require("express");
const {
    test,
    getAllListings,
    getListingById,
    deleteListingById
} = require("../controllers/SampleController");
const router = express.Router();

router.route("/").get(test)
router.route("/all").get(getAllListings)
router.route("/:id").get(getListingById).delete(deleteListingById);

module.exports = router;