import { useState } from "react";
import Button from "./ui/Button";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  console.log(`<Counter /> rendered`);
  return (
    <div>
      <h3>Counter: {counter}</h3>
      <div className="flex justify-center mb-10">
        <Button onClick={() => setCounter(prev => prev + 1)}>Increase counter</Button>
      </div>
    </div>
  );
};

export default Counter;
