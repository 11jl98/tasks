import { TaskType } from "./genericTypes";

export type TaskContextType = {
    isOpen: boolean;
    openModal: (task:TaskType) => void;
    setModalTask: Dispatch<SetStateAction<boolean>>;
    task: any;
    setTask: Dispatch<SetStateAction<TaskType>>;
    saveTask:() => void;
    isCreate: boolean,
    createTask: (id_bucket:string) => void,
  };
  