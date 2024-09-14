import React, { useContext, useState } from "react";
import { NotificationContext } from "../../App";
import InputCustom from "../../components/InputCustom/InputCustom";
import { congViecService } from "../../services/congViec.service";
import { useSelector } from "react-redux";

const CreateJob = () => {
  const { handleNotification } = useContext(NotificationContext);
  const { user } = useSelector((state) => state.authSlice);
  const [job, setJob] = useState({
    id: 0,
    tenCongViec: "",
    danhGia: 0,
    giaTien: 0,
    nguoiTao: user?.id,
    hinhAnh: "https://fiverrnew.cybersoft.edu.vn/images/cv34.jpg",
    moTa: "",
    maChiTietLoaiCongViec: 0,
    moTaNgan: "",
    saoCongViec: 10,
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    congViecService
      .postCongViec(user?.token, job)
      .then((res) => {
        console.log(res);
        handleNotification(res.data.message, "success");
      })
      .catch((err) => {
        console.log(err);
        handleNotification(err.message, "error");
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setJob({ ...job, [name]: value });
  };
  return (
    <>
      <h2 className="font-semibold text-3xl mb-5">
        Thêm công việc vào hệ thống
      </h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <InputCustom
          contentLabel="Tên công việc"
          name="tenCongViec"
          onChange={handleChange}
        />
        <InputCustom
          contentLabel="Đánh giá"
          name="danhGia"
          type="number"
          onChange={handleChange}
        />
        <InputCustom
          contentLabel="Giá tiền"
          name="giaTien"
          type="number"
          onChange={handleChange}
        />
        <InputCustom
          contentLabel="Mã chi tiết loại"
          name="maChiTietLoaiCongViec"
          onChange={handleChange}
          type="number"
        />
        {/* <InputCustom contentLabel="Hình ảnh" name="hinhAnh" type="file" /> */}
        <InputCustom contentLabel="Mô tả" name="moTa" onChange={handleChange} />
        <InputCustom
          contentLabel="Mô tả ngắn"
          name="moTaNgan"
          onChange={handleChange}
        />
        <InputCustom
          contentLabel="Sao Công việc"
          name="saoCongViec"
          type="number"
          onChange={handleChange}
        />
        <div>
          <button
            className="px-5 py-2 bg-black text-white rounded"
            type="submit"
          >
            Tạo công việc
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateJob;
