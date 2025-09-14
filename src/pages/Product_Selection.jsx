import React, { useState } from "react";
import "./Product_Selection.css";
import Venue from "../Components/VenueSection";
import AddOn from "../Components/AddOn";
import Meals from "../Components/Meals";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Product_Selection() {
  const navigate = useNavigate();

  const roomItems = useSelector((state) => state.Details.items);
  const mealItems = useSelector((state) => state.Meals.items);

  const total1 = roomItems.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  const total2 = mealItems.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  const [show, setShow] = useState("none");

  return (
    <>
      <div className="main">
        <div className="pop-up" style={{ display: show }}>
          <button onClick={() => setShow("none")}>Close</button>
          <div className="head">
            <h2>Total cost for the event</h2>
            <p>{total1 + total2}</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Unit Cost</th>
                <th>Quantity</th>
                <th>Total Cost</th>
              </tr>
            </thead>
            <tbody>
              {roomItems.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price * item.quantity}</td>
                  </tr>
                );
              })}
              {mealItems.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price * item.quantity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <header>
          <h2 onClick={() => navigate("/Conference-Expense-Planner-app/")}>
            Conference Expense Planner
          </h2>
          <nav>
            <ul>
              <li>
                <a href="#venue">Venue</a>
              </li>
              <li>
                <a href="#ad">Add-ons</a>
              </li>
              <li>
                <a href="#meals">Meals</a>
              </li>
            </ul>
          </nav>
          <button onClick={() => setShow("flex")}>Show Details</button>
        </header>
        <div className="container-product">
          <Venue />
          <AddOn />
          <Meals />
        </div>
      </div>
    </>
  );
}

export default Product_Selection;
