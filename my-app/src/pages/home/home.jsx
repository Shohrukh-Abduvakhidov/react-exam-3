import { useTranslation } from "react-i18next";
import "./home.css";
import soicals1 from "../../assets/socials1.png";
import soicals2 from "../../assets/socilas2.png";
import arrow from "../../assets/Subtract.png";
import laptops from "../../assets/laptops.png";
import map1 from "../../assets/map1.png";
import map2 from "../../assets/map2.png";
import map3 from "../../assets/map3.png";
import united from "../../assets/un.png";
import phone from "../../assets/phone.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import earth from "../../assets/earth.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.svg";
import icon6 from "../../assets/icon6.png";
import girle1 from "../../assets/girle1.png";
import cub from "../../assets/Polygon 19.png";
import arrow1 from "../../assets/arrow1.png";
import arrow2 from "../../assets/arrow2.png";
import arrow3 from "../../assets/arrow3.png";
import girle2 from "../../assets/girle2.png";
import slider from "../../assets/slider.png";
import human1 from "../../assets/human1.png";
import human2 from "../../assets/human2.png";
import arrowB from "../../assets/select-arrow.png"
import infp from "../../assets/information 1 (1).png"
import infor from "../../assets/group 1.png"
import cube1 from "../../assets/Polygon 19 (1).png"
import cube2 from "../../assets/Polygon 20.png"
import cube3 from "../../assets/Polygon 21.png"
import { Input } from "@mui/material";
const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <section id="back1" className="lg:w-[100%] py-[50px]">
        <div className="flex flex-col lg:flex-row gap-[30px] m-auto items-center w-[90%]">
          <aside className="lg:w-[563px]">
            <h1 className="text-[42px] lg:text-start text-center text-[#fff] py-[20px] font-bold">
              {t("Example.headerHome.text1")}
            </h1>
            <p className="text-[32px] text-[gray] py-[10px] lg:text-start text-center">
              {t("Example.headerHome.text1")}
            </p>
            <button className="bg-[#EB5F07] lg:text-start lg:pl-0 pl-[100px] text-center lg:w-auto w-full py-[10px] px-[20px] rounded-md text-[#fff] font-bold flex gap-[20px]">
              <img src={arrow} alt="" />
              GET STARTED
            </button>
            <div className="lg:flex hidden items-center gap-[40px] py-[20px]">
              <img src={soicals1} alt="" />
              <img src={soicals2} className="w-[150px]" alt="" />
            </div>
          </aside>
          <img src={laptops} alt="" />
        </div>
      </section>
      <section className="lg:w-[590px] m-auto text-center mt-[100px]">
        <h1 className="text-[#161920] text-[42px] font-bold">
          {t("Example.section1.text1")}
        </h1>
      </section>
      <section className="mt-32">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-20">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[26px] font-semibold">
              {t("Example.section1.text2")}
            </h3>
            <img src={map1} className="mt-10" />
            <p className="text-[#889196]">Amazon.com</p>
            <p className="text-[#889196]">Amazon.ca</p>
            <p className="text-[#889196]">Amazon.com.mx</p>
            <p className="text-[#889196]">Amazon.com.br</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[26px] font-semibold">
              {t("Example.section1.text3")}
            </h3>
            <img src={map2} className="mt-10" />
            <p className="text-[#889196]">Amazon.com</p>
            <p className="text-[#889196]">Amazon.ca</p>
            <p className="text-[#889196]">Amazon.com.mx</p>
            <p className="text-[#889196]">Amazon.com.br</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[26px] font-semibold">
              {t("Example.section1.text4")}
            </h3>
            <img src={map3} className="mt-10" />
            <p className="text-[#889196]">Amazon.com</p>
            <p className="text-[#889196]">Amazon.ca</p>
            <p className="text-[#889196]">Amazon.com.mx</p>
            <p className="text-[#889196]">Amazon.com.br</p>
          </div>
        </div>
        <div className="flex justify-center my-32 items-center text-center">
          <div className="flex flex-col lg:flex-row lg:items-start items-center gap-16">
            <div className="flex flex-col items-center">
              <h3 className="font-semibold  text-black text-[63px] leading-tight">
                13
              </h3>
              <p className="text-[23px] mb-10">{t("Example.section2.text1")}</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-black text-[63px] leading-tight">
                175+
              </h3>
              <p className="text-[23px] mb-10 max-w-xs">
                {t("Example.section2.text2")}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-black text-[63px] leading-tight">
                180+
              </h3>
              <p className="text-[23px] mb-10 max-w-xs">
                {t("Example.section2.text3")}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-black text-[63px] leading-tight">
                30+
              </h3>
              <p className="text-[23px] mb-10 max-w-xs">
                {t("Example.section2.text4")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="md:w-[90%] m-auto md:py-28">
        <h1 className="text-center text-4xl font-bold pb-13">
          {t("Example.section3.text")}
        </h1>
        <div class="overflow-x-auto">
          <div className="bg-gray-200 py-3">
            <p className="text-gray-600 ml-12">Selling</p>
          </div>
          <table className="min-w-full bg-white shadow-md rounded-lg hidden md:table">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 text-left">Business name</th>
                <th className="py-2 px-4 text-left">Market</th>
                <th className="py-2 px-4 text-left">Type</th>
                <th className="py-2 px-4 text-left">Account age</th>
                <th className="py-2 px-4 text-left">Reviews</th>
                <th className="py-2 px-4 text-left">Ratio</th>
                <th className="py-2 px-4 text-left">Price</th>
                <th className="py-2 px-4 text-left">Account Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 px-4 font-bold">Flagman_Shop</td>
                <td className="py-2 px-4">
                  <div className="flex items-center gap-2">
                    <img className="w-5 h-5" src={united} alt="US Flag" />
                    <p>US</p>
                  </div>
                </td>
                <td className="py-2 px-4">Pro Account</td>
                <td className="py-2 px-4">2019</td>
                <td className="py-2 px-4">6 reviews</td>
                <td className="py-2 px-4">100% positive</td>
                <td className="py-2 px-4">$1 000</td>
                <td className="py-2 px-4 text-blue-700">More Info</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold">Health Care Direct UK</td>
                <td className="py-2 px-4 ">
                  <div className="flex items-center gap-2">
                    <img className="w-5 h-5" src={united} alt="" />
                    <p>US</p>
                  </div>
                </td>
                <td className="py-2 px-4 ">Pro Account</td>
                <td className="py-2 px-4 ">2019</td>
                <td className="py-2 px-4 ">6 reviews</td>
                <td className="py-2 px-4 ">100% positive</td>
                <td className="py-2 px-4 ">$1 000</td>
                <td className="py-2 px-4  text-blue-700">More Info</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold">Flagman_Shop</td>
                <td className="py-2 px-4 ">
                  <div className="flex items-center gap-2">
                    <img className="w-5 h-5" src={united} alt="" />
                    <p>US</p>
                  </div>
                </td>
                <td className="py-2 px-4 ">Pro Account</td>
                <td className="py-2 px-4 ">2019</td>
                <td className="py-2 px-4 ">6 reviews</td>
                <td className="py-2 px-4 ">100% positive</td>
                <td className="py-2 px-4 ">$1 000</td>
                <td className="py-2 px-4  text-blue-700">More Info</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold">Flagman_Shop</td>
                <td className="py-2 px-4 ">
                  <div className="flex items-center gap-2">
                    <img className="w-5 h-5" src={united} alt="" />
                    <p>US</p>
                  </div>
                </td>
                <td className="py-2 px-4 ">Pro Account</td>
                <td className="py-2 px-4 ">2019</td>
                <td className="py-2 px-4 ">6 reviews</td>
                <td className="py-2 px-4 ">100% positive</td>
                <td className="py-2 px-4 ">$1 000</td>
                <td className="py-2 px-4  text-blue-700">More Info</td>
              </tr>

              <tr>
                <td className="py-4 px-4 font-bold">Health Care Direct UK</td>
                <td className="py-2 px-4 ">
                  <div className="flex items-center gap-2">
                    <img className="w-5 h-5" src={united} alt="" />
                    <p>US</p>
                  </div>
                </td>
                <td className="py-2 px-4 ">Pro Account</td>
                <td className="py-2 px-4 ">2019</td>
                <td className="py-2 px-4 ">6 reviews</td>
                <td className="py-2 px-4 ">100% positive</td>
                <td className="py-2 px-4 ">$1 000</td>
                <td className="py-2 px-4  text-blue-700">More Info</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold">Flagman_Shop</td>
                <td className="py-2 px-4 ">
                  <div className="flex items-center gap-2">
                    <img className="w-5 h-5" src={united} alt="" />
                    <p>US</p>
                  </div>
                </td>
                <td className="py-2 px-4 ">Pro Account</td>
                <td className="py-2 px-4 ">2019</td>
                <td className="py-2 px-4 ">6 reviews</td>
                <td className="py-2 px-4 ">98% positive</td>
                <td className="py-2 px-4 ">$1 000</td>
                <td className="py-2 px-4  text-blue-700">More Info</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold">Health Care Direct UK</td>
                <td className="py-2 px-4 ">
                  <div className="flex items-center gap-2">
                    <img className="w-5 h-5" src={united} alt="" />
                    <p>US</p>
                  </div>
                </td>
                <td className="py-2 px-4 ">Pro Account</td>
                <td className="py-2 px-4 ">2019</td>
                <td className="py-2 px-4 ">6 reviews</td>
                <td className="py-2 px-4 ">87% positive</td>
                <td className="py-2 px-4 ">$1 000</td>
                <td className="py-2 px-4  text-blue-700">More Info</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold">Flagman_Shop</td>
                <td className="py-2 px-4 ">
                  <div className="flex items-center gap-2">
                    <img className="w-5 h-5" src={united} alt="" />
                    <p>US</p>
                  </div>
                </td>
                <td className="py-2 px-4 ">Pro Account</td>
                <td className="py-2 px-4 ">2019</td>
                <td className="py-2 px-4 ">6 reviews</td>
                <td className="py-2 px-4 ">80% positive</td>
                <td className="py-2 px-4 ">$1 000</td>
                <td className="py-2 px-4  text-blue-700">More Info</td>
              </tr>
            </tbody>
          </table>

          <div className="md:hidden">
            <div className="bg-white shadow-md rounded-lg p-4 mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-gray-500">
                  <div>Business name</div>
                  <div>Market</div>
                  <div>Type</div>
                  <div>Account age</div>
                  <div>Reviews</div>
                  <div>Ratio</div>
                  <div>Price</div>
                  <div>Account Details</div>
                </div>

                <div className="text-right">
                  <div className="font-bold">Flagman_Shop</div>
                  <div className="flex justify-end items-center gap-2">
                    <img className="w-5 h-5" src={united} alt="US Flag" />
                    <p>US</p>
                  </div>
                  <div>Pro Account</div>
                  <div>2019</div>
                  <div>6 reviews</div>
                  <div>100% positive</div>
                  <div>$1 000</div>
                  <div className="text-blue-700">More Info</div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-gray-500">
                  <div>Business name</div>
                  <div>Market</div>
                  <div>Type</div>
                  <div>Account age</div>
                  <div>Reviews</div>
                  <div>Ratio</div>
                  <div>Price</div>
                  <div>Account Details</div>
                </div>

                <div className="text-right">
                  <div className="font-bold">Health Care Direct UK</div>
                  <div className="flex justify-end items-center gap-2">
                    <img className="w-5 h-5" src={united} alt="US Flag" />
                    <p>US</p>
                  </div>
                  <div>Pro Account</div>
                  <div>2019</div>
                  <div>6 reviews</div>
                  <div>100% positive</div>
                  <div>$1 000</div>
                  <div className="text-blue-700">More Info</div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-gray-500">
                  <div>Business name</div>
                  <div>Market</div>
                  <div>Type</div>
                  <div>Account age</div>
                  <div>Reviews</div>
                  <div>Ratio</div>
                  <div>Price</div>
                  <div>Account Details</div>
                </div>

                <div className="text-right">
                  <div className="font-bold">Flagman_Shop</div>
                  <div className="flex justify-end items-center gap-2">
                    <img className="w-5 h-5" src={united} alt="US Flag" />
                    <p>US</p>
                  </div>
                  <div>Pro Account</div>
                  <div>2019</div>
                  <div>6 reviews</div>
                  <div>100% positive</div>
                  <div>$1 000</div>
                  <div className="text-blue-700">More Info</div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-gray-500">
                  <div>Business name</div>
                  <div>Market</div>
                  <div>Type</div>
                  <div>Account age</div>
                  <div>Reviews</div>
                  <div>Ratio</div>
                  <div>Price</div>
                  <div>Account Details</div>
                </div>

                <div className="text-right">
                  <div className="font-bold">Health Care Direct UK</div>
                  <div className="flex justify-end items-center gap-2">
                    <img className="w-5 h-5" src={united} alt="US Flag" />
                    <p>US</p>
                  </div>
                  <div>Pro Account</div>
                  <div>2019</div>
                  <div>6 reviews</div>
                  <div>100% positive</div>
                  <div>$1 000</div>
                  <div className="text-blue-700">More Info</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-6">
          <button className="w-full md:w-[520px] border-3 border-amber-600 py-3 text-amber-600 text-center md:px-14">
            To learn more about the process click here ➤
          </button>
          <button className="w-full md:w-[520px] border-3 border-amber-600 py-3 text-amber-600 text-center md:px-14">
            Interested in Selling Account Visit page ➤
          </button>
        </div>
      </section>
      <section className="w-[90%] m-auto flex flex-col lg:flex-row ">
        <img src={phone} alt="" />
        <aside className="">
          <h1 className="text-[42px] lg:text-start text-center text-[#161920] font-bold">
            {t("Example.section4.text1")}
          </h1>
          <div className="flex items-start flex-col lg:flex-row lg:text-start text-center py-[50px] gap-[10px]">
            <div className="flex lg:m-0  m-auto gap-[20px] items-start">
              <img src={icon1} className="w-[100px] m-auto" alt="" />
            </div>
            <div className="">
              <p className="text-[32px] text-[#161920] font-bold">
              {t("Example.section4.text2")}
              </p>
              <p className="text-[21px] text-[#889196]">
              {t("Example.section4.text3")}
              </p>
            </div>
          </div>
          <div className="flex items-start flex-col lg:flex-row lg:text-start text-center py-[50px] gap-[10px]">
            <div className="flex lg:m-0  m-auto gap-[20px] items-start">
              <img src={icon2} className="w-[100px]" alt="" />
            </div>
            <div className="">
              <p className="text-[32px] text-[#161920] font-bold">
              {t("Example.section4.text4")}
              </p>
              <p className="text-[21px] text-[#889196]">
              {t("Example.section4.text5")}
              </p>
            </div>
          </div>
          <div className="flex items-start flex-col lg:flex-row lg:text-start text-center py-[50px] gap-[10px]">
            <div className="flex lg:m-0  m-auto gap-[20px] items-start">
              <img src={icon3} className="w-[100px]" alt="" />
            </div>
            <div className="">
              <p className="text-[32px] text-[#161920] font-bold">
              {t("Example.section4.text6")}
              </p>
              <p className="text-[21px] text-[#889196]">
              {t("Example.section4.text7")}
              </p>
            </div>
          </div>
        </aside>
      </section>

      <section className="w-[95%] mt-[100px] m-auto flex flex-col lg:flex-row ">
        <aside className="">
          <h1 className="text-[42px] lg:text-start text-center text-[#161920] font-bold">
          {t("Example.section5.text1")}
          </h1>
          <p className="text-[#889196] text-[32px] lg:text-start text-center">
          {t("Example.section5.text2")}
          </p>
          <div className="flex items-start flex-col lg:flex-row lg:text-start text-center py-[50px] gap-[10px]">
            <div className="flex lg:m-0  m-auto gap-[20px] items-start">
              <img src={icon4} className="w-[100px] m-auto" alt="" />
            </div>
            <div className="">
              <p className="text-[32px] text-[#161920] font-bold">
              {t("Example.section5.text3")}
              </p>
              <p className="text-[21px] text-[#889196]">
              {t("Example.section5.text4")}
              </p>
            </div>
          </div>
          <div className="flex items-start flex-col lg:flex-row lg:text-start text-center py-[50px] gap-[10px]">
            <div className="flex lg:m-0  m-auto gap-[20px] items-start">
              <img src={icon5} className="w-[100px]" alt="" />
            </div>
            <div className="">
              <p className="text-[32px] text-[#161920] font-bold">
              {t("Example.section5.text5")}
              </p>
              <p className="text-[21px] text-[#889196]">
              {t("Example.section5.text6")}
              </p>
            </div>
          </div>
          <div className="flex items-start flex-col lg:flex-row lg:text-start text-center py-[50px] gap-[10px]">
            <div className="flex lg:m-0  m-auto gap-[20px] items-start">
              <img src={icon6} className="w-[100px]" alt="" />
            </div>
            <div className="">
              <p className="text-[32px] text-[#161920] font-bold">{t("Example.section5.text7")}</p>
              <p className="text-[21px] text-[#889196] text-center">
              {t("Example.section5.text8")}
              </p>
            </div>
          </div>
        </aside>
        <img src={earth} className="lg:w-[600px]" alt="" />
      </section>
      <section className="w-[95%] m-auto flex flex-col lg:flex-row gap-[30px] justify-between items-center mt-[200px]">
        <img src={girle1} alt="" />
        <aside className="">
          <h1 className="text-[42px] text-[#161920] font-bold lg:text-start text-center">
          {t("Example.section6.text1")}
          </h1>
          <h2 className="text-[32px] text-[#161920] font-bold pt-[50px] lg:text-start text-center">
          {t("Example.section6.text2")}
          </h2>
          <p className="text-[21px] text-[#889196] py-[20px] lg:text-start text-center">
          {t("Example.section6.text3")}
          </p>
          <h2 className="text-[32px] text-[#161920] font-bold lg:text-start text-center">
          {t("Example.section6.text4")}
          </h2>
          <p className="text-[21px] text-[#889196] py-[20px] lg:text-start text-center">
          {t("Example.section6.text5")}
          </p>
        </aside>
      </section>
      <div className="lg:w-[700px] m-auto mt-[100px]">
        <h1 className="text-center text-[42px] font-bold">{t("Example.section7.text1")}</h1>
        <div className="mt-[50px] lg:w-auto w-[90%] m-auto relative">
          <img
            src={cub}
            className="absolute lg:block hidden z-[-1] top-[-50px] left-[-40px]"
            alt=""
          />
          <select
            name=""
            id=""
            className="lg:w-[700px] bg-[#fff] shadow-xl rounded-2xl py-[10px] px-[10px] w-[90%] m-auto lg:text-[30px] font-bold"
          >
            <option value="">{t("Example.section7.text2")}</option>
          </select>
          <select
            name=""
            id=""
            className="my-[20px] lg:w-[700px] lg:text-[30px] w-[90%] py-[10px] px-[10px] shadow-2xl font-bold"
          >
            <option value="">{t("Example.section7.text3")}</option>
          </select>
        </div>
      </div>
      <section className="text-center mt-[100px] py-12 px-4">
        <h2 className="text-3xl font-bold mb-8">{t("Example.section8.text1")}</h2>
        <div className="flex flex-col lg:flex-row relative items-center justify-center gap-8">
          <div className="flex flex-col items-center max-w-xs">
            <img
              src={arrow1}
              className="absolute lg:block hidden top-[15%] left-[17%]"
              alt=""
            />
            <img
              src={arrow2}
              className="absolute lg:block hidden top-[7%] left-[42%]"
              alt=""
            />
            <img
              src={arrow3}
              className="absolute top-[15%] lg:block hidden right-[18%]"
              alt=""
            />
            <div className="flex items-center justify-center w-14 h-14 bg-orange-500 text-white font-bold text-lg rounded-full border-4 border-white shadow-lg">
              1
            </div>
            <h3 className="text-lg font-semibold mt-4">{t("Example.section8.text2")}</h3>
            <p className="text-gray-600 mt-2 text-sm">
            {t("Example.section8.text3")}
            </p>
          </div>

          <div className="flex flex-col items-center max-w-xs">
            <div className="flex items-center justify-center w-14 h-14 bg-orange-500 text-white font-bold text-lg rounded-full border-4 border-white shadow-lg">
              2
            </div>
            <h3 className="text-lg font-semibold mt-4">{t("Example.section8.text5")}</h3>
            <p className="text-gray-600 mt-2 text-sm">
            {t("Example.section8.text6")}
            </p>
          </div>

          <div className="flex flex-col items-center max-w-xs">
            <div className="flex items-center justify-center w-14 h-14 bg-orange-500 text-white font-bold text-lg rounded-full border-4 border-white shadow-lg">
              3
            </div>
            <h3 className="text-lg font-semibold mt-4">{t("Example.section8.text7")}</h3>
            <p className="text-gray-600 mt-2 text-sm">
            {t("Example.section8.text8")}
            </p>
          </div>

          <div className="flex flex-col items-center max-w-xs">
            <div className="flex items-center justify-center w-14 h-14 bg-orange-500 text-white font-bold text-lg rounded-full border-4 border-white shadow-lg">
              4
            </div>
            <h3 className="text-lg font-semibold mt-4">{t("Example.section8.text9")}</h3>
            <p className="text-gray-600 mt-2 text-sm">
            {t("Example.section8.text10")}
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
              <p className="text-[16px] text-[#161920] font-bold">{t("Example.section10.text5")}</p>
            </div>
          </div>
        </aside>
            <img src={slider} className="w-[200px] m-auto mt-[50px]" alt="" />
      </section>
      <section className="relative">
        <h2 className="font-bold my-20 text-4xl text-center">FAQ</h2>
        <img src={cube1} className="absolute top-[0%] left-[60%] z-[-1]" alt="" />
        <img src={cube2} className="absolute top-[40%] right-[17%] lg:block hidden" alt="" />
        <img src={cube3} className="absolute top-[90%] z-[-1] lg:left-[25%]" alt="" />
        <div className="flex justify-between lg:w-[40%] w-[80%] mt-10 rounded-2xl items-center m-auto p-3 border bg-white border-gray-200 ">
          <div className="flex items-start gap-4 bg-[#fff]">
            <img src={infp} />
            <div>
              <p className="font-bold">{t("Example.section11.text1")}</p>
              <p className="text-sm">
              {t("Example.section11.text2")}
              </p>
            </div>
          </div>
          <img src={arrowB} />
        </div>
        <div className="flex justify-between lg:w-[40%] w-[80%] mt-10 rounded-2xl items-center m-auto p-3 border border-gray-200 ">
          <div className="flex items-start gap-4">
            <img src={infor} />
            <div>
              <p className="font-bold">{t("Example.section11.text3")}</p>
              <p className="text-sm">
              {t("Example.section11.text4")}
              </p>
            </div>
          </div>
          <img src={arrowB} />
        </div>
        <div className="flex justify-between lg:w-[40%] w-[80%] mt-10 rounded-2xl items-center m-auto p-3 border border-gray-200 ">
          <div className="flex items-start gap-4">
            <img src={infp} />
            <div>
              <p className="font-bold">{t("Example.section11.text5")}</p>
              <p className="text-sm">
              {t("Example.section11.text6")}
              </p>
            </div>
          </div>
          <img src={arrowB} />
        </div>
        <div className="flex justify-between lg:w-[40%] w-[80%] mt-10 rounded-2xl items-center m-auto p-3 border border-gray-200 ">
          <div className="flex items-start gap-4">
            <img src={infp} />
            <div>
              <p className="font-bold">{t("Example.section11.text7")}</p>
              <p className="text-sm">
              {t("Example.section11.text8")}
              </p>
            </div>
          </div>
          <img src={arrowB} />
        </div>
        <div className="flex justify-between lg:w-[40%] bg-[#fff] w-[80%] mt-10 rounded-2xl items-center m-auto p-3 border border-gray-200 ">
          <div className="flex items-start gap-4">
            <img src={infp} />
            <div>
              <p className="font-bold">{t("Example.section11.text9")}</p>
              <p className="text-sm">
              {t("Example.section11.text8")}
              </p>
            </div>
          </div>
          <img src={arrowB} />
        </div>
      </section>

    </div>
  );
};

export default Home;
