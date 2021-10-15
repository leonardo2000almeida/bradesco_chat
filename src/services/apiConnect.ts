import axios from "axios";

const request = axios.create({
  baseURL: process.env.URL_AP,
});

export default request;
