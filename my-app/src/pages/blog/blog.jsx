import React, { useState } from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/img9.png";
import amaz from "../../assets/amaz.png";
import pagination from "../../assets/pagination.png";
import { useTranslation } from "react-i18next";
import { Input } from "@mui/material";
import { Link } from "react-router-dom";
const Blog = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const { t } = useTranslation();
  const articles = [
    {
      id: "4",
      title: "BEST CRYPTO TRADING GROUPS",
      author: "ALGUAZAR",
      date: "Jan 10, 2024",
      image: img4,
      description:
        "Usually, there are three main types of trade – short, medium and long term. In the industry, there are only two main types of cryptocurrency, short-term and long-term.",
    },
    {
      id: "5",
      title: "HOW CRYPTO TRADING SERVICES WORK?",
      author: "ALGUAZAR",
      date: "Jan 10, 2024",
      image: img5,
      description:
        "Usually, there are three main types of trade – short, medium and long term. In the industry, there are only two main types of cryptocurrency, short-term and long-term.",
    },
    {
      id: "6",
      title: "HOW TO EARN MONEY WITH CRYPTO TRADING ALGORITHM?",
      author: "ALGUAZAR",
      date: "Jan 10, 2024",
      image: img6,
      description:
        "Usually, there are three main types of trade – short, medium and long term. In the industry, there are only two main types of cryptocurrency, short-term and long-term.",
    },
    {
      id: "7",
      title: "BEST CRYPTO TRADING GROUPS",
      author: "ALGUAZAR",
      date: "Jan 9, 2024",
      image: img4,
      description:
        "Usually, there are three main types of trade – short, medium and long term. In the industry, there are only two main types of cryptocurrency, short-term and long-term.",
    },
    {
      id: "8",
      title: "HOW CRYPTO TRADING SERVICES WORK?",
      author: "ALGUAZAR",
      date: "Jan 9, 2024",
      image: img5,
      description:
        "Usually, there are three main types of trade – short, medium and long term. In the industry, there are only two main types of cryptocurrency, short-term and long-term.",
    },
    {
      id: "9",
      title: "HOW TO EARN MONEY WITH CRYPTO TRADING ALGORITHM?",
      author: "ALGUAZAR",
      date: "Jan 9, 2024",
      image: img6,
      description:
        "Usually, there are three main types of trade – short, medium and long term. In the industry, there are only two main types of cryptocurrency, short-term and long-term.",
    },
    {
      id: "10",
      title: "HOW CAN BLOCKCHAIN BE USED FOR OWNERSHIP?",
      author: "ALGUAZAR",
      date: "Jan 8, 2024",
      image: img7,
      description:
        "Usually, there are three main types of trade – short, medium and long term. In the industry, there are only two main types of cryptocurrency, short-term and long-term.",
    },
    {
      id: "11",
      title: "HOW DOES BLOCKCHAIN INCREASE TRANSPARENCY?",
      author: "ALGUAZAR",
      date: "Jan 8, 2024",
      image: img8,
      description:
        "Usually, there are three main types of trade – short, medium and long term. In the industry, there are only two main types of cryptocurrency, short-term and long-term.",
    },
    {
      id: "12",
      title: "CRYPTO MINING: WHAT IS IT?",
      author: "ALGUAZAR",
      description:
        "Usually, there are three main types of trade – short, medium and long term. In the industry, there are only two main types of cryptocurrency, short-term and long-term.",
      date: "Jan 8, 2024",
      image: img9,
    },
  ];
  const [cards, setCards] = useState(articles);
  return (
    <>
      <h1 className="lg:text-[62px] text-[30px] text-[#161920] text-center mt-[100px] font-bold">
        {t("blog.header.text1")}
      </h1>
      <div className="flex w-[90%] mt-[50px] gap-[5px] lg:gap-[40px] m-auto flex-wrap">
        <div className="text-[#fff] text-center cursor-pointer bg-[#ED7212] text-[16px] font-bold lg:w-[187px] py-[10px] rounded-md">
          {t("blog.header.text2")}
        </div>
        <div className="text-[#EB5F07] text-center cursor-pointer border-[2px] border-#EB5F07 text-[16px] font-bold lg:w-[187px] py-[10px] rounded-md">
          {t("blog.header.text2")}
        </div>
        <div className="text-[#EB5F07] text-center cursor-pointer border-[2px] border-#EB5F07 text-[16px] font-bold lg:w-[187px] py-[10px] rounded-md">
          {t("blog.header.text2")}
        </div>
        <div className="text-[#EB5F07] text-center cursor-pointer border-[2px] border-#EB5F07 text-[16px] font-bold lg:w-[187px] py-[10px] rounded-md">
          {t("blog.header.text2")}
        </div>
        <div className="text-[#EB5F07] text-center cursor-pointer border-[2px] border-#EB5F07 text-[16px] font-bold lg:w-[187px] py-[10px] rounded-md">
          {t("blog.header.text2")}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-[20px] mt-[100px] w-[90%] m-auto items-start">
        <img src={img1} alt="" />
        <div className="">
          <h1 className="text-[22px] text-[#161920] font-bold">
            {t("blog.header.text3")}
          </h1>
          <p className="text-[#889196] text-[16px] py-[20px] lg:w-[400px]">
            {t("blog.header.text4")}
          </p>
          <div className="flex gap-[20px]">
            <img src={amaz} alt="" />
            <div className="">
              <p className="text-[#161920]">AmazMarkets</p>
              <p className="text-[#889196]">{t("blog.header.text5")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] m-auto">
        <Input
          placeholder="All stories"
          fullWidth
          sx={{ padding: "10px 0px" }}
        />
      </div>
      <div className="flex flex-col lg:flex-row mt-[20px] w-[90%] m-auto items-center gap-[20px]">
        <div className="">
          <img src={img2} alt="" />
          <div className="">
            <h1 className="text-[22px] text-[#161920] font-bold">
              {t("blog.header.text6")}
            </h1>
            <p className="text-[#889196] text-[16px] py-[20px] lg:w-[400px]">
              {t("blog.header.text7")}
            </p>
            <div className="flex items-center gap-[20px]">
              <img src={amaz} alt="" />
              <div className="">
                <p className="text-[#161920]">AMAZMARKETS</p>
                <p className="text-[#889196]">{t("blog.header.text5")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img src={img3} alt="" />
          <div className="">
            <h1 className="text-[22px] text-[#161920] font-bold">
              {t("blog.header.text8")}
            </h1>
            <p className="text-[#889196] text-[16px] py-[20px] lg:w-[400px]">
              {t("blog.header.text9")}
            </p>
            <div className="flex items-center gap-[20px]">
              <img src={amaz} alt="" />
              <div className="">
                <p className="text-[#161920]">AMAZMARKETS</p>
                <p className="text-[#889196]">{t("blog.header.text5")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {cards.map((card) => (
          <Link key={card.id} to={`/blog/${card.id}`}>
            <div key={card.id} className="">
              <img src={card.image} alt="" />
              <div className="">
                <h1 className="text-[22px] text-[#161920] font-bold">
                  {card.title}
                </h1>
                <p className="text-[#889196] text-[16px] py-[20px] lg:w-[400px]">
                  {card.description}
                </p>
                <div className="flex gap-[20px]">
                  <img src={amaz} alt="" />
                  <div className="">
                    <p className="text-[#161920]">AMAZMARKETS</p>
                    <p className="text-[#889196]">{t("blog.header.text5")}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <img src={pagination} className="lg:w-[500px] m-auto mt-[50px]" alt="" />
    </>
  );
};

export default Blog;
