import React from 'react';
import PropTypes from 'prop-types';


const IoSearch = ({ type, placeholder, classes }) => {
    return (
        <div className={`flex items-center gap-2 sm:flex-grow rounded bg-[#F2F2F2] text-[#808080] px-4 py-1.5 sm:py-[9px] ${classes ?? ""}`}>
          <input
            type={type}
            placeholder={placeholder}
            className="w-full bg-transparent outline-none placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base"
          />
        </div>
    );
};


IoSearch.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    classes: PropTypes.string
};


export default IoSearch;
