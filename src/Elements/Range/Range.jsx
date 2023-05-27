import React, { useState } from "react";
import cl from "./Range.module.scss";

const Range = ({ min, max, valsmin, valsmax }) => {
  const [currMin, setCurrMin] = useState(valsmin[0]);
  const [currMax, setCurrMax] = useState(valsmax[0]);

  const setMax = (value) => {
    const maxl = valsmin[0] > value ? valsmin[0] : max < value ? max : value;
    setCurrMax(maxl);
    valsmax[1](maxl);
  };
  const setMin = (value) => {
    const minl = valsmax[0] < value ? valsmax[0] : min > value ? min : value;
    setCurrMin(minl);
    valsmin[1](minl);
  };
  return (
    <div className={cl.Range}>
      <div class={cl.sliders_control}>
        <input
          className={cl.fromSlider}
          type="range"
          value={currMin}
          onChange={(e) => setMin(e.target.value)}
          min={min}
          max={max}
        />
        <input
          className={cl.toSlider}
          type="range"
          value={currMax}
          onChange={(e) => setMax(e.target.value)}
          min={min}
          max={max}
        />
      </div>
      <div class={cl.form_control}>
        <div class={cl.Text}>
          <div className={cl.Info}>От:</div>
          <input
            class={cl.Number}
            type="number"
            value={currMin}
            onChange={(e) => setCurrMin(e.target.value)}
            onBlur={() => setMin(currMin)}
            min={min}
            max={max}
          />
        </div>
        <div class={cl.Text}>
          <div className={cl.Info}>До:</div>
          <input
            class={cl.Number}
            type="number"
            value={currMax}
            onChange={(e) => setCurrMax(e.target.value)}
            onBlur={() => setMax(currMax)}
            min={min}
            max={max}
          />
        </div>
      </div>
    </div>
  );
};

export default Range;
