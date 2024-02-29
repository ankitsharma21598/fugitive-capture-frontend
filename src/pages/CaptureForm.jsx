import React, { useEffect } from "react";
import { useCaptureContext } from "../context/CaptureContext";
import CopSelectionCity from "../components/CopSelectionCity";
import CopSelectionVehicle from "../components/CopSelectionVehicle";
import { ToastContainer } from "react-toastify";
import image from "../assets/fugitive-image.png";

const cities = [
  "Yapkashnagar",
  "Lihaspur",
  "Narmis City",
  "Shekharvati",
  "Nuravgram",
];
const vehicles = ["EV Bike", "EV Car", "EV SUV"];

function CaptureForm() {
  const {
    results,
    addCop,
    handleSelectCity,
    handleSelectVehicle,
    handleCapture,
  } = useCaptureContext();

  useEffect(() => {
    // Add a default cop if the results array is empty
    if (results.length === 0) {
      addCop();
    }
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="min-h-screen bg-gray-500 flex flex-col mt-16">
      <div className="py-20 flex flex-col sm:flex-row sm:justify-between items-center w-full px-4">
        <ToastContainer />
        <div className="flex justify-center items-center">
          <img
            src={image}
            alt="Fugitive"
            className="max-w-full h-auto rounded-lg "
          />
        </div>

        <div className="mr-0 md:mr-30 lg:mr-40">
          <div className="flex invisible lg:visible md:visible">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              City Selection
            </h2>

            <h2 className="text-2xl font-bold mb-4 text-gray-800 ml-8">
              Vehicle Selection
            </h2>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row items-start sm:items-center mr-8">
              {results.map((cop, index) => (
                <div key={index} className="w-full sm:w-auto mb-8 flex flex-col mr-4 sm:mr-8">
                  <div className="sm:hidden">
                    <CopSelectionCity
                      copName={cop.copName}
                      cities={cities}
                      selectedCity={cop.selectedCity}
                      onSelectCity={(city) => handleSelectCity(index, city)}  
                    />
                  </div>
                  <div className="sm:hidden">
                    <CopSelectionVehicle
                      copName={cop.copName}
                      vehicles={vehicles}
                      selectedVehicle={cop.selectedVehicle}
                      onSelectVehicle={(vehicle) =>
                        handleSelectVehicle(index, vehicle)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="hidden sm:flex flex-col">
                {results.map((cop, index) => (
                  <div key={index} className="mb-8 flex flex-col sm:flex-row">
                    <div className="mr-8">
                      <CopSelectionCity
                        copName={cop.copName}
                        cities={cities}
                        selectedCity={cop.selectedCity}
                        onSelectCity={(city) => handleSelectCity(index, city)}
                      />
                    </div>
                    <div>
                      <CopSelectionVehicle
                        copName={cop.copName}
                        vehicles={vehicles}
                        selectedVehicle={cop.selectedVehicle}
                        onSelectVehicle={(vehicle) =>
                          handleSelectVehicle(index, vehicle)
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-center sm:justify-start">
            <button
              onClick={addCop}
              className={`hover:bg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                results.length >= 3 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={results.length >= 3}
            >
              Add Cop
            </button>
            <button
              onClick={handleCapture}
              className="ml-4 hover:bg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Capture Fugitive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaptureForm;
