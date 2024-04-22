import { useCallback, useMemo, useState } from "react";
import Title from "./components/Title";
import ShowCount from "./components/ShowCount";
import Button from "./components/Button";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);

  const incrementFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  const isEvenOrOdd = useMemo(() => {
    let i = 0;
    while (i < 10000000) {
      i++;
    }
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div className="App">
      <Title />
      <ShowCount count={count1} title="Counter 1" />
      <span>{isEvenOrOdd ? "Even" : "Odd"}</span>
      <Button handleClick={incrementOne}>Increment by one</Button>
      <hr />
      <ShowCount count={count2} title="Counter 2" />
      <Button handleClick={incrementFive}>Increment by Five</Button>
    </div>
  );
}

export default App;
