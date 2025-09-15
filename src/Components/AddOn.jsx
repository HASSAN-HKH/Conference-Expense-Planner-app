import React, { useState } from "react";
// Use .module.css to separate styling
import "./Venue.css";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "./Details";

function AddOn() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.Details.items);
  //   Change in this logic needed
  const total = items.reduce((total, item) => {
    return item.id > 5 ? total + item.quantity * item.price : total;
  }, 0);

  function handleIncrement(item) {
    dispatch(increaseQuantity(item));
  }

  function handleDecrement(item) {
    dispatch(decreaseQuantity(item));
  }

  const addOns = [
    {
      id: 6,
      name: "Projectors",
      price: 200,
      quantity: 0,
      imgPath: "images/business-20031_1280.jpg",
    },
    {
      id: 7,
      name: "Speaker",
      price: 35,
      quantity: 0,
      imgPath: "images/speakers-4109274_1280.jpg",
    },
    {
      id: 8,
      name: "Microphones",
      price: 45,
      quantity: 0,
      imgPath: "images/public-speaking-3926344_1280.jpg",
    },
    {
      id: 9,
      name: "Whiteboards",
      price: 80,
      quantity: 0,
      imgPath: "images/whiteboard-2903269_1280.webp",
    },
    {
      id: 10,
      name: "Signage",
      price: 80,
      quantity: 0,
      imgPath: "images/directory-235079_1280.jpg",
    },
  ];

  return (
    <>
      <section id="ad">
        <h3>Add-ons Selection</h3>
        <div className="rooms">
          {addOns.map((room) => {
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

export default AddOn;
