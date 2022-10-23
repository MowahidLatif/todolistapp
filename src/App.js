import { useState } from "react";
import "./styles.css";
import {Tasks} from "./Tasks"

export default function App() {

  const [todoList, setToDoList] = useState([])
  const [inputValue, setInputValue] = useState({})

  const returnInputValue = (event) => {
    setInputValue(event.target.value)
  }
  const addTaskToList = () => {
    const taskOBJ = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: inputValue,
      isCompleted: false
    }
    setToDoList([...todoList, taskOBJ])
  }
  const deleteTaskFromList = (id) => {
    setToDoList(todoList.filter((task) => task.id !== id));
  }
  const completedTaskCheck = (id) => {
    setToDoList(todoList.map((task) => {
      if (task.id === id) {
        return {...task, isCompleted: true}
      } else {
        return task;
      }
    }));
  }

  return (
    <div className="App">
      <div>
        <h1>To Do List Practise Question</h1>
        <input onChange={returnInputValue}/>
        <button onClick={addTaskToList}>Add Task</button>
      </div>
      <div>{todoList.map((task) => {
        return (
          <Tasks 
            taskName={task.taskName}
            id={task.id}
            deleteTaskFromList={deleteTaskFromList}
            isCompleted={task.isCompleted}
            completedTaskCheck={completedTaskCheck}
          />
        );
      })}
      </div>
    </div>
  );
}
