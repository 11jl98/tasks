import { createContext } from "react";
import BucketsInTasks from "./hooks/BucketsInTasksHooks";
import { BucketsInTasksContextType } from "../@types/BucketsInTasksContext";
import mocksBuckets from "../mocks/mocksBuckets";

const DEFAULT_VALUE = {
  dragStart: () => {},
  dragEnter: () => {},
  drop: () => {},
  listBuckets: mocksBuckets.buckets,
  setListBuckets: () => {},
  bucketsInTasks: () => {},
  isOpen: false,
  setModal: () => {},
  bucket: {},
  setBucket: () => {},
  save: ()=> {},
  bucketDataList:[],
  getBuckets: ()=>{},
};

const ContextBucketsInTasks =
  createContext<BucketsInTasksContextType>(DEFAULT_VALUE);

function BucketsInTasksProvider({ children }: any) {
  const {
    dragStart,
    dragEnter,
    drop,
    listBuckets,
    setListBuckets,
    bucketsInTasks,
    isOpen,
    setModal,
    bucket,
    setBucket,
    save,
    bucketDataList,
    getBuckets,
  } = BucketsInTasks();

  return (
    <ContextBucketsInTasks.Provider
      value={{
        dragStart,
        dragEnter,
        drop,
        listBuckets,
        setListBuckets,
        bucketsInTasks,
        isOpen,
        setModal,
        bucket,
        setBucket,
        save,
        bucketDataList,
        getBuckets,
      }}
    >
      {children}
    </ContextBucketsInTasks.Provider>
  );
}
export { ContextBucketsInTasks, BucketsInTasksProvider };
