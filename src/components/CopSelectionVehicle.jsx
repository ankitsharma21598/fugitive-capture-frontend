// CopSelectionVehicle.js

import React from 'react';

const CopSelectionVehicle = ({ copName, vehicles, selectedVehicle, onSelectVehicle }) => {
  return (
    <div className="mb-4">
      <label className="block text-white font-bold mb-2">{copName}'s Vehicle:</label>
      <select
        value={selectedVehicle}
        onChange={(e) => onSelectVehicle(e.target.value)}
        className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
      >
        <option value="">Select a vehicle</option>
        {vehicles.map(vehicle => (
          <option key={vehicle} value={vehicle}>{vehicle}</option>
        ))}
      </select>
    </div>
  );
};

export default CopSelectionVehicle;
