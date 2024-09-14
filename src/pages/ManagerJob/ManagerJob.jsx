import React, { useContext, useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import { NotificationContext } from "../../App";
import { congViecService } from "../../services/congViec.service";
import { useSelector } from "react-redux";

const ManagerJob = () => {
  const [job, setJob] = useState();
  const { handleNotification } = useContext(NotificationContext);
  const { user } = useSelector((state) => state.authSlice);

  useEffect(() => {
    congViecService
      .getAllCongViec()
      .then((res) => {
        setJob(res.data.content);
      })
      .catch((err) => console.log(err));
  }, [job]);
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
                  console.log(res);
                  handleNotification(res.data.message, "success");
                })
                .catch((err) => {
                  console.log(err);
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
          <button className="bg-yellow-500 text-white py-2 px-5 rounded hover:bg-yellow-500/90 duration-300">
            Sửa
          </button>
        </Space>
      ),
    },
  ];
  return <Table columns={columns} dataSource={job} />;
};
export default ManagerJob;
