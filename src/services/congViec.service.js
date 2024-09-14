import { http } from "./config";
export const congViecService = {
  layCongViecTheoTen: (data) => {
    return http.get(`/cong-viec/lay-danh-sach-cong-viec-theo-ten/${data}`);
  },
  layMenuLoaiCongViec: () => {
    return http.get(`/cong-viec/lay-menu-loai-cong-viec`);
  },
  layCongViecChiTiet: (id) => {
    return http.get(`/cong-viec/lay-cong-viec-chi-tiet/${id}`);
  },
  postCongViec: (token, data) => {
    return http.post(`/cong-viec`, data, {
      headers: {
        token,
      },
    });
  },
  getAllCongViec: () => {
    return http.get(`/cong-viec`);
  },
  deleteCongViec: (token, id) => {
    return http.delete(`/cong-viec/${id}`, {
      headers: {
        token,
      },
    });
  },
};
