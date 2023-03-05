import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MessengerPage from "./Pages/MessengerPage";
import MainPage from "./Pages/MainPage";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/messenger/:id" element={<MessengerPage/>}/>
      </Routes>
    </div>
  );
};
export default App;