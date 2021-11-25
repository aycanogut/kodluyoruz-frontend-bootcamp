import React, { useState } from "react";

const HOC = (Component) => {
  const NewComponent = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
      setCount(count + 1);
    };

    return <Component count={count} setCount={handleClick} />;
  };

  return NewComponent;
};

export default HOC;
