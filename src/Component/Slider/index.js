import React from 'react';
import Slider from "react-input-slider";
import './slider.css';
import { useState } from 'react';
function SliderComponent() {
  const [state, setState] = useState({x: 1});
  return (
      <div className="horizontal-slider">
        <Slider
            axis="x"
            x={state.x}
            onChange={({ x }) => setState(state => ({ ...state, x }))}
            xmin={1}
            xmax={1000}
        />
        {(state.x != 1) ? <h3>{state.x} sq. miles</h3> : <h3>{state.x} sq. mile</h3>}
      </div>
  );
}

export default SliderComponent;