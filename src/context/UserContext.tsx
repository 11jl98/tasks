import { createContext } from "react";
import User from "./hooks/UserHooks";
import { UserContextType } from "../@types/UserContext";

const DEFAULT_VALUE = {
  auth: { user_name: "", password: "" },
  setAuth: () => {},
  UserAuth: () => {},
  isOpen: false,
  setModal: () => {},
  getUsers: () => {},
  usersList: [],
};

const ContextUser = createContext<UserContextType>(DEFAULT_VALUE);

function UserProvider({ children }: any) {
  const { auth, setAuth, UserAuth, isOpen, setModal, getUsers, usersList } =
    User();

  return (
    <ContextUser.Provider
      value={{
        auth,
        setAuth,
        UserAuth,
        isOpen,
        setModal,
        getUsers,
        usersList,
      }}
    >
      {children}
    </ContextUser.Provider>
  );
}
export { ContextUser, UserProvider };
