import React from "react";
import CreateTask from "../CreateTask/CreateTask";
import Tasks from "../Tasks/Tasks";

function Home() {
  return (
    <div>
      <CreateTask />
      <Tasks />
    </div>
  );
}

export default Home;
