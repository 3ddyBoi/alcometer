import "./App.css";
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState(80);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [alcohol, setAlcohol] = useState(0);
  const [alcoholprosent, setAlcoholprosent] = useState(4.5);

  const [beerLitres, setBeerLitres] = useState(0.33);

  function handleSubmit(a) {
    a.preventDefault();
    let result = 0;
    let litres = bottles * beerLitres;
    let grams = litres * 8 * alcoholprosent;
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
            onChange={(a) => setWeight(a.target.value)}
          ></input>
        </div>

        <div className="form" id="a">
          <label>Øl:</label>
          <input
            className="form-control"
            name="bottles"
            type="number"
            step="1"
            value={bottles}
            onChange={(a) => setBottles(a.target.value)}
          ></input>
          <select
            name="testname"
            id="testid"
            onChange={(a) => setBeerLitres(a.target.value)}
          >
            <option value="0.33">0.33</option>
            <option value="0.5">0.5</option>
            <option value="0.275">0.275</option>
          </select>
          <input
            className="form-control"
            name="alcoholprosent"
            type="number"
            value={alcoholprosent}
            ng-model="model.field"
            step="0.5"
            min="0"
            max="100"
            ng-step="0.1"
            onChange={(a) => setAlcoholprosent(a.target.value)}
          ></input>
        </div>

        <div className="form">
          <label>Time:</label>
          <input
            className="form-control"
            name="time"
            type="number"
            step="1"
            value={time}
            onChange={(a) => setTime(a.target.value)}
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
            onChange={(a) => setGender(a.target.value)}
          ></input>
          <label>Male</label>
          <input
            className="form-control"
            name="gender"
            type="radio"
            value="female"
            onChange={(a) => setGender(a.target.value)}
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
