import axios from "axios";
import config from "../config.json";

axios.defaults.baseURL = config.BASE_URL;

export const setCommonHeader = (headerName, token) => {
  axios.defaults.headers.common[headerName] = token;
};

const httpServices = {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  delete: axios.delete,
};
export default httpServices;
