import "../index.css";
import Modal from "react-modal";

function ModalBucket({ setModal, isOpen, bucket, setBucket, save }: any) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setModal((state: any) => !state)}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      {/* <button >close</button> */}
      <h5>Cadastre seu novo bucket</h5>
      <input
        type="text"
        className="input-text"
        placeholder="Digite o titulo..."
        value={bucket.title || ""}
        onChange={(e) => setBucket({ title: e.target.value })}
      />
      <div className="containet-buttons">
        <button className="save-bucket" onClick={save}>Concluir</button>
        <button
          className="cancel"
          onClick={() => setModal((state: any) => !state)}
        >
          Cancelar
        </button>
      </div>
    </Modal>
  );
}

export default ModalBucket;
