import { useState } from "react";
import { login, users } from "../../services/users";
import { AuthType, UserType } from "../../@types/genericTypes";
const INITIAL_VALUE = {
  user_name: "",
  password: "",
};
export default function User() {
  const [auth, setAuth] = useState<AuthType>(INITIAL_VALUE);
  const [isOpen, setModal] = useState<boolean>(false);
  const [usersList, setUsersList] = useState<UserType[]>([]);

  async function UserAuth() {
    try {
      const data = await login(auth.user_name, auth.password);
      localStorage.setItem("token", data.token);
      alert("Logado com sucesso");
      setModal(false);
      setAuth(INITIAL_VALUE);
    } catch (error) {
      alert(error);
    }
  }

  async function getUsers() {
    try {
      const result = await users();
      setUsersList(result);
    } catch (error) {
      alert(error);
    }
  }

  return { auth, setAuth, UserAuth, isOpen, setModal, getUsers, usersList };
}
