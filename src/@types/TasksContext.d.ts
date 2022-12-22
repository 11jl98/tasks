export type TaskContextType = {
    isOpen: boolean;
    openModal: (id_bucket:string) => void;
    setModalTask: Dispatch<SetStateAction<boolean>>;
    task: any;
    setTask: Dispatch<SetStateAction<any>>;
    saveTask:() => void;
    isCreate: boolean,
    createTask: (id_bucket:string) => void,
  };
  