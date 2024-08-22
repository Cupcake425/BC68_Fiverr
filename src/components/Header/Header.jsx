import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import IconLogoHeader from "../Icon/IconLogoHeader";
import { pathDefault } from "../../common/path";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import LinkCustom from "./../LinkCustom/LinkCustom";
import "./Header.scss";
import FormSearchProduct from "../FormSearchProduct/FormSearchProduct";
import IconFiverrPro from "../Icon/IconFiverrPro";
import IconFiverrPro2 from "../Icon/IconFiverrPro2";
import { congViecService } from "../../services/congViec.service";

const Header = () => {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [dropDownMenu, setDropDownMenu] = useState([]);

  const isActive = () => {
    window.scrollY > 350 ? setActive(true) : setActive(false);
  };

  const isActive2 = () => {
    window.scrollY > 800 ? setActive2(true) : setActive2(false);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", isActive2);
    return () => {
      window.removeEventListener("scroll", isActive2);
    };
  }, []);

  useEffect(() => {
    congViecService
      .layMenuLoaiCongViec()
      .then((res) => setDropDownMenu(res.data.content))
      .catch((err) => console.log(err));
  }, []);
  const items = [
    {
      key: "1",
      label: (
        <div className="border border-solid border-gray-300 px-3 py-4 rounded">
          <div className="flex items-center gap-5">
            <IconFiverrPro />
            <div>
              <p className="font-bold text-lg">I'm looking to hire</p>
              <p className="text-gray-500">
                My team needs vetted freelance talent
                <br />
                and a premium business solution.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="border border-solid border-gray-300 px-3 py-4 rounded">
          <div className="flex items-center gap-5">
            <IconFiverrPro2 />
            <div>
              <p className="font-bold text-lg">I want to offer Pro services</p>
              <p className="text-gray-500">
                I'd like to work on business projects as a<br />
                Pro freelancer or agency
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <header className="sticky top-0 z-50 bg-white ">
      <div className="container">
        <div className="header_content flex items-center justify-between">
          <div className="header_logo flex items-center space-x-4">
            <Link to={pathDefault.homePage} className="py-5">
              <IconLogoHeader />
            </Link>
            <FormSearchProduct
              className={`${
                active || pathname !== pathDefault.homePage
                  ? "visible opacity-100"
                  : "invisible opacity-0"
              } duration-300`}
            />
          </div>
          <nav className="header_navigation space-x-5">
            <Dropdown
              menu={{
                items,
              }}
              arrow={true}
              trigger={"click"}
              className="cursor-pointer py-3 px-4 hover:bg-gray-100 duration-300 rounded-md "
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Fiverr Pro
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <button>English</button>
            <a href="#">Become a Seller</a>
            <LinkCustom
              content={"Sign in"}
              to={pathDefault.login}
              className={
                "border border-green-600 text-green-600 hover:bg-green-600 hover:text-white duration-300 rounded"
              }
            />
            <LinkCustom
              content={"Sign up"}
              to={pathDefault.register}
              className={
                "bg-green-600 text-white hover:bg-white hover:text-green-600 border hover:border-green-600 duration-300 rounded"
              }
            />
          </nav>
        </div>
      </div>
      {(active2 || pathname !== pathDefault.homePage) && (
        <>
          <hr className="w-full" />
          <div className={` flex justify-between mt-1 container items-center`}>
            {dropDownMenu.map((item, index) => {
              const dropDown = item.dsNhomChiTietLoai.flatMap((group) => {
                return {
                  key: group.id,
                  label: (
                    <div>
                      <p className="font-bold">{group.tenNhom}</p>
                      {group.dsChiTietLoai.map((detail) => (
                        <div>
                          <Link to={`/job/${detail.id}`}>
                            {detail.tenChiTiet}
                          </Link>
                          <br />
                        </div>
                      ))}
                    </div>
                  ),
                };
              });
              return (
                <Dropdown menu={{ items: dropDown }}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <button key={index}>{item.tenLoaiCongViec}</button>
                    </Space>
                  </a>
                </Dropdown>
              );
            })}
          </div>
        </>
      )}
      <hr className="w-full mt-2" />
    </header>
  );
};

export default Header;
