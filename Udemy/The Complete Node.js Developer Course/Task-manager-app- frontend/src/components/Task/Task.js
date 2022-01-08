import {
  Box,
  Button,
  Checkbox,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../../features/Tasks/tasksSlice";
import "./Task.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Task({ task }) {
  const dispatch = useDispatch();
  const { description, completed, createdAt, updatedAt, _id } = task;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalDescription, setModalDescription] = useState(description);

  const toggleTaskComplete = (e) => {
    dispatch(
      updateTask({
        _id,
        updates: {
          completed: !completed,
        },
      })
    );
  };

  const onDeleteTask = () => {
    dispatch(deleteTask(_id));
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (modalDescription.length === 0) setModalDescription(description);
    dispatch(updateTask({ _id, updates: { description: modalDescription } }));
    handleModalClose();
  };

  return (
    <>
      {/* Modal start */}
      <Modal open={modalIsOpen} onClose={handleModalClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2" sx={{ marginBottom: "15px" }}>
            Edit task
          </Typography>
          <form onSubmit={onFormSubmit}>
            <TextField
              fullWidth={true}
              multiline={true}
              required
              size="medium"
              label="Task description"
              type="text"
              name="description"
              sx={{ marginBottom: "15px" }}
              value={modalDescription}
              onChange={(e) => setModalDescription(e.target.value)}
            />
            <Button type="submit" variant="contained">
              Save
            </Button>
          </form>
        </Box>
      </Modal>
      {/* Modal end */}
      <div className={`task ${completed && "completed"}`}>
        <Checkbox
          className="task__checkbox"
          // type="checkbox"
          checked={completed}
          onClick={toggleTaskComplete}
        />
        <Typography paragraph variant="h6" className="task__description">
          {description}
        </Typography>
        <Button
          className="delete-btn"
          variant="contained"
          color="error"
          onClick={onDeleteTask}
        >
          Delete
        </Button>
        <Button
          className="edit-btn"
          variant="contained"
          color="primary"
          onClick={handleModalOpen}
        >
          Edit
        </Button>
        <div className="task__date">
          <p className="task__createdAt">
            Created: {moment(createdAt).format("DD MMM YYYY, HH:mm")}
          </p>
          <p className="task__lastEdited">
            Last updated: {moment(updatedAt).format("DD MMM YYYY, HH:mm")}
          </p>
        </div>
      </div>
    </>
  );
}

export default Task;
