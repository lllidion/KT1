import React, { useState } from "react";

const MyCustomComponent = () => {
  const [count, setCount] = useState(5);

  const myFunction = () => {
    let currentCount = count;
    while (currentCount <= 100) {
      setCount((prevCount) => prevCount + 7);
      currentCount += 7;
      console.log(currentCount);
    }
  };

  return (
    <div>
      <p>Значение count: {count}</p>
      <button onClick={() => myFunction()}>Клик</button>
    </div>
  );
};

export default MyCustomComponent;
