import { http } from "./config";
export const congViecService = {
  layCongViecTheoTen: (data) => {
    return http.get(`/cong-viec/lay-danh-sach-cong-viec-theo-ten/${data}`);
  },
  layMenuLoaiCongViec: () => {
    return http.get(`/cong-viec/lay-menu-loai-cong-viec`);
  },
  layCongViecTheoChiTietLoai: (id) => {
    return http.get(`/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`);
  },
  layCongViecChiTiet: (id) => {
    return http.get(`/cong-viec/lay-cong-viec-chi-tiet/${id}`);
  },
};
