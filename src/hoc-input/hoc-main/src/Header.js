import React from "react";
import HOC from "./HOC";

const Header = ({ count, setCount }) => {
  return <h2 onMouseOver={setCount}>{count}</h2>;
};

export default HOC(Header);
