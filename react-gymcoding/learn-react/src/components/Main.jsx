import { useState } from "react";
import Counter from "./Counter";

function Main() {
  const [total, setTotal] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleTotel = () => {
    setTotal(total + 1);
  }

  return (
    <main>
      <h2>total : {total}</h2>
      <h2>flag: {flag.toString()}</h2>
      <button onClick={()=>setFlag(!flag)}>toggle flag</button>
      <hr/>
      <Counter onTotal={handleTotel}/>
      <hr/>
      <Counter onTotal={handleTotel}/>
      <hr/>
      <Counter/>
    </main>
  )
}

export default Main;