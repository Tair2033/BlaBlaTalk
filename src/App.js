import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MessengerPage from "./Pages/MessengerPage";
import MainPage from "./Pages/MainPage";
import TheNavbar from "./components/navbar/TheNavbar";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="app">
      <TheNavbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/messenger/:id" element={<MessengerPage />} />
      </Routes>
    </div>
  );
};
export default App;
