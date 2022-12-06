import * as React from "react";

import { taskListprop } from "../types/types";

import "../styles/TaskList.scss";

const TaskList: React.FC<taskListprop> = ({ allTasks, completedtask }) => {
  return (
    <ul className="taskList">
      {allTasks.map((task) => (
        <li key={task.id} className={task.completed ? "completed task" : "task"}>
          <span>{task.description}</span>
          <span onClick={() => completedtask(task.id)} className="circle" />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
