import React, { useState } from 'react';
import Sidebar from '../navigations/Sidebar';

const Layout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleToggleSidebar = (collapsed) => {
    setSidebarCollapsed(collapsed); 
  };

  return (
    <div className="w-full h-screen">
      <div className="flex flex-no-wrap overflow-x-hidden h-full">
        <div className={`overflow-y-auto ${sidebarCollapsed ? 'w-30' : 'w-80'} transition-all transition-duration-300 ease-in bg-blue-800 text-white`}>
          <Sidebar onToggleSidebar={handleToggleSidebar} /> 
        </div>
        <div id="main-content" className="overflow-y-auto w-full p-5 bg-[#eee]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
