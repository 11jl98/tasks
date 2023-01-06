/* eslint-disable react-hooks/exhaustive-deps */
import Modal from "react-modal";
import React, { useContext, useEffect, useState, useCallback } from "react";
import { ContextTasks } from "../../../context/TasksContext";
import { ContextBucketsInTasks } from "../../../context/BucketsInTasksContext";
import DataList from "react-datalist-field/build";

function ModalTask() {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "600px",
      height: "600px",
    },
  };

  const { isOpen, setModalTask, task, setTask } = useContext(ContextTasks);
  const { bucketDataList, getBuckets } = useContext(ContextBucketsInTasks);

  const [text, setText] = useState<string>("");

  const randomColor = () => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };

  const handleChange = useCallback(
    (e: any) => {
      console.log(e.target.value);
    },

    [text]
  );

  useEffect(() => {
    getBuckets();
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setModalTask((state: any) => !state)}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <h4>{task.title}</h4>
      {task?.user ? (
        <div className="user-task">
          <img
            className={task.user?.avatar_url ? "img-user-task" : ""}
            src={task.user?.avatar_url}
            alt=""
          />
          <p>{task.user?.name_user}</p>
        </div>
      ) : (
        <div>Adicionar membro</div>
      )}
      <div
        style={{
          display: "flex",
          maxWidth: "600px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        {task.labels?.map((label: any) => (
          <span
            key={label.id}
            className="label"
            style={{ backgroundColor: `#${randomColor()}` }}
          >
            <p>{label.title_label}</p>
          </span>
        ))}
      </div>
      <DataList
        options={bucketDataList}
        id="id"
        value1="title"
        selectedIdName="selectedCar"
        selectedId=""
        onOptionChange={handleChange}
      />
      <div className="containet-buttons">
        <button className="save-bucket">Concluir</button>
        <button
          className="cancel"
          onClick={() => setModalTask((state: any) => !state)}
        >
          Cancelar
        </button>
      </div>
    </Modal>
  );
}

export default ModalTask;
