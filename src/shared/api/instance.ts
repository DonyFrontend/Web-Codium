import axios from "axios";

const token = localStorage.getItem("codium_token");

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
  }
});

export { instance };
