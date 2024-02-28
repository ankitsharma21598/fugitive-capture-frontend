// CaptureResultPage.js

import React from "react";
import { useCaptureContext } from "../context/CaptureContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function CaptureResultPage() {
  const { captureResult, setResults } = useCaptureContext();
  const navigate = useNavigate();

  const getCopImage = (copName) => {
    try {
      // Dynamically import the cop image based on their name
      const image = require(`../assets/copImg/${copName}.png`);
      return (
        <img
          src={image}
          alt={copName}
          className="w-full h-auto mx-auto mb-4 md:w-100 md:h-80"
        />
      );
    } catch (error) {
      console.error(`Error loading image for ${copName}:`, error);
      return null;
    }
  };


  const handleReplayGame = () => {
    setResults([]);
    // Navigate to the game page
    navigate("/");
  };

  return (

      <div className="bg-gray-700 min-h-screen flex items-center justify-center mt-2">
        <ToastContainer />
        <div className="bg-gray-200 shadow-md rounded-lg p-6 text-gray-800 mt-20">
          <div className="content-container max-h-screen overflow-y-auto">
            {captureResult ? (
              <div>
                <div className="mb-8">
                  <h1 className="text-3xl font-bold mb-4">
                    Congrats fugitive captured by {captureResult.name}!!
                  </h1>
                  {getCopImage(captureResult.name)}
                  <h2 className="text-xl font-semibold mb-2">
                    Cop Name: {captureResult.name}
                  </h2>
                  <p className="mb-2">Selected City: {captureResult.city}</p>
                  <p>Selected Vehicle: {captureResult.vehicle}</p>
                  {/* Add more details as needed */}
                </div>
              </div>
            ) : (
              <p>No capture result available</p>
            )}
          </div>
          <button
            onClick={handleReplayGame}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z"
          >
            Replay Game
          </button>
        </div>
      </div>
  );
}

export default CaptureResultPage;
