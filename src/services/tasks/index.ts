import { http } from "../../utils/config";
import { TaskType } from "../../@types/genericTypes";

const SaveTask = async (body: TaskType) => {
  const { data } = await http.post("/task", body);
  return data;
};

export { SaveTask };
