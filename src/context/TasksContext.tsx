import { createContext } from "react";
import Tasks from "./hooks/TasksHooks";
import { TaskContextType } from "../@types/TasksContext";

const DEFAULT_VALUE = {
  isOpen: false,
  setModalTask: () => {},
  openModal: () => {},
  task: {},
  setTask: () => {},
  saveTask: () => {},
  isCreate: false,
  createTask: () => {},
};

const ContextTasks = createContext<TaskContextType>(DEFAULT_VALUE);

function TasksProvider({ children }: any) {
  const {
    isOpen,
    openModal,
    setModalTask,
    task,
    setTask,
    saveTask,
    isCreate,
    createTask,
  } = Tasks();

  return (
    <ContextTasks.Provider
      value={{
        isOpen,
        setModalTask,
        openModal,
        task,
        setTask,
        saveTask,
        isCreate,
        createTask,
      }}
    >
      {children}
    </ContextTasks.Provider>
  );
}
export { ContextTasks, TasksProvider };
