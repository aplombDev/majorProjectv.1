import axios from "axios";

export const BASE_URL = "https://uniquebreed21-server.onrender.com/";

export default axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
