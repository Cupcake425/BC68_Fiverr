import React, { useContext, useEffect, useState } from "react";
import InputCustom from "../../components/InputCustom/InputCustom";
import { Select, Space } from "antd";
import { skillService } from "../../services/skill.service";
import { nguoiDungService } from "../../services/nguoiDung.service";
import { NotificationContext } from "../../App";
import { useSelector } from "react-redux";

const CreateUser = () => {
  const { handleNotification } = useContext(NotificationContext);
  const [listSkill, setListSkill] = useState([]);
  const [isActive, setIsActive] = useState(true);
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
  const [step, setStep] = useState(0);
  const [uploadImage, setUploadImage] = useState(null);
  const [errorImage, setErrorImage] = useState("");

  const { user } = useSelector((state) => state.authSlice);

  const handleSubmitFormCreateUser = (event) => {
    event.preventDefault();
    nguoiDungService
      .postUser(userValue)
      .then((res) => {
        console.log(res);
        setIsActive(false);
        handleNotification("Đăng ký thành công", "success");
      })
      .catch((err) => {
        console.log(err);
        handleNotification("đăng ký thất bại", "error");
      });
  };

  const handleSubmitAvatar = (event) => {
    event.preventDefault();
    let formData = new FormData();
    if (uploadImage) {
      formData.append("formFile", uploadImage.image);
      nguoiDungService
        .uploadAvatar(user.token, formData)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  const renderLayoutForm = () => {
    switch (step) {
      case 0:
        return (
          <form onSubmit={handleSubmitFormCreateUser} className="space-y-3">
            <InputCustom
              contentLabel="Name"
              onChange={handleChangeValue}
              name="name"
            />
            <InputCustom
              contentLabel="Email"
              onChange={handleChangeValue}
              name="email"
            />
            <InputCustom
              contentLabel="Phone"
              onChange={handleChangeValue}
              name="phone"
            />
            <InputCustom
              contentLabel="Password"
              onChange={handleChangeValue}
              name="password"
              type="password"
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
                Tạo người dùng
              </button>
            </div>
          </form>
        );

      case 1:
        return (
          <div>
            <form className="space-y-2" onSubmit={handleSubmitAvatar}>
              <h2>Upload hình ảnh cho người dùng</h2>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Ngày sinh
                </label>
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={(event) => {
                    console.log(event.target.files[0]);
                    const image = event.target.files[0];
                    if (image) {
                      if (image.size > 1 * 1024 * 1024) {
                        setErrorImage("Hình vượt quá dung lượng cho phép");
                        return;
                      }
                      const imageUrl = URL.createObjectURL(image);
                      console.log(imageUrl);
                      setUploadImage({ image, imageUrl });
                      setErrorImage("");
                    }
                  }}
                />
              </div>
              <p className="text-red-500 ">{errorImage}</p>
              <img src={uploadImage?.imageUrl} alt="" className="w-32" />
              <button
                type="submit"
                className="py-2 px-5 bg-green-600 text-white rounded"
              >
                Upload hình ảnh
              </button>
            </form>
          </div>
        );
    }
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

  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }
  const handleChangeValue = (event) => {
    const { name, value } = event.target;
    setUserValue({ ...userValue, [name]: value });
  };

  return (
    <div>
      <h2 className="font-semibold text-3xl mb-5">
        Form tạo người dùng trong hệ thống
      </h2>
      {renderLayoutForm()}
      <button
        disabled={isActive}
        onClick={() => {
          setStep(step + 1);
        }}
        className={`py-2 px-5 bg-black text-white rounded mt-5 ${
          isActive ? "cursor-not-allowed bg-black" : ""
        }`}
      >
        Chuyển tới bước tiếp theo
      </button>
    </div>
  );
};

export default CreateUser;
