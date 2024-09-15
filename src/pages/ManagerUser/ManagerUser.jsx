import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Modal, Select, Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getValueUserApi } from "../../redux/nguoiDungSlice";
import { nguoiDungService } from "../../services/nguoiDung.service";
import { NotificationContext } from "../../App";
import "./ManagerUser.scss";
import InputCustom from "../../components/InputCustom/InputCustom";
import { skillService } from "../../services/skill.service";

// Thực hiện tạo 1 service dùng quản lý các API về người dùng
// Cấu hình một phương thức dùng để xóa người dùng trong hệ thống (khi gọi tới phương thức cần truyền ID của người dùng đang muốn xóa)
// Sau khi đã cấu hình phương thức, quay trở lại component managerUser và xử ký tạo sự kiện click tương tác với nút xóa dùng để xóa người dùng

const ManagerUser = () => {
  const [userValue, setUserValue] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: true,
    role: "",
    skill: [],
    certification: [],
  });
  const [listSkill, setListSkill] = useState([]);
  const { handleNotification } = useContext(NotificationContext);
  const dispatch = useDispatch();
  const { listUsers } = useSelector((state) => state.nguoiDungSlice);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (record) => {
    setUserValue({
      id: record.id,
      name: record.name,
      email: record.email,
      phone: record.phone,
      birthday: record.birthday.split("-").reverse().join("-"), // Adjust date format
      gender: record.gender,
      role: record.role,
      skill: record.skill || [],
      certification: record.certification || [],
    });
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSubmitFormCreateUser = (event) => {
    event.preventDefault();
    nguoiDungService
      .updateUser(userValue.id, userValue)
      .then((res) => {
        console.log(res);
        handleNotification("Update thành công", "success");
        dispatch(getValueUserApi());
      })
      .catch((err) => {
        console.log(err);
        handleNotification("Update thất bại", "error");
      });
  };
  const handleChangeValue = (event) => {
    const { name, value } = event.target;
    setUserValue({ ...userValue, [name]: value });
  };

  useEffect(() => {
    skillService
      .getSkill()
      .then((res) => {
        const newListSkill = res.data.content.map((item, index) => {
          return { label: item.tenSkill, value: item.tenSkill };
        });
        setListSkill(newListSkill);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    dispatch(getValueUserApi());
  }, []);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (text) => {
        return <img className="h-14" src={text} />;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      render: (text) => {
        return <Tag color={text ? "blue" : "cyan"}>{text ? "Nam" : "Nữ"}</Tag>;
      },
    },

    // USER ADMIN
    {
      title: "ROLE",
      dataIndex: "role",
      render: (text) => (
        <Tag color={text == "ADMIN" ? "geekblue-inverse" : "lime-inverse"}>
          {text}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle" className="space-x-3">
          <button
            onClick={() =>
              nguoiDungService
                .deleteUser(record.id)
                .then((res) => {
                  handleNotification(res.data.message, "success");
                  dispatch(getValueUserApi());
                })
                .catch((err) => {
                  console.log(err);
                  handleNotification(
                    err.response.data.message || err.response.data.content,
                    "error"
                  );
                  dispatch(getValueUserApi());
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
            <form onSubmit={handleSubmitFormCreateUser} className="space-y-3">
              <InputCustom
                contentLabel="Name"
                onChange={handleChangeValue}
                name="name"
                value={userValue.name}
              />
              <InputCustom
                contentLabel="Email"
                onChange={handleChangeValue}
                name="email"
                value={userValue.email}
              />
              <InputCustom
                contentLabel="Phone"
                onChange={handleChangeValue}
                name="phone"
                value={userValue.phone}
              />
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Ngày sinh
                </label>
                <input
                  value={userValue.birthday.split("-").reverse().join("-")}
                  type="date"
                  onChange={(event) => {
                    // const arrDate = event.target.value.split("-").reverse().join("-");
                    const [year, month, day] = event.target.value.split("-");
                    // console.log(arrDate);
                    const arrDate = `${day}-${month}-${year}`;
                    setUserValue({ ...userValue, birthday: arrDate });
                  }}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Gender
                </label>
                <select
                  value={userValue.gender}
                  name="gender"
                  onChange={handleChangeValue}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option value={true}>Nam</option>
                  <option value={false}>Nữ</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Role
                </label>
                <select
                  name="role"
                  value={userValue.role}
                  onChange={handleChangeValue}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option value="USER">User</option>
                  <option value="ADMIN">Admin</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Chọn skill
                </label>
                <Select
                  mode="multiple"
                  allowClear
                  style={{
                    width: "100%",
                  }}
                  placeholder="Please select"
                  options={listSkill}
                  onChange={(value) => {
                    setUserValue({ ...userValue, skill: value });
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Chọn chứng chỉ
                </label>
                <Select
                  mode="tags"
                  allowClear
                  style={{
                    width: "100%",
                  }}
                  placeholder="Please select"
                  tokenSeparators={[","]}
                  onChange={(value) => {
                    setUserValue({ ...userValue, certification: value });
                    console.log(value);
                  }}
                />
              </div>
              <div>
                <button
                  className="px-5 py-2 bg-black text-white rounded"
                  type="submit"
                >
                  Update người dùng
                </button>
              </div>
            </form>
          </Modal>
        </Space>
      ),
    },
  ];
  return <Table columns={columns} dataSource={listUsers} />;
};
export default ManagerUser;
