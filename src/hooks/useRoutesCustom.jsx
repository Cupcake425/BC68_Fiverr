import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import UserTemplate from "../template/UserTemplate/UserTemplate";
import { pathDefault } from "../common/path";
import RegisterPage from "../pages/Register/RegisterPage";
import LoginPage from "../pages/Login/LoginPage";
import Home from "../pages/Home/Home";
import ListJobPage from "../pages/ListJobPage/ListJobPage";
import AdminTemplate from "../template/AdminTemplate/AdminTemplate";
import AdminLogin from "../pages/AdminLogin/AdminLogin";
// import ManagerUser from "../pages/ManagerUser/ManagerUser";
import CreateUser from "../pages/CreateUser/CreateUser";
import { Skeleton } from "antd";
import JobPage from "../pages/JobPage/JobPage";
import CreateJob from "../pages/CreateJob/CreateJob";
import ManagerJob from "../pages/ManagerJob/ManagerJob";

const ManagerUser = React.lazy(() =>
  import("../pages/ManagerUser/ManagerUser")
);

const useRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: pathDefault.homePage,
      element: <UserTemplate />,
      children: [
        {
          path: pathDefault.homePage,
          element: <Home />,
        },
        {
          path: pathDefault.listJob,
          element: <ListJobPage />,
        },
        {
          path: `${pathDefault.job}/:id`,
          element: <JobPage />,
        },
      ],
    },
    {
      path: pathDefault.register,
      element: <RegisterPage />,
    },
    {
      path: pathDefault.login,
      element: <LoginPage />,
    },

    {
      path: pathDefault.admin,
      element: <AdminTemplate />,
      children: [
        // {
        //   index: true,
        //   element: <ManagerUser />,
        // },
        {
          path: "manager-user",
          element: (
            <Suspense fallback={<Skeleton />}>
              <ManagerUser />
            </Suspense>
          ),
        },
        {
          path: "create-user",
          element: <CreateUser />,
        },
        {
          path: "create-job",
          element: <CreateJob />,
        },
        {
          path: "manager-job",
          element: <ManagerJob />,
        },
      ],
    },
    {
      path: "/admin-login",
      element: <AdminLogin />,
    },
  ]);
  return routes;
};

export default useRoutesCustom;
