import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/taskApi";

const initialState = {
  tasks: [],
  status: "idle",
  error: null,
};

export const createTask = createAsyncThunk(
  "tasks/createTask",
  async (taskData) => {
    try {
      const response = await api.addTask(taskData);
      return response?.data;
    } catch (e) {
      return e?.response?.data;
    }
  }
);

export const getTasks = createAsyncThunk("tasks/getTasks", async () => {
  try {
    const response = await api.getTasks();
    return response?.data;
  } catch (e) {
    return e?.response?.data;
  }
});

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ _id, updates }) => {
    try {
      const response = await api.updateTask(_id, updates);
      return response?.data;
    } catch (e) {
      console.log(e);
      console.log(e?.response?.data);
      return e?.response?.data;
    }
  }
);

export const deleteTask = createAsyncThunk("tasks/deleteTask", async (id) => {
  try {
    const response = await api.deleteTask(id);
    return response?.data;
  } catch (e) {
    return e?.response?.data;
  }
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
        state.status = "idle";
        state.error = null;
      })
      .addCase(createTask.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(createTask.rejected, (state, action) => {
        state.error = action.error;
        state.status = "idle";
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.status = "idle";
        state.error = null;
      })
      .addCase(getTasks.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.error = action.error;
        state.status = "idle";
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.map((task) =>
          task._id === action.payload._id ? action.payload : task
        );
        state.status = "idle";
        state.error = null;
      })
      .addCase(updateTask.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.error = action.error;
        state.status = "idle";
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(
          (task) => task._id !== action.payload._id
        );
        state.status = "idle";
        state.error = null;
      })
      .addCase(deleteTask.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.error = action.error;
        state.status = "idle";
      });
  },
});

export const selectAllTasks = (state) => state.tasks.tasks;

export default tasksSlice.reducer;
