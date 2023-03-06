import React from "react";
import { Link } from "react-router-dom";

function Item({ data }) {
  const { name, id, icon } = data;
  return (
    <Link to={id}>
      <div className="h-24 px-4 bg-slate-100 flex flex-col justify-center items-center">
        <div>{icon}</div>
        <div> {name}</div>
      </div>
    </Link>
  );
}

export default Item;
