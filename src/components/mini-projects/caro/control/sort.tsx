import React from "react";
interface CaroStepSortProps {
    setASC: React.Dispatch<React.SetStateAction<boolean>>;
}
const CaroStepSort = ({ setASC }: CaroStepSortProps) => {
    return (
        <button className=" h-8 font-bold   bigPhone:font-normal bigPhone:mb-1" onClick={() => setASC((prev) => !prev)}>
            Sort
        </button>
    );
};

export default CaroStepSort;
