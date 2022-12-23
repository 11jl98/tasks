import axios, { AxiosInstance } from "axios";

const http: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
});


http.interceptors.request.use(async function (config: any) {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers!.authorization = `Bearer ${token}`;
      console.log('testeeee', config.headers!.authorization = `Bearer ${token}`)
    }
    return config;
  } catch (error) {
    console.log(error, "aquiiiii");
  }
});

export { http };