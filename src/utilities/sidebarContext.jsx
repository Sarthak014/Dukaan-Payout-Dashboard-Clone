import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const SidebarContext = createContext(null);

export const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleSidebar = () => {
        setIsOpen((prevValue) => !prevValue);
    };

    return (
        <SidebarContext.Provider value={{isOpen, handleToggleSidebar}}>
            {children}
        </SidebarContext.Provider>
    );
};

SidebarProvider.propTypes = {
    children: PropTypes.any
};
