/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./index.css";
function Task({ task, dragStart, dragEnter, drop, index, indexBucket }: any) {
  const [classDate, setClassDate] = useState<string>("date-task");

  const colorDate = () => {
    var partesData = task.date_end.split("-").reverse();
    var data = new Date(partesData[2], partesData[1] - 1, partesData[0]);
    if (data > new Date()) setClassDate("date-task-venc");
  };

  useEffect(() => {
    colorDate()
  }, []);

  return (
    <div
      className="task"
      key={index}
      onDragStart={(e: any) => dragStart(e, index, indexBucket)}
      onDragEnter={(e: any) => dragEnter(e, index, indexBucket)}
      onDragEnd={drop}
      draggable
    >
      <span className="label">
        <p>Ag. dev</p>
      </span>
      <h5 className="name-task">{task.title}</h5>
      <p className="description-task">{task.description}</p>
      <div className="container-user">
        <span>
          <p className={classDate}>
            {task.date_end.split("-").reverse().join("/")}
          </p>
        </span>
      </div>
    </div>
  );
}
export default Task;
