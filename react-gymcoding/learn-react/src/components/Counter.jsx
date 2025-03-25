import { useState } from "react";

function Counter({onTotal}) {
  const [counter, setCounter] = useState(0); //[변수, 변수 설정 함수]
  const handleCounter = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);

    if(onTotal) {
      onTotal();
    }
  }
  return (
    <button onClick={handleCounter}>Counter: {counter}</button>
  )
}

export default Counter;