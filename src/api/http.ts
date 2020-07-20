import axios, { AxiosRequestConfig } from "axios";
import { constants } from '../config';

axios.defaults.baseURL = process.env.REACT_APP_DEFAULT_URL;
axios.defaults.headers.common.Accept = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";

const requestHandler = (request: AxiosRequestConfig) => {
  const { xtoken } = constants;
  const token = localStorage.getItem(xtoken);
  if (token) {
    request.headers[xtoken] = token;
  }
  return request;
};

axios.interceptors.request.use(requestHandler);

export default {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
  all: axios.all,
  spread: axios.spread,
};
