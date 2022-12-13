import React from "react";
import securedev from "./secure_dev.svg";
function Intro({ handleShowPersonal }) {
  return (
    <div className="relative z-20 flex items-center overflow-hidden bg-white ">
      <div className="container relative flex px-6 py-16 mx-auto">
        <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
          <span className="w-20 h-2 mb-12 bg-gray-800"></span>
          <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl">
            DON'T LEAK
            <span className="text-4xl sm:text-6xl">YOUR DATA</span>
          </h1>
          <p className="text-sm text-gray-700 sm:text-base ">
            Protect sensitive information from being accessed by un authorised
            individuals. Dont let your tokens be used to infiltrate your own
            systems. Try our free tools or Enterprise users please reach out to
            us .
          </p>
          <div className="flex mt-8">
            <button
              onClick={handleShowPersonal}
              className="px-4 py-2 mr-4 text-white uppercase bg-teal-500 border-2 border-transparent rounded-lg text-md hover:bg-teal-400"
            >
              PERSONAL / FREE
            </button>
            <a
              href="https://mn49dggb2zz.typeform.com/to/bspQITbQ"
              rel="noreferrer"
              target="_blank"
              className="px-4 py-2 text-teal-500 uppercase bg-transparent border-2 border-teal-500 rounded-lg  hover:bg-teal-500 hover:text-white text-md"
            >
              ENTERPRISE
            </a>
          </div>
        </div>
        <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
          <img
            src={securedev}
            className="max-w-xs m-auto md:max-w-sm"
            alt="secure user"
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
