import React, { useState } from "react";
import ProfileAvatar from "../profileAvatar/ProfileAvatar";
import { useDispatch } from "react-redux";

import { createTask, getTasks } from "../../features/Tasks/tasksSlice";
import { Button, Avatar, TextField, Checkbox } from "@mui/material";

import "./CreateTask.css";

const initialTaskDetails = {
  description: "",
  completed: false,
};

function CreateTask() {
  const [taskDetails, setTaskDetails] = useState(initialTaskDetails);
  const dispatch = useDispatch();

  const handleFormDataChange = (e) => {
    if (e.target.name === "description") {
      setTaskDetails({
        ...taskDetails,
        [e.target.name]: e.target.value,
      });
    } else {
      setTaskDetails({
        ...taskDetails,
        [e.target.name]: e.target.checked,
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (taskDetails.description.length === 0) {
      return;
    }
    dispatch(createTask(taskDetails))
      .unwrap()
      .then(() => {
        dispatch(getTasks());
        setTaskDetails(initialTaskDetails);
      });
  };

  return (
    <section className="createTask">
      <div className="container">
        <div className="createTask__content">
          <Avatar sx={{ marginTop: "5px", marginLeft: "5px" }} />
          <form className="createTask__form" onSubmit={handleFormSubmit}>
            <TextField
              // placeholder="Task description"
              fullWidth={true}
              multiline={true}
              size="medium"
              label="Task description"
              type="text"
              name="description"
              value={taskDetails.description}
              onChange={handleFormDataChange}
            />
            <div className="checkbox">
              <Checkbox
                // type="checkbox"
                id="completed"
                name="completed"
                value={taskDetails.completed}
                onChange={handleFormDataChange}
              />
              <label htmlFor="completed">Completed</label>
            </div>
            <Button
              className="formButton"
              variant="contained"
              color="secondary"
              type="submit"
            >
              Add task
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreateTask;
