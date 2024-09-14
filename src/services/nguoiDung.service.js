import { http } from "./config";

export const nguoiDungService = {
  getAllUsers: () => {
    return http.get("/users");
  },
  deleteUser: (id) => {
    return http.delete(`/users?id=${id}`);
  },
  postUser: (data) => {
    return http.post("/users", data);
  },
  uploadAvatar: (token, data) => {
    return http.post("/users/upload-avatar", data, {
      headers: {
        token,
      },
    });
  },
  updateUser: (id, data) => {
    return http.put(`/users/${id}`, data);
  },
};
