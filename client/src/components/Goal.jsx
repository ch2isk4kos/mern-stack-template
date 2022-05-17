import React from "react";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";

const Goal = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="goal">
      <div className="form-group">
        <h2>{item.goal}</h2>
        {new Date(item.createdAt).toLocaleString("en-US")}
        <button
          className="close"
          onClick={() => dispatch(deleteGoal(item._id))}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Goal;
