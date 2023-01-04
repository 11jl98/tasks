/* eslint-disable react-hooks/exhaustive-deps */
import "./index.css";
import { useContext, useEffect } from "react";
import { ContextBucketsInTasks } from "../../context/BucketsInTasksContext";
import { ContextTasks } from "../../context/TasksContext";
import { ContextUser } from "../../context/UserContext";

import ModalBucket from "./ModalBucket";
import Task from "../Tasks";

function Bucket() {
  const {
    dragStart,
    dragEnter,
    drop,
    listBuckets,
    bucketsInTasks,
    isOpen,
    setModal,
    bucket,
    setBucket,
    save,
  } = useContext(ContextBucketsInTasks);

  const { isCreate, createTask, task, setTask, saveTask, openModal } =
    useContext(ContextTasks);

  const { getUsers, usersList, getUserById, user } = useContext(ContextUser);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    bucketsInTasks();
  }, []);

  useEffect(() => {
    if (!isCreate) bucketsInTasks();
  }, [isCreate]);

  return (
    <div className="container">
      {listBuckets.map((bucket, indexBucket) => (
        <div key={bucket.id} className="container-bucket">
          <h5>{bucket.title}</h5>
          <button className="create-task" onClick={() => createTask(bucket.id)}>
            Criar tarefa +
          </button>
          <div className="bucket">
            {isCreate && task.id_bucket === bucket.id && (
              <div
                className="task-create"
                style={{ cursor: "default !important" }}
              >
                <span className="label">
                  <p>Ag. dev</p>
                </span>
                <input
                  type="text"
                  placeholder="DIgite aqui o titulo..."
                  className="input-task-create"
                  onChange={(e) => setTask({ ...task, title: e.target.value })}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <p>
                    {task.date_end
                      ? `Vence em ${task.date_end
                          .split("-")
                          .reverse()
                          .join("/")}`
                      : "Atribuir data de conclusão:"}
                  </p>
                  <input
                    type="date"
                    className="input-task-date"
                    onChange={(e) =>
                      setTask({ ...task, date_end: e.target.value })
                    }
                  />
                </div>
                <select
                  className="select-user"
                  onChange={(e) =>
                    setTask({ ...task, id_user: e.target.value })
                  }
                >
                  <option className="option-user" value="">
                    Atribuir
                  </option>
                  {usersList.map((user) => (
                    <option
                      key={user.id}
                      className="option-user"
                      value={user.id}
                    >
                      {user.name_user}
                    </option>
                  ))}
                </select>
                <button className="button-add" onClick={saveTask}>
                  Adicionar
                </button>
              </div>
            )}

            {bucket.tasks.map((task: any, index: number) => (
              <>
                <Task
                  key={index}
                  task={task}
                  dragStart={dragStart}
                  dragEnter={dragEnter}
                  drop={drop}
                  index={index}
                  indexBucket={indexBucket}
                  getUserById={getUserById}
                  user={user}
                  openModal={openModal}
                />
              </>
            ))}
          </div>
        </div>
      ))}
      <button className="create-bucket" onClick={() => setModal(true)}>
        Criar novo bucket +
      </button>
      <ModalBucket
        isOpen={isOpen}
        setModal={setModal}
        bucket={bucket}
        setBucket={setBucket}
        save={save}
      />
    </div>
  );
}

export default Bucket;
