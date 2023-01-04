import "./index.css";
import { useContext } from "react";
import { ContextUser } from "../../context/UserContext";

function Nav() {
  const { setModal } = useContext(ContextUser);

  const result = localStorage.getItem("user");
  const user = JSON.parse(result!);
  return (
    <div className="topnav">
      <a className="active" href="#home">
        kanban
      </a>

      <a href="#about" onClick={() => setModal(true)}>
        <div className="container-auth-user">
          <img src={user?.avatar_url} alt="" className="avatar-user" />
          <p>{user?.name_user}</p>
        </div>
      </a>

      <a href="#about" onClick={() => setModal(true)}>
        Logar
      </a>
    </div>
  );
}

export default Nav;
