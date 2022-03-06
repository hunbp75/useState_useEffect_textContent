// számolja és kiirja a button-on végrehajtott kattintásokat
import { useState } from "react";

const CountButton = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Count the click on the button</h3>
      <button onClick={() => setCount(count + 1)}>Count Button {count}</button>
    </div>
  );
};

export default CountButton;
