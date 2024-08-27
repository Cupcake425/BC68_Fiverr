import React, { useEffect, useState } from "react";
import "./Banner.scss";
import { Dropdown } from "antd";
import { Link, useNavigate } from "react-router-dom";
import IconSearch from "../Icon/IconSearch";
import useDebounce from "../../hooks/useDebounce";
import { pathDefault } from "../../common/path";
import { congViecService } from "../../services/congViec.service";
import useResponsive from "../../hooks/useResponsive";

const Banner = () => {
  const isResponsive = useResponsive({
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
  });
  const navigate = useNavigate();
  const [valueSearch, setValueSearch] = useState("");
  const [listJobSuggest, setListJobSuggest] = useState([]);
  const [checkDropdown, setCheckDropdown] = useState(false);
  const debounce = useDebounce(valueSearch, 500);

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
  });

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
  }, [debounce]);
  return (
    <div className="banner mt-5">
      <div className="container">
        <div className="banner_bg flex justify-between items-center flex-col">
          {isResponsive.lg ? (
            <h1 className="text-white text-4xl sm:text-5xl text-center mt-5">
              Scale your <br /> professional workforce <br /> with freelancers
            </h1>
          ) : (
            <h1 className="text-white text-6xl text-center mt-28 lg:mt-14">
              Find the right <span className="italic">freelance</span> <br />
              service, right away
            </h1>
          )}

          <div className="search_bar my-20 lg:my-5">
            <form
              onSubmit={handleSubmit}
              className="search_form bg-white ps-5 pe-2"
            >
              <Dropdown
                menu={{
                  items: listJobSuggest,
                }}
                open={checkDropdown}
              >
                <div
                  className="search_input"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <input
                    type="text"
                    placeholder="Search for any service..."
                    onChange={handleChange}
                    onFocus={() => valueSearch && setCheckDropdown(true)}
                    value={valueSearch}
                  />
                  <button type="submit">
                    <IconSearch size={30} color="rgb(156 163 175)" />
                  </button>
                </div>
              </Dropdown>
            </form>
          </div>
          {!isResponsive.lg && (
            <div className="trustedby flex justify-center items-center gap-8 mb-5">
              <span>Trusted by:</span>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.ff37dd3.svg"
                alt="meta"
                width="70"
                height="14"
              />
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png"
                alt=""
              />
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png"
                alt=""
              />
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png"
                alt=""
              />
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png"
                alt=""
              />
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/payoneer.7c1170d.svg"
                alt="Payoneer"
                width="82.42"
                height="16"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
