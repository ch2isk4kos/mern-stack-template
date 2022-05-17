import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";

const GoalForm = () => {
  const [goal, setGoal] = useState("");

  const dispatch = useDispatch();

  //   const handleOnChange = (e) => {
  //     setGoal(e.target.value);
  //   };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(createGoal({ goal }));
    setGoal("");
  };

  return (
    <div id="GoalForm">
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <input
            id="goal"
            type="text"
            name="goal"
            value={goal}
            placeholder="What Would You Like To Achieve?"
            // onChange={handleOnChange}
            onChange={(e) => setGoal(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Make Goal
          </button>
        </div>
      </form>
    </div>
  );
};

export default GoalForm;
