import React, { useContext } from "react";
import InputCustom from "../InputCustom/InputCustom";
import { DatePicker, Input } from "antd";
import { useFormik } from "formik";
import * as yup from "yup";
import { notiValidation } from "../../common/notiValidation";
import { authService } from "../../services/auth.service";
import { NotificationContext } from "../../App";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  const { handleNotification } = useContext(NotificationContext);
  const navigate = useNavigate();
  // thực hiện bóc tách ra các thuộc tính values,errors,handleChange, handleBlur, handleSubmit,touched để setup vào các field của form
  // Thực hiện khai báo các initialValues sẽ có cho formik và thực hiện kiểm tra nhập dữ liệu vào onSubmit có lấy được dữ liệu tất cả form hay ko
  // Thực hiện xử lý validation cho các field của form đang có (validation tùy ý)
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      gender: "",
      birthday: "",
    },
    onSubmit: (values) => {
      console.log(values);
      authService
        .signUp({
          ...values,
          gender: values.gender == "Nam" ? true : false,
        })
        .then((res) => {
          handleNotification("Account created successfully!", "success");
          setTimeout(() => {
            navigate("/dang-nhap");
          }, 2000);
          console.log(res);
        })
        .catch((err) => handleNotification(err.response.data.content, "error"));
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .required(notiValidation.empty)
        .matches(/^[A-Za-zÀ-ỹà-ỹ\s]+$/, "Vui lòng nhập tên không chứa số"),
      email: yup
        .string()
        .required(notiValidation.empty)
        .email(notiValidation.email),
      password: yup
        .string()
        .required(notiValidation.empty)
        .matches(
          /^(?=.*[A-Z])(?=.*\d).+$/,
          "Vui lòng nhập ít nhất 1 chữ cái viết hoa và 1 chữ số"
        ),
      phone: yup
        .string()
        .required(notiValidation.empty)
        .matches(
          /^(0|\+84)[3|5|7|8|9][0-9]{8}$/,
          "Vui lòng nhập đúng định dạng số điện thoại"
        ),
      birthday: yup.string().required(notiValidation.empty),
      gender: yup.string().required(notiValidation.empty),
    }),
  });
  return (
    <div className="flex items-center justify-center flex-col h-full">
<<<<<<< HEAD
      <h1 className="font-medium text-4xl text-center">Sign up</h1>
=======
      <h1 className="text-3xl font-semibold">Form đăng ký</h1>
>>>>>>> haDev
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          <InputCustom
            contentLabel={"Họ tên"}
            name={"name"}
            placeholder={"Vui lòng nhập họ tên"}
            classWrapper="w-1/2 p-3"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name}
            touched={touched.name}
          />
          <InputCustom
            contentLabel={"Email"}
            name={"email"}
            placeholder={"Vui lòng nhập email"}
            classWrapper="w-1/2 p-3"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
          />
          <InputCustom
            contentLabel={"Mật khẩu"}
            name={"password"}
            placeholder={"Vui lòng nhập mật khẩu"}
            classWrapper="w-full p-3"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password}
            touched={touched.password}
          />
          <InputCustom
            contentLabel={"Số điện thoại"}
            name={"phone"}
            placeholder={"Vui lòng nhập số điện thoại"}
            classWrapper="w-1/3 p-3"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.phone}
            touched={touched.phone}
          />
          <div className="w-1/3 p-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Ngày sinh
            </label>
            <DatePicker
              className="w-full"
              onChange={(date, dateSpring) => {
                setFieldValue("birthday", dateSpring);
              }}
              format="DD-MM-YYYY"
            />
            {errors.birthday && touched.birthday ? (
              <p className="text-red-500">{errors.birthday}</p>
            ) : null}
          </div>
          <div className="w-1/3 p-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Giới tính
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              name="gender"
              onChange={handleChange}
              value={values.gender}
            >
              <option value="">Vui lòng chọn giới tính</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
            {errors.gender && touched.gender ? (
              <p className="text-red-500">{errors.gender}</p>
            ) : null}
          </div>
          <div className="w-full p-3">
            <button
              type="submit"
<<<<<<< HEAD
              className="py-3 px-6 bg-black text-white rounded w-full hover:opacity-85"
=======
              className="py-3 px-6 bg-black text-white rounded w-full"
              style={{ backgroundColor: "#013A12" }}
>>>>>>> haDev
            >
              Đăng ký
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
