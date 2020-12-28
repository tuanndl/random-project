import React, { useState } from "react";
import PropTypes from "prop-types";

import "./RandomNumber.scss";

const randomNumber = (props) => {
  const [state, setState] = useState({ min: 1, max: 100 });
  const [result, setResult] = useState(null);

  const onChange = (e) => {
    let { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: parseInt(value) }));
  };

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const random = () => {
    let { max, min } = state;
    if (min > max) {
      max = min + 1;
    }

    setState((prev) => ({ ...prev, max }));

    return setResult(getRandomInt(max - min) + min);
  };

  return (
    <div className="random--number">
      <h3>Quay số ngẫu nhiên</h3>
      <div className="random--div">
        <label>Min:</label>
        <input name="min" value={state.min} onChange={onChange} type="number" />
      </div>
      <div>
        <label>Max:</label>
        <input name="max" value={state.max} onChange={onChange} type="number" />
      </div>

      <div>
        <button className="btn-sm" onClick={random}>
          Quay số
        </button>
      </div>

      <div>
        <p className="result">
          Kết quả: <span>{result !== null ? result : ""}</span>
        </p>
      </div>
    </div>
  );
};

randomNumber.propTypes = {};

export default randomNumber;
