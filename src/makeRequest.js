import axios from "axios";
export const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
  },
});
