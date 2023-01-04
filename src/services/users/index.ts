import { http } from "../../utils/config";

const login = async (user_name: string, password:string) => {
  const { data } = await http.post("/auth", {user_name, password});
  return data;
};

const users = async ()=>{
  const { data } = await http.get('/user')
  return data
}

export { login, users };
