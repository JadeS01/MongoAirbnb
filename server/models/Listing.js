const { Int32, Decimal128 } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema(
  {
    _id: String,
    listing_url: String,
    name: String,
    summary: String,
    space: String,
    neighborhood_overview: String,
    notes: String,
    transit: String,
    access: String,
    interaction: String,
    house_rules: String,
    property_type: String,
    room_type: String,
    bed_type: String,
    minimum_nights: String,
    maximum_nights: String,
    cancellation_policy: String,
    // last_scraped: {
    //   type: Date,
    //   default: Date.now
    // },
    // calendar_last_scraped: {
    //   type: Date,
    //   default: Date.now
    // },
    // first_review: Date,
    // last_review: Date,
    // accommodates: Int32,
    // bedrooms: Int32,
    // beds: Int32,
    // number_of_reviews: Int32,
    // bathrooms: Decimal128,
    // amenities: Array, // need amenities model
    // price: Decimal128,
    // security_deposit: Decimal128,
    // cleaning_fee: Decimal128,
    // extra_people: Decimal128,
    // guests_included: Decimal128,
    // images: Object, // need images model
    // host: Object, // need host model
    // address: Object, // need address model
    // availability: Object, // need availability model
    // review_scores: Object, // need rs model
    // reviews: Array // need review model
  }
);

module.exports = mongoose.model("Listing", listingSchema);


