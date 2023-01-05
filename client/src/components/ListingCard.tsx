import { useState } from "react";
import { Rating } from "react-simple-star-rating";
interface Props {
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
    getModalData: (args: any) => void
};
const ListingCard = (props: Props): JSX.Element => {
    const [image, setImage] = useState<string>(props.images);
    const colorArray = [
        "#f17a45",
        "#f17a45",
        "#f19745",
        "#f19745",
        "#f1a545",
        "#f1a545",
        "#f1b345",
        "#f1b345",
        "#f1d045",
        "#f1d045"
    ];
    return (
        <div className="transform flex flex-column transition duration-500 hover:scale-105 bg-gradient-to-r from-amber-500 to-pink-500 p-1 rounded overflow-hidden shadow-xl">
            <div className="rounded bg-gradient-to-r from-stone-50 to-red-100 backdrop-filter backdrop-blur-lg bg-opacity-10">
                <div className="relative">
                    <img className="rounded p-1" style={{ width: "300px", height: "200px" }} src={image} onError={() => setImage("elementor-placeholder-image.png")} />
                    <button className="absolute p-2 top-0">
                        <img src="heart.jpg" alt="heart" style={{ width: "23px", height: "20px" }} />
                    </button>
                </div>
                <div className="px-2 py-1">
                    <div className="grid grid-cols-3">
                        <p className="text-gray-700 text-sm font-bold">
                            ${props.price}
                        </p>
                        <p className="col-span-2 text-gray-700 text-xs">
                            {props.room_type} | {props.accommodates} Guest{props.accommodates === 1 ? "" : "s"}
                            <p>
                                {props.beds} Bed{props.beds === 1 ? "" : "s"}
                            </p>
                        </p>
                    </div>
                </div>
                <div className="px-2">
                    <div className="font-bold text-xl">
                        {props.name}
                    </div>
                    <div className="text-gray-700 text-xs">
                        {props.address.street}
                    </div>
                    {props.review_score ?
                        <div>
                            <Rating size={20} transition fillColorArray={colorArray} initialValue={props.review_score / 20 || 0} readonly={true} allowFraction={true} />
                            <span className="text-yellow-700 text-sm px-2">
                                {props.reviews} review{props.reviews === 1 ? "" : "s"}
                            </span>
                            {props.host.host_is_superhost &&
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-700 bg-yellow-300 uppercase last:mr-0 mr-1">
                                    Superhost
                                </span>
                            }
                        </div>
                        :
                        <p className="text-yellow-700 text-xs p-2">
                            Rating unavailable
                        </p>
                    }
                    {/* <div className="text-gray-700 text-base">
                        <div>
                            {props.summary}
                        </div>
                    </div> */}
                    <br />
                    <br />
                </div>
                <div className='fixed -bottom-5 right-2 w-full'>
                    <button onClick={() => props.getModalData(props)} className='bottom-0 my-8 float-right px-5 py-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded'>
                        Details
                    </button>
                </div>

                {/* {props.review_score ? props.review_score : ""} */}
                {/* <div className="px-6 py-4">
                        {props.amenities && props.amenities.map((amenity) => (
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200 uppercase last:mr-0 mr-1">
                                {amenity}
                            </span>
                        ))}
                    </div> */}
            </div>
        </div>
    )
}

export { ListingCard };