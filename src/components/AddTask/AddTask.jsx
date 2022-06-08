
import React from "react";
import styles from "./addTask.module.css";

import tasks from "../../data/tasks.json";
import { useState, useEffect, useContext } from "react";
import { TodoContext } from "../../Contexts/TodoContext";

const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [text, setText] = useState("");
  const {todo, handleNewTodo } = useContext(TodoContext);
  
  return (
    <div className={styles.todoForm} style={{
      border : "1px solid",
      width : "100%",
    }}>
      <input onChange={(event) => {
        setText(event.target.value);
      }}  data-testid="add-task-input" type="text" />
      <button onClick={() => {
        handleNewTodo({  
          id : todo.length+1 , 
           text : text,
            done : false, 
            count : 1
            })
      }} data-testid="add-task-button">+</button>
    </div>
  );
};

export default AddTask;