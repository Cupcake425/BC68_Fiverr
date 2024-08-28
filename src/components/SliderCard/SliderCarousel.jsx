import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./SliderCarousel.scss";
import { Link } from "react-router-dom";
import useResponsive from "../../hooks/useResponsive";

const SliderCarousel = () => {
  const isResponsive = useResponsive({
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
  });
  const NextArrow = ({ className, style, onClick }) => {
    return (
      <div
        className={`${className} custom_arrow`}
        style={{
          ...style,
          display: "block",
          visibility: className.includes("slick-disabled")
            ? "hidden"
            : "visible",
        }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = ({ className, style, onClick }) => {
    return (
      <div
        className={`${className} custom_arrow`}
        style={{
          ...style,
          display: "block",
          visibility: className.includes("slick-disabled")
            ? "hidden"
            : "visible",
        }}
        onClick={onClick}
      />
    );
  };
  const settings = {
    arrows: true,
    speed: 500,
    slidesToShow: !isResponsive.xl
      ? 6.5
      : !isResponsive.lg
      ? 5
      : !isResponsive.md
      ? 4
      : 3,
    slidesToScroll: !isResponsive.xl
      ? 4
      : !isResponsive.lg
      ? 5
      : !isResponsive.md
      ? 4
      : 3,
    infinite: false,
    draggable: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const item = [
    {
      text: "Website Development",
      img: "/img_slider/website-development.png",
      bgColor: "#00732e",
    },
    {
      text: "Logo Design",
      img: "/img_slider/logo-design.png",
      bgColor: "#ff7640",
    },
    {
      text: "SEO",
      img: "/img_slider/seo.png",
      bgColor: "#003912",
    },
    {
      text: "Architecture & Interior Design",
      img: "/img_slider/architecture-design.png",
      bgColor: "#4d1727",
    },
    {
      text: "Data & Science",
      img: "/img_slider/data-science.png",
      bgColor: "#8f2900",
    },
    {
      text: "E-Commerce Marketing",
      img: "/img_slider/e-commerce.png",
      bgColor: "#00732e",
    },
    {
      text: "Product PhotoGraphy",
      img: "/img_slider/product-photography.png",
      bgColor: "#687200",
    },
    {
      text: "Software Development",
      img: "/img_slider/software-development.png",
      bgColor: "#254200",
    },
    {
      text: "Video Editing",
      img: "/img_slider/video-editing.png",
      bgColor: "#be5272",
    },
    {
      text: "Voice Over",
      img: "/img_slider/voice-over.png",
      bgColor: "#421300",
    },
  ];
  return (
    <Slider {...settings}>
      {item.map((item, index) => {
        return (
          <div className="px-3 mt-5 !flex" key={index}>
            <Link
              className="p-2 pt-5 rounded-lg min-h-72 flex justify-between items-center flex-col"
              style={{
                backgroundColor: item.bgColor,
              }}
            >
              <h3 className="text-center mb-5 text-white font-bold text-xl max-w-48">
                {item.text}
              </h3>
              <img className="rounded-lg w-48 h-40" src={item.img} />
            </Link>
          </div>
        );
      })}
    </Slider>
  );
};

export default SliderCarousel;
