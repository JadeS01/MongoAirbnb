interface IListing {
    key: string,
    listing_url: string,
    name: string, // card
    summary: string, // card
    space: string,
    description: string,
    neighborhood_overview: string,
    notes: string,
    transit: string,
    access: string,
    interaction: string,
    house_rules: string,
    property_type: string,
    room_type: string, // card
    bed_type: string,
    minimum_nights: string,
    maximum_nights: string,
    accommodates: number, // card
    bedrooms: number,
    beds: number,
    number_of_reviews: number,
    bathrooms: string,
    amenities: string[],
    price: string,
    images: string, //card
    host: {
        host_url: string,
        host_name: string,
        host_about: string,
        host_is_superhost: boolean
    },
    address: {
        street: string,
        country: string
    },
    review_score: number,
    reviews: number
}

export default IListing;