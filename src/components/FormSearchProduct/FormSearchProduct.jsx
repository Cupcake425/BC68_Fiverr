import React, { useEffect, useState } from "react";

import IconSearch from "../Icon/IconSearch";
import { Link, useNavigate } from "react-router-dom";
import { pathDefault } from "../../common/path";
import { congViecService } from "../../services/congViec.service";

import { Dropdown } from "antd";
import useDebounce from "../../hooks/useDebounce";
const FormSearchProduct = ({ className }) => {
  const navigate = useNavigate();
  const [valueSearch, setValueSearch] = useState("");
  const [checkDropdown, setCheckDropdown] = useState(false);
  const [listJobSuggest, setListJobSuggest] = useState([]);
  const deBounceValue = useDebounce(valueSearch, 500);
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`${pathDefault.listJob}?tenCongViec=${valueSearch}`);
  };
  const handleChange = (event) => {
    setValueSearch(event.target.value);
    if (event.target.value) {
      setCheckDropdown(true);
    } else {
      setCheckDropdown(false);
    }
  };

  useEffect(() => {
    const clickTurnOff = (event) => {
      if (!event.target.closest("dropdown-container")) {
        setCheckDropdown(false);
      }
    };
    document.addEventListener("click", clickTurnOff);
    return () => {
      document.removeEventListener("click", clickTurnOff);
    };
  }, []);

  useEffect(() => {
    if (valueSearch) {
      congViecService
        .layCongViecTheoTen(valueSearch)
        .then((res) => {
          const newListJobSuggest = res.data.content
            .slice(0, 4)
            .map((item, index) => {
              return {
                key: index,
                label: (
                  <Link
                    to={`/job/${item.id}`}
                    className="flex items-center space-x-4"
                  >
                    <img src={item.congViec.hinhAnh} className="h-14" alt="" />
                    <div>
                      <h4>{item.congViec.tenCongViec}</h4>
                      <p>{item.congViec.giaTien}</p>
                    </div>
                  </Link>
                ),
              };
            });
          setListJobSuggest(newListJobSuggest);
          setCheckDropdown(true);
        })
        .catch((err) => console.log(err));
    }
  }, [deBounceValue]);

  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <Dropdown
          menu={{
            items: listJobSuggest,
          }}
          open={checkDropdown}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="pl-4 rounded border border-gray-400 flex items-center justify-between min-w-[100px] md:min-w-72 lg:min-w-96 "
          >
            <input
              type="text"
              placeholder={`Try searching for "design"`}
              className="flex-1 focus:border-none focus:outline-none"
              onChange={handleChange}
              onFocus={() => valueSearch && setCheckDropdown(true)}
              value={valueSearch}
            />
            <button type="submit" className="p-2">
              <IconSearch size={30} color="rgb(156 163 175)" />
            </button>
          </div>
        </Dropdown>
      </form>
    </div>
  );
};

export default FormSearchProduct;
