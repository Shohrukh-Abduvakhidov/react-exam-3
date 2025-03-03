import React from "react";
import { useTranslation } from "react-i18next";
import "../home/home.css";
import soicals1 from "../../assets/socials1.png";
import arrow from "../../assets/Subtract.png";
import laptops from "../../assets/laptops.png";
import phone from "../../assets/phone2.png";
import icon1 from "../../assets/icons1.png";
import icon2 from "../../assets/icons2.png";
import icon3 from "../../assets/icons3.png";
import num1 from "../../assets/num1.png";
import num2 from "../../assets/num2.png";
import num3 from "../../assets/num3.png";
import num4 from "../../assets/num4.png";
import num5 from "../../assets/num5.png";
import num6 from "../../assets/num6.png";
import cube1 from "../../assets/Polygon 19 (1).png";
import cube2 from "../../assets/Polygon 20.png";
import cube3 from "../../assets/Polygon 21.png";
import phone4 from "../../assets/phone4.png";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";
import card5 from "../../assets/card5.png";
import girle2 from "../../assets/girle2.png";
import slider from "../../assets/slider.png";
import human1 from "../../assets/human1.png";
import { Input } from "@mui/material";
import human2 from "../../assets/human2.png";
import arrowB from "../../assets/select-arrow.png";
import infp from "../../assets/information 1 (1).png";
import infor from "../../assets/group 1.png";
const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <section id="back1" className="lg:w-[100%] py-[50px]">
        <div className="flex flex-col lg:flex-row gap-[30px] m-auto items-center w-[90%]">
          <aside className="lg:w-[563px]">
            <h1 className="lg:text-[42px] text-[25px] lg:text-start text-center text-[#fff] py-[20px] font-bold">
              {t("Page2.header.text1")}
            </h1>
            <p className="text-[32px] text-[gray] py-[10px] lg:text-start text-center">
              {t("Page2.header.text2")}
            </p>
            <button className="bg-[#EB5F07] lg:text-start lg:pl-0 pl-[100px] text-center lg:w-auto w-full py-[10px] px-[20px] rounded-md text-[#fff] font-bold flex gap-[20px]">
              <img src={arrow} alt="" />
              GET STARTED
            </button>
            <div className="lg:flex hidden items-center gap-[40px] py-[20px]">
              <img src={soicals1} alt="" />
            </div>
          </aside>
          <img src={laptops} alt="" />
        </div>
      </section>
      <section className="w-[90%] mt-[100px] m-auto flex flex-col lg:flex-row ">
        <img src={phone} alt="" />
        <aside className="">
          <h1 className="text-[42px] lg:text-start text-center text-[#161920] font-bold">
            {t("Page2.section1.text1")}
          </h1>
          <div className="flex items-start flex-col lg:flex-row lg:text-start text-center py-[50px] gap-[10px]">
            <div className="flex lg:m-0  m-auto gap-[20px] items-start">
              <img src={icon1} className="m-auto" alt="" />
            </div>
            <div className="">
              <p className="text-[32px] text-[#161920] font-bold">
                {t("Page2.section1.text2")}
              </p>
              <p className="text-[21px] text-[#889196]">
                {t("Page2.section1.text3")}
              </p>
            </div>
          </div>
          <div className="flex items-start flex-col lg:flex-row lg:text-start text-center py-[50px] gap-[10px]">
            <div className="flex lg:m-0  m-auto gap-[20px] items-start">
              <img src={icon2} className="w-[100px]" alt="" />
            </div>
            <div className="">
              <p className="text-[32px] text-[#161920] font-bold">
                {t("Page2.section1.text4")}
              </p>
              <p className="text-[21px] text-[#889196]">
                {t("Page2.section1.text5")}
              </p>
            </div>
          </div>
          <div className="flex items-start flex-col lg:flex-row lg:text-start text-center py-[50px] gap-[10px]">
            <div className="flex lg:m-0  m-auto gap-[20px] items-start">
              <img src={icon3} className="w-[100px]" alt="" />
            </div>
            <div className="">
              <p className="text-[32px] text-[#161920] font-bold">
                {t("Page2.section1.text6")}
              </p>
              <p className="text-[21px] text-[#889196]">
                {t("Page2.section1.text7")}
              </p>
            </div>
          </div>
        </aside>
      </section>
      <section className="w-[90%] mt-[100px] m-auto flex flex-col lg:flex-row">
        <aside className="lg:w-[600px]">
          <h1 className="text-[30px] text-[#161920] font-bold">
            {t("Page2.section2.text1")}
          </h1>
          <p className="text-[25px] text-[#889196]">
            {t("Page2.section2.text2")}
          </p>
          <div className="flex gap-[10px] items-center">
            <img src={num1} className="w-[60px]" alt="" />
            <p className="text-[21px] text-[#161920]">
              {t("Page2.section2.text3")}
            </p>
          </div>
          <div className="flex gap-[10px] items-center">
            <img src={num2} className="w-[60px]" alt="" />
            <p className="text-[21px] text-[#161920]">
              {t("Page2.section2.text4")}
            </p>
          </div>
          <div className="flex gap-[10px] items-center">
            <img src={num3} className="w-[60px]" alt="" />
            <p className="text-[21px] text-[#161920]">
              {t("Page2.section2.text5")}
            </p>
          </div>
          <div className="flex gap-[10px] items-center">
            <img src={num4} className="w-[60px]" alt="" />
            <p className="text-[21px] text-[#161920]">
              {t("Page2.section2.text6")}
            </p>
          </div>
        </aside>
        <aside className="lg:w-[500px] relative">
          <img
            src={cube1}
            className="absolute top-[-10%] z-[-1] lg:block hidden right-[-17%]"
            alt=""
          />
          <img
            src={cube2}
            className="absolute top-[60%] left-[-25%] lg:block hidden z-[-1]"
            alt=""
          />
          <img
            src={cube3}
            className="absolute top-[85%] left-[-15%] z-[-1]"
            alt=""
          />
          <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">
                {t("Page2.section2.text7")}
              </h2>

              <fieldset className="mb-4">
                <legend className="text-sm font-medium mb-1">
                  {t("Page2.section2.text8")}
                </legend>
                <div className="grid grid-cols-6 border-black rounded-md gap-2 border-[3px]">
                  <button className="px-4 py-2  rounded-md bg-white">
                    2019
                  </button>
                  <button className="px-4 py-2 bg-black text-white">
                    2018
                  </button>
                  <button className="px-4 py-2 rounded-md bg-white">
                    2017
                  </button>
                  <button className="px-4 py-2 rounded-md bg-white">
                    2016
                  </button>
                  <button className="px-4 py-2 rounded-md bg-white">
                    2015
                  </button>
                  <button className="px-4 py-2 rounded-md bg-white">
                    Earlier
                  </button>
                </div>
              </fieldset>

              <fieldset className="mb-4">
                <legend className="text-sm font-medium mb-1">
                  {t("Page2.section2.text9")}
                </legend>
                <div className="grid grid-cols-5 border-[3px] rounded-md gap-2">
                  <button className="px-4 py-2 rounded-md bg-white">
                    &lt; 50
                  </button>
                  <button className="px-4 py-2  bg-black text-white">
                    50+
                  </button>
                  <button className="px-4 py-2 rounded-md bg-white">
                    100+
                  </button>
                  <button className="px-4 py-2 rounded-md bg-white">
                    500+
                  </button>
                  <button className="px-4 py-2 rounded-md bg-white">
                    1000+
                  </button>
                </div>
              </fieldset>

              <fieldset className="mb-4">
                <legend className="text-sm font-medium mb-1">
                  {t("Page2.section2.text10")}
                </legend>
                <div className="grid grid-cols-2 border-[3px] rounded-md gap-2">
                  <button className="px-4 py-2 bg-black text-white">USA</button>
                  <button className="px-4 py-2  bg-white">Europe</button>
                </div>
              </fieldset>

              <fieldset className="mb-4">
                <legend className="text-sm font-medium mb-1">
                  {t("Page2.section2.text11")}
                </legend>
                <div className="grid grid-cols-2 border-[3px] rounded-md gap-2">
                  <button className="px-4 py-2 bg-black text-white">Yes</button>
                  <button className="px-4 py-2 bg-white">No</button>
                </div>
              </fieldset>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  {t("Page2.section2.text12")}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address here"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <button className="w-full bg-orange-500 text-white font-semibold p-3 rounded-lg hover:bg-orange-600 transition">
                {t("Page2.section2.text13")}
              </button>
            </div>
          </div>
        </aside>
      </section>
      <section className="w-[90%] m-auto flex flex-col lg:flex-row mt-[200px] items-center">
        <img src={phone4} alt="" />
        <aside className="">
          <h1 className="lg:text-[42px] text-[25px] text-[#161920] font-bold">
            {t("Page2.section3.text1")}
          </h1>
          <div className="flex gap-[10px] items-center">
            <img src={num1} className="w-[60px]" alt="" />
            <div className="">
              <p className="text-[21px] text-[#161920]">
                {t("Page2.section3.text2")}
              </p>
              <p className="text-[#889196] text-[21px]">
                {t("Page2.section3.text3")}
              </p>
            </div>
          </div>
          <div className="flex gap-[10px] items-center">
            <img src={num2} className="w-[60px]" alt="" />
            <div className="">
              <p className="text-[21px] text-[#161920]">
                {t("Page2.section3.text4")}
              </p>
              <p className="text-[#889196] text-[21px]">
                {t("Page2.section3.text5")}
              </p>
            </div>
          </div>
          <div className="flex gap-[10px] items-center">
            <img src={num3} className="w-[60px]" alt="" />
            <div className="">
              <p className="text-[21px] text-[#161920]">
                {t("Page2.section3.text6")}
              </p>
              <p className="text-[#889196] text-[21px]">
                {t("Page2.section3.text7")}
              </p>
            </div>
          </div>
          <div className="flex gap-[10px] items-center">
            <img src={num4} className="w-[60px]" alt="" />
            <div className="">
              <p className="text-[21px] text-[#161920]">
                {t("Page2.section3.text8")}
              </p>
              <p className="text-[#889196] text-[21px]">
                {t("Page2.section3.text9")}
              </p>
            </div>
          </div>
          <div className="flex gap-[10px] items-center">
            <img src={num5} className="w-[60px]" alt="" />
            <div className="">
              <p className="text-[21px] text-[#161920]">
                {t("Page2.section3.text10")}
              </p>
              <p className="text-[#889196] text-[21px]">
                {t("Page2.section3.text11")}
              </p>
            </div>
          </div>
          <div className="flex gap-[10px] items-center">
            <img src={num6} className="w-[60px]" alt="" />
            <div className="">
              <p className="text-[21px] text-[#161920]">
                {t("Page2.section3.text12")}
              </p>
              <p className="text-[#889196] text-[21px]">
                {t("Page2.section3.text13")}
              </p>
            </div>
          </div>
        </aside>
      </section>
      <section className="mt-[100px]">
        <h1 className="lg:w-[506px] m-auto lg:text-[42px] text-[25px] text-[#161920] font-bold text-center">
          {t("Page2.section4.text1")}
        </h1>
        <p className=" lg:w-[506px] m-auto text-center text-[32px] text-[#889196]">
          {t("Page2.section4.text2")}
        </p>
        <div className="lg:w-[90%] m-auto mt-[50px] flex gap-[50px] justify-between flex-col lg:flex-row items-center">
          <div className="">
            <img src={card1} className="m-auto" alt="" />
            <p className="text-[21px] text-center text-[#161920] font-bold">
              {t("Page2.section4.text3")}
            </p>
          </div>
          <div className="">
            <img src={card2} className="m-auto" alt="" />
            <p className="text-[21px] text-center text-[#161920] font-bold">
              {t("Page2.section4.text4")}
            </p>
          </div>
          <div className="">
            <img src={card3} alt="" className="m-auto" />
            <p className="text-[21px] text-center text-[#161920] font-bold">
              {t("Page2.section4.text5")}
            </p>
          </div>
          <div className="">
            <img src={card4} className="m-auto" alt="" />
            <p className="text-[21px] text-center text-[#161920] font-bold">
              {t("Page2.section4.text6")}
            </p>
          </div>
          <div className="">
            <img src={card5} className="m-auto" alt="" />
            <p className="text-[21px] text-center text-[#161920] font-bold">
              {t("Page2.section4.text7")}
            </p>
          </div>
        </div>
      </section>
      <section className="mt-[100px] w-[90%] m-auto flex flex-col-reverse lg:flex-row justify-between items-center">
        <img src={girle2} alt="" />
        <aside className="">
          <h1 className="text-[42px] text-[#161920] font-bold">
            {t("Example.section9.text1")}
          </h1>
          <p className="text-[32px] text-[#889196]">
            {t("Example.section9.text2")}
          </p>
          <div className="lg:w-[430px]">
            <div className="py-[10px]">
              <p className="">{t("Example.section9.text3")}</p>
              <Input
                sx={{ padding: "5px 0px" }}
                fullWidth
                placeholder="info@gmail.com"
              />
            </div>
            <div className="py-[10px]">
              <p className="">{t("Example.section9.text4")}</p>
              <Input
                fullWidth
                sx={{ padding: "5px 0px" }}
                placeholder="info@gmail.com"
              />
            </div>
            <div className="py-[10px]">
              <p className="">{t("Example.section9.text5")}</p>
              <Input
                fullWidth
                sx={{ padding: "5px 0px" }}
                placeholder="info@gmail.com"
              />
            </div>
            <button className="bg-[#ED7212] text-[#fff] w-full py-[12px] rounded-md cursor-pointer my-[20px]">
              {t("Example.section9.text6")}
            </button>
          </div>
        </aside>
      </section>
      <section className="w-[90%] m-auto mt-[100px]">
        <h1 className="text-center text-[42px] text-[#161920] font-bold">
          {t("Example.section10.text1")}
        </h1>
        <aside className="mt-[50px] flex gap-[50px] justify-between">
          <div className="flex gap-[10px] items-start w-[500px]">
            <img src={human1} alt="" />
            <div className="">
              <h1 className="font-bold text-[#EB6108] text-[30px]">//</h1>
              <p className="text-[21px] text-[#889196] py-[10px]">
                {t("Example.section10.text2")}
              </p>
              <p className="text-[16px] text-[#161920] font-bold">
                {t("Example.section10.text3")}
              </p>
            </div>
          </div>
          <div className="lg:flex hidden gap-[10px] items-start w-[500px]">
            <img src={human2} alt="" />
            <div className="">
              <h1 className="font-bold text-[#EB6108] text-[30px]">//</h1>
              <p className="text-[21px] text-[#889196] py-[10px]">
                {t("Example.section10.text4")}
              </p>
              <p className="text-[16px] text-[#161920] font-bold">
                {t("Example.section10.text5")}
              </p>
            </div>
          </div>
        </aside>
        <img src={slider} className="w-[200px] m-auto mt-[50px]" alt="" />
      </section>
      <section className="relative">
        <h2 className="font-bold my-20 text-4xl text-center">FAQ</h2>
        <img
          src={cube1}
          className="absolute top-[0%] lg:block hidden left-[60%] z-[-1]"
          alt=""
        />
        <div className="flex justify-between lg:w-[40%] w-[80%] mt-10 rounded-2xl items-center m-auto p-3 border bg-white border-gray-200 ">
          <div className="flex items-start gap-4 bg-[#fff]">
            <img src={infp} />
            <div>
              <p className="font-bold">{t("Example.section11.text1")}</p>
              <p className="text-sm">{t("Example.section11.text2")}</p>
            </div>
          </div>
          <img src={arrowB} />
        </div>
      </section>
    </>
  );
};

export default About;
