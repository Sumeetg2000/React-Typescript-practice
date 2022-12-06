import * as React from "react";
import { useState, useEffect } from "react";

import CurrentDate from "./component/CurrentDate";
import TaskList from "./component/TaskList";
import InputBox from "./component/InputBox";

import { taskType } from "./types/types";

import "./styles/App.scss";

const getTodoItems = (): taskType[] => {
  const newDate = new Date().toLocaleDateString();
  const taskDate = localStorage.getItem("TaskDate");

  if (newDate !== taskDate) {
    localStorage.removeItem("Tasks");
  }

  const allTasks = localStorage.getItem("Tasks");

  if (allTasks) {
    return JSON.parse(localStorage.getItem("Tasks"));
  } else {
    return [];
  }
};
export default function App() {
  const [showInputBox, setShowInputBox] = useState(false);
  const [allTasks, setAllTasks] = useState(getTodoItems);

  useEffect(() => {
    allTasks.length !== 0 &&
      localStorage.setItem("Tasks", JSON.stringify(allTasks));
  }, [allTasks]);

  const handleClick = () => {
    setShowInputBox((prev) => !prev);
  };

  const completedtask = (id: number) => {
    let selectedTask = allTasks.map((task) => {
      return task.id === id
        ? { ...task, completed: !task.completed }
        : { ...task };
    });

    setAllTasks(selectedTask);
  };

  return (
    <div className="container">
      <div className="todoApp">
        <CurrentDate />
        <TaskList allTasks={allTasks} completedtask={completedtask} />
        {showInputBox ? (
          <InputBox
            setAllTasks={setAllTasks}
            setShowInputBox={setShowInputBox}
          />
        ) : (
          <button onClick={handleClick} className="addTask">
            +
          </button>
        )}
      </div>
    </div>
  );
}
