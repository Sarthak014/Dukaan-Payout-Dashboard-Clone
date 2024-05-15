import PropTypes from "prop-types";
import QuestionMarkCircleIcon from "../icons/questionMarkCircleIcon";

const PayoutPaymentCard = ({
  title,
  subTitle,
  amount,
  showFooter = false,
  bgColor,
  textColor,
  hoverBgColor,
  footerClass,
  classes,
}) => {
  const bgCustomClass = bgColor ?? "bg-white";
  const textCustomClass = textColor ?? "text-[#4D4D4D]";
  const subTextCustomClass = textColor ?? "text-slate-500";
  const hoverCustomClass = hoverBgColor ? `hover:${hoverBgColor}` : "";
  const footerCustomClass = footerClass ?? "";
  const customClass = classes ?? "h-fit";

  return (
    <div
      className={`flex flex-col flex-1 rounded-lg shadow-sm min-w-[300px] cursor-pointer ${hoverCustomClass} ${bgCustomClass} ${customClass}`}
    >
      <div>
        <header className="flex flex-col p-2 sm:p-3 lg:p-4 gap-2">
          <h5
            className={`flex gap-2 lg:gap-3 items-center font-medium text-base md:text-lg ${textCustomClass}`}
          >
            {`${title} `}
            <QuestionMarkCircleIcon />
          </h5>
          {subTitle && (
            <p
              className={`text-[8px] lg:text-xs overflow-hidden whitespace-pre text-ellipsis ${subTextCustomClass}`}
            >{`( ${subTitle} )`}</p>
          )}
        </header>

        <div
          className={`flex justify-between items-center p-2 sm:p-3 lg:p-4 gap-4 ${textCustomClass}`}
        >
          <p className="text-xl md:text-2xl font-semibold">{`₹${amount}`}</p>
        </div>
      </div>

      {showFooter && (
        <footer
          className={`flex justify-between rounded-lg px-6 py-4 ${textCustomClass} ${footerCustomClass}`}
        >
          <p>Payment Due Date:</p>
          <p>Today, 4:00PM</p>
        </footer>
      )}
    </div>
  );
};

PayoutPaymentCard.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  amount: PropTypes.string.isRequired,
  showFooter: PropTypes.bool,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  hoverBgColor: PropTypes.string,
  footerClass: PropTypes.string,
  classes: PropTypes.string,
};

export default PayoutPaymentCard;
