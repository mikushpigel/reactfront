import httpServices, { setCommonHeader } from "./httpService";
import { jwtDecode } from "jwt-decode";

const TOKEN_KEY = "token";
setTokenHeader();

function setTokenHeader() {
  setCommonHeader("x-auth-token", getToken());
}
function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

function signUpUser(cardential) {
  return httpServices.post("/users", cardential);
}

async function validateUser(cardential) {
  const { data } = await httpServices.post("/auth", cardential);
  localStorage.setItem(TOKEN_KEY, data.token);
  setTokenHeader();
}
function logOutUser() {
  localStorage.removeItem(TOKEN_KEY);
  setTokenHeader();
}

function getUser() {
  const token = getToken();
  console.log("token", token);

  if (token) return jwtDecode(token);
  return null;
}

const userServices = {
  signUpUser,
  validateUser,
  getToken,
  logOutUser,
  setTokenHeader,
  getUser,
};

export default userServices;
