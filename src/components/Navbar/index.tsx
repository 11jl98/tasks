import "./index.css";
import { useContext } from "react";
import { ContextUser } from "../../context/UserContext";

function Nav() {
  const { setModal } = useContext(ContextUser);
  return (
    <div className="topnav">
      <a className="active" href="#home">
        Home
      </a>
      <a href="#about" onClick={() => setModal(true)}>
        Logar
      </a>
    </div>
  );
}

export default Nav;
