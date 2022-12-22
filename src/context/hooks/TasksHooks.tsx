import { useState } from "react";
import { SaveTask } from "../../services/tasks";
import { TaskType } from "../../@types/genericTypes";
const INITIAL_VALUE = {
  id: "",
  id_bucket: "",
  id_status: null,
  id_label: null,
  id_user: null,
  title: "",
  description: null,
  date_start: null,
  date_end: null,
};
export default function BucketsInTasks() {
  const [task, setTask] = useState<TaskType>(INITIAL_VALUE);
  const [isOpen, setModalTask] = useState<boolean>(false);
  const [isCreate, setIsCreate] = useState<boolean>(false);

  async function saveTask() {
    try {
      await SaveTask(task);
      setIsCreate(false);
      setTask(INITIAL_VALUE);
    } catch (error) {
      console.log(error);
    }
  }
  function openModal(id_bucket: string) {
    setModalTask(true);
  }

  function createTask(id_bucket: string) {
    setTask({ ...task, id_bucket: id_bucket });
    setIsCreate((state: boolean) => !state);
  }

  return {
    isOpen,
    openModal,
    setModalTask,
    task,
    setTask,
    saveTask,
    isCreate,
    createTask,
  };
}
