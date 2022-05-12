import React from 'react';
import useCollapse from 'react-collapsed';
import SliderComponent from "../Slider";
import TerrainSelector from "../TerrainSelector";
import './index.css';
function Collapsible() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
      <div className="collapsible">
        <div className="header" {...getToggleProps()}>
          {isExpanded ? 'Collapse' : 'Expand'}
        </div>
        <div {...getCollapseProps()}>
          <div className="content">
            <SliderComponent/>
            <TerrainSelector/>
          </div>
        </div>
      </div>
  );
}

export default Collapsible;