import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api", // backend URL
  withCredentials: true, // important for sending cookies
});

export default axiosInstance;
