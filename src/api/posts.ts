import { axios } from "./index";

export const addPost = (content: string) => {
  return axios.post("/post", { content });
};
export const deletePost = (postId: string) => {
  return axios.delete(`/post/${postId}`);
};
export const getPosts = () => {
  return axios.get("/post/");
};
export const getUserPost = (userId: string) => {
  return axios.get(`/post/user/${userId}`);
};
