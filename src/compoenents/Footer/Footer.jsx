import React from "react";

function Footer() {
  return (
    <footer className="px-3 py-8  text-gray-500 transition-colors duration-200 bg-white">
      <div className="flex flex-col">
        <div className="flex flex-col mt-4 md:mt-0 md:flex-row">
          <div className="flex items-center justify-center flex-1 mt-7 md:mt-0 md:items-start md:pl-5">
            <span className="mt-7 flex gap-2 md:mt-1">
              <span> © 2022 Created by</span>
              <a
                className="underline hover:text-primary-gray-20"
                href="https://www.linkedin.com/in/yatheeshkonduru/"
              >
                Yatheesh
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
