import React, { useState } from "react";
import HOC from "./HOC";

const Button = ({ count, setCount }) => {
  return <button onClick={setCount}>Count is {count}</button>;
};

export default HOC(Button);
