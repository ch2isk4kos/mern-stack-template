import React from "react";

const Goal = ({ item }) => {
  console.log();
  return (
    <div className="goal">
      <div className="form-group">
        <h2>{item.goal}</h2>
        {new Date(item.createdAt).toLocaleString("en-US")}
      </div>
    </div>
  );
};

export default Goal;
