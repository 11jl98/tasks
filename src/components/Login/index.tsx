import "./index.css";
import { useContext } from "react";
import { ContextUser } from "../../context/UserContext";
import Modal from "react-modal";

function Login() {
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

  const { auth, setAuth, UserAuth, isOpen, setModal } = useContext(ContextUser);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setModal((state: boolean) => !state)}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      {/* <button >close</button> */}
      <h5>Digite seu login e senha</h5>
      <div className="container-form">
        <label>Nome do usuario</label>
        <input
          type="text"
          className="input-text"
          value={auth.user_name}
          onChange={(e) => {
            setAuth({ ...auth, user_name: e.target.value });
          }}
        />
        <label>Senha</label>
        <input
          type="password"
          className="input-text"
          value={auth.password}
          onChange={(e) => {
            setAuth({ ...auth, password: e.target.value });
          }}
        />
      </div>
      <div className="containet-buttons">
        <button className="save-bucket" onClick={UserAuth}>Concluir</button>
        <button
          className="cancel"
          onClick={() => setModal((state: boolean) => !state)}
        >
          Cancelar
        </button>
      </div>
    </Modal>
  );
}

export default Login;
