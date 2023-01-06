import { useState } from "react";
import { BsFilterCircle } from "react-icons/bs";
import { FilterModal } from "./FilterModal";
import IFilters from "./interfaces/IFilters";

interface Props {
    listingsCount?: number,
    filters?: IFilters,
    getFiltersData: (args: IFilters) => void
}
const FilterBar = (props: Props): JSX.Element => {
    // const [input, setInput] = useState<string>("");
    const [openFilterModal, setOpenFilterModal] = useState<boolean>(false);

    return (
        <div className='max-w-md mx-auto'>
            <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                <div className="grid place-items-center h-full w-12 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <input
                    className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                    type="text"
                    onChange={(e) => props.getFiltersData({ ...props.filters, address: e.target.value })}
                    placeholder="Search" />
                <button className="bg-red-200" onClick={() => setOpenFilterModal(true)}>
                    <BsFilterCircle />
                    Filters
                </button>
            </div>
            {openFilterModal && <FilterModal close={() => setOpenFilterModal(false)} filters={props.filters} getFiltersData={props.getFiltersData} />}
        </div>
    )
}

export { FilterBar };