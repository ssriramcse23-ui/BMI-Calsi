import "./App.css";
import bmiImage from "./assets/bmi.png";
import { useState } from "react";

export default function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [color, setColor] = useState("");

  const calculateBmi = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      if (bmiValue < 18.5) {
        setBmiStatus("Underweight");
        setColor("statusUnder");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiStatus("Normal Weight");
        setColor("statusNormal");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiStatus("Overweight");
        setColor("statusOver");
      } else {
        setBmiStatus("Obese");
        setColor("statusObese");
      }
    } else {
      setBmi(null);
      setBmiStatus("");
    }
  };
  return (
    <>
      <div className="bmi-calculator">
        <div className="image">
          <img src={bmiImage} alt="BMI Image" />
        </div>
        <div className="box">
          <div className="data">
            <h1>BMI Calculator</h1>

            <div className="input-container">
              <label htmlFor="height">Height (cm) : </label>
              <input
                type="text"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>

            <div className="input-container">
              <label htmlFor="weight">Weight (kg) : </label>
              <input
                type="text"
                id="weight"
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <button onClick={calculateBmi}>Calculate</button>

            {bmi !== null && (
              <div className="result">
                <p>Your BMI is : {bmi}</p>
                <p className={color}>Status : {bmiStatus}</p>
              </div>
      
            )}
          </div>
        </div>
      </div>
    </>
  );
}
