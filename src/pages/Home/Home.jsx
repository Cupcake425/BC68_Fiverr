import React from "react";
import Banner from "../../components/Banner/Banner";
import JobCard from "../../components/JobCard/JobCard";
import SliderCarousel from "../../components/SliderCard/SliderCarousel";
import useResponsive from "../../hooks/useResponsive";

const Home = () => {
  const isResponsive = useResponsive({
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
  });
  const item = [
    {
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="25"
          viewBox="0 0 26 25"
          fill="none"
        >
          <path
            d="M17.892 18.866v-1.474h.525a4.475 4.475 0 100-8.95h0-.005c-.071 0-.142.002-.212.006a5.716 5.716 0 00-10.398 0 4.445 4.445 0 00-.212-.006h0-.006 0a4.475 4.475 0 000 8.95h.525v1.474L6.6 20.376A2.392 2.392 0 107.625 21.4l1.722-1.722a.725.725 0 00.212-.512V17.39h2.717v2.83a2.393 2.393 0 101.45 0v-2.83h2.716v1.776c0 .192.077.376.213.512l1.721 1.722a2.392 2.392 0 101.025-1.025l-1.509-1.51zM6.166 21.833h0l.001.002.008.007v.001a.942.942 0 11-.018-.018h.001l.008.008zm13.668.002h0l.002-.002.009-.009a.942.942 0 11-.02.02l.01-.009zM10.51 7.361a4.267 4.267 0 016.535 2.106c.116.345.47.55.827.48a2.96 2.96 0 01.548-.055 3.025 3.025 0 01-.003 6.05H7.584a3.025 3.025 0 01-.003-6.05c.184.001.368.02.548.055a.724.724 0 00.827-.48A4.267 4.267 0 0110.51 7.36zM12.06 22.5a.942.942 0 111.883 0 .942.942 0 01-1.883 0z"
            fill="#222325"
            stroke="#222325"
            stroke-width=".2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24.333 17c.367 0 .667-.225.667-.5v-15c0-.275-.3-.5-.667-.5H1.667C1.3 1 1 1.225 1 1.5v15c0 .275.3.5.667.5h22.666z"
            fill="#fff"
            stroke="#222325"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <rect x="4" y="4" width="18" height="1.5" rx=".75" fill="#222325" />
        </svg>
      ),
      text: "Programming & Tech",
    },
    {
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M24.301 24.909c.334 0 .606-.307.606-.682V3.773c0-.375-.272-.682-.606-.682H3.695c-.333 0-.606.307-.606.682v20.454c0 .375.273.682.606.682h20.606z"
            stroke="#222325"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M19.072 14l-.442-.606-.829.605.829.606.442-.605zm-5.075 5.077l.606-.443-.606-.827-.605.827.605.443zM8.92 14.001l.443.605.827-.606-.828-.604L8.92 14zm5.075-5.075l-.605.442.605.83.606-.83-.606-.442zm-.794 5.072l-.443-.605-.828.606.829.604.442-.605zm.797.795l-.606.443.606.828.605-.828-.605-.443zm.795-.794l.443.605.829-.605-.83-.606-.442.606zm-.797-.798l.606-.442-.606-.83-.606.83.606.442zm5.519 1.404a4.39 4.39 0 00.517-.443l-1.06-1.06a2.906 2.906 0 01-.342.292l.885 1.211zm.516-.768a4.407 4.407 0 00-.516-.443l-.885 1.211c.119.087.233.184.34.292l1.061-1.06zm0 6.198a4.382 4.382 0 000-6.198l-1.06 1.06a2.883 2.883 0 010 4.077l1.06 1.06zm-6.198 0a4.383 4.383 0 006.198 0l-1.06-1.061a2.882 2.882 0 01-4.077 0l-1.06 1.06zm-.441-.515c.132.18.279.352.441.515l1.06-1.061a2.909 2.909 0 01-.29-.34l-1.211.886zm0-.886a2.902 2.902 0 01-.29.34l1.06 1.06c.162-.162.309-.334.44-.514l-1.21-.886zm-.29.34a2.883 2.883 0 01-4.077 0l-1.061 1.06a4.383 4.383 0 006.198 0l-1.06-1.06zm-4.077 0a2.883 2.883 0 010-4.077l-1.061-1.061a4.383 4.383 0 000 6.198l1.06-1.06zm0-4.077c.107-.108.22-.204.338-.29l-.886-1.21c-.18.13-.351.277-.513.439l1.06 1.06zm-1.066-.734c.163.163.337.312.519.444l.884-1.211a2.911 2.911 0 01-.342-.294l-1.061 1.06zm0-6.198a4.383 4.383 0 000 6.198l1.06-1.06a2.883 2.883 0 010-4.077L7.96 7.965zm6.198 0a4.383 4.383 0 00-6.198 0l1.06 1.06a2.883 2.883 0 014.077 0l1.06-1.06zm.444.519a4.412 4.412 0 00-.444-.519l-1.06 1.06c.108.11.205.224.293.343l1.211-.884zm-.766-.52a4.406 4.406 0 00-.446.52l1.212.884c.088-.12.185-.235.294-.343l-1.06-1.061zm6.197 0a4.383 4.383 0 00-6.197 0l1.06 1.06a2.883 2.883 0 014.077 0l1.06-1.06zm0 6.198a4.383 4.383 0 000-6.198l-1.06 1.06a2.883 2.883 0 010 4.077l1.06 1.06zm-7.273.441c.12.088.234.185.342.294l1.06-1.061a4.41 4.41 0 00-.518-.444l-.884 1.211zm.342.294c.108.107.205.22.291.34l1.211-.886a4.399 4.399 0 00-.441-.515l-1.06 1.06zm.732-1.06a4.407 4.407 0 00-.44.513l1.21.886c.087-.118.183-.231.29-.339l-1.06-1.06zm.518-.444c-.181.132-.355.28-.518.444l1.06 1.06c.11-.108.223-.206.343-.293l-.885-1.211zm-.516.769c.162.162.335.31.516.442l.885-1.21a2.916 2.916 0 01-.34-.293l-1.061 1.06zm-.445-.519c.133.182.281.355.445.519l1.06-1.06a2.917 2.917 0 01-.293-.343l-1.212.884zm.767.52c.164-.164.312-.338.445-.52l-1.212-.884c-.087.12-.185.234-.294.343l1.06 1.06zm-.513.44a4.42 4.42 0 00.513-.44l-1.06-1.06a2.982 2.982 0 01-.34.29l.887 1.21z"
            fill="#222325"
          />
          <circle
            cx="13.998"
            cy="14"
            r="2.045"
            transform="rotate(-45 13.998 14)"
            fill="#222325"
          />
          <path
            fill="#fff"
            stroke="#222325"
            stroke-width="1.5"
            stroke-linejoin="round"
            d="M1.25 1.25h3.682v3.682H1.25zm21.818 0h3.682v3.682h-3.682zM1.25 23.068h3.682v3.682H1.25zm21.818 0h3.682v3.682h-3.682z"
          />
        </svg>
      ),
      text: "Graphics & Design",
    },
    {
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="26"
          viewBox="0 0 25 26"
          fill="none"
        >
          <rect
            x=".75"
            y=".75"
            width="14.5"
            height="24.5"
            rx="1.65"
            fill="#fff"
            stroke="#222325"
            stroke-width="1.5"
          />
          <rect x="4" y="21" width="8" height="1.5" rx=".75" fill="#222325" />
          <g filter="url(#filter0_b_3088_6908)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11 4a1 1 0 00-1 1v10a1 1 0 001 1h.685v2.009c0 .413.475.645.801.392L15.573 16H23a1 1 0 001-1V5a1 1 0 00-1-1H11z"
              fill="#fff"
            />
            <path
              d="M11.685 16h.75v-.75h-.75V16zm.801 2.4l.46.593-.46-.592zm3.087-2.4v-.75h-.258l-.203.158.46.592zM10.75 5a.25.25 0 01.25-.25v-1.5A1.75 1.75 0 009.25 5h1.5zm0 10V5h-1.5v10h1.5zm.25.25a.25.25 0 01-.25-.25h-1.5c0 .966.784 1.75 1.75 1.75v-1.5zm.685 0H11v1.5h.685v-1.5zm.75 2.759V16h-1.5v2.009h1.5zm-.41-.2a.254.254 0 01.41.2h-1.5c0 1.037 1.193 1.62 2.012.984l-.921-1.184zm3.087-2.401l-3.086 2.4.92 1.185 3.087-2.401-.92-1.184zM23 15.25h-7.427v1.5H23v-1.5zm.25-.25a.25.25 0 01-.25.25v1.5A1.75 1.75 0 0024.75 15h-1.5zm0-10v10h1.5V5h-1.5zM23 4.75a.25.25 0 01.25.25h1.5A1.75 1.75 0 0023 3.25v1.5zm-12 0h12v-1.5H11v1.5z"
              fill="#222325"
            />
          </g>
          <path
            d="M17.002 13.333c-.252-.192-.498-.378-.741-.568-.644-.504-1.278-1.02-1.847-1.6a5.104 5.104 0 01-.638-.757c-.308-.471-.34-.995-.185-1.52.185-.631.593-1.088 1.26-1.303.718-.232 1.51.022 1.99.622.054.07.103.142.163.225l.068-.098c.293-.424.692-.709 1.223-.801.626-.109 1.161.074 1.606.494.6.567.773 1.52.412 2.247-.143.286-.36.523-.584.754-.65.674-1.381 1.266-2.124 1.846-.195.152-.395.3-.604.46h.001z"
            fill="#222325"
          />
          <defs>
            <filter
              id="filter0_b_3088_6908"
              x="2.947"
              y="-3.053"
              width="28.107"
              height="28.614"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.152" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_3088_6908"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_backgroundBlur_3088_6908"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
      text: "Digital & Marketing",
    },
    {
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="27"
          viewBox="0 0 30 27"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.327 1.066A2.545 2.545 0 013.184.25h11.111c.706 0 1.373.3 1.857.816.482.514.745 1.202.745 1.91v5.688h-1.5V2.975c0-.34-.127-.657-.34-.883a1.045 1.045 0 00-.762-.342H3.184c-.276 0-.551.117-.762.342a1.29 1.29 0 00-.34.883V13.84c0 .34.127.658.34.884.21.225.486.342.762.342h8.157v1.5H3.184c-.706 0-1.373-.3-1.857-.816a2.794 2.794 0 01-.745-1.91V2.975c0-.707.263-1.395.745-1.91z"
            fill="#222325"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.145 11.935c-.276 0-.552.117-.762.342a1.29 1.29 0 00-.34.883v10.865c0 .34.127.657.34.883.21.225.486.342.762.342h11.11c.277 0 .552-.117.763-.342a1.29 1.29 0 00.34-.883V13.16c0-.34-.127-.657-.34-.883a1.045 1.045 0 00-.762-.342H16.145zm-1.857-.684a2.545 2.545 0 011.857-.816h11.11c.707 0 1.374.3 1.858.816.482.514.745 1.202.745 1.91v10.864c0 .707-.263 1.395-.745 1.91a2.545 2.545 0 01-1.857.815H16.145c-.706 0-1.373-.3-1.857-.816a2.794 2.794 0 01-.745-1.91V13.16c0-.707.263-1.395.745-1.91z"
            fill="#222325"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.793 22.762h1.764l-3.118-8.073h-1.587l-3.149 8.073h1.765l.85-2.26h2.635l.84 2.26zm-2.941-3.704l.788-2.113.78 2.113h-1.568z"
            fill="#222325"
          />
          <path
            d="M13.08 6.517a13.384 13.384 0 00-1.314-.056 7.268 7.268 0 01-.63 1.786 6.849 6.849 0 01-1.027 1.5 8.89 8.89 0 003.174 1.119 5.95 5.95 0 00-.916 1.703 11.435 11.435 0 01-3.526-1.685 11.83 11.83 0 01-3.684 1.703 5.364 5.364 0 00-.887-1.638 10.067 10.067 0 003.285-1.212A8.055 8.055 0 016.36 8.042a8.12 8.12 0 01-.639-1.583c-.546 0-.86.019-1.323.056V4.842c.446.048.894.07 1.342.065h2.045V4.35a2.794 2.794 0 00-.055-.573h1.86a2.84 2.84 0 00-.056.564v.565h2.202c.448.005.897-.017 1.343-.065v1.675zM7.5 6.46A5.268 5.268 0 008.795 8.7c.563-.641.96-1.41 1.158-2.24H7.499z"
            fill="#222325"
          />
        </svg>
      ),
      text: "Writing & Translation",
    },
    {
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
        >
          <path
            d="M20.444 24c.306 0 .556-.225.556-.5v-15c0-.275-.25-.5-.556-.5H1.556C1.25 8 1 8.225 1 8.5v15c0 .275.25.5.556.5h18.888z"
            stroke="#222325"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M24.444 18c.306 0 .556-.225.556-.5v-15c0-.275-.25-.5-.556-.5H5.556C5.25 2 5 2.225 5 2.5v15c0 .275.25.5.556.5h18.888z"
            fill="#fff"
            stroke="#222325"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M12 7l6 3-6 3V7z"
            fill="#222325"
            stroke="#212121"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      text: "Video & Animation",
    },
    {
      img: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_3628_3006)">
            <g
              clip-path="url(#clip1_3628_3006)"
              stroke="#222325"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M23.918 9v11.75a2.25 2.25 0 01-2.25 2.25h-18a2.25 2.25 0 01-2.25-2.25V5.25A2.25 2.25 0 013.668 3h10.5" />
              <path d="M6.668 18.25l8.25-8.25 4.5 8.25H6.668zm.375-6.75a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z" />
            </g>
            <path
              d="M23.918 5.25A3.75 3.75 0 0020.168 9a3.75 3.75 0 00-3.75-3.75 3.75 3.75 0 003.75-3.75 3.75 3.75 0 003.75 3.75z"
              fill="#222325"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.168.75a.75.75 0 01.75.75 3 3 0 003 3 .75.75 0 010 1.5 3 3 0 00-3 3 .75.75 0 01-1.5 0 3 3 0 00-3-3 .75.75 0 010-1.5 3 3 0 003-3 .75.75 0 01.75-.75zm0 3.238c-.332.5-.762.93-1.262 1.262.5.332.93.762 1.262 1.262.332-.5.762-.93 1.262-1.262-.5-.332-.93-.762-1.262-1.262z"
              fill="#222325"
            />
          </g>
          <defs>
            <clipPath id="clip0_3628_3006">
              <path fill="#fff" transform="translate(.668)" d="M0 0h24v25H0z" />
            </clipPath>
            <clipPath id="clip1_3628_3006">
              <path
                fill="#fff"
                transform="translate(.668 1)"
                d="M0 0h24v24H0z"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "AI Services",
    },
    {
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="21"
          viewBox="0 0 26 21"
          fill="none"
        >
          <path
            d="M24.998 5.162l-7.855 2.79V3.79L24.998 1v4.162zm-7.855-.442v11.457m-2.276 3.035c1.83-.988 2.743-2.921 2.038-4.32-.705-1.397-2.76-1.73-4.59-.742-1.831.988-2.744 2.922-2.038 4.32.704 1.397 2.76 1.73 4.59.742z"
            stroke="#222325"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            d="M1 1h12M1 5h12M1 9h12"
            stroke="#222325"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      text: "Music & Audio",
    },
    {
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="23"
          viewBox="0 0 28 23"
          fill="none"
        >
          <path
            d="M20.003 7.317a2.513 2.513 0 105.026 0 2.513 2.513 0 00-5.026 0zm-3.545 10.838A6.06 6.06 0 0127 14.076M7.859 7.317a2.513 2.513 0 11-5.027 0 2.513 2.513 0 015.027 0zm3.544 10.838A6.06 6.06 0 00.861 14.076"
            stroke="#212121"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.955 8.654a3.594 3.594 0 100-7.188 3.594 3.594 0 000 7.188zM14 11.745c-5.523 0-10 4.477-10 10h20c0-5.523-4.478-10-10-10z"
            fill="#fff"
            stroke="#212121"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      text: "Business",
    },
    {
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="27"
          viewBox="0 0 29 27"
          fill="none"
        >
          <path
            d="M10.331 17.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6zm-5.597 8.4a5.6 5.6 0 1111.2 0"
            stroke="#212121"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.5 6.6H3a2 2 0 00-2 2v15.6a2 2 0 002 2h20.5a2 2 0 002-2V15"
            stroke="#212121"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.93 2.867V9.4c0 1.031.835 1.867 1.866 1.867h.934v2.8l4.666-2.8h3.734A1.866 1.866 0 0027.996 9.4V2.867A1.866 1.866 0 0026.13 1h-9.334a1.866 1.866 0 00-1.866 1.867z"
            stroke="#212121"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.6 6.833l1.4 1.4 2.754-3.214.045-.053"
            stroke="#212121"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      text: "Consulting",
    },
  ];

  const item2 = [
    {
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <g
            clip-path="url(#clip0_3130_9138)"
            stroke="#212121"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M7 1H1v6h6V1zm12 0h-6v6h6V1zm0 12h-6v6h6v-6zM31 1h-6v6h6V1zM7 13H1v6h6v-6zm0 12H1v6h6v-6zm6 3h6m-3-3v6m9-3h6m-3-3v6m-3-15h6m-3-3v6" />
          </g>
          <defs>
            <clipPath id="clip0_3130_9138">
              <path fill="#fff" d="M0 0h32v32H0z" />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Over 700 categories",
      text2:
        "Get results from skilled freelancers from all over the world, for every task, at any price point.",
    },
    {
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="31"
          viewBox="0 0 32 31"
          fill="none"
        >
          <path
            d="M19.5 20.5l2.25 2.25a2.476 2.476 0 010 3.5M1 13V1h10.1c.3 0 .601.02.9.058M3.75 15.25l-.5.5a2.475 2.475 0 003.5 3.5l.5-.5a2.475 2.475 0 00-3.5-3.5z"
            stroke="#212121"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.388 18.613l-.775.775a2.475 2.475 0 003.5 3.5l.776-.775a2.475 2.475 0 10-3.5-3.5z"
            stroke="#212121"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.613 22.385l-.5.5a2.475 2.475 0 103.5 3.5l.5-.5a2.475 2.475 0 00-3.5-3.5z"
            stroke="#212121"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.152 25.847l-.52.52a2.121 2.121 0 000 3h.001a2.12 2.12 0 003 0l.52-.52a2.121 2.121 0 000-3h-.001a2.121 2.121 0 00-3 0zM22.998 17l3.025 3.025a2.475 2.475 0 11-3.5 3.5"
            stroke="#212121"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25.75 19.75a2.476 2.476 0 003.5-3.5L20 7"
            stroke="#212121"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 7l-6.9 5.173a2.232 2.232 0 01-3.54-1.427 2.23 2.23 0 01.625-1.934L15.95 3.05A7 7 0 0120.9 1H31v12"
            stroke="#212121"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      text: "Clear, transparent pricing",
      text2:
        "Pay per project or by the hour (Pro). Payments only get released when you approve.",
    },
    {
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M20 1H9L5 16h8l-2 12 16-18h-9l2-9z"
            stroke="#212121"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      text: "Quality work done faster",
      text2:
        "Filter to find the right freelancers quickly and get great work delivered in no time, every time.",
    },
    {
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <g
            clip-path="url(#clip0_3130_9192)"
            stroke="#212121"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12.998 29.678A14.02 14.02 0 012.32 19m27.358 0A14.02 14.02 0 0119 29.678m0-27.356A14.02 14.02 0 0129.678 13M2.32 13A14.02 14.02 0 0112.998 2.322M13 9.674V1h6v8.674M22.324 13h8.674v6h-8.674M19 22.326V31h-6v-8.674M9.674 19H1v-6h8.674" />
            <path d="M16 23a7 7 0 100-14 7 7 0 000 14z" />
          </g>
          <defs>
            <clipPath id="clip0_3130_9192">
              <path fill="#fff" d="M0 0h32v32H0z" />
            </clipPath>
          </defs>
        </svg>
      ),
      text: "24/7 award-winning support",
      text2:
        "Chat with our team to get your questions answered or resolve any issues with your orders.",
    },
  ];
  return (
    <div>
      <Banner />
      <div className="flex flex-wrap gap-5 container mt-5">
        {item.map((item, index) => {
          return (
            <JobCard
              key={index}
              img={item.img}
              text={item.text}
              className={
                "h-36 w-36  border border-solid rounded-2xl hover:border-green-600 hover:text-green-600"
              }
            />
          );
        })}
      </div>
      <div className="container mt-20">
        <h2 className="text-5xl mb-5 text-gray-700">Popular services</h2>
        <SliderCarousel />
      </div>
      <div className="container mt-20">
        <h2 className="text-5xl text-gray-700">
          A whole world of freelance
          <br />
          talent at your fingertips
        </h2>
        <div className="flex flex-wrap gap-5 mt-5">
          {item2.map((item, index) => {
            return (
              <JobCard
                key={index}
                img={item.img}
                text={item.text}
                text2={item.text2}
              />
            );
          })}
        </div>
      </div>
      <div className="container flex items-center justify-center my-5">
        <video src={"/Video/VideoFiverr.mp4"} controls></video>
      </div>
      <div
        className="container mt-24 rounded-xl"
        style={{ backgroundColor: "#003912" }}
      >
        <div className="flex justify-between items-center px-28 py-12 ">
          <div style={{ flex: 1 }}>
            <svg
              className="mb-5"
              width="139"
              height="34"
              viewBox="0 0 139 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#fff">
                <path d="M81.6463 13.1117H78.4949C76.4661 13.1117 75.3797 14.6592 75.3797 17.2363V26.5544H69.4034V13.1117H66.8677C64.839 13.1117 63.7526 14.6592 63.7526 17.2363V26.5544H57.7763V8.13963H63.7526V10.9393C64.7301 8.76575 66.0705 8.13963 68.063 8.13963H75.3797V10.9393C76.3572 8.76575 77.6976 8.13963 79.6901 8.13963H81.6463V13.1117ZM56.4721 18.7838H44.0103C44.3358 20.8466 45.6036 22.0251 47.7413 22.0251C49.3345 22.0251 50.4584 21.3621 50.8201 20.1836L56.1092 21.6942C54.8051 24.8986 51.5811 26.8508 47.7413 26.8508C41.2569 26.8508 38.2869 21.7311 38.2869 17.3482C38.2869 13.0391 40.8952 7.88251 47.3784 7.88251C54.2607 7.88251 56.5424 13.1129 56.5424 16.9804C56.5436 17.8267 56.5073 18.379 56.4721 18.7838ZM50.6761 15.2115C50.531 13.6283 49.4083 12.1547 47.3795 12.1547C45.4959 12.1547 44.3732 13.0022 44.0103 15.2115H50.6761ZM27.855 26.5556H33.1078L39.6636 8.13963H33.651L30.4633 18.8576L27.203 8.13963H21.2267L27.855 26.5556ZM3.3692 26.5556H9.3092V13.1117H14.96V26.5556H20.8649V8.13963H9.31037V6.99808C9.31037 5.74583 10.1802 4.9721 11.5557 4.9721H14.9612V0H10.577C6.26662 0 3.3692 2.689 3.3692 6.63026V8.14082H0V13.1129H3.3692V26.5556Z"></path>
                <path d="M86.9869 34V8.15269H90.4697V10.8905C91.5467 9.06569 93.7371 7.85986 96.2505 7.85986C101.708 7.85986 104.832 11.8749 104.832 17.3517C104.832 22.8273 101.564 26.8436 96.0714 26.8436C93.6657 26.8436 91.5116 25.7116 90.4709 23.9594V33.9988H86.9869V34ZM101.313 17.3529C101.313 13.52 99.0871 10.9643 95.7471 10.9643C92.3721 10.9643 90.1817 13.52 90.1817 17.3529C90.1817 21.1859 92.3721 23.7415 95.7471 23.7415C99.0871 23.7415 101.313 21.1859 101.313 17.3529Z"></path>
                <path d="M116.757 11.2189H114.136C110.834 11.2189 109.755 14.2127 109.755 18.2277V26.5519H106.274V8.15259H109.757V11.6939C110.582 9.24771 112.018 8.15259 114.568 8.15259H116.758V11.2189H116.757Z"></path>
                <path d="M115.91 17.3529C115.91 11.8404 119.823 7.86108 125.245 7.86108C130.666 7.86108 134.543 11.8404 134.543 17.3529C134.543 22.8655 130.666 26.8448 125.245 26.8448C119.823 26.8436 115.91 22.8643 115.91 17.3529ZM130.988 17.3529C130.988 13.5926 128.655 10.9643 125.243 10.9643C121.797 10.9643 119.463 13.5926 119.463 17.3529C119.463 21.1133 121.796 23.7416 125.243 23.7416C128.655 23.7416 130.988 21.1121 130.988 17.3529Z"></path>
                <path d="M139 24.5201V24.5629C139 25.814 138.003 26.8294 136.771 26.8294C135.541 26.8294 134.542 25.8152 134.542 24.5629V24.5201C134.542 23.269 135.539 22.2537 136.771 22.2537C138.001 22.2537 139 23.269 139 24.5201Z"></path>
              </g>
            </svg>
            <p className="text-white text-3xl xl:text-5xl md:text-4xl leading-snug ">
              New e-Commerce project management service&nbsp;
              <span className="font-bold">made for your business</span>
            </p>
            <p className="text-white mt-5">
              An experienced e-Commerce project manager will plan, coordinate,
              and execute your project. Overseeing a team of e-Commerce experts,
              they'll handle everything from site building, design and content
              to optimization, marketing strategies, and UGC videos.
            </p>
            <p className="text-white mt-5 font-bold">
              To get started, you should have:
            </p>
            <ol className="text-white list-disc mt-4 ms-6">
              <li>
                An e-Commerce project requiring expertise in various fields
              </li>
              <li>A budget exceeding $1000</li>
              <li>A desire to get things done, without the hassle</li>
            </ol>
            <button
              className="px-5 py-2 rounded-sm text-white mt-8 hover:opacity-90"
              style={{ backgroundColor: "#e37627" }}
            >
              Get Started
            </button>
          </div>
          {!isResponsive.lg && (
            <div style={{ flex: 1 }}>
              <img src="/X1.png" alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
