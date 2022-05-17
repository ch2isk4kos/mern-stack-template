import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GoalForm from "../components/GoalForm";
import Goal from "../components/Goal";
import Spinner from "../components/Spinner";
import { getGoals, reset } from "../features/goals/goalSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) console.log(message);
    if (!user) navigate("/login");
    dispatch(getGoals());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) return <Spinner />;

  return (
    <div id="Dashboard">
      <section className="heading">
        <h1>Welcome, {user && user.username} </h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />
      <section className="content">
        <div
          className="goals"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {goals && goals.length > 0 ? (
            goals.map((item) => {
              return <Goal key={item._id} item={item} />;
            })
          ) : (
            <p>No current goals</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
