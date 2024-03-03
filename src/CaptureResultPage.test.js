import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CaptureResultPage from "./pages/CaptureResultPage";
import { CaptureProvider } from "./context/CaptureContext";
import { BrowserRouter } from "react-router-dom";

describe("CaptureResultPage Component", () => {
  test("renders without crashing", () => {
    render(
      <BrowserRouter>
        <CaptureProvider>
          <CaptureResultPage />
        </CaptureProvider>
      </BrowserRouter>
    );
  });

  test("renders Replay Game button present", () => {
    render(
      <BrowserRouter>
        <CaptureProvider>
          <CaptureResultPage />
        </CaptureProvider>
      </BrowserRouter>
    );
    expect(screen.getByRole("button",{name :'Replay Game'})).toBeInTheDocument();
  });

});
