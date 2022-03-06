import { useEffect, useState } from "react";

const ClickButtonAlert = () => {
  const [count, setCount] = useState(-1);
  const [click, setClick] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [click]);

  return (
    <div>
      <h3>Click on the button</h3>

      <button onClick={() => setClick(click + 1)}>Count: {count}</button>
    </div>
  );
};

export default ClickButtonAlert;
