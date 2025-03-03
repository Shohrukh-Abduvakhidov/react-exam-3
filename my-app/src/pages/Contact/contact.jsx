import React from "react";
import { useTranslation } from "react-i18next";
import "../home/home.css";
import soicals1 from "../../assets/socials1.png";
import arrow from "../../assets/Subtract.png";
import laptops from "../../assets/laptop3.png";
import analys from "../../assets/analys.png";
import planee from "../../assets/rocket.png";
import account from "../../assets/con1.png";
import order1 from "../../assets/order (1) 1.png";
import order2 from "../../assets/order 2.png";
import order3 from "../../assets/order 3.png";
import order4 from "../../assets/order 4.png";
import girle2 from "../../assets/girle2.png";
import slider from "../../assets/slider.png";
import human1 from "../../assets/human1.png";
import human2 from "../../assets/human2.png";
import { Input } from "@mui/material";
const Contact = () => {
  const { t } = useTranslation();
  return (
    <div>
      <section id="back1" className="lg:w-[100%] py-[50px]">
        <div className="flex flex-col lg:flex-row gap-[30px] m-auto items-center w-[90%]">
          <aside className="lg:w-[563px]">
            <h1 className="lg:text-[42px] text-[25px] lg:text-start text-center text-[#fff] py-[20px] font-bold">
              {t("page3.header.text1")}
            </h1>
            <p className="text-[32px] text-[gray] py-[10px] lg:text-start text-center">
            {t("page3.header.text2")}
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
      <section className="md:w-[80%] w-[90%] m-auto py-28">
        <h1 className="text-4xl font-bold text-center">{t("page3.section1.text1")}</h1>

        <div>
          <div className="block md:flex justify-between gap-4 py-8">
            <div className="md:w-[355px] md:h-[500px] shadow-2xl flex flex-col items-center justify-start gap-8 px-3 py-8">
              <img src={analys} alt="" />
              <h1 className="text-3xl font-bold">{t("page3.section1.text2")}</h1>
              <ul className="flex flex-col ml-5 text-gray-500 list-disc">
                <li>{t("page3.section1.text3")}</li>
                <li>{t("page3.section1.text4")}</li>
                <li>{t("page3.section1.text5")}</li>
              </ul>
            </div>
            <div className="md:w-[355px] md:h-[500px] shadow-2xl flex flex-col items-center justify-start gap-8 px-3 py-8">
              <img src={analys} alt="" />
              <h1 className="text-3xl font-bold">{t("page3.section1.text6")}</h1>
              <ul className="flex flex-col ml-5 text-gray-500 list-disc">
                <li>{t("page3.section1.text7")}</li>
                <li>{t("page3.section1.text8")}</li>
                <li>{t("page3.section1.text9")}</li>
                <li>{t("page3.section1.text10")}</li>
              </ul>
            </div>
            <div className="md:w-[355px] md:h-[500px] shadow-2xl flex flex-col items-center justify-start gap-8 px-3 py-8">
              <img src={analys} alt="" />
              <h1 className="text-3xl font-bold">{t("page3.section1.text11")}</h1>
              <ul className="flex flex-col ml-5 text-gray-500 list-disc">
                <li>{t("page3.section1.text12")}</li>
                <li>{t("page3.section1.text13")}</li>
                <li>{t("page3.section1.text14")}</li>
                <li>{t("page3.section1.text15")}</li>
                <li>{t("page3.section1.text16")}</li>
                <li>{t("page3.section1.text17")}</li>
              </ul>
            </div>
          </div>
          <div className="block md:flex justify-between gap-4 py-8">
            <div className="md:w-[355px] md:h-[500px] shadow-2xl flex flex-col items-center justify-start gap-8 px-3 py-8">
              <img src={analys} alt="" />
              <h1 className="text-3xl font-bold">{t("page3.section1.text18")}</h1>
              <ul className="flex flex-col ml-5 text-gray-500 list-disc">
                <li>{t("page3.section1.text19")}</li>
                <li>{t("page3.section1.text20")}</li>
                <li>{t("page3.section1.text21")}</li>
              </ul>
            </div>
            <div className="md:w-[355px] md:h-[500px] shadow-2xl flex flex-col items-center justify-start gap-8 px-3 py-8">
              <img src={analys} alt="" />
              <h1 className="text-3xl font-bold">{t("page3.section1.text23")}</h1>
              <ul className="flex flex-col ml-5 text-gray-500 list-disc">
                <li>{t("page3.section1.text22")}</li>
                <li>{t("page3.section1.text24")}</li>
                <li>{t("page3.section1.text25")}</li>
              </ul>
            </div>
            <div className="md:w-[355px] md:h-[500px] shadow-2xl flex flex-col items-center justify-start gap-8 px-3 py-8">
              <img src={analys} alt="" />
              <h1 className="text-3xl font-bold">{t("page3.section1.text26")}</h1>
              <ul className="flex flex-col ml-5 text-gray-500 list-disc">
                <li>{t("page3.section1.text27")}</li>
                <li>{t("page3.section1.text28")}</li>
                <li>{t("page3.section1.text29")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="md:w-[80%] w-[90%] m-auto block md:flex justify-between">
        <div className="md:w-[500px] md:h-[691px]">
          <img className="" src={planee} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-center md:text-left">
          {t("page3.section2.text1")}
          </h1>

          <div className="w-full md:w-[500px] py-6 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
              <div className="flex items-center gap-3">
                <img
                  src={account}
                  alt="Account Manager"
                  className="w-10 h-10"
                />
                <p className="text-gray-500">{t("page3.section2.text2")}</p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={account}
                  alt="Account Manager"
                  className="w-10 h-10"
                />
                <p className="text-gray-500">{t("page3.section2.text3")}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
              <div className="flex items-center gap-3">
                <img
                  src={account}
                  alt="Account Manager"
                  className="w-10 h-10"
                />
                <p className="text-gray-500">{t("page3.section2.text5")}</p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={account}
                  alt="Account Manager"
                  className="w-10 h-10"
                />
                <p className="text-gray-500">{t("page3.section2.text4")}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
              <div className="flex items-center gap-3">
                <img
                  src={account}
                  alt="Account Manager"
                  className="w-10 h-10"
                />
                <p className="text-gray-500">{t("page3.section2.text5")}</p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={account}
                  alt="Account Manager"
                  className="w-10 h-10"
                />
                <p className="text-gray-500">{t("page3.section2.text6")}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
              <div className="flex items-center gap-3">
                <img
                  src={account}
                  alt="Account Manager"
                  className="w-10 h-10"
                />
                <p className="text-gray-500">{t("page3.section2.text7")}</p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={account}
                  alt="Account Manager"
                  className="w-10 h-10"
                />
                <p className="text-gray-500">{t("page3.section2.text8")}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
              <div className="flex items-center gap-3">
                <img
                  src={account}
                  alt="Account Manager"
                  className="w-10 h-10"
                />
                <p className="text-gray-500">{t("page3.section2.text9")}</p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={account}
                  alt="Account Manager"
                  className="w-10 h-10"
                />
                <p className="text-gray-500">{t("page3.section2.text10")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <h1 className="text-[42px] font-bold text-center">{t("page3.section3.text1")}</h1>
        <div className="flex w-[90%] m-auto lg:w-[90%] mt-[50px] justify-center gap-[50px] flex-col lg:flex-row">
          <aside className="lg:w-[263px] h-[229px] shadow-sm rounded-2xl text-center">
            <img src={order1} className="m-auto" alt="" />
            <p className="text-[21px] font-bold">{t("page3.section3.text1")}</p>
            <p className="text-[16px] text-[#889196]">
            {t("page3.section3.text3")}
            </p>
          </aside>
          <aside className="lg:w-[263px] h-[229px] shadow-sm rounded-2xl text-center">
            <img src={order2} className="m-auto" alt="" />
            <p className="text-[21px] font-bold">{t("page3.section3.text4")}</p>
            <p className="text-[16px] text-[#889196]">
            {t("page3.section3.text5")}
            </p>
          </aside>
          <aside className="lg:w-[263px] h-[229px] shadow-sm rounded-2xl text-center">
            <img src={order3} className="m-auto" alt="" />
            <p className="text-[21px] font-bold">{t("page3.section3.text6")}</p>
            <p className="text-[16px] text-[#889196]">
            {t("page3.section3.text7")}
            </p>
          </aside>
          <aside className="lg:w-[263px] h-[229px] shadow-sm rounded-2xl text-center">
            <img src={order4} className="m-auto" alt="" />
            <p className="text-[21px] font-bold">{t("page3.section3.text8")}</p>
            <p className="text-[16px] text-[#889196]">
            {t("page3.section3.text9")}
            </p>
          </aside>
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
    </div>
  );
};

export default Contact;
