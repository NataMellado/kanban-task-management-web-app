import React from "react";

const NewColumnCard = () => {
    return (
        <div className="w-75 text-wrap break-words font-bold shrink-0">
            <button className="bg-[#E9EFFA] rounded-[0.5rem] py-4 px-5 w-full text-left dark:bg-[#2b2c3750]">
                <h1 className="text-mediumGrey text-headingS tracking-headingS uppercase"><span className="text-headingL">+</span> Añade una columna</h1>
            </button>
        </div>
    );
};

export default NewColumnCard;

