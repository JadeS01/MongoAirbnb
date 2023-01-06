import { useState } from "react";
import IFilters from "./interfaces/IFilters";
import { amenities } from "../utils/temp";

interface Props {
    filters?: IFilters,
    close?: () => void,
    getFiltersData: (args: IFilters) => void
}
const FilterModal = (props: Props) => {
    const numArray = ["Any", "1", "2", "3", "4", "5", "6+"];
    const roomsArray = ["Beds", "Rooms", "Bathrooms"];
    const propArray = ["Loft", "Apartment", "Serviced Apartment", "Hostel", "Guesthouse"];
    const listArray = ["Private room", "Entire home/apt"];
    const [isReadMore, setIsReadMore] = useState<boolean>(false);
    return (
        <div className="bg-red-200">
            <div>
                <label>Cost</label>
                <input type="range" min={1} max={3000} />
            </div>
            <div>
                <label>Type of Listing</label>
                {listArray.map((e) => (
                    <div className="inline">
                        <input type="checkbox" value={e} />
                        <label>{e}</label>
                    </div>
                ))}
            </div>
            <div>
                {roomsArray.map((e) => (
                    <div>
                        <label>{e}</label>
                        {numArray.map((e: string, idx: number) => (
                            <button className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200 uppercase last:mr-0 mr-1">
                                {e}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
            <div>
                Type of Property
                {propArray.map((e) => (
                    <div>
                        <input type="checkbox" value={e} />
                        <label>{e}</label>
                    </div>
                ))}
            </div>
            <div>
                <label>Superhost</label>
                <div>
                    <input type="checkbox" />
                    <label>Superhosted Listings</label>
                </div>

            </div>
            <div className="bg-blue-100">
                <label>Amenities</label>
                <div>
                    Essentials
                    <div className="grid grid-cols-2">
                        <div>
                            {amenities.slice(0, 7).map((e) => (
                                <div>
                                    <input type="checkbox" value={e} />
                                    <label>{e}</label>
                                </div>
                            ))}
                        </div>
                        <div>
                            {amenities.slice(7, 13).map((e) => (
                                <div>
                                    <input type="checkbox" value={e} />
                                    <label>{e}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {!isReadMore && <button onClick={() => setIsReadMore(true)}>Read More</button>}
                {isReadMore &&
                    <div>
                        <div>
                            Safety
                            <div className="grid grid-cols-2">
                                <div>
                                    {amenities.slice(13, 15).map((e) => (
                                        <div>
                                            <input type="checkbox" value={e} />
                                            <label>{e}</label>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {amenities.slice(15, 17).map((e) => (
                                        <div>
                                            <input type="checkbox" value={e} />
                                            <label>{e}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            Features
                            <div className="grid grid-cols-2">
                                <div>
                                    {amenities.slice(17, 24).map((e) => (
                                        <div>
                                            <input type="checkbox" value={e} />
                                            <label>{e}</label>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {amenities.slice(24, 30).map((e) => (
                                        <div>
                                            <input type="checkbox" value={e} />
                                            <label>{e}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            Accessibility
                            <div className="grid grid-cols-2">
                                <div>
                                    {amenities.slice(30, 32).map((e) => (
                                        <div>
                                            <input type="checkbox" value={e} />
                                            <label>{e}</label>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {amenities.slice(32, 34).map((e) => (
                                        <div>
                                            <input type="checkbox" value={e} />
                                            <label>{e}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <button onClick={() => setIsReadMore(false)}>Read Less</button>
                    </div>}
            </div>
            <button onClick={props.close}>Close</button>
        </div>
    )
}

export { FilterModal };