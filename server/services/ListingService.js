const ListingModel = require("../models/Listing");

exports.getAllListings = async () => {
    return await ListingModel.find();
};

exports.createListing = async (listing) => {
    return await ListingModel.create(listing);
};

exports.getListingById = async (id) => {
    return await ListingModel.findById(id);
};

exports.updateListing = async (id, listing) => {
    return await ListingModel.findByIdAndUpdate(id, listing);
};

exports.deleteListing = async (id) => {
    return await ListingModel.findByIdAndDelete(id)
}