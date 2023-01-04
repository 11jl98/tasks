/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./index.css";

function Task({
  task,
  dragStart,
  dragEnter,
  drop,
  index,
  indexBucket,
  openModal,
}: any) {
  const [classDate, setClassDate] = useState<string>("date-task");

  const colorDate = () => {
    var partesData = task.date_end.split("-").reverse();
    var data = new Date(partesData[2], partesData[1] - 1, partesData[0]);
    if (new Date() > data) setClassDate("date-task-venc");
  };

  useEffect(() => {
    colorDate();
  }, []);

  const randomColor = () => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };

  return (
    <div
      className="task"
      key={index}
      onDragStart={(e: any) => dragStart(e, index, indexBucket)}
      onDragEnter={(e: any) => dragEnter(e, index, indexBucket)}
      onDragEnd={drop}
      draggable
      onClick={() => openModal(task)}
    >
      <div
        style={{
          display: "flex",
          maxWidth: "300px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        {task.labels.map((label: any) => (
          <span
            key={label.id}
            className="label"
            style={{ backgroundColor: `#${randomColor()}` }}
          >
            <p>{label.title_label}</p>
          </span>
        ))}
      </div>
      <h5 className="name-task">{task.title}</h5>
      <p className="description-task">{task.description}</p>
      <div className="container-user">
        <span>
          <p className={classDate}>
            {task.date_end.split("-").reverse().join("/")}
          </p>
        </span>
        <div className="container-description-user">
          <img
            className={task.user?.avatar_url ? "img-user" : ""}
            src={task.user?.avatar_url}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Task;
