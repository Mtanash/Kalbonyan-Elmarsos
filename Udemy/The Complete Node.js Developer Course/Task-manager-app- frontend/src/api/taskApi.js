import axios from "axios";

const API = axios.create({
  baseURL: "https://mtanash-task-manager-app.herokuapp.com/tasks",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem("token")
    )}`;
  }
  return req;
});

export const addTask = (taskData) => API.post("", taskData);

export const getTasks = () => API.get("");

export const updateTask = (id, updates) => API.patch(`/${id}`, updates);

export const deleteTask = (id) => API.delete(`/${id}`);
