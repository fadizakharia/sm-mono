import { axios } from "./";
export const signup = (
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  confirm_password: string
) => {
  return axios.post("/user/signup/", {
    first_name,
    last_name,
    email,
    password,
    confirm_password,
  });
};
export const login = (email: string, password: string) => {
  return axios.post("/user/login", { email, password });
};
export const logout = () => {
  return axios.post("/user/logout/");
};
export const current = () => {
  return axios.get("/user/current");
};
