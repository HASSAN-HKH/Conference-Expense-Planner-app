import React, { useState } from "react";
import "./Venue.css";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "./Details";

function Venue() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.Details.items);
  //   Change in this logic needed
  const total = items.reduce((total, item) => {
    return item.id <= 5 ? total + item.quantity * item.price : total;
  }, 0);

  //   console.log(items);

  function handleIncrement(item) {
    dispatch(increaseQuantity(item));
  }

  function handleDecrement(item) {
    dispatch(decreaseQuantity(item));
  }

  const rooms = [
    {
      id: 1,
      name: "Conference Room (Capacity:15)",
      price: 1500,
      quantity: 0,
      imgPath:
        "/Conference-Expense-Planner-app/images/chairs-2181916_1280 (1).jpg",
    },
    {
      id: 2,
      name: "Auditorium Hall (Capacity:200)",
      price: 5500,
      quantity: 0,
      imgPath:
        "/Conference-Expense-Planner-app/images/international-conference-1597531_1280.jpg",
    },
    {
      id: 3,
      name: "Presentation Room (Capacity:50)",
      price: 3500,
      quantity: 0,
      imgPath:
        "/Conference-Expense-Planner-app/images/convention-center-3908238_1280.jpg",
    },
    {
      id: 4,
      name: "Large Meeting Room (Capacity:10)",
      price: 1000,
      quantity: 0,
      imgPath: "/images/chairs-2181916_1280.jpg",
    },
    {
      id: 5,
      name: "Small Meeting Room (Capacity:5)",
      price: 800,
      quantity: 0,
      imgPath: "/Conference-Expense-Planner-app/images/laptops-593296_1280.jpg",
    },
  ];

  return (
    <>
      <section id="venue">
        <h3>Venue Room Selection</h3>
        <div className="rooms">
          {rooms.map((room) => {
            return (
              <div className="room" key={room.id}>
                <img src={room.imgPath} alt="Image" />
                <h4>{room.name}</h4>
                <p>{room.price}</p>
                <div className="controls">
                  <button
                    className="decrement"
                    onClick={() => handleDecrement(room)}
                  >
                    -
                  </button>
                  <span>
                    {items.find((item) => {
                      return item.id === room.id;
                    })?.quantity || 0}
                  </span>
                  <button
                    className="increment"
                    onClick={() => handleIncrement(room)}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total">Total Cost: {total}</div>
      </section>
    </>
  );
}

export default Venue;
