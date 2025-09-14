import React, { useState } from "react";
import "./Meals.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "./MealsSlice";

function Meals() {
  const dispatch = useDispatch();
  const mealsItems = useSelector((state) => state.Meals.items);

  const [peopleNumber, setPeopleNumber] = useState(0);

  //   console.log(mealsItems);

  const totalCost = mealsItems.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  function handleAdd(item) {
    dispatch(addItem({ ...item, quantity: parseInt(peopleNumber) || 0 }));
  }

  function handlePeopleChange(number) {
    setPeopleNumber(number);
    mealsItems.forEach((element) => {
      dispatch(addItem({ ...element, quantity: parseInt(number) || 0 }));
    });
  }

  function handleDelete(item) {
    dispatch(deleteItem(item));
  }

  const meals = [
    { id: 11, name: "Breakfast", price: 50, quantity: 0 },
    { id: 12, name: "High Tea", price: 25, quantity: 0 },
    { id: 13, name: "Lunch", price: 65, quantity: 0 },
    { id: 14, name: "Dinner", price: 70, quantity: 0 },
  ];

  return (
    <>
      <section id="meals">
        <h3>Meals Selection</h3>
        <div className="meals">
          <div className="number">
            <label htmlFor="number">Number Of People:</label>
            <input
              type="number"
              name="Number Of People"
              id="number"
              onChange={(e) => {
                handlePeopleChange(e.target.value);
              }}
            />
          </div>
          <div className="meals-sec">
            {meals.map((meal) => {
              return (
                <div key={meal.id}>
                  <div className="check">
                    <input
                      type="checkbox"
                      name="Meal"
                      id={meal.id}
                      onChange={(e) =>
                        e.target.checked ? handleAdd(meal) : handleDelete(meal)
                      }
                    />
                    <label htmlFor={meal.id}>{meal.name}</label>
                  </div>
                  <span>{meal.price}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="total">Total Cost: {totalCost || 0}</div>
      </section>
    </>
  );
}

export default Meals;
