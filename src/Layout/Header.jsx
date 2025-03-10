import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../Redux-toolkit/Slices/AuthSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="flex border-b py-3 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[65px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center gap-4 max-w-screen-xl mx-auto w-full">
       

        <div className="flex gap-4 ml-auto">
          <ul className="lg:flex lg:ml-14 lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            
             
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <button onClick={() => dispatch(logout())} className="lg:hover:text-[#007bff] text-white-300 block text-[15px] p-2 bg-red-500 border-teal-100">
                Logout
              </button>
            </li>
          </ul>
           
        </div>
      </div>
    </header>
  );
};

export default Header;
