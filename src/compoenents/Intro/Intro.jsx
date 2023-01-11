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
          <p className="text-lg text-gray-700  p-4">
            Don't wait until it's too late to protect your company's sensitive
            data. With our solution, you can take proactive steps to prevent
            data leaks and keep your business safe. To know more about our
            solution and how it can benefit your company please reach out to us
            for more information.
          </p>
          <p className="text-lg font-bold text-gray-700  p-4 ">
            But it isn't just about protection – it's also about convenience.
            Our user-friendly interface makes it easy for your team to access
            common tools without sacrificing security. Plus, our cloud-based
            platform allows you to use from any device, anywhere, at any time.
          </p>
          <p className="text-sm text-gray-700 sm:text-base p-4"></p>
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
        <div className="relative hidden sm:block sm:w-1/2">
          <img src={securedev} className="p-8" alt="secure user" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
