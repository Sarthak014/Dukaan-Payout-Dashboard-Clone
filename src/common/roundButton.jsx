import PropTypes from "prop-types";

const RoundButton = ({ children }) => {
  return (
    <button className="flex items-center justify-center rounded-full p-2 w-8 h-8 sm:w-10 sm:h-10 text-[#4D4D4D] bg-[#E6E6E6]">
      {children}
    </button>
  );
};

RoundButton.propTypes = {
  children: PropTypes.element.isRequired,
};

export default RoundButton;
