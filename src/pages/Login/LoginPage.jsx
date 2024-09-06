import React, { useContext } from "react";

import signInAnimation from "./../../assets/animation/signin.json";
import InputCustom from "../../components/InputCustom/InputCustom";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { notiValidation } from "../../common/notiValidation";
import { authService } from "../../services/auth.service";
import { NotificationContext } from "../../App";
import { setLocalStorage } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { setValueUser } from "../../redux/authSlice";

const LoginPage = () => {
  const { handleNotification } = useContext(NotificationContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const options = {
    animationData: signInAnimation,
    loop: true,
  };

  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      // onSubmit: (values) => {
      //   console.log(values);
      //   authService
      //     .signIn({ ...values })
      //     .then((res) => {
      //       console.log(res);
      //       handleNotification("Đăng nhập thành công", "success");
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //       handleNotification("Đăng nhập thất bại", "error");
      //     });
      // },
      onSubmit: async (values) => {
        console.log(values);
        try {
          const result = await authService.signIn(values);
          handleNotification("Đăng nhập thành công", "success");
          console.log(result);
          setLocalStorage("user", result.data.content);
          dispatch(setValueUser(result.data.content));
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } catch (error) {
          console.log(error);
          handleNotification(error.response.data.content, "error");
        }
      },
      validationSchema: yup.object({
        email: yup
          .string()
          .required(notiValidation.empty)
          .email(notiValidation.email),
        password: yup
          .string()
          .required(notiValidation.empty)
          .min(6, notiValidation.min(6))
          .max(10, notiValidation.max(10)),
      }),
    });
  // NV1: Thực hiện khai báo formik trong loginPage và thực hiện xử lý lấy dữ liệu người dùng khi bấm đăng nhập
  // NV2: thực hiện validation dữ liệu của 2 input thông qua thứ nhất: 2 input đều phải nhập dữ liệu, input email kiểm tra dữ liệu có phải email, còn input mật khẩu
  // kiểm tra tối thiểu 6 và tối đa 10 ký tự
  // NV3: thực hiện tạo một phương thức mới trong authService quản lý đăng nhập
  // NV4: Thực hiện sử dụng phương thức vừa tạo kết hợp dữ liệu người dùng để gửi cho BE kiểm tra và nhận kết quả
  return (
    <div className="container flex items-center justify-center h-screen">
      <div className="login_form px-5 w-full lg:w-1/2 xl:w-1/3">
        <form onSubmit={handleSubmit} className="space-y-5">
          <h1 className="font-medium text-4xl text-center">Sign in</h1>
          <InputCustom
            contentLabel={"Email"}
            placeholder={"Vui lòng nhập email"}
            name={"email"}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
          />
          <InputCustom
            contentLabel={"Password"}
            placeholder={"Vui lòng nhập password"}
            name={"password"}
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password}
            touched={touched.password}
          />
          <div>
            <button
              type="submit"
              className="py-3 px-5 inline-block w-full bg-black text-white rounded hover:opacity-85"
            >
              Đăng nhập
            </button>
            <Link
              to={`/dang-ky`}
              className="text-blue-600 mt-5 hover:underline inline-block"
            >
              Chưa có tài khoản? Nhấn vào đây để đăng ký
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
