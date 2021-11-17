import { axios } from "./";
export const getUser = (userId: string) => {
  return axios.get(`/user/${userId}`);
};
export const findUser = (search: string) => {
  return axios.get(`/user/search`, {
    params: {
      search,
    },
  });
};
export const addFriend = (friendId: string) => {
  return axios.post("/user/friend/", { friendId });
};
export const deleteFriend = (friendId: string) => {
  return axios.delete(`/user/friend/${friendId}`);
};
