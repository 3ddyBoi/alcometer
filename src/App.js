import "./App.css";
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState(80);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [alcohol, setAlcohol] = useState(0);

  const [beerLitres, setBeerLitres] = useState(0.33);

  function handleSubmit(e) {
    e.preventDefault();
    let result = 0;
    let litres = bottles * beerLitres;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let leftover = grams - burning * time;

    if (gender === "male") {
      result = leftover / (weight * 0.7);
    } else {
      result = leftover / (weight * 0.6);
    }
    setAlcohol(result);
  }

  return (
    <div className="App">
      <h1>Promillekalkulator</h1>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label>Vekt:</label>
          <input
            className="form-control"
            name="weight"
            type="number"
            step="1"
            placeholder={weight}
            onChange={(e) => setWeight(e.target.value)}
          ></input>
        </div>

        <div className="form">
          <label>Øl 4.5 vol:</label>
          <input
            className="form-control"
            name="bottles"
            type="number"
            step="1"
            value={bottles}
            onChange={(e) => setBottles(e.target.value)}
          ></input>
          <select
            name="testname"
            id="testid"
            onChange={(e) => setBeerLitres(e.target.value)}
          >
            <option value="0.33">0.33</option>
            <option value="0.5">0.5</option>
            <option value="0.275">0.275</option>
          </select>
        </div>

        <div className="form">
          <label>Time:</label>
          <input
            className="form-control"
            name="time"
            type="number"
            step="1"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          ></input>
        </div>

        <div className="form">
          <label>Gender:</label>
          <input
            className="form-control"
            name="gender"
            type="radio"
            value="male"
            defaultChecked
            onChange={(e) => setGender(e.target.value)}
          ></input>
          <label>Male</label>
          <input
            className="form-control"
            name="gender"
            type="radio"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          ></input>
          <label>Female</label>
        </div>

        <button>Calculate</button>

        <div className="form">
          <output>
            {" "}
            <h4>{alcohol.toFixed(2)}</h4>
          </output>
        </div>
      </form>
    </div>
  );
}

export default App;
