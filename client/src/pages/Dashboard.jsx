import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
    </div>
  );
};

export default Dashboard;
