import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { congViecService } from "../../services/congViec.service";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { binhLuanService } from "../../services/binhLuan.service";
import { NotificationContext } from "../../App";
import { useSelector } from "react-redux";

const JobPage = () => {
  const { handleNotification } = useContext(NotificationContext);
  const { id } = useParams();
  const [job, setJob] = useState([]);
  const [open, setOpen] = useState(null);
  const [sort, setSort] = useState("Most relevant");
  const [cmt, setCmt] = useState([]);
  const [binhLuan, setBinhLuan] = useState({
    maCongViec: id,
    maNguoiBinhLuan: "2332",
    ngayBinhLuan: "1/7/2024",
    noiDung: "",
    saoBinhLuan: "5",
  });
  const { user } = useSelector((state) => state.authSlice);
  console.log(binhLuan);

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
      .postBinhLuan(user.token, binhLuan)
      .then((res) => {
        console.log(res);
        handleNotification(res.data.message, "success");
      })
      .catch((err) => {
        console.log(err);
        handleNotification(err.data.message, "error");
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
            <h3 className="text-2xl font-bold text-gray-700 mt-10">Reviews</h3>
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
            <textarea
              value={binhLuan.noiDung}
              onChange={(e) =>
                setBinhLuan({ ...binhLuan, noiDung: e.target.value })
              }
              className="border mt-5 p-5 border-gray-600 rounded-2xl focus:outline-none"
              cols="100"
              rows="3"
            ></textarea>
            <button onClick={handlePostBinhLuan}>ADD COMMENT</button>
          </div>
        </div>
        <div style={{ flex: 1 }}>asdasdasdasdasd</div>
      </div>
    </div>
  );
};

export default JobPage;
