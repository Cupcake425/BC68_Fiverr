import React from "react";
import registerAnimation from "./../../assets/animation/Animation - 1722348620025.json";
import { useLottie } from "lottie-react";
import FormRegister from "../../components/FormRegister/FormRegister";
import SignHeader from "../../components/Header/SignHeader";

const RegisterPage = () => {
  const options = {
    animationData: registerAnimation,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div>
      <SignHeader title={"Sign up"} />
      <div className="flex">
        <div className="w-1/2 hidden md:block">{View}</div>
        <div className="w-full md:w-1/2">
          <FormRegister />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
