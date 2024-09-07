import styles from "./styles.module.css";

export const ToDo = ({
  task,
  index,
  handleButtonUp,
  handleButtonDown,
  handleRemoveTask,
}) => (
  <li>
    <p className={styles.text}>{task}</p>
    <div className={styles.actionButtons}>
      <button onClick={() => handleButtonUp(index)}>Up</button>
      <button onClick={() => handleButtonDown(index)}>Down</button>
      <button onClick={() => handleRemoveTask(index)}>Delete</button>
    </div>
  </li>
);
