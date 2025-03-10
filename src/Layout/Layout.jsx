import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col ml-64">
          <Header />
          <main className="p-6 flex-1 overflow-auto">
            <p className="text-gray-700">Your content goes here...</p>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
