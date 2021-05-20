import "./App.css";
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState(80);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [alcohol, setAlcohol] = useState(0);

  const [beerBottles, setBeerBottles] = useState(1);
  const [BeerAlcoholProsent, setBeerAlcoholProsent] = useState(4.5);
  const [beerLitres, setBeerLitres] = useState(0.33);

  const [vinBottles, setVinBottles] = useState(0);
  const [VinAlcoholProsent, setVinAlcoholProsent] = useState(12.5);
  const [vinLitres, setVinLitres] = useState(0.14);

  const [brennevinBottles, setBrennevinBottles] = useState(0);
  const [BrennevinAlcoholProsent, setBrennevinAlcoholProsent] = useState(40);
  const [brennevinLitres, setBrennevinLitres] = useState(0.04);

  function handleSubmit(a) {
    a.preventDefault();
    let result = 0;

    let beer = beerBottles * beerLitres * 8 * BeerAlcoholProsent;
    let vin = vinBottles * vinLitres * 8 * VinAlcoholProsent;
    let brennevin =
      brennevinBottles * brennevinLitres * 8 * BrennevinAlcoholProsent;

    let grams = beer + vin + brennevin;

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
      <h1>Death trip alkometer</h1>
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
            value={beerBottles}
            onChange={(a) => setBeerBottles(a.target.value)}
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
            name="BeerAlcoholProsent"
            type="number"
            value={BeerAlcoholProsent}
            ng-model="model.field"
            step="0.5"
            min="0"
            max="100"
            ng-step="0.1"
            onChange={(a) => setBeerAlcoholProsent(a.target.value)}
          ></input>
        </div>

        <div className="form" id="b">
          <label>Vin:</label>
          <input
            className="form-control"
            name="vin"
            type="number"
            step="1"
            value={vinBottles}
            onChange={(a) => setVinBottles(a.target.value)}
          ></input>
          <select
            name="testname"
            id="testid"
            onChange={(a) => setVinLitres(a.target.value)}
          >
            <option value="0.14">0.14L</option>
            <option value="0.75">0.75L</option>
            <option value="1">1L</option>
          </select>
          <input
            className="form-control"
            name="VinAlcoholProsent"
            type="number"
            value={VinAlcoholProsent}
            ng-model="model.field"
            step="0.5"
            min="0"
            max="100"
            ng-step="0.1"
            onChange={(a) => setVinAlcoholProsent(a.target.value)}
          ></input>
        </div>

        <div className="form" id="b">
          <label>Brennevin:</label>
          <input
            className="form-control"
            name="brennevin"
            type="number"
            step="1"
            value={brennevinBottles}
            onChange={(a) => setBrennevinBottles(a.target.value)}
          ></input>
          <select
            name="testname"
            id="testid"
            onChange={(a) => setBrennevinLitres(a.target.value)}
          >
            <option value="0.04">0.04L</option>
            <option value="0.06">0.06L</option>
            <option value="0.08">0.08L</option>
          </select>
          <input
            className="form-control"
            name="BrennevinAlcoholProsent"
            type="number"
            value={BrennevinAlcoholProsent}
            ng-model="model.field"
            step="0.5"
            min="0"
            max="100"
            ng-step="0.1"
            onChange={(a) => setBrennevinAlcoholProsent(a.target.value)}
          ></input>
        </div>

        <div className="form">
          <label>Timer siden du inntok alkohol:</label>
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
          <label>Kjønn:</label>
          <input
            className="form-control"
            name="gender"
            type="radio"
            value="male"
            defaultChecked
            onChange={(a) => setGender(a.target.value)}
          ></input>
          <label>Mann</label>
          <input
            className="form-control"
            name="gender"
            type="radio"
            value="female"
            onChange={(a) => setGender(a.target.value)}
          ></input>
          <label>Kvinne</label>
        </div>

        <button>Kalkuler</button>

        <div className="form">
          <output>
            <h4>Din promille er rundt:</h4> <h4>{alcohol.toFixed(2)}</h4>
          </output>
        </div>
      </form>
    </div>
  );
}

export default App;
