import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="content">
          <div className="intro">
            <h2>Conference Expense Planner</h2>
            <p>Plan your next major event with us!</p>
            <button
              onClick={() =>
                navigate("/Conference-Expense-Planner-app/Product_Selection")
              }
            >
              Get Started
            </button>
          </div>
          <article>
            Welcome to BudgetEase Solutions, your trusted partner in simplifying
            budget management and financial solutions. At BudgetEase, we
            understand the importance of effective budget planning and strive to
            provide intuitive, user-friendly solutions to meet the diverse needs
            of our clients.
            <br />
            <br /> With a commitment to efficiency and innovation, we empower
            individuals and businesses to take control of their finances and
            achieve their goals with ease.
            <br />
            <br /> At BudgetEase Solutions, our mission is to make budgeting
            effortless and accessible for everyone. Whether you're a small
            business owner, a busy professional, or an individual looking to
            manage your personal finances, we offer tailored solutions to
            streamline your budgeting process.
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
