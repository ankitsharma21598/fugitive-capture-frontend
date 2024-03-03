// CaptureContext.js

import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// Create a context for the CaptureProvider
const CaptureContext = createContext();

// Custom hook to use the CaptureContext
export const useCaptureContext = () => useContext(CaptureContext);

// CaptureProvider component to manage state and handle capture functionality
export const CaptureProvider = ({ children }) => {
  const navigate = useNavigate();
  const [results, setResults] = useState([]); // State to store cop selections
  const [captureResult, setCaptureResult] = useState(null); // State to store capture result

  // Function to add a new cop selection
  const addCop = () => {
    setResults((prevResults) => [
      ...prevResults,
      {
        copName: `Cop ${prevResults.length + 1}`,
        selectedCity: "",
        selectedVehicle: "",
      },
    ]);
  };

  // Function to handle city selection for a cop
  const handleSelectCity = (index, city) => {
    setResults((prevResults) => {
      const updatedResults = [...prevResults];
      updatedResults[index] = {
        ...updatedResults[index],
        selectedCity: city,
      };
      return updatedResults;
    });
  };

  // Function to handle vehicle selection for a cop
  const handleSelectVehicle = (index, vehicle) => {
    setResults((prevResults) => {
      const updatedResults = [...prevResults];
      updatedResults[index] = {
        ...updatedResults[index],
        selectedVehicle: vehicle,
      };
      return updatedResults;
    });
  };

  // Function to handle the capture process
  const handleCapture = async () => {
    try {
      // Send POST request to the backend endpoint for capture
      const response = await axios.post(`https://fugitive-capture-backend.vercel.app/capture`, {
        copSelections: results.map(
          ({ copName, selectedCity, selectedVehicle }) => ({
            name: copName,
            city: selectedCity,
            vehicle: selectedVehicle,
          })
        ),
      });

      // Extract capture result from the response data
      const captureResult = response.data.capturingCop;

      // Check if captureResult is an object
      if (typeof captureResult === "object" && captureResult !== null) {
        // Update results and captureResult state
        const updatedResults = Object.keys(captureResult).map((copName) => ({
          copName,
          captureResult: captureResult[copName],
        }));
        setResults(updatedResults);
        setCaptureResult(captureResult);
        // Navigate to the capture result page
        navigate("/capture-result");
      } else {
        // Handle the case where captureResult is not an object
        toast(`${response.data.message}!!`);
        console.error("Error: captureResult is not an object");
        setCaptureResult(null);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Log the capture result for debugging
  console.log("capture result", captureResult);

  // Provide the CaptureContext with values and functions
  return (
    <CaptureContext.Provider
      value={{
        results,
        setResults,
        captureResult,
        addCop,
        handleSelectCity,
        handleSelectVehicle,
        handleCapture,
      }}
    >
      {children}
    </CaptureContext.Provider>
  );
};
