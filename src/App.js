// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CaptureForm from "./pages/CaptureForm";
import CaptureResultPage from "./pages/CaptureResultPage";
import { CaptureProvider } from "./context/CaptureContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <CaptureProvider>
        <Header />
        <Routes>
          <Route path="/" element={<CaptureForm />} />
          <Route path="/capture-result" element={<CaptureResultPage />} />
        </Routes>
        <Footer/>
      </CaptureProvider>
    </Router>
  );
}

export default App;
