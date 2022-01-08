import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTasks, selectAllTasks } from "../../features/Tasks/tasksSlice";
import Task from "../Task/Task";
import "./Tasks.css";

function Tasks() {
  const dispatch = useDispatch();
  const tasks = useSelector(selectAllTasks);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <section className="tasks">
      <div className="container">
        <div className="tasks__content">
          {tasks.length > 0 ? (
            <>
              {tasks.map((task) => (
                <Task key={task._id} task={task} />
              ))}
            </>
          ) : (
            <p> There is no tasks </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Tasks;
