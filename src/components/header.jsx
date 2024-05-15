import ChatBubbleOvalLeftEllipsisIcon from './../icons/chatBubbleOvalLeftEllipsisIcon';
import QuestionMarkCircleIcon from '../icons/questionMarkCircleIcon';
import RoundButton from "../common/roundButton";
import ChevronFillDownIcon from '../icons/chevronFillDownIcon';
import IoSearch from "../common/IoSearch";
import { SidebarContext } from "../utilities/sidebarContext";
import HamburgerMenuIcon from "../icons/HamburgerMenuIcon";
import { useContext } from "react";

const Header = () => {
  const {handleToggleSidebar} = useContext(SidebarContext);

  return (
    <header
      className="
        flex
        justify-between
        items-center
        gap-2
        sm:gap-4
        px-4
        sm:px-8
        py-3
        border-b
        border-[#D9D9D9]
        sticky
        top-0
        bg-[#FFFFFF]
        opacity-100
        z-20
      "
      role="banner"
    >
      {/* Header Title */}
      <div className="flex gap-2 sm:gap-4 items-center sm:flex-grow select-none">
        <button className="block lg:hidden" onClick={() => handleToggleSidebar()}>
          <HamburgerMenuIcon />
        </button>
        <h5 className="text-[#1A181E] font-medium text-xl lg:text-2xl">
          Payments
        </h5>
        <div className="flex items-center gap-[6px] text-[#4D4D4D] cursor-pointer">
          <QuestionMarkCircleIcon />
          <p className="hidden md:block text-xs">How its works</p>
        </div>
      </div>

      {/* Header Search bar */}
      <IoSearch type="text" placeholder="Search feature, tutorials etc." />

      {/*  */}
      <div className="flex sm:flex-grow items-center gap-2 justify-end">
        <RoundButton>
          <ChatBubbleOvalLeftEllipsisIcon />
        </RoundButton>

        <RoundButton>
          <ChevronFillDownIcon />
        </RoundButton>
      </div>
    </header>
  );
};

export default Header;
