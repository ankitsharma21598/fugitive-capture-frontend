import React from "react";
import { render, screen } from "@testing-library/react";
import CopSelectionCity from "./components/CopSelectionCity";
import CopSelectionVehicle from "./components/CopSelectionVehicle";
import { CaptureProvider } from "./context/CaptureContext";
import { BrowserRouter } from "react-router-dom";
import CaptureForm from "./pages/CaptureForm";

test("renders without crashing", () => {
  render(
    <BrowserRouter>
      <CaptureProvider>
        <CaptureForm />
      </CaptureProvider>
    </BrowserRouter>
  );
});

test("renders CopSelectionCity component", () => {
  render(<CopSelectionCity />);
  expect(screen.getByRole("option", { name: "Select a city" }).selected).toBe(
    true
  );
});
test("renders CopSelectionVehicle component", () => {
  render(<CopSelectionVehicle />);
  expect(
    screen.getByRole("option", { name: "Select a vehicle" }).selected
  ).toBe(true);
});

test("renders CopSelectionCity component", () => {
  render(<CopSelectionCity />);
  expect(screen.getAllByRole("option").length).toBe(1);
});

test("renders CopSelectionCity component", () => {
  render(<CopSelectionVehicle />);
  expect(screen.getAllByRole("option").length).toBe(1);
});

test("renders CaptureForm component number of options", () => {
  render(
    <BrowserRouter>
      <CaptureProvider>
        <CaptureForm />
      </CaptureProvider>
    </BrowserRouter>
  );
  expect(screen.getAllByRole("option").length).toBe(20);
});

test("renders CaptureForm component numbers of button on page", () => {
  render(
    <BrowserRouter>
      <CaptureProvider>
        <CaptureForm />
      </CaptureProvider>
    </BrowserRouter>
  );
  expect(screen.getAllByRole("button").length).toBe(2);
});

test("renders CaptureForm component for Add Cop button present", () => {
  render(
    <BrowserRouter>
      <CaptureProvider>
        <CaptureForm />
      </CaptureProvider>
    </BrowserRouter>
  );
  expect(screen.getByRole("button", { name: "Add Cop" }));
});
test("renders CaptureForm component for Capture Fugitive button present", () => {
  render(
    <BrowserRouter>
      <CaptureProvider>
        <CaptureForm />
      </CaptureProvider>
    </BrowserRouter>
  );
  expect(screen.getByRole("button", { name: "Capture Fugitive" }));
});
