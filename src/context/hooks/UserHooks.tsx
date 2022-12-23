import { useState } from "react";
import { login } from "../../services/users";
import { AuthType } from "../../@types/genericTypes";
const INITIAL_VALUE = {
  user_name: "",
  password: "",
};
export default function User() {
  const [auth, setAuth] = useState<AuthType>(INITIAL_VALUE);
  const [isOpen, setModal] = useState<boolean>(false);

  async function UserAuth() {
    const data = await login(auth.user_name, auth.password);
    localStorage.setItem("token", data.token);
    alert("Logado com sucesso");
    setModal(false);
    setAuth(INITIAL_VALUE);
  }

  return { auth, setAuth, UserAuth, isOpen, setModal };
}
