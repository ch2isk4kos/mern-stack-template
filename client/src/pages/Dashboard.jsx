import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GoalForm from "../components/GoalForm";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  return (
    <div id="Dashboard">
      <section className="heading">
        <h1>Welcome, {user && user.username} </h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />
    </div>
  );
};

export default Dashboard;
