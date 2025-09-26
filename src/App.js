import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const handleIncrease = () => {
    if (count >= 10) {
      setMessage("You've reached the limit!");
      return;
    }
    setCount(count + 1);
    setMessage("");
  };

  const handleDecrease = () => {
    if (count <= 0) {
      setMessage("Counter cannot go below zero!");
      return;
    }
    setCount(count - 1);
    setMessage("");
  };

  return (
    <div className="container">
      <h1 className="title">Click Counter App</h1>
      <p className="count">{count}</p>
      <div className="buttonContainer">
        <button onClick={handleIncrease}>Increase Count</button>
        <button onClick={handleDecrease}>Decrease Count</button>
      </div>
      { message && <p className="message">{message}</p>}
    </div>
  );
}

export default App;
