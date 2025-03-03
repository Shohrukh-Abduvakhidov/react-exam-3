import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
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
const GetById = () => {
  const { id } = useParams();
  const { t,i18n } = useTranslation();
  console.log(i18n.language);
  
  const articles = [
    {
      id: "4",
      title:{tj: "BEST CRYPTO TRADING GROUPS"},
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
      {cards.find((card) => card.id === id) ? (
        <div>
          <div className="flex flex-col items-center">
            <h1 className="text-[#222F3E] text-4xl font-bold">
              {cards.find((card) => card.id === id).title}
            </h1>
            <p className="text-[#222F3E] text-xl font-normal">
              {cards.find((card) => card.id === id).author}
            </p>
            <p className="text-[#222F3E] text-xl font-normal">
              {cards.find((card) => card.id === id).date}
            </p>
            <img src={cards.find((card) => card.id === id).image} alt="img" />
            <p className="text-[#222F3E] text-xl w-[80%] m-auto text-center font-normal">
              {cards.find((card) => card.id === id).description}
            </p>
            <p className="text-[#222F3E] text-xl w-[80%] m-auto font-bold mt-[10px]">
              {cards.find((card) => card.id === id).title}
            </p>
          </div>
        </div>
      ) : (
        <div>
          <h1>{t("Example.getbyid.text1")}</h1>
        </div>
      )}
      <div className="w-[80%] m-auto">
        <h1 className="text-[#889196] mt-[20px] text-[21px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam iusto quisquam minus dolor similique cumque, impedit iure sint provident eos consequatur nisi praesentium quibusdam quod quia! At vero corrupti debitis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam iusto quisquam minus dolor similique cumque, impedit iure sint provident eos consequatur nisi praesentium quibusdam quod quia! At vero corrupti debitis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam iusto quisquam minus dolor similique cumque, impedit iure sint provident eos consequatur nisi praesentium quibusdam quod quia! At vero corrupti debitis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam iusto quisquam minus dolor similique cumque, impedit iure sint provident eos consequatur nisi praesentium quibusdam quod quia! At vero corrupti debitis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam iusto quisquam minus dolor similique cumque, impedit iure sint provident eos consequatur nisi praesentium quibusdam quod quia! At vero corrupti debitis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam iusto quisquam minus dolor similique cumque, impedit iure sint provident eos consequatur nisi praesentium quibusdam quod quia! At vero corrupti debitis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam iusto quisquam minus dolor similique cumque, impedit iure sint provident eos consequatur nisi praesentium quibusdam quod quia! At vero corrupti debitis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam iusto quisquam minus dolor similique cumque, impedit iure sint provident eos consequatur nisi praesentium quibusdam quod quia! At vero corrupti debitis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam iusto quisquam minus dolor similique cumque, impedit iure sint provident eos consequatur nisi praesentium quibusdam quod quia! At vero corrupti debitis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam iusto quisquam minus dolor similique cumque, impedit iure sint provident eos consequatur nisi praesentium quibusdam quod quia! At vero corrupti debitis?</h1>
      </div>
    </>
  );
};

export default GetById;
