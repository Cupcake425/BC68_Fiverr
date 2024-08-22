import { http } from "./config";

export const binhLuanService = {
  getAllBinhLuan: () => {
    return http.get("/binh-luan");
  },
  getBinhLuan: (id) => {
    return http.get(`/binh-luan/lay-binh-luan-theo-cong-viec/${id}`);
  },
  postBinhLuan: (token, data) => {
    return http.post(`/binh-luan`, data, {
      headers: {
        token,
      },
    });
  },
};
