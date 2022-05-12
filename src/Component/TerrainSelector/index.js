import React from 'react';
import { useState } from 'react';

function TerrainSelector() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
      <select>
        <option value={15}>Flat</option>
        <option value={8}>Hilly</option>
        <option selected value={3}>Forest</option>
        <option value={0.3}>Mountains</option>
      </select>
  );
}

export default TerrainSelector;