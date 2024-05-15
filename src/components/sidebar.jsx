import { useContext, useRef } from "react";
import nishyan from "../assets/icons/nishyan.svg";
import ChevronFillDownIcon from "../icons/chevronFillDownIcon";
import menuLists from "./../data/sidebar-menu-list";
import wallet from "../assets/icons/wallet.svg";
import { SidebarContext } from "../utilities/sidebarContext";
import CloseCircleIcon from "../icons/closeCircleIcon";

const Sidebar = () => {
  const sidebarRef = useRef(null);
  const { isOpen, handleToggleSidebar } = useContext(SidebarContext);

  return (
    <>
      <aside
        className={`fixed lg:sticky left-0 top-0 z-10 h-dvh w-full lg:max-w-56 overflow-hidden transition-all duration-300 ${
          isOpen
            ? "pointer-events-all opacity-100"
            : "pointer-events-none opacity-0 lg:opacity-100 lg:pointer-events-auto"
        }`}
      >
        <div className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>

        {/* sidebar close icon */}
        <button
          className={`${isOpen ? "fixed" : "hidden"} top-5 right-4 lg:hidden`}
          onClick={handleToggleSidebar}
        >
          <CloseCircleIcon />
        </button>

        <div
          className={`flex flex-col relative mr-auto px-2 py-4 max-w-56 h-dvh gap-4 justify-between bg-[#1e2640] transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
          ref={sidebarRef}
        >
          <div className="flex flex-col items-center gap-6 w-full">
            {/* Sidebar Header */}
            <div className="flex items-center gap-3 w-fit mx-auto text-white">
              <div className="rounded-md m-[0.5px] relative bg-white w-9 h-9">
                <img
                  src={nishyan}
                  alt="nishyanLogo"
                  className="object-cover object-center"
                />
              </div>
              <div className="flex flex-col gap-1 w-28 justify-center">
                <h3 className="font-medium text-xs">Nishyan</h3>
                <a href={"#nishyan-store"} className="underline text-xs font-extralight w-fit">
                  Visit Store
                </a>
              </div>
              <ChevronFillDownIcon />
            </div>

            {/* Sidebar content */}
            <div className="w-full flex-col gap-4">
              {menuLists.map((item, index) => (
                <a
                  key={`${item.name}-${index}`}
                  href={`#${item.name}`}
                  className={`${
                    item.name === "Payouts" ? "bg-[#FFFFFF]/10" : ""
                  } flex items-center px-4 py-2 gap-3 rounded-md text-gray-300 hover:bg-white/10`}
                >
                  <div className="relative w-4 md:w-5 h-4 md:h-5">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="object-cover object-center"
                    />
                  </div>
                  <p className="font-medium text-sm">{item.name}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="py-2 px-2 bg-[#353c53] mx-2 rounded">
            <div className="flex gap-3 items-center">
              <div className="flex justify-center items-center w-9 h-9 rounded bg-white/10 p-[6px]">
                <img src={wallet} alt="wallet_icon" height={19.6} width={23.65} />
              </div>
              <div className="flex flex-col text-white gap-1">
                <h4 className="text-[13px] text-white font-light">
                  Available Credit
                </h4>
                <h6 className="text-base font-normal">2,224.90</h6>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
