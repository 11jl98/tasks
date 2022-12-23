import { AuthType } from "./genericTypes";

export type UserContextType = {
  auth: AuthType;
  setAuth: Dispatch<SetStateAction<AuthType>>;
  UserAuth: () => void;
  isOpen: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
};
