import React from "react";
import laptops from "../../assets/laptops.png";
import { useTranslation } from "react-i18next";
import arrow from "../../assets/Subtract.png";
import bulb from "../../assets/bulb 1.png";
import main from "../../assets/Group 455.png";
import bill from "../../assets/bill.png";
import paper from "../../assets/paper.svg";
import usa from "../../assets/usa.png";
import lock from "../../assets/lock.png";
import phone from "../../assets/phones1.png";
import bill2 from "../../assets/bill2.png";
import "../home/home.css";
import slider from "../../assets/slider.png";
import human1 from "../../assets/human1.png";
import human2 from "../../assets/human2.png";
import soicals1 from "../../assets/socials1.png";
const Contact2 = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section id="back1" className="lg:w-[100%] py-[50px]">
        <div className="flex flex-col lg:flex-row gap-[30px] m-auto items-center w-[90%]">
          <aside className="lg:w-[563px]">
            <h1 className="lg:text-[42px] text-[25px] lg:text-start text-center text-[#fff] py-[20px] font-bold">
              {t("page4.header.text1")}
            </h1>
            <p className="text-[32px] text-[gray] py-[10px] lg:text-start text-center">
              {t("page4.header.text2")}
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

      <div className="flex flex-col  max-w-[1400px] items-center justify-center min-h-screen bg-gray-50 px-6">
        <h2 className="text-3xl font-semibold text-gray-800 lg:mb-20 my-20 lg:my-0 text-center lg:text-start">
          {t("page4.section1.text1")}
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center bg-white shadow-md p-4 rounded-lg">
              <span className="text-red-500 text-xl">
                <img src={bulb} />
              </span>
              <span className="ml-2 text-gray-700 font-medium">
                Electricity Bill
              </span>
            </div>
            <div className="flex items-center bg-white shadow-md p-4 rounded-lg">
              <span className="text-red-500 text-xl">
                <img src={bulb} />
              </span>
              <span className="ml-2 text-gray-700 font-medium">
                Gas/Water Bill
              </span>
            </div>
            <div className="flex items-center bg-white shadow-md p-4 rounded-lg">
              <span className="text-red-500 text-xl">
                <img src={bulb} />
              </span>
              <span className="ml-2 text-gray-700 font-medium">
                Internet Bill
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img src={main} className="lg:w-64 h-auto shadow-lg" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center bg-white shadow-md p-4 rounded-lg">
              <span className="text-red-500 text-xl">
                <img src={bulb} />
              </span>
              <span className="ml-2 text-gray-700 font-medium">Rapidity</span>
            </div>
            <div className="flex items-center bg-white shadow-md p-4 rounded-lg">
              <span className="text-red-500 text-xl">
                <img src={bulb} />
              </span>
              <span className="ml-2 text-gray-700 font-medium">
                English Language
              </span>
            </div>
            <div className="flex items-center bg-white shadow-md p-4 rounded-lg">
              <span className="text-red-500 text-xl">
                <img src={bulb} />
              </span>
              <span className="ml-2 text-gray-700 font-medium">Manual</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
        <div className="flex flex-col lg:flex-row lg:w-full max-w-5xl">
          <div className="flex flex-col items-center lg:w-1/2">
            <div className="relative w-full flex justify-center">
              <img src={bill} className="lg:w-80 h-auto w-full shadow-lg" />
            </div>
          </div>
          <div className="lg:w-1/2 p-6">
            <h2 className="tec:\Users\shohrukh\Downloads\Group 763.svgxt-2xl font-semibold text-gray-800 mb-3">
            {t("page4.section2.text1")}
            </h2>
            <p className="text-gray-600 mb-6">
            {t("page4.section2.text2")}
            </p>

            <div className="mb-4">
              <label className="text-gray-700 block text-sm mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="info@gmail.com"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-6">
              <label className="text-gray-700 block text-sm mb-1">
                Telephone number or Login
              </label>
              <input
                type="text"
                placeholder="info@gmail.com"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <button className="w-full bg-orange-500 text-white py-2 rounded-md font-medium">
              Send
            </button>
          </div>
        </div>
      </div>
      <section className="flex flex-col lg:flex-row px-[10%] items-center justify-center gap-10">
        <div className="lg:w-1/2 p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">
          {t("page4.section3.text1")}
          </h2>
          <p className="text-gray-600 mb-6">
          {t("page4.section3.text2")}
          </p>
          <button className="w-[50%] bg-orange-500 text-white py-2 rounded-md font-medium">
          {t("page4.section3.text3")}
          </button>
        </div>
        <img src={paper} />
      </section>

      <section className="flex  flex-col lg:flex-row  px-[10%] items-center justify-center gap-10">
        <div className="lg:w-1/2 p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">
          {t("page4.section4.text1")}
          </h2>
          <p className="text-gray-600 mb-6">
          {t("page4.section4.text2")}
            <br />
            <br />
            {t("page4.section4.text3")}
          </p>
        </div>
        <img src={usa} />
      </section>

      <section>
        <h2 className="text-3xl px-10 lg:px-0 font-semibold text-gray-800 mt-20 text-center">
        {t("page4.section5.text1")}
        </h2>
        <p className="mt-2 text-center lg:px-[35%] px-10">
        {t("page4.section5.text2")}
        </p>
        <div className="flex flex-col items-center lg:flex-row gap-10 mt-10 px-10 justify-center">
          <div className="lg:w-[20%] text-center justify-center items-center">
            <img src={lock} className="w-[30%] m-auto" />
            <p className="text-[#889196]">
            {t("page4.section6.text1")}
            </p>
          </div>
          <div className="lg:w-[20%] mt-10 text-center justify-center items-center">
            <img src={lock} className="w-[30%] m-auto" />
            <p className="text-[#889196]">
            {t("page4.section6.text2")}
            </p>
          </div>
          <div className="lg:w-[20%] mt-10 text-center justify-center items-center">
            <img src={lock} className="w-[30%] m-auto" />
            <p className="text-[#889196]">
            {t("page4.section6.text3")}
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row  px-[10%] items-center justify-center gap-20 mt-32">
        <img src={phone} className="lg:w-[50%]" />
        <div className="lg:w-1/2 p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">
          {t("page4.section7.text1")}
          </h2>
          <p className="text-gray-600 mb-6">
          {t("page4.section7.text2")}
          </p>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
        <div className="flex w-full flex-col lg:flex-row  max-w-5xl">
          <div className="flex flex-col items-center lg:w-1/2">
            <div className="relative w-full flex justify-center">
              <img src={bill2} className="w-80 h-auto shadow-lg" />
            </div>
          </div>
          <div className="lg:w-1/2 p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            {t("page4.section2.text1")}
            </h2>
            <p className="text-gray-600 mb-6">
            {t("page4.section2.text2")}
            </p>

            <div className="mb-4">
              <label className="text-gray-700 block text-sm mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="info@gmail.com"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-6">
              <label className="text-gray-700 block text-sm mb-1">
                Telephone number or Login
              </label>
              <input
                type="text"
                placeholder="info@gmail.com"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button className="w-full bg-orange-500 text-white py-2 rounded-md font-medium">
              Send
            </button>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default Contact2;
