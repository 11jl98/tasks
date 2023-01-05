import { http } from "../../utils/config";
import { BucketsType } from "../../@types/genericTypes";
const getBucketsInTasks = async () => {
  const { data } = await http.get("/bucket");
  return data;
};

const saveBucket = async (body: BucketsType) => {
  const { data } = await http.post("/bucket", body);
  return data;
};

const getBucketDatList = async () => {
  const { data } = await http.get("/bucket/data-list");
  return data;
};

export { getBucketsInTasks, saveBucket, getBucketDatList };
