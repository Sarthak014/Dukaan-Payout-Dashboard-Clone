import ChevronFillDownIcon from "../icons/chevronFillDownIcon";
import PayoutPaymentCard from "../common/payoutPaymentCard";
import cardList from "../data/cards-list";
import { tableData, tableHeader } from './../data/dukaan-table';
import TransactionTable from "./transactionTable";

const upcomingPayoutCard = cardList[0];
const payoutCards = cardList.slice(1);

const Page = () => {
  return (
    <main className="flex flex-col w-full gap-7 p-3 sm:p-8">
      <section className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h5 className="font-medium text-xl">Overview</h5>
          <button className="flex items-center border rounded gap-4 px-3 py-[6px] bg-white text-neutral-600 text-xs md:text-sm">
            This Month <ChevronFillDownIcon />
          </button>
        </div>

        {/* Payout Cards */}
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
          <div className="flex-grow basis-full lg:basis-2/6">
            <PayoutPaymentCard
              key={Symbol().toString()}
              title={upcomingPayoutCard.title}
              subTitle={upcomingPayoutCard.subTitle}
              amount={upcomingPayoutCard.amount}
              showFooter={upcomingPayoutCard.showFooter}
              bgColor={upcomingPayoutCard.bgColor}
              textColor={upcomingPayoutCard.textColor}
              hoverBgColor={upcomingPayoutCard.hoverBgColor}
              footerClass={upcomingPayoutCard.footerClass}
              classes={upcomingPayoutCard.classes}
            />
          </div>
          <div className="flex flex-wrap justify-between basis-full lg:basis-4/6 gap-3 lg:gap-4">
            {payoutCards.map(({title, subTitle, amount, showFooter, bgColor, textColor, hoverBgColor, footerClass}, index) => {
              return (
                <PayoutPaymentCard
                  key={index}
                  title={title}
                  subTitle={subTitle}
                  amount={amount}
                  showFooter={showFooter}
                  bgColor={bgColor}
                  textColor={textColor}
                  hoverBgColor={hoverBgColor}
                  footerClass={footerClass}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <h5 className="text-base md:text-lg xl:text-xl font-medium text-[#1A181E]">
            Transactions | This Month
          </h5>
          
          <div className="flex gap-3">
            <button className="bg-[#E6E6E6] text-[#808080] rounded-full px-4 py-[6px] text-[10px] md:text-xs lg:text-sm xl:text-base">
              Pending payout (22)
            </button>

            <button className="bg-[#146eb4] text-white rounded-full px-4 py-[6px] text-[10px] md:text-xs lg:text-sm xl:text-base">
              Completed payout (15)
            </button>

            <button className="bg-[#E6E6E6] text-[#808080] rounded-full px-4 py-[6px] text-[10px] md:text-xs lg:text-sm xl:text-base">
              Refunds (6)
            </button>
          </div>
        </div>

        <TransactionTable tableData={tableData} tableHeader={tableHeader} />
      </section>
    </main>
  );
};

export default Page;
