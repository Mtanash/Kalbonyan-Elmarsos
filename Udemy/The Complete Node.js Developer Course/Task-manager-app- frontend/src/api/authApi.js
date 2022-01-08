import axios from "axios";

const API = axios.create({
  baseURL: "https://mtanash-task-manager-app.herokuapp.com/users",
});

export const createUser = (userData) => API.post("", userData);
export const loginUser = (userData) => API.post("/login", userData);
export const logoutUser = () => API.post("/logout");
