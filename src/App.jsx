import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./pages/Home";
import Product_Selection from "./pages/Product_Selection";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Conference-Expense-Planner-app/" element={<Home />} />
          <Route
            path="/Conference-Expense-Planner-app/Product_Selection"
            element={<Product_Selection />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
