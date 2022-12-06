import React, { useEffect } from "react";
import "./CodeSearch.css";

function CodeSearch() {
  useEffect(() => {
    (function () {
      var cx = "711bad7e466694b8c";
      var gcse = document.createElement("script");
      gcse.type = "text/javascript";
      gcse.async = true;
      gcse.src = "https://cse.google.com/cse.js?cx=" + cx;
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(gcse, s);
    })();
  }, []);

  return (
    <div className="container  flex flex-col p-2 justify-center items-center ">
      <div className="text-2xl"> Code Search</div>
      <div className="w-1/2">
        <div class="gcse-search" target="_blank"></div>
      </div>
    </div>
  );
}

export default CodeSearch;
