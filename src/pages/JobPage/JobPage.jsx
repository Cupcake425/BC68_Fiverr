import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { congViecService } from "../../services/congViec.service";
import { Dropdown, Select, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { binhLuanService } from "../../services/binhLuan.service";
import { NotificationContext } from "../../App";
import { useSelector } from "react-redux";
import { Tabs } from "antd";
import useResponsive from "../../hooks/useResponsive";

const JobPage = () => {
  const isResponsive = useResponsive({
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
  });
  const { handleNotification } = useContext(NotificationContext);
  const { user } = useSelector((state) => state.authSlice) || null;
  const { id } = useParams();
  const [job, setJob] = useState([]);
  const [open, setOpen] = useState(null);
  const [sort, setSort] = useState("Most relevant");
  const [cmt, setCmt] = useState([]);
  const [binhLuan, setBinhLuan] = useState({
    maCongViec: id,
    maNguoiBinhLuan: user?.user?.id || "9956",
    ngayBinhLuan: new Date().toLocaleString("en-GB", { timeZone: "UTC" }),
    noiDung: "",
    saoBinhLuan: "5",
  });

  useEffect(() => {
    congViecService
      .layCongViecChiTiet(id)
      .then((res) => setJob(res.data.content[0]))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    binhLuanService
      .getBinhLuan(id)
      .then((res) => setCmt(res.data.content))
      .catch((err) => console.log(err));
  }, [id]);

  const handlePostBinhLuan = () => {
    binhLuanService
      .postBinhLuan(user?.token, binhLuan)
      .then((res) => {
        console.log(res);
        handleNotification(res.data.message, "success");
        // Refetch comment từ bình luận mới gửi
        binhLuanService
          .getBinhLuan(id)
          .then((res) => setCmt(res.data.content))
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
        handleNotification(err.message, "error");
      });
  };

  const toggleDropDown = (index) => {
    setOpen(open == index ? null : index);
  };

  const question = [
    "What happens if I'm not satisfied with the logo design in the end?",
    "What do I need to start?",
    "Are your designs original and unique?",
    "What are the Source and Vector files and why do I need them?",
  ];

  const answers = [
    "If you are not satisfied with the logo design, we always offer revisions to see if we can create the perfect logo for you! If these revisions do not lead to a logo design that meets the expectations, then we always offer a full refund of the order!",
    "After ordering my gig you will see some basic questions where I will determine what are your exact needs and can provide you with logo. Not much!",
    "Yes, All my designs are 100% unique. I design from scratch. No clipart No template.",
    "The Source and Vector files are the files used to create your logo. They can be used to resize or edit your logo in any way and are generally required when making merchandise, etc. These files are available in AI, PSD, EPS, PDF, SVG and CDR",
  ];

  const items = [
    {
      key: "1",
      label: "Basic",
      children: (
        <div className="text-gray-500 text-xl">
          <p className="text-2xl font-bold">$120</p>
          <p>Save up to 10% with Subscribe to Save</p>
          <p>
            <span className="font-semibold">BASIC</span>&nbsp;1 logo concept
            including vector & source files + 3 revisions
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-700 font-semibold my-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
              <path d="M9 4H7v5h5V7H9V4z"></path>
            </svg>
            <span>6-day delivery</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path>
              <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path>
            </svg>
            <span>3 Revisions</span>
          </div>
          <div className="text-sm">
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 11 9"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
              </svg>
              <span>1 concept included</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 11 9"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
              </svg>
              <span>Logo transparency</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 11 9"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
              </svg>
              <span>Vector file</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 11 9"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
              </svg>
              <span>Printable file</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 11 9"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
              </svg>
              <span>Include 3D mockup</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "Standard",
      children: (
        <div className="text-gray-500 text-xl">
          <p className="text-2xl font-bold">$220</p>
          <p>Save up to 10% with Subscribe to Save</p>
          <p>
            <span className="font-semibold">BEST CHOICE</span>&nbsp;2 logo
            concepts including vector & source files + unlimited revisions +
            social media kit
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-700 font-semibold my-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
              <path d="M9 4H7v5h5V7H9V4z"></path>
            </svg>
            <span>6-day delivery</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path>
              <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path>
            </svg>
            <span>Unlimited Revisions</span>
          </div>
          <div className="text-sm">
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 11 9"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
              </svg>
              <span>2 concept included</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 11 9"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
              </svg>
              <span>Logo transparency</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 11 9"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
              </svg>
              <span>Vector file</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 11 9"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
              </svg>
              <span>Printable file</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 11 9"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
              </svg>
              <span>Include 3D mockup</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: "Premium",
      children: (
        <div className="text-gray-500 text-xl">
          <p className="text-2xl font-bold">$320</p>
          <p>Save up to 10% with Subscribe to Save</p>
          <p>
            <span className="font-semibold">PREMIUM</span>&nbsp;3 logo concepts
            including vector & source files + unlimited revisions + social media
            kit
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-700 font-semibold my-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
              <path d="M9 4H7v5h5V7H9V4z"></path>
            </svg>
            <span>6-day delivery</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path>
              <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path>
            </svg>
            <span>Unlimited Revisions</span>
          </div>
          <div className="text-sm">
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 11 9"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
              </svg>
              <span>3 concept included</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 11 9"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
              </svg>
              <span>Logo transparency</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 11 9"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
              </svg>
              <span>Vector file</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 11 9"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
              </svg>
              <span>Printable file</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 11 9"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
              </svg>
              <span>Include 3D mockup</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const renderPagePC = () => {
    return (
      <div className="job_page mt-5">
        <div className="container flex flex-1 justify-between items-center gap-10">
          <div style={{ flex: 2 }}>
            <p>
              <Link>{job.tenLoaiCongViec}</Link>
              <span> &gt; </span>
              <Link>{job.tenNhomChiTietLoai}</Link>
              <span> &gt; </span>
              <Link to={`/job/${id}`}>{job.tenChiTietLoai}</Link>
            </p>
            <h2 className="font-bold mt-5 text-4xl text-gray-700">
              {job?.congViec?.tenCongViec}
            </h2>
            <div className="mt-5 flex gap-5">
              <img src={job.avatar} className="rounded-full h-20 w-20" />
              <div className="flex flex-col ">
                <Link className="font-bold text-xl">{job.tenNguoiTao}</Link>
                <div className="flex items-center">
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                    ></path>
                  </svg>
                  <span className="font-bold text-black">
                    &nbsp;{job?.congViec?.saoCongViec}&nbsp;
                  </span>
                  <span className="text-gray-500">{`(${job?.congViec?.danhGia})`}</span>
                </div>
              </div>
            </div>
            <img
              className="my-5 rounded h-full w-full"
              src={job?.congViec?.hinhAnh}
              alt=""
            />
            <div className="mt-5">
              <h3 className="text-2xl">About this gig</h3>
              <p className="mt-5">{job?.congViec?.moTa}</p>
            </div>
            <div className="mt-10">
              <h3 className="text-2xl">{`Get to know about ${job.tenNguoiTao}`}</h3>
              <div className="mt-5 flex gap-5">
                <img src={job.avatar} className="rounded-full h-20 w-20" />
                <div className="flex flex-col ">
                  <Link className="font-bold text-xl">{job.tenNguoiTao}</Link>
                  <div className="flex items-center">
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                      ></path>
                    </svg>
                    <span className="font-bold text-black">
                      &nbsp;{job?.congViec?.saoCongViec}&nbsp;
                    </span>
                    <span className="text-gray-500">{`(${job?.congViec?.danhGia})`}</span>
                  </div>
                  <p className="underline">{job.tenChiTietLoai}</p>
                </div>
              </div>
              <button className="mt-5 px-5 py-2 border border-solid border-black bg-white rounded hover:bg-black hover:text-white">
                Contact me
              </button>
            </div>
            <div className="mt-10 flex flex-col">
              <h3 className="text-2xl font-bold text-gray-700">FAQ</h3>
              {question.map((ques, index) => (
                <div key={index} className="mb-2">
                  <button
                    className="font-bold text-gray-600 w-full text-left py-3 flex justify-between"
                    onClick={() => toggleDropDown(index)}
                    style={{
                      borderBottom: open == index ? "0px" : "1px solid",
                      cursor: "pointer",
                    }}
                  >
                    {ques}
                    <DownOutlined
                      style={{
                        transform:
                          open == index ? "rotate(180deg)" : "rotate(0deg)",
                        transitionDuration: "300ms",
                      }}
                    />
                  </button>

                  {open == index && (
                    <div
                      className="py-3"
                      style={{
                        borderBottom: open == index ? "1px solid" : "0px",
                      }}
                    >
                      {answers[index]}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-700 mt-10">
                Reviews
              </h3>
              <div className="flex justify-between">
                <p className="font-normal text-xl text-gray-700">
                  731 reviews for this Gig
                </p>
                <div className="flex gap-1 items-center">
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                    ></path>
                  </svg>
                  <p className="font-bold">5.0</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <div className="flex items-center gap-5">
                    <button className="hover:bg-gray-300 rounded p-1">
                      5 stars
                    </button>
                    <span className="border border-black h-3 w-8/12 bg-black rounded-2xl"></span>
                    <p>(716)</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <button className="hover:bg-gray-300 rounded p-1">
                      4 stars
                    </button>
                    <span className="border border-black h-3 w-8/12  rounded-2xl"></span>
                    <p>(15)</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <button className="hover:bg-gray-300 rounded p-1">
                      3 stars
                    </button>
                    <span className="border border-black h-3 w-8/12  rounded-2xl"></span>
                    <p>(0)</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <button className="hover:bg-gray-300 rounded p-1">
                      2 stars
                    </button>
                    <span className="border border-black h-3 w-8/12  rounded-2xl"></span>
                    <p>(0)</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <button className="hover:bg-gray-300 rounded p-1">
                      1 stars
                    </button>
                    <span className="border border-black h-3 w-8/12  rounded-2xl"></span>
                    <p>(0)</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl text-gray-700 font-semibold">
                    Rating Breakdown
                  </h4>
                  <div className="flex justify-between">
                    <p className="text-gray-400">Seller communication level</p>
                    <div className="flex items-center gap-1">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                        ></path>
                      </svg>
                      <p className="font-bold">5.0</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-400">Service as described</p>
                    <div className="flex items-center gap-1">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                        ></path>
                      </svg>
                      <p className="font-bold">5.0</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-400">Recommend to a friend</p>
                    <div className="flex items-center gap-1">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                        ></path>
                      </svg>
                      <p className="font-bold">5.0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="flex gap-3 items-center">
                <p>Sort By</p>
                <button
                  className="flex gap-2 items-center font-semibold text-xl"
                  onClick={() => {
                    setSort(
                      sort == "Most Relevant" ? "Most Recent" : "Most Relevant"
                    );
                  }}
                >
                  {sort}
                  <DownOutlined />
                </button>
              </div>
            </div>

            <div className="mt-10">
              {cmt.map((cmt, index) => {
                return (
                  <div
                    key={index}
                    className="mt-10 border border-gray-400 rounded-2xl"
                  >
                    <div className="p-5">
                      <div className="flex gap-5 items-center">
                        <img
                          src={cmt?.avatar}
                          className="rounded-full h-20 w-20"
                        />
                        <div>
                          <p className="font-bold text-xl">
                            {cmt?.tenNguoiBinhLuan}
                          </p>
                          <p>{cmt?.ngayBinhLuan}</p>
                        </div>
                      </div>
                      <hr className="w-full border-gray-400 my-3" />
                      <div className="mt-5 flex gap-1 items-center">
                        <svg
                          width="16"
                          height="15"
                          viewBox="0 0 16 15"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                          ></path>
                        </svg>
                        <p>{cmt?.saoBinhLuan}</p>
                      </div>
                      <div className="my-5">
                        <p>{cmt?.noiDung}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        Helpful?
                        <button>
                          <i class="fa-regular fa-thumbs-up"></i> YES
                        </button>
                        <button>
                          <i class="fa-regular fa-thumbs-down"></i>NO
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <h3 className="font-semibold">Add Comment</h3>
              <div className="flex mt-5">
                <textarea
                  value={binhLuan.noiDung}
                  onChange={(e) =>
                    setBinhLuan({
                      ...binhLuan,
                      noiDung: e.target.value,
                      ngayBinhLuan: new Date().toLocaleString("en-GB", {
                        timeZone: "UTC",
                      }),
                    })
                  }
                  className="border p-5 border-gray-600 rounded-2xl focus:outline-none"
                  cols="100"
                  rows="3"
                ></textarea>
                <div className="flex flex-col items-center justify-between">
                  <Select
                    defaultValue="5"
                    style={{
                      width: 120,
                    }}
                    onChange={(value) =>
                      setBinhLuan({
                        ...binhLuan,
                        saoBinhLuan: value,
                      })
                    }
                    options={[
                      {
                        value: "5",
                        label: "5 sao",
                      },
                      {
                        value: "4",
                        label: "4 sao",
                      },
                      {
                        value: "3",
                        label: "3 sao",
                      },
                      {
                        value: "2",
                        label: "2 sao",
                      },
                      {
                        value: "1",
                        label: "1 sao",
                      },
                    ]}
                  />
                  <button
                    className="border py-2 px-3 rounded ms-4 border-gray-600 hover:bg-gray-600 hover:text-white hover:border-white"
                    onClick={handlePostBinhLuan}
                  >
                    ADD COMMENT
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="self-start sticky top-36 border border-solid p-6 rounded-2xl border-gray-400"
            style={{ flex: 1 }}
          >
            <Tabs defaultActiveKey="1" items={items} />
          </div>
        </div>
      </div>
    );
  };

  const renderPagePhone = () => {
    return (
      <div className="job_page mt-5">
        <div className="container">
          <div>
            <p>
              <Link>{job.tenLoaiCongViec}</Link>
              <span> &gt; </span>
              <Link>{job.tenNhomChiTietLoai}</Link>
              <span> &gt; </span>
              <Link to={`/job/${id}`}>{job.tenChiTietLoai}</Link>
            </p>
            <h2 className="font-bold mt-5 text-4xl text-gray-700">
              {job?.congViec?.tenCongViec}
            </h2>
            <div className="mt-5 flex gap-5">
              <img src={job.avatar} className="rounded-full h-20 w-20" />
              <div className="flex flex-col ">
                <Link className="font-bold text-xl">{job.tenNguoiTao}</Link>
                <div className="flex items-center">
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                    ></path>
                  </svg>
                  <span className="font-bold text-black">
                    &nbsp;{job?.congViec?.saoCongViec}&nbsp;
                  </span>
                  <span className="text-gray-500">{`(${job?.congViec?.danhGia})`}</span>
                </div>
              </div>
            </div>
            <img
              className="my-5 rounded h-full w-full"
              src={job?.congViec?.hinhAnh}
              alt=""
            />
            <div className="top-36 border border-solid p-6 rounded-2xl border-gray-400">
              <Tabs defaultActiveKey="1" items={items} />
            </div>
            <div className="mt-5">
              <h3 className="text-2xl">About this gig</h3>
              <p className="mt-5">{job?.congViec?.moTa}</p>
            </div>
            <div className="mt-10">
              <h3 className="text-2xl">{`Get to know about ${job.tenNguoiTao}`}</h3>
              <div className="mt-5 flex gap-5">
                <img src={job.avatar} className="rounded-full h-20 w-20" />
                <div className="flex flex-col ">
                  <Link className="font-bold text-xl">{job.tenNguoiTao}</Link>
                  <div className="flex items-center">
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                      ></path>
                    </svg>
                    <span className="font-bold text-black">
                      &nbsp;{job?.congViec?.saoCongViec}&nbsp;
                    </span>
                    <span className="text-gray-500">{`(${job?.congViec?.danhGia})`}</span>
                  </div>
                  <p className="underline">{job.tenChiTietLoai}</p>
                </div>
              </div>
              <button className="mt-5 px-5 py-2 border border-solid border-black bg-white rounded hover:bg-black hover:text-white">
                Contact me
              </button>
            </div>
            <div className="mt-10 flex flex-col">
              <h3 className="text-2xl font-bold text-gray-700">FAQ</h3>
              {question.map((ques, index) => (
                <div key={index} className="mb-2">
                  <button
                    className="font-bold text-gray-600 w-full text-left py-3 flex justify-between"
                    onClick={() => toggleDropDown(index)}
                    style={{
                      borderBottom: open == index ? "0px" : "1px solid",
                      cursor: "pointer",
                    }}
                  >
                    {ques}
                    <DownOutlined
                      style={{
                        transform:
                          open == index ? "rotate(180deg)" : "rotate(0deg)",
                        transitionDuration: "300ms",
                      }}
                    />
                  </button>

                  {open == index && (
                    <div
                      className="py-3"
                      style={{
                        borderBottom: open == index ? "1px solid" : "0px",
                      }}
                    >
                      {answers[index]}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-700 mt-10">
                Reviews
              </h3>
              <div className="flex justify-between">
                <p className="font-normal text-xl text-gray-700">
                  731 reviews for this Gig
                </p>
                <div className="flex gap-1 items-center">
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                    ></path>
                  </svg>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                    ></path>
                  </svg>
                  <p className="font-bold">5.0</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <div className="flex items-center gap-4">
                    <button className="hover:bg-gray-300 rounded p-1">
                      5 stars
                    </button>
                    <span className="border border-black h-3 w-8/12 bg-black rounded-2xl"></span>
                    <p>(716)</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="hover:bg-gray-300 rounded p-1">
                      4 stars
                    </button>
                    <span className="border border-black h-3 w-8/12  rounded-2xl"></span>
                    <p>(15)</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="hover:bg-gray-300 rounded p-1">
                      3 stars
                    </button>
                    <span className="border border-black h-3 w-8/12  rounded-2xl"></span>
                    <p>(0)</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="hover:bg-gray-300 rounded p-1">
                      2 stars
                    </button>
                    <span className="border border-black h-3 w-8/12  rounded-2xl"></span>
                    <p>(0)</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="hover:bg-gray-300 rounded p-1">
                      1 stars
                    </button>
                    <span className="border border-black h-3 w-8/12  rounded-2xl"></span>
                    <p>(0)</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl text-gray-700 font-semibold">
                    Rating Breakdown
                  </h4>
                  <div className="flex justify-between">
                    <p className="text-gray-400">Seller communication level</p>
                    <div className="flex items-center gap-1">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                        ></path>
                      </svg>
                      <p className="font-bold">5.0</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-400">Service as described</p>
                    <div className="flex items-center gap-1">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                        ></path>
                      </svg>
                      <p className="font-bold">5.0</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-400">Recommend to a friend</p>
                    <div className="flex items-center gap-1">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                        ></path>
                      </svg>
                      <p className="font-bold">5.0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="flex gap-3 items-center">
                <p>Sort By</p>
                <button
                  className="flex gap-2 items-center font-semibold text-xl"
                  onClick={() => {
                    setSort(
                      sort == "Most Relevant" ? "Most Recent" : "Most Relevant"
                    );
                  }}
                >
                  {sort}
                  <DownOutlined />
                </button>
              </div>
            </div>

            <div className="mt-10">
              {cmt.map((cmt, index) => {
                return (
                  <div
                    key={index}
                    className="mt-10 border border-gray-400 rounded-2xl"
                  >
                    <div className="p-5">
                      <div className="flex gap-5 items-center">
                        <img
                          src={cmt?.avatar}
                          className="rounded-full h-20 w-20"
                        />
                        <div>
                          <p className="font-bold text-xl">
                            {cmt?.tenNguoiBinhLuan}
                          </p>
                          <p>{cmt?.ngayBinhLuan}</p>
                        </div>
                      </div>
                      <hr className="w-full border-gray-400 my-3" />
                      <div className="mt-5 flex gap-1 items-center">
                        <svg
                          width="16"
                          height="15"
                          viewBox="0 0 16 15"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                          ></path>
                        </svg>
                        <p>{cmt?.saoBinhLuan}</p>
                      </div>
                      <div className="my-5">
                        <p>{cmt?.noiDung}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        Helpful?
                        <button>
                          <i class="fa-regular fa-thumbs-up"></i> YES
                        </button>
                        <button>
                          <i class="fa-regular fa-thumbs-down"></i>NO
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <h3 className="font-semibold">Add Comment</h3>
              <div className="flex mt-5">
                <textarea
                  value={binhLuan.noiDung}
                  onChange={(e) =>
                    setBinhLuan({
                      ...binhLuan,
                      noiDung: e.target.value,
                      ngayBinhLuan: new Date().toLocaleString("en-GB", {
                        timeZone: "UTC",
                      }),
                    })
                  }
                  className="border p-5 border-gray-600 rounded-2xl focus:outline-none"
                  cols="100"
                  rows="3"
                ></textarea>
                <div className="flex flex-col items-center justify-between">
                  <Select
                    defaultValue="5"
                    style={{
                      width: 120,
                    }}
                    onChange={(value) =>
                      setBinhLuan({
                        ...binhLuan,
                        saoBinhLuan: value,
                      })
                    }
                    options={[
                      {
                        value: "5",
                        label: "5 sao",
                      },
                      {
                        value: "4",
                        label: "4 sao",
                      },
                      {
                        value: "3",
                        label: "3 sao",
                      },
                      {
                        value: "2",
                        label: "2 sao",
                      },
                      {
                        value: "1",
                        label: "1 sao",
                      },
                    ]}
                  />
                  <button
                    className="border py-2 px-3 rounded ms-4 border-gray-600 hover:bg-gray-600 hover:text-white hover:border-white"
                    onClick={handlePostBinhLuan}
                  >
                    ADD COMMENT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <>{!isResponsive.xl ? renderPagePC() : renderPagePhone()}</>;
};

export default JobPage;
