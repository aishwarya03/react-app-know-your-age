import "./styles.css";
import AgeCalculator from "../AgeCalulator";
import { useState } from "react";

export default function App() {
  const [showPopUp, setShowPopUp] = useState(false);
  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <button onClick={togglePopUp}>Know Your Age</button>
      {showPopUp && <AgeCalculator onClose={togglePopUp} />}
    </div>
  );
}
