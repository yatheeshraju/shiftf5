import React from "react";
import { Link } from "react-router-dom";

function Item({ data }) {
  const { name, id, icon } = data;
  return (
    <Link to={id}>
      <div className="h-32 px-4 bg-slate-100 flex flex-col justify-center items-center shadow shadow-slate-300 hover:shadow-slate-400">
        <div>{icon}</div>
        <div> {name}</div>
      </div>
    </Link>
  );
}

export default Item;
