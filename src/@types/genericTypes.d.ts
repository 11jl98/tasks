export type BucketsType = {
  title: string;
};

export type TaskType = {
  id_bucket: string;
  id_status?: string | null;
  id_label?: string | null;
  id_user?: string | null;
  title: string;
  description?: string | null;
  date_start?: string | null;
  date_end?: string | null;
};

export type AuthType = {
  user_name: string;
  password: string
}
