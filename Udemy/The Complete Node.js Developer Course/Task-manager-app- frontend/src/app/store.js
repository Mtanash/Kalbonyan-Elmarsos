import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice";
import tasksReducer from "../features/Tasks/tasksSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,
  },
});
