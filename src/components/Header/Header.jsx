import React, { useEffect, useRef, useState } from "react";
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
import useResponsive from "../../hooks/useResponsive";

const Header = () => {
  const isResponsive = useResponsive({
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
  });
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [dropDownMenu, setDropDownMenu] = useState([]);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);

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
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        let sideBar = document.querySelector(".sidebar_wrapper");
        sideBar.style.display = "none";
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
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
    <header className="sticky top-0 z-40 bg-white ">
      <div className="container">
        <div className="header_content flex items-center justify-between">
          <div className="header_logo flex items-center space-x-4">
            {isResponsive.lg && (
              <>
                <button
                  ref={buttonRef}
                  onClick={() => {
                    let sideBar = document.querySelector(".sidebar_wrapper");

                    sideBar.style.display = "block";
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="19"
                    viewBox="0 0 23 19"
                  >
                    <rect
                      y="16"
                      width="23"
                      height="3"
                      rx="1.5"
                      fill="#555"
                    ></rect>
                    <rect width="23" height="3" rx="1.5" fill="#555"></rect>
                    <rect
                      y="8"
                      width="23"
                      height="3"
                      rx="1.5"
                      fill="#555"
                    ></rect>
                  </svg>
                </button>
                <div
                  className="sidebar_wrapper self-start"
                  style={{ display: "none" }}
                >
                  <div
                    ref={sidebarRef}
                    className="sidebar fixed top-0 left-0 h-full !m-0 space-y-4"
                  >
                    <LinkCustom
                      content={"Sign up"}
                      to={pathDefault.register}
                      className={
                        "py-2 px-5 w-1/2 text-center border-green-600 text-green-600 hover:bg-green-600 hover:text-white border hover:border-white duration-300 rounded"
                      }
                    />
                    <LinkCustom
                      content={"Sign in"}
                      to={pathDefault.login}
                      className={
                        "text-gray-700 hover:text-green-500 duration-300"
                      }
                    />
                    <div className={` flex flex-col mt-1 container space-y-4 `}>
                      {dropDownMenu.map((item, index) => {
                        const dropDown = item.dsNhomChiTietLoai.flatMap(
                          (group) => {
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
                          }
                        );
                        return (
                          <Dropdown
                            menu={{ items: dropDown }}
                            trigger={["click"]}
                          >
                            <a onClick={(e) => e.preventDefault()}>
                              <Space>
                                <button key={index}>
                                  {item.tenLoaiCongViec}
                                </button>
                              </Space>
                            </a>
                          </Dropdown>
                        );
                      })}
                    </div>
                  </div>
                  <div className="sidebar_overlay"></div>
                </div>
              </>
            )}
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
          <nav className="header_navigation space-x-1 lg:space-x-2 xl:space-x-5">
            {!isResponsive.lg && (
              <>
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
              </>
            )}
            <LinkCustom
              content={"Sign in"}
              to={pathDefault.login}
              className={"text-gray-700 hover:text-green-500 duration-300"}
            />
            <LinkCustom
              content={"Sign up"}
              to={pathDefault.register}
              className={
                "py-2 px-5 border-green-600 text-green-600 hover:bg-green-600 hover:text-white border hover:border-white duration-300 rounded"
              }
            />
          </nav>
        </div>
      </div>
      {(active2 || pathname !== pathDefault.homePage) && !isResponsive.lg && (
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
