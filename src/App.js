import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function decreaseHandler() {
    setCount(count - 1);
  }
  function increaseHandler() {
    setCount(count + 1);
  }
  function resetHandler() {
    setCount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10 ">
      <div className="text-[#0398d4] font-medium text-2xl ">
        Increment and Decrement
      </div>{" "}
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <div>
          <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[3bfbfbf] text-5xl">-</button>
        </div>
        <div className="border-r-2 text-center w-20 border-[3bfbfbf] text-5xl">{count}</div>
        <div>
          <button onClick={increaseHandler} className="border-r-2 text-center w-20 border-[3bfbfbf] text-5xl">+</button>
        </div>
      </div>
      <button
        onClick={resetHandler}
        className="border border-solid p-2 text-black bg-blue rounded"
      >
        Reset
      </button>
    </div>
  );
}

export default App;
