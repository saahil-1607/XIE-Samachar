import React from "react";
import Logo from "../assets/logo.png";

function Loader() {
  return (
    <div className="h-screen w-full bg-gray-700 text-white flex items-center justify-center">
      <div>
        <div className="flex flex-col items-center animate-pulse">
          <img src={Logo} alt="logo" className="h-24" />
          <h1 className="text-3xl font-bold text-center font-serif">
            XIE Samachar
          </h1>
          <p className="text-center mt-2 italic">Loading...</p>
          {/* Basic Spinner Loader
          <div className="border-4 h-24 w-24 rounded-full border-r-0 border-b-2 animate-spin"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Loader;
