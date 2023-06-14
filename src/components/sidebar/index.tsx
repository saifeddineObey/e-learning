import { useState } from "react";
import Navigaion from "./navigation";
import Contact from "./contact";

import "./sidebar.css";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="sidebar" data-testId="sidebar">
      <div className="btn-container">
        <button
          className={`side-menu-btn${isSidebarOpen ? " open" : ""}`}
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="sidebar-web" data-testId="sidebar-web">
        <Navigaion />
        <Contact />
      </div>
      <div className={`${isSidebarOpen ? " sidebar-mobile" : "closed"}`} data-testId="sidebar-mobile">
        <Navigaion />
        <Contact />
      </div>
    </div>
  );
};

export default Sidebar;
