import { useState } from "react";
import "./style.css";

const fruitData = [
  "Banana",
  "Apple",
  "Orange",
  "Mango",
  "Pineapple",
  "Watermelon",
  "Strawberry",
  "Persimmon",
];

function FruitList() {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filterFunc = (data) => {
    if (filter === "") return true;
    const dlc = data.toLowerCase();
    const flc = filter.toLowerCase();
    return dlc.search(flc) !== -1;
  };

  return (
    <div className="wrapper">
      <div className="input-wrapper">
        <label for="inputFilter">Search</label>
        <input id="inputFilter" value={filter} onChange={handleFilterChange} />
      </div>
      <div className="data-wrapper">
        <ul className="fruit-list">
          {fruitData.filter(filterFunc).map((data) => (
            <li key={data}>{data}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FruitList;
