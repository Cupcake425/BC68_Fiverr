import React from "react";
import registerAnimation from "./../../assets/animation/Animation - 1722348620025.json";
import { useLottie } from "lottie-react";
import FormRegister from "../../components/FormRegister/FormRegister";

const RegisterPage = () => {
  const options = {
    animationData: registerAnimation,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full lg:w-1/2">
        <FormRegister />
      </div>
    </div>
  );
};

export default RegisterPage;
