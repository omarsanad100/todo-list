import React, { useState } from "react";
import { ToDo } from "../ToDo/ToDo";
import styles from "./styles.module.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInput = () => {
    const trimmedInput = inputValue.trim();
    if (trimmedInput) {
      setTasks((prev) => [...prev, trimmedInput]);
      setInputValue("");
    }
  };

  const handleRemoveTask = (index) => {
    setTasks((task) => task.filter((_, i) => i !== index));
  };

  const handleButtonUp = (index) => {
    if (index > 0) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index - 1]] = [
        updateTasks[index - 1],
        updateTasks[index],
      ];
      setTasks(updateTasks);
    }
  };
  const handleButtonDown = (index) => {
    if (index < tasks.length - 1) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index + 1]] = [
        updateTasks[index + 1],
        updateTasks[index],
      ];
      setTasks(updateTasks);
    }
  };

  return (
    <div className={styles.container}>
      <h1>TodoList</h1>

      <section>
        <input
          type="text"
          value={inputValue}
          placeholder="Enter a Tasks..."
          maxLength={30}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleInput} className={styles.generalBtn}>
          Add
        </button>
      </section>

      <ul>
        {tasks.map((task, index) => (
          <ToDo
            key={index}
            task={task}
            index={index}
            handleRemoveTask={handleRemoveTask}
            handleButtonUp={handleButtonUp}
            handleButtonDown={handleButtonDown}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
