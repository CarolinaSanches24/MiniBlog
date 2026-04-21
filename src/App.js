import "./App.css";
import React from "react";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>MiniBlog</h1>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
