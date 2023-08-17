// import 的部分要寫在最上面，不然會出現 Error
import image1 from "./images/tour-1.jpg";
import image2 from "./images/tour-2.jpg";
import image3 from "./images/tour-3.jpeg";
import image4 from "./images/tour-4.jpg";
import image5 from "./images/tour-5.jpeg";
import image6 from "./images/tour-6.jpg";

// import React Icons (文件名稱記得要設定成 .jsx)
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaWallet,
  FaTree,
  FaSocks,
} from "react-icons/fa";

// Name Exports
// 一個文件可以有多個
export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const iconLinks = [
  { id: 1, url: "https://www.facebook.com", icon: <FaFacebook /> },
  { id: 2, url: "https://www.twitter.com", icon: <FaTwitter /> },
  { id: 3, url: "https://www.linkedin.com", icon: <FaLinkedin /> },
  { id: 4, url: "https://www.youtube.com", icon: <FaYoutube /> },
];

export const services = [
  {
    id: 1,
    icon: <FaWallet />,
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 2,
    icon: <FaTree />,
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 3,
    icon: <FaSocks />,
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: image1,
    alt: "image1",
    date: "august 26th, 2019",
    title: "mysterious pyramid",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    country: "egypt",
    during: "10 days",
    price: "from $2600",
  },
  {
    id: 2,
    image: image2,
    alt: "image2",
    date: "may 1th, 2020",
    title: "elegance of venice",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    country: "italy",
    during: "7 days",
    price: "from $2100",
  },
  {
    id: 3,
    image: image3,
    alt: "image3",
    date: "september 15th, 2020",
    title: "wildness safari",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    country: "kenya",
    during: "15 days",
    price: "from $3200",
  },
  {
    id: 4,
    image: image4,
    alt: "image4",
    date: "august 5th, 2021",
    title: "summer festival",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    country: "japan",
    during: "12 days",
    price: "from $2500",
  },
  {
    id: 5,
    image: image5,
    alt: "image5",
    date: "april 20th, 2022",
    title: "taj mahal",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    country: "india",
    during: "10 days",
    price: "from $1500",
  },
  {
    id: 6,
    image: image6,
    alt: "image6",
    date: "september 11th, 2022",
    title: "explore taipei",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    country: "taiwan",
    during: "7 days",
    price: "from $1600",
  },
];
