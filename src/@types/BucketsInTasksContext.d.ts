export type BucketsInTasksContextType = {
  dragStart: (e: any, position: number, positionBucket: number) => void;
  dragEnter: (e: any, position: number, positionBucket: number) => void;
  drop: () => void;
  listBuckets: Array<any>;
  setListBuckets: Dispatch<SetStateAction<any[]>>;
  bucketsInTasks: () => void;
  isOpen: Boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  bucket: any;
  setBucket: Dispatch<SetStateAction<any>>;
  save:() => void;
};
