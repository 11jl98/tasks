import { useState, useRef } from "react";
import {
  getBucketDatList,
  getBucketsInTasks,
  saveBucket,
} from "../../services/bucketsInstasks";

import { BucketsType } from "../../@types/genericTypes";

export default function BucketsInTasks() {
  const dragItem = useRef<number>(0);
  const dragBucket = useRef<number>(0);
  const dragOverItem = useRef<number>(0);
  const dragOverItemBucket = useRef<number>(0);
  const [listBuckets, setListBuckets] = useState<Array<any>>([]);
  const [bucket, setBucket] = useState<BucketsType>({ title: "" });
  const [bucketDataList, setBucketDataList] = useState<BucketsType[]>([]);
  const [isOpen, setModal] = useState<Boolean>(false);

  function dragStart(e: any, position: number, positionBucket: number) {
    dragItem.current = position;
    dragBucket.current = positionBucket;
  }
  function dragEnter(e: any, position: number, positionBucket: number) {
    dragOverItem.current = position;
    dragOverItemBucket.current = positionBucket;
  }
  function drop() {
    const copyListItems = [...listBuckets];

    const dragItemContent =
      copyListItems[dragBucket.current].tasks[dragItem.current];
    copyListItems[dragBucket.current].tasks.splice(dragItem.current, 1);
    copyListItems[dragOverItemBucket.current].tasks.splice(
      dragOverItem.current,
      0,
      dragItemContent
    );
    dragItem.current = 0;
    dragOverItem.current = 0;
    setListBuckets([...copyListItems]);
  }

  async function bucketsInTasks() {
    try {
      const data = await getBucketsInTasks();
      setListBuckets(data.buckets.reverse());
    } catch (error) {
      console.log(error);
    }
  }
  async function save() {
    try {
      await saveBucket(bucket);
      alert("registro salvo");
    } catch (error) {
      console.log(error);
    }
  }

  async function getBuckets() {
    try {
      const data = await getBucketDatList();
      setBucketDataList(data);
    } catch (error) {
      alert(error);
    }
  }

  return {
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
  };
}
