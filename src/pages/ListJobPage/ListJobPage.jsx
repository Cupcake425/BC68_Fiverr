import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { congViecService } from "../../services/congViec.service";

const ListJobPage = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [listJob, setListJob] = useState([]);
  let tenCongViec = searchParam.get("tenCongViec");
  useEffect(() => {
    congViecService
      .layCongViecTheoTen(tenCongViec)
      .then((res) => {
        setListJob(res.data.content);
      })
      .catch((err) => console.log(err));
  }, [tenCongViec]);

  const renderListJob = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 container">
        {listJob.map((item, index) => {
          return (
            <Link
              to={`/job/${item.id}`}
              key={index}
              className="border border-gray-300 rounded-lg mt-5"
            >
              <img
                className="w-full"
                style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
                src={item.congViec.hinhAnh}
                alt=""
              />
              <div className="px-3">
                <div className="flex space-x-3 items-center mt-2">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={item.avatar}
                    alt=""
                  />
                  <div>
                    <h4>{item.tenNguoiTao}</h4>
                    <p>Level 2</p>
                  </div>
                </div>
                <h3>{item.congViec.tenCongViec}</h3>
                <div className="space-x-2">
                  <i className="fa-solid fa-star text-yellow-500" />
                  <span className="text-yellow-500">
                    {item.congViec.saoCongViec}
                  </span>
                  <span className="text-gray-400">{`(${item.congViec.danhGia})`}</span>
                </div>
                <hr className="w-full my-1 border-gray-300" />
                <div className="flex items-center justify-between mb-2">
                  <i class="fa-solid fa-heart"></i>
                  <div className="space-x-3">
                    <span className="uppercase">Starting at:</span>
                    <span>{item.congViec.giaTien}</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  };
  return <div>{renderListJob()}</div>;
};

export default ListJobPage;
