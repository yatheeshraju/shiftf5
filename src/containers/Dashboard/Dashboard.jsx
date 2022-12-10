import React from "react";
import { useState } from "react";
import Intro from "../../compoenents/Intro/Intro";
import ToolsList from "../../compoenents/ToolsList/ToolsList";

function Dashboard() {
  const [showPersonal, setshowPersonal] = useState(false);

  return (
    <div className="flex w-full flex-col justify-center" id="dashboard">
      <div className="mt-8 bg-white  shadow shadow-slate-300 border-slate-300">
        <Intro handleShowPersonal={() => setshowPersonal(true)} />
      </div>
      <div className="mt-14 bg-white shadow shadow-slate-300 border-slate-300">
        {showPersonal && <ToolsList />}
      </div>
    </div>
  );
}

export default Dashboard;
