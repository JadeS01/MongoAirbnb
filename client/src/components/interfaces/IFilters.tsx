interface IFilters {
    price?: string,
    room_type?: string[],
    property_type?: string[],
    accommodates?: number,
    bedrooms?: number,
    beds?: number,
    bathrooms?: string,
    amenities?: string[],
    superhost?: boolean,
    address?: string
}
export default IFilters;