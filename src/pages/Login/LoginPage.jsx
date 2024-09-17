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
import SignHeader from "../../components/Header/SignHeader";
import Lottie from "lottie-react";
import { pathDefault } from "../../common/path";
import useResponsive from "../../hooks/useResponsive";
const LoginPage = () => {
  const { handleNotification } = useContext(NotificationContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isResponsive = useResponsive({
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
  });
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: async (values) => {
        try {
          const result = await authService.signIn(values);
          handleNotification("Đăng nhập thành công", "success");
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

  return (
    <div>
      <SignHeader title={"Đăng nhập"} />
      <div className="container">
        <div className="login_content h-screen flex items-center">
          <div className="login_img hidden xl:block w-1/2">
            <Lottie animationData={signInAnimation} loop={true} />
          </div>
          <div className="login_form w-full xl:w-1/2 px-5">
            <form onSubmit={handleSubmit} className="space-y-5">
              <h1 className="font-medium text-4xl text-center">Đăng nhập</h1>
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
                  className="py-3 px-5 inline-block w-full bg-black text-white rounded"
                  style={{ backgroundColor: "#013A12" }}
                >
                  Đăng nhập
                </button>
                <Link
                  to={pathDefault.register}
                  className="text-blue-600 mt-5 hover:underline inline-block"
                >
                  Chưa có tài khoản? Nhấn vào đây để đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
