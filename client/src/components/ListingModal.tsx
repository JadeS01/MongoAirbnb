import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import IListing from "./interfaces/IListing";
interface Props {
    listing: IListing,
    close?: () => void
}
const ListingModal = (props: Props): JSX.Element => {
    const [image, setImage] = useState<string>(props.listing.images);
    const [isReadMore, setIsReadMore] = useState<boolean>(false);
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
        <div className="overlay">
            <div className="modalContainer">
                <div className="bg-white rounded backdrop-filter backdrop-blur-lg bg-opacity-80">
                    <div className="relative">
                        <img className="rounded p-1" style={{ width: "300px", height: "200px" }} src={image} onError={() => setImage("elementor-placeholder-image.png")} />
                        <button className="absolute p-2 top-0">
                            <img src="heart.jpg" alt="heart" style={{ width: "23px", height: "20px" }} />
                        </button>
                    </div>
                    <div className="px-2 py-1">
                        <div className="grid grid-cols-3">
                            <p className="text-gray-700 text-sm font-bold">
                                ${props.listing.price}
                            </p>
                            <div className="col-span-2 text-gray-700 text-xs">
                                {props.listing.room_type} | {props.listing.accommodates} Guest{props.listing.accommodates === 1 ? "" : "s"}
                                <p>
                                    {props.listing.beds} Bed{props.listing.beds === 1 ? "" : "s"}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="font-bold text-xl">
                            {props.listing.name}
                        </div>
                        <div className="text-gray-700 text-xs">
                            {props.listing.address.street}
                        </div>
                        {props.listing.review_score ?
                            <div>
                                <Rating size={20} transition fillColorArray={colorArray} initialValue={props.listing.review_score / 20 || 0} readonly={true} allowFraction={true} />
                                <span className="text-yellow-700 text-sm px-2">
                                    {props.listing.reviews} review{props.listing.reviews === 1 ? "" : "s"}
                                </span>
                                {props.listing.host.host_is_superhost &&
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
                        <div className="text-gray-700 text-base">
                            <div>
                                {props.listing.summary}
                            </div>
                        </div>
                        <br />
                        <br />

                        {!isReadMore &&
                            <button onClick={() => setIsReadMore(!isReadMore)}>
                                <div>Read more...</div>
                            </button>
                        }
                        {isReadMore &&
                            <div>
                                {props.listing.description}
                                <button onClick={() => setIsReadMore(!isReadMore)}>
                                    <div>Read less...</div>
                                </button>
                            </div>}
                    </div>

                    {/* {props.review_score ? props.review_score : ""} */}
                    <div className="px-6 py-4">
                        {props.listing.amenities && props.listing.amenities.map((amenity) => (
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200 uppercase last:mr-0 mr-1">
                                {amenity}
                            </span>
                        ))}
                    </div>
                    <button onClick={props.close}>Close</button>
                </div>
            </div>
        </div>
    )
}

export { ListingModal };