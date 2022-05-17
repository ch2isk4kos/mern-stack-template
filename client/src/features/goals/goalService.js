import axios from "axios";
const API_URL = "/api/v1/goals";

const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${API_URL}`, config);
  return response.data;
};

const createGoal = async (goal, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(`${API_URL}`, goal, config);
  return response.data;
};

const deleteGoal = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(`${API_URL}/${id}`, config);
  return response.data;
};

const goalService = { getGoals, createGoal, deleteGoal };
export default goalService;
