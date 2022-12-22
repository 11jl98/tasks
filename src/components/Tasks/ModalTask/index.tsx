import Modal from "react-modal";
import { useContext, useEffect } from "react";
import { ContextTasks } from "../../../context/TasksContext";
import DatalistInput from "react-datalist-input";

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
      height: "300px",
    },
  };

  const { isOpen, setModalTask, task } = useContext(ContextTasks);

  useEffect(() => {
    console.log("ta funcionando");
  }, [isOpen]);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setModalTask((state: any) => !state)}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <h5>Cadastre sua nova task</h5>
      <input
        type="text"
        className="input-text"
        placeholder="Digite o titulo..."
        value={task.title || ""}
        onChange={(e) => task({ ...task, title: e.target.value })}
      />
      <DatalistInput
        label="Status"
        onSelect={(item) => console.log(item.value)}
        items={[
          { id: "Chocolate", value: "Chocolate" },
          { id: "Coconut", value: "Coconut" },
          { id: "Mint", value: "Mint" },
          { id: "Strawberry", value: "Strawberry" },
          { id: "Vanilla", value: "Vanilla" },
        ]}
      />
      <DatalistInput
        label="Status"
        onSelect={(item) => console.log(item.value)}
        items={[
          { id: "Chocolate", value: "Chocolate" },
          { id: "Coconut", value: "Coconut" },
          { id: "Mint", value: "Mint" },
          { id: "Strawberry", value: "Strawberry" },
          { id: "Vanilla", value: "Vanilla" },
        ]}
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
