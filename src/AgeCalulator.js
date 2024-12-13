import React, { useState } from "react";

const AgeCalculator = ({ onClose }) => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);
  const calculateAge = () => {
    if (birthDate) {
      const birthYear = new Date(birthDate).getFullYear();
      const currentYear = new Date().getFullYear();
      setAge(currentYear - birthYear);
    } else {
      alert("Please Select a valid year!");
    }
  };
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Calculate Your Age</h2>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <button onClick={calculateAge}>Calculate Age</button>
        {age != null && <p>Your are {age} years young.</p>}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AgeCalculator;
