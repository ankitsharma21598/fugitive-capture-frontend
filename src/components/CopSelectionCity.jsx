// CopSelectionCity.js

import React from 'react';

const CopSelectionCity = ({ copName, cities, selectedCity, onSelectCity }) => {
  return (
    <div className="mb-4">
      <label className="block text-white font-bold mb-2">{copName}'s City:</label>
      <select
        value={selectedCity}
        onChange={(e) => onSelectCity(e.target.value)}
        
        className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
      >
        <option value="" id='check'>Select a city</option>
        {cities && cities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
    </div>
  );
};

export default CopSelectionCity;
