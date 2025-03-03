import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/logo (10).png";
import burger from "../assets/burger.png";
import logoFoot from "../assets/logo-market.png";
import icons from "../assets/icons.png";
import icons2 from "../assets/cartIcons.png";

const Layout = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState(i18n.language);
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  useEffect(() => {
    setActiveLang(i18n.language);
  }, [i18n.language]);

  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
    setActiveLang(lang);
  }
  const handleChange = (event) => {
    navigate(event.target.value);
    closeModal()
  };

  return (
    <div>
      <header className="flex text-[#fff] text-center bg-[#222F3E] py-[20px] gap-[30px]">
        <nav className="w-[90%] m-auto flex items-center justify-between">
          <img src={logo} alt="Logo" />
          <ul className="gap-[50px] lg:flex items-center hidden">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#EB6108] border-b-[2px]" : "text-[#fff]"
              }
            >
              {t("Example.navbar.text1")}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-[#EB6108] border-b-[2px]" : "text-[#fff]"
              }
            >
              {t("Example.navbar.text2")}
            </NavLink>
            <select className="bg-gray-800 text-white" onChange={handleChange}>
              <option value="">{t("Example.navbar.text3")}</option>
              <option value="/contact">Amazon Complex</option>
              <option value="/contact2">Utility Bills</option>
            </select>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-[#EB6108] border-b-[2px]" : "text-[#fff]"
              }
            >
              {t("Example.navbar.text4")}
            </NavLink>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive ? "text-[#EB6108] border-b-[2px]" : "text-[#fff]"
              }
            >
              {t("Example.navbar.text5")}
            </NavLink>
            <div className="flex gap-[10px] items-center">
              <button
                className={`w-[35px] h-[35px] rounded-full border-2 ${
                  activeLang === "en"
                    ? "border-orange-500 text-orange-500 font-bold"
                    : "border-gray-500 text-gray-400"
                }`}
                onClick={() => TranslateClick("en")}
              >
                En
              </button>
              <button
                className={`w-[35px] h-[35px] rounded-full border-2 ${
                  activeLang === "ru"
                    ? "border-orange-500 text-orange-500 font-bold"
                    : "border-gray-500 text-gray-400"
                }`}
                onClick={() => TranslateClick("ru")}
              >
                Ru
              </button>
              <button
                className={`w-[35px] h-[35px] rounded-full border-2 ${
                  activeLang === "tj"
                    ? "border-orange-500 text-orange-500 font-bold"
                    : "border-gray-500 text-gray-400"
                }`}
                onClick={() => TranslateClick("tj")}
              >
                TJ
              </button>
            </div>
          </ul>
          <img
            src={burger}
            onClick={openModal}
            className="block lg:hidden"
            alt="Menu"
          />
        </nav>
        {open && (
          <div className="h-[100vh] w-[300px] bg-gray-800 fixed py-[30px] top-0 right-[0%]">
            <ul className="gap-[50px] flex items-center flex-col">
              <button className="text-[#fff] text-[30px] font-bold" onClick={closeModal}>X</button>
              <NavLink
              onClick={closeModal}
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#EB6108] border-b-[2px]" : "text-[#fff]"
                }
              >
                {t("Example.navbar.text1")}
              </NavLink>
              <NavLink
              onClick={closeModal}
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-[#EB6108] border-b-[2px]" : "text-[#fff]"
                }
              >
                {t("Example.navbar.text2")}
              </NavLink>
              <select className="bg-gray-800 text-white" onChange={handleChange}>
                <option value="">{t("Example.navbar.text3")}</option>
                <option value="/contact">Amazon Complex</option>
                <option value="/contact2">Utility Bills</option>
              </select>

              <NavLink
              onClick={closeModal}
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-[#EB6108] border-b-[2px]" : "text-[#fff]"
                }
              >
                {t("Example.navbar.text4")}
              </NavLink>
              <NavLink
              onClick={closeModal}
                to="/search"
                className={({ isActive }) =>
                  isActive ? "text-[#EB6108] border-b-[2px]" : "text-[#fff]"
                }
              >
                {t("Example.navbar.text5")}
              </NavLink>
              <div className="flex gap-[10px] items-center">
                <button
                  className={`w-[35px] h-[35px] rounded-full border-2 ${
                    activeLang === "en"
                      ? "border-orange-500 text-orange-500 font-bold"
                      : "border-gray-500 text-gray-400"
                  }`}
                  onClick={() => TranslateClick("en")}
                >
                  En
                </button>
                <button
                  className={`w-[35px] h-[35px] rounded-full border-2 ${
                    activeLang === "ru"
                      ? "border-orange-500 text-orange-500 font-bold"
                      : "border-gray-500 text-gray-400"
                  }`}
                  onClick={() => TranslateClick("ru")}
                >
                  Ru
                </button>
                <button
                  className={`w-[35px] h-[35px] rounded-full border-2 ${
                    activeLang === "tj"
                      ? "border-orange-500 text-orange-500 font-bold"
                      : "border-gray-500 text-gray-400"
                  }`}
                  onClick={() => TranslateClick("tj")}
                >
                  TJ
                </button>
              </div>
            </ul>
          </div>
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="mt-[100px] pb-[50px]">
        <div className="bg-[#161920] w-full py-[15px]">
          <p className="text-[#fff] text-center text-[22px] font-bold">
            {t("Example.footer.text1")}
          </p>
        </div>
        <section className="w-[90%] flex-col lg:flex-row lg:text-start text-center m-auto flex mt-[40px] gap-[70px] justify-center items-center">
          <aside className="">
            <img src={logoFoot} alt="" />
            <p className="text-[16px] font-bold py-[5px] pt-[10px]">
              {t("Example.footer.text2")}
            </p>
            <p className="text-[16px] font-bold py-[5px]">
              {t("Example.footer.text3")}
            </p>
            <p className="text-[16px] font-bold py-[5px]">
              {t("Example.footer.text4")}
            </p>
            <p className="text-[16px] font-bold py-[5px]">
              {t("Example.footer.text5")}
            </p>
          </aside>
          <aside className="">
            <p className="text-[22px] font-bold py-[10px]">
              {t("Example.footer.text6")}
            </p>
            <p className="text-[16px] text-[#889196] pb-[20px] font-bold">
              support@amaz.markets
            </p>
            <p className="text-[22px] font-bold">{t("Example.footer.text7")}</p>
            <img src={icons} className="lg:w-[300px]" alt="" />
          </aside>
          <aside className="">
            <p className="text-[16px] font-bold py-[5px]">
              {t("Example.footer.text8")}
            </p>
            <div className="flex lg:gap-0 gap-[20px] flex-col lg:flex-row py-[20px]">
              <input
                type="text"
                placeholder="Enter your email to stay updated"
                className="w-full border-[1px] border-[gray] py-[10px] px-[10px] lg:w-[200px]"
              />
              <button className="w-full lg:w-[100px] bg-[#ED7212] text-[#fff] rounded-r-md">
                Submit
              </button>
            </div>
            <img src={icons2} alt="" />
          </aside>
        </section>
      </footer>
    </div>
  );
};

export default Layout;
