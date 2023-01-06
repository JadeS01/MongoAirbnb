import { ListingCard } from "../components/ListingCard";
import { NavBar } from "../components/NavBar";
import { FilterBar } from "../components/FilterBar";
import { ListingModal } from "../components/ListingModal";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs"
import { FilterModal } from "../components/FilterModal";
import IFilters from "../components/interfaces/IFilters";

const Search = (): JSX.Element => {
    const [pageNo, setPageNo] = useState<number>(1);
    const [pageCount, setPageCount] = useState<number>(0);
    const [listings, setListings] = useState<any>();
    const [listingsCount, setListingsCount] = useState<number>(0);
    const [modalData, setModalData] = useState<any>({});
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [filters, setFilters] = useState<IFilters>({} as IFilters);

    const getFiltersData = (data: IFilters) => {
        // console.log(data)
        console.log(filters)
        return setFilters(data)
    }
    const getModalData = (data: any) => {
        // setModalData(data);
        const tempData = data;
        setModalData(tempData)
        return setOpenModal(true);
    }

    const handlePrev = () => {
        setPageNo((page) => {
            if (page === 1) return page;
            return page - 1;
        });
    };

    const handleNext = () => {
        setPageNo((page) => {
            if (page === pageCount) return page;
            return page + 1;
        });
    };

    useEffect(() => {
        const loadData = async () => {
            const res = await axios.get(`http://localhost:3001/api/sample/all?pageNo=${pageNo}`);
            setListings(res.data.data.listings);
            if (res.data) {
                setPageCount(Math.ceil(res.data.data.pagination.pageCount));
                setListingsCount(res.data.data.pagination.count)
            }
        }
        loadData();
    }, [pageNo]);

    return (
        <div className="bg-gradient-to-b from-orange-100 to-rose-200">
            <div className="sticky top-0 z-30 w-full px-2 py-4 backdrop-filter backdrop-blur-lg bg-white bg-opacity-80 sm:px-4">
                <NavBar />
                <FilterBar listingsCount={listingsCount} filters={filters} getFiltersData={getFiltersData} />
                {filters?.address && <div>{filters.address}</div>}
            </div>
            {/* <h1>{pageNo}</h1>
            <h1>{pageCount}</h1> */}
            <div className="grid grid-cols-11">
                <button className="flex items-center justify-center group" onClick={handlePrev} disabled={pageNo === 1}>
                    {pageNo > 1 && <BsArrowLeftCircle className="animate-bounce hidden group-hover:block" size={"6em"} />}
                </button>
                {listings ?
                    <div className="col-span-9 container m-auto grid grid-cols-4 gap-4">
                        {listings.map((e: any) => (
                            <ListingCard key={e._id} listing_url={e.listing_url} name={e.name} summary={e.summary} space={e.space}
                                description={e.description} neighborhood_overview={e.neighborhood_overview} notes={e.notes}
                                transit={e.transit} access={e.access} interaction={e.interaction} house_rules={e.house_rules}
                                property_type={e.property_type} room_type={e.room_type} bed_type={e.bed_type} minimum_nights={e.minimum_nights}
                                maximum_nights={e.maximum_nights} accommodates={e.accommodates} bedrooms={e.bedrooms} beds={e.beds}
                                number_of_reviews={e.number_of_reviews} bathrooms={e.bathrooms.$numberDecimal} amenities={e.amenities}
                                price={e.price.$numberDecimal} images={e.images.picture_url} host={{
                                    host_url: e.host.host_url,
                                    host_name: e.host.host_name,
                                    host_about: e.host.host_about,
                                    host_is_superhost: e.host.host_is_superhost
                                }} address={{
                                    street: e.address.street,
                                    country: e.address.country
                                }} review_score={e.review_scores.review_scores_rating}
                                reviews={e.reviews.length} getModalData={getModalData} />
                        ))}
                    </div>
                    :
                    <div className="col-span-9">
                        <div role="status">
                            <svg className="mr-2 w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-red-700" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>}
                {openModal && <ListingModal listing={modalData} close={() => setOpenModal(false)} />}
                <button className="flex items-center justify-center group" onClick={handleNext} disabled={pageNo === pageCount}>
                    {pageNo < pageCount && <BsArrowRightCircle className="animate-bounce hidden group-hover:block" size={"6em"} />}
                </button>
            </div>
            <footer>
                <select value={pageNo} onChange={(e) => { setPageNo(Number(e.target.value)) }}>
                    {Array(pageCount).fill(null).map((_, idx: number) => {
                        return <option key={idx}>{idx + 1}</option>
                    })}
                </select>
            </footer>
        </div>
    )
}

export { Search };