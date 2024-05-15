import PropTypes from "prop-types";
import IoSearch from "../common/IoSearch";
import UpDownIcon from "../icons/upDownIcon";
import ArrowDownTrayIcon from './../icons/arrowDownTrayIcon';

const SquareButton = ({ label, Icon }) => {
  return (
    <button className="flex items-center border border-[#d9d9d9] text-[#4d4d4d] rounded gap-2 px-3 py-[6px]">
      {label && (<span className="text-[10px] md:text-xs lg:text-sm xl:text-base">{label}</span>)}
      {Icon && (
        <Icon />
      )}
    </button>
  );
};

const TransactionTable = ({ tableData, tableHeader }) => {
  return (
    <section className="flex flex-col px-3 p-3 gap-2 rounded-lg bg-white">
      <div className="flex items-center justify-between gap-3">
        <IoSearch classes="w-full max-w-80" type="text" placeholder="Order ID or transactions ID" />

        <div className="flex items-center gap-3">
          <SquareButton label="Sort" Icon={UpDownIcon} />
          <SquareButton Icon={ArrowDownTrayIcon} />
        </div>
      </div>

      <div className="overflow-x-auto pt-2">
        <table className="min-w-full">
          <colgroup>
            <col className="w-1/6" />
            <col className="w-1/6" />
            <col className="w-1/6" />
            <col className="w-1/6" />
            <col className="w-1/6" />
            <col className="w-1/6" />
          </colgroup>
          <thead className="text-[#4d4d4d]">
            <tr className="bg-[#f2f2f2]">
              {tableHeader && (
                tableHeader.map(({label, key}, index) => {
                  const leftRounded = index === 0 ? "rounded-l" : "";
                  const rightRounded = index === tableHeader.length-1 ? "rounded-r text-right" : "";

                  return (
                    <th key={key} className={`px-3 py-[10px] text-left text-sm font-medium tracking-wider ${leftRounded} ${rightRounded}`}>{label}</th>
                  );
                })
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-[#E6E6E6]">
            {tableData && (
              tableData.map((row, index) => {
                const statusColor = row.payoutStatus === "Successful" ? "bg-green-500" : "bg-[#999999]";

                return (
                  <tr className="text-sm relative" key={`transaction-row-${index}`}>
                    <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                      {row.payoutDate}
                    </td>
                    <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                      <span className={`w-[10px] h-[10px] rounded-full ${statusColor}`}></span>
                      {row.payoutStatus}
                    </td>
                    <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                      {row.transactionID}
                    </td>
                    <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                      {row.totalOrderAmount}
                    </td>
                    <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                      {row.gatewayFees}
                    </td>
                    <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                      {row.totalPayoutAmount}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

SquareButton.propTypes = {
  label: PropTypes.string,
  Icon: PropTypes.any
}

TransactionTable.propTypes = {
  tableData: PropTypes.array.isRequired,
  tableHeader: PropTypes.array.isRequired,
};

export default TransactionTable;
