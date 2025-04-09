import { createContext, useState, useReducer } from "react";
import todoReducer from "../reducers/TodoReducer";

export const TasksContext = createContext(null);

interface Task {
  id: number;
  name: string;
}

function TasksContextProvider({ children }: { children: React.ReactElement }) {
  const initialState = {
    tasks: [],
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [currId, setcurrId] = useState(0);
  function editTask(id: number, newTaskName: string) {
    dispatch({
      type: "EDITTASK",
      payload: {
        id,
        newTaskName,
      },
    });
  }

  function addTask(newTaskName: string) {
    dispatch({
      type: "ADDTASK",
      payload: {
        newTaskName,
        currId,
      },
    });
    setcurrId((prevId) => prevId + 1);
  }

  function deleteTask(id: number) {
    dispatch({
      type: "DELETETASK",
      payload: {
        id,
      },
    });
  }
  return (
    <TasksContext.Provider
      value={{ tasks: state.tasks, editTask, addTask, deleteTask }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export default TasksContextProvider;
