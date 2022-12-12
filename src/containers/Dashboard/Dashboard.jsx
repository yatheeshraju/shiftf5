import React from "react";
import { useState } from "react";
import Faq from "../../compoenents/Faq/Faq";
import Footer from "../../compoenents/Footer/Footer";
import Intro from "../../compoenents/Intro/Intro";
import Stats from "../../compoenents/Stats/Stats";
import ToolsList from "../../compoenents/ToolsList/ToolsList";

function Dashboard() {
  const [showPersonal, setshowPersonal] = useState(false);

  return (
    <div
      className=" flex w-full  flex-col justify-center dark:bg-zinc-600"
      id="dashboard"
    >
      <div className="mt-8  dark:bg-zinc-800">
        <Intro handleShowPersonal={() => setshowPersonal(!showPersonal)} />
      </div>
      <div className="mt-4 bg-white shadow shadow-slate-300 border-slate-300">
        {showPersonal && <ToolsList />}
      </div>
      <div className="mt-4 bg-white shadow shadow-slate-300 border-slate-300">
        <Stats />
      </div>
      <div className="mt-4">
        <Faq />
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
