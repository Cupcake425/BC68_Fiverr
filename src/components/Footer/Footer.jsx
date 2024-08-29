import React from "react";
import { Link } from "react-router-dom";
import IconLogoHeader from "../Icon/IconLogoHeader";
import "./Footer.scss";

const Footer = () => {
  const item = [
    {
      name: "Categories",
      link: [
        {
          item: "Graphics & Design",
        },
        {
          item: "Digital Marketing",
        },
        {
          item: "Writing & Translation",
        },
        {
          item: "Video & Animation",
        },
        {
          item: "Music & Audio",
        },
        {
          item: "Fiverr Logo Maker",
        },
        {
          item: "Programming & Tech",
        },
        {
          item: "Data",
        },
        {
          item: "Business",
        },
        {
          item: "Personal Growth & Hobbies",
        },
        {
          item: "Photography",
        },
        {
          item: "Finance",
        },
        {
          item: "End-to-End Projects",
        },
        {
          item: "Sitemap",
        },
      ],
    },
    {
      name: "About",
      link: [
        {
          item: "Careers",
        },
        {
          item: "Press & News",
        },
        {
          item: "Partnerships",
        },
        {
          item: "Privacy Policy",
        },
        {
          item: "Terms of Service",
        },
        {
          item: "Intellectual Property Claims",
        },
        {
          item: "Investor Relations",
        },
      ],
    },

    {
      name: "Support and Education",
      link: [
        {
          item: "Help & Support",
        },
        {
          item: "Trust & Safety",
        },
        {
          item: "Quality Guide",
        },
        {
          item: "Selling on Fiverr",
        },
        {
          item: "Buying on Fiverr",
        },
        {
          item: "Fiverr Guides",
        },
        {
          item: "Learn",
        },
      ],
    },
    {
      name: "Community",
      link: [
        {
          item: "Customer Success Stories",
        },
        {
          item: "Community Hub",
        },
        {
          item: "Forum",
        },
        {
          item: "Events",
        },
        {
          item: "Blog",
        },
        {
          item: "Creators",
        },
        {
          item: "Podcast",
        },
        {
          item: "Invite a Friend",
        },
        {
          item: "Become a Seller",
        },
        {
          item: "Community Standards",
        },
      ],
    },
    {
      name: "Business Solutions",
      link: [
        {
          item: "About Business Solutions",
        },
        {
          item: "Fiverr Pro",
        },
        {
          item: "Fiverr Certified",
        },
        {
          item: "Become an Agency",
        },
        {
          item: "Fiverr Enterprise",
        },
        {
          item: "ClearVoice",
        },
        {
          item: "Working Not Working",
        },
        {
          item: "Contact Sales",
        },
      ],
    },
  ];
  const social = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#74767E"
        >
          <path d="M10.827 9.644v3.331a6.199 6.199 0 0 0-.478-.09c-1.599-.247-3.06.842-3.299 2.527a2.964 2.964 0 0 0 2.342 3.357c1.612.324 3.21-.855 3.4-2.527.062-.558.037-1.128.037-1.699V1.893h3.173c.34 3.085 2.002 4.77 4.998 5.094v3.24a7.673 7.673 0 0 1-2.594-.427 7.83 7.83 0 0 1-2.354-1.297v.234c0 2.333.013 4.666.013 6.999 0 2.307-.957 4.109-2.833 5.379-1.12.765-2.38 1.076-3.727.972-2.04-.155-3.638-1.114-4.771-2.864-1.75-2.735-1.07-6.455 1.498-8.4 1.31-.985 2.782-1.373 4.381-1.218.063.013.139.026.214.04Z"></path>
        </svg>
      ),
      link: "https://www.tiktok.com/",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.1814 6.06504C15.8442 6.06504 16.3814 5.52778 16.3814 4.86504C16.3814 4.2023 15.8442 3.66504 15.1814 3.66504C14.5187 3.66504 13.9814 4.2023 13.9814 4.86504C13.9814 5.52778 14.5187 6.06504 15.1814 6.06504Z"></path>
          <path d="M10 15C7.2425 15 5 12.7575 5 10C5 7.2425 7.2425 5 10 5C12.7575 5 15 7.2425 15 10C15 12.7575 12.7575 15 10 15ZM10 7.5C8.62125 7.5 7.5 8.62125 7.5 10C7.5 11.3787 8.62125 12.5 10 12.5C11.3787 12.5 12.5 11.3787 12.5 10C12.5 8.62125 11.3787 7.5 10 7.5Z"></path>
          <path d="M15 20H5C2.43 20 0 17.57 0 15V5C0 2.43 2.43 0 5 0H15C17.57 0 20 2.43 20 5V15C20 17.57 17.57 20 15 20ZM5 2.5C3.83125 2.5 2.5 3.83125 2.5 5V15C2.5 16.1912 3.80875 17.5 5 17.5H15C16.1688 17.5 17.5 16.1688 17.5 15V5C17.5 3.83125 16.1688 2.5 15 2.5H5Z"></path>
        </svg>
      ),
      link: "https://www.instagram.com/",
    },
    {
      icon: (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.125 0H0.875C0.375 0 0 0.375 0 0.875V19.25C0 19.625 0.375 20 0.875 20H19.25C19.75 20 20.125 19.625 20.125 19.125V0.875C20 0.375 19.625 0 19.125 0ZM5.875 17H3V7.5H6V17H5.875ZM4.5 6.25C3.5 6.25 2.75 5.375 2.75 4.5C2.75 3.5 3.5 2.75 4.5 2.75C5.5 2.75 6.25 3.5 6.25 4.5C6.125 5.375 5.375 6.25 4.5 6.25ZM17 17H14V12.375C14 11.25 14 9.875 12.5 9.875C11 9.875 10.75 11.125 10.75 12.375V17.125H7.75V7.5H10.625V8.75C11 8 12 7.25 13.375 7.25C16.375 7.25 16.875 9.25 16.875 11.75V17H17Z"></path>
        </svg>
      ),
      link: "https://www.linkedin.com/",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 10.0022C20.0004 8.09104 19.4532 6.2198 18.4231 4.61003C17.393 3.00026 15.9232 1.71938 14.1877 0.919062C12.4522 0.118741 10.5237 -0.167503 8.63053 0.0942223C6.73739 0.355948 4.9589 1.15468 3.50564 2.39585C2.05237 3.63701 0.985206 5.26863 0.430495 7.0975C-0.124217 8.92636 -0.143239 10.8759 0.37568 12.7152C0.894599 14.5546 1.92973 16.2067 3.35849 17.476C4.78726 18.7453 6.54983 19.5786 8.4375 19.8772V12.8922H5.89875V10.0022H8.4375V7.79843C8.38284 7.28399 8.44199 6.76382 8.61078 6.2748C8.77957 5.78577 9.05386 5.33986 9.4142 4.96866C9.77455 4.59746 10.2121 4.31007 10.6959 4.12684C11.1797 3.94362 11.6979 3.86905 12.2137 3.90843C12.9638 3.91828 13.7121 3.98346 14.4525 4.10343V6.56718H13.1925C12.9779 6.53911 12.7597 6.55967 12.554 6.62733C12.3484 6.69498 12.1607 6.80801 12.0046 6.95804C11.8486 7.10807 11.7283 7.29127 11.6526 7.49408C11.577 7.69689 11.5479 7.91411 11.5675 8.12968V10.0047H14.3412L13.8975 12.8947H11.5625V19.8834C13.9153 19.5112 16.058 18.3114 17.6048 16.4999C19.1516 14.6884 20.001 12.3842 20 10.0022Z"></path>
        </svg>
      ),
      link: "https://www.facebook.com/",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 0C4.5 0 0 4.5 0 10C0 14.25 2.625 17.875 6.375 19.25C6.25 18.5 6.25 17.25 6.375 16.375C6.5 15.625 7.5 11.375 7.5 11.375C7.5 11.375 7.25 10.875 7.25 10C7.25 8.625 8.125 7.5 9.125 7.5C10 7.5 10.375 8.125 10.375 8.875C10.375 9.75 9.875 11 9.5 12.25C9.25 13.25 10 14 11 14C12.75 14 14.125 12.125 14.125 9.375C14.125 7 12.375 5.25 10 5.25C7.125 5.25 5.5 7.375 5.5 9.625C5.5 10.5 5.875 11.375 6.25 11.875C6.25 12.125 6.25 12.25 6.25 12.375C6.125 12.75 6 13.375 6 13.5C6 13.625 5.875 13.75 5.625 13.625C4.375 13 3.625 11.25 3.625 9.75C3.625 6.625 5.875 3.75 10.25 3.75C13.75 3.75 16.375 6.25 16.375 9.5C16.375 13 14.25 15.75 11.125 15.75C10.125 15.75 9.125 15.25 8.875 14.625C8.875 14.625 8.375 16.5 8.25 17C8 17.875 7.375 19 7 19.625C8 19.875 9 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0Z"></path>
        </svg>
      ),
      link: "https://www.pinterest.com/",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="#74767E"
        >
          <g clip-path="url(#twitter_icon_svg__a)">
            <path d="M11.64 8.464 18.923 0h-1.725l-6.323 7.35L5.824 0H0l7.636 11.114L0 19.99h1.726l6.676-7.761 5.334 7.76h5.824L11.64 8.465Zm-2.363 2.747-.773-1.106-6.157-8.806h2.65l4.969 7.107.774 1.106 6.458 9.238h-2.65l-5.27-7.538Z"></path>
          </g>
          <defs>
            <clipPath id="twitter_icon_svg__a">
              <path d="M0 0h19.56v20H0z"></path>
            </clipPath>
          </defs>
        </svg>
      ),
      link: "https://www.x.com/",
    },
  ];
  return (
    <footer>
      <hr className="my-20 w-full" />
      <div className="container">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
          {item.map((item, index) => {
            const listName = item.link.map((item, index) => (
              <Link
                className="text-gray-600 my-1 hover:underline"
                to={"/"}
                key={index}
              >
                {item.item}
              </Link>
            ));
            return (
              <div className="mt-5" key={index}>
                <h2 className="text-xl font-semibold mb-5">{item.name}</h2>
                <div className="flex flex-col">{listName}</div>
              </div>
            );
          })}
        </div>
        <hr className="my-10 w-full" />
        <div className="footer_bottom flex mb-10 justify-between">
          <div className="flex gap-10">
            <Link to={"/"}>
              <svg
                width="91"
                height="27"
                viewBox="0 0 91 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#7A7D85">
                  <path d="m82.9 13.1h-3.2c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-13.4h-2.6c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-18.4h6.1v2.8c1-2.2 2.4-2.8 4.4-2.8h7.4v2.8c1-2.2 2.4-2.8 4.4-2.8h2v5zm-25.6 5.6h-12.6c.3 2.1 1.6 3.2 3.8 3.2 1.6 0 2.8-.7 3.1-1.8l5.4 1.5c-1.3 3.2-4.6 5.1-8.5 5.1-6.6 0-9.6-5.1-9.6-9.5 0-4.3 2.6-9.4 9.2-9.4 7 0 9.3 5.2 9.3 9.1 0 .9 0 1.4-.1 1.8zm-5.9-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3.1.8-3.4 3zm-23.1 11.3h5.3l6.7-18.3h-6.1l-3.2 10.7-3.4-10.8h-6.1zm-24.9 0h6v-13.4h5.7v13.4h6v-18.4h-11.6v-1.1c0-1.2.9-2 2.3-2h3.5v-5h-4.4c-4.5 0-7.5 2.7-7.5 6.6v1.5h-3.4v5h3.4z"></path>
                </g>
                <g fill="#7A7D85">
                  <path d="m90.4 23.3c0 2.1-1.6 3.7-3.8 3.7s-3.8-1.6-3.8-3.7 1.6-3.7 3.8-3.7c2.2-.1 3.8 1.5 3.8 3.7zm-.7 0c0-1.8-1.3-3.1-3.1-3.1s-3.1 1.3-3.1 3.1 1.3 3.1 3.1 3.1 3.1-1.4 3.1-3.1zm-1.7.8.1.9h-.7l-.1-.9c0-.3-.2-.5-.5-.5h-.8v1.4h-.7v-3.5h1.4c.7 0 1.2.4 1.2 1.1 0 .4-.2.6-.5.8.4.1.5.3.6.7zm-1.9-1h.7c.4 0 .5-.3.5-.5 0-.3-.2-.5-.5-.5h-.7z"></path>
                </g>
              </svg>
            </Link>
            <span className="text-gray-400">
              © Fiverr International Ltd. 2024
            </span>
          </div>
          <div className="flex gap-1 lg:gap-2 items-center">
            {social.map((item, index) => {
              return (
                <Link
                  className="hover:bg-gray-300 p-2 rounded-full"
                  to={item.link}
                >
                  {item.icon}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
