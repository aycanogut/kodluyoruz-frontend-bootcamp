import React, { useRef, useState } from "react";

const Input = (props) => {
  const [count, setCount] = useState(0);

  const inputRef = useRef([]);

  inputRef.current = [0, 0, 0, 0].map(
    (ref, index) => (inputRef.current[index] = React.createRef())
  );

  const changeFocus = (e, index) => {
    setCount(count + 1);
    inputRef.current[index].current.select();
  };

  return [0, 0, 0, 0].map((el, index, key) => (
    <input
      key={index}
      type="text"
      ref={inputRef.current[index]}
      onChange={changeFocus}
    />
  ));
};

export default Input;
