import React, { useContext, useEffect, useState } from "react";
import { Modal, Space, Table, Tag } from "antd";
import { NotificationContext } from "../../App";
import { congViecService } from "../../services/congViec.service";
import { useSelector } from "react-redux";
import InputCustom from "../../components/InputCustom/InputCustom";
import "./ManagerJob.scss";

const ManagerJob = () => {
  const [job, setJob] = useState([]);
  const [jobValue, setJobValue] = useState({
    id: 0,
    tenCongViec: "string",
    danhGia: 0,
    giaTien: 0,
    nguoiTao: 0,
    hinhAnh: "string",
    moTa: "string",
    maChiTietLoaiCongViec: 0,
    moTaNgan: "string",
    saoCongViec: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { handleNotification } = useContext(NotificationContext);
  const { user } = useSelector((state) => state.authSlice);

  const showModal = (record) => {
    setJobValue({
      id: record.id,
      tenCongViec: record.tenCongViec,
      danhGia: record.danhGia,
      giaTien: record.giaTien,
      nguoiTao: record.nguoiTao,
      hinhAnh: record.hinhAnh,
      moTa: record.moTa,
      maChiTietLoaiCongViec: record.maChiTietLoaiCongViec,
      moTaNgan: record.moTaNgan,
      saoCongViec: record.saoCongViec,
    });
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    congViecService
      .updateCongViec(user?.token, jobValue.id, jobValue)
      .then((res) => {
        console.log(res);
        handleNotification("Update thành công", "success");
        congViecService
          .getAllCongViec()
          .then((res) => {
            setJob(res.data.content);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setJobValue({ ...jobValue, [name]: value });
  };
  useEffect(() => {
    congViecService
      .getAllCongViec()
      .then((res) => {
        setJob(res.data.content);
      })
      .catch((err) => console.log(err));
  }, []);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên công việc",
      dataIndex: "tenCongViec",
      key: "tenCongViec",
    },
    {
      title: "Logo",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (text) => {
        return <img className="h-14" src={text} />;
      },
      responsive: ["lg"],
    },

    // USER ADMIN
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle" className="space-x-3">
          <button
            onClick={() =>
              congViecService
                .deleteCongViec(user?.token, record.id)
                .then((res) => {
                  handleNotification(res.data.message, "success");
                  congViecService.getAllCongViec().then((res) => {
                    setJob(res.data.content);
                  });
                })
                .catch((err) => {
                  handleNotification(
                    err.response.data.message || err.response.data.content,
                    "error"
                  );
                })
            }
            className="bg-red-500 text-white py-2 px-5 rounded hover:bg-red-500/90 duration-300"
          >
            Xóa
          </button>
          <button
            onClick={() => showModal(record)}
            className="bg-yellow-500 text-white py-2 px-5 rounded hover:bg-yellow-500/90 duration-300"
          >
            Sửa
          </button>
          <Modal
            title="Update user profile"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[]}
          >
            <form onSubmit={handleSubmit} className="space-y-3">
              <InputCustom
                contentLabel="Tên công việc"
                name="tenCongViec"
                onChange={handleChange}
                value={jobValue.tenCongViec}
              />
              <InputCustom
                contentLabel="Đánh giá"
                name="danhGia"
                type="number"
                onChange={handleChange}
                value={jobValue.danhGia}
              />
              <InputCustom
                contentLabel="Giá tiền"
                name="giaTien"
                type="number"
                onChange={handleChange}
                value={jobValue.giaTien}
              />
              <InputCustom
                contentLabel="Mã chi tiết loại"
                name="maChiTietLoaiCongViec"
                onChange={handleChange}
                type="number"
                value={jobValue.maChiTietLoaiCongViec}
              />
              <InputCustom contentLabel="Hình ảnh" name="hinhAnh" />
              <InputCustom
                contentLabel="Mô tả"
                name="moTa"
                onChange={handleChange}
                value={jobValue.moTa}
              />
              <InputCustom
                contentLabel="Mô tả ngắn"
                name="moTaNgan"
                onChange={handleChange}
                value={jobValue.moTaNgan}
              />
              <InputCustom
                contentLabel="Sao Công việc"
                name="saoCongViec"
                type="number"
                onChange={handleChange}
                value={jobValue.saoCongViec}
              />
              <div>
                <button
                  className="px-5 py-2 bg-black text-white rounded"
                  type="submit"
                >
                  Update công việc
                </button>
              </div>
            </form>
          </Modal>
        </Space>
      ),
    },
  ];
  return <Table columns={columns} dataSource={job} />;
};
export default ManagerJob;
