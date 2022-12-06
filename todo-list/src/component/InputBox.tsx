import * as React from "react";
import { useState, useEffect } from "react";
import { inputBoxprop, taskType } from "../types/types";

import '../styles/InputBox.scss'

const InputBox: React.FC<inputBoxprop> = ({ setAllTasks, setShowInputBox }) => {
  const [currentTask, setCurrentTask] = useState("");

  useEffect(() => {
    const handleKey = (event: { key: string }) => {
      if (event.key === "Escape") {
        setShowInputBox(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("TaskDate", new Date().toLocaleDateString());

    const todoTask = [
      {
        id: Math.random() * 1000,
        description: currentTask,
        completed: false,
      },
    ];
    setAllTasks((tasks: taskType[]) => [...tasks, ...todoTask]);
    setCurrentTask("");
  };

  return (
    <form className="inputBlock" onSubmit={submitHandler}>
      <input
        type="text"
        value={currentTask}
        className="inputBox"
        placeholder="Enter Task "
        onChange={(e) => setCurrentTask(e.target.value)}
        required
        autoFocus
      />
    </form>
  );
};
export default InputBox;
