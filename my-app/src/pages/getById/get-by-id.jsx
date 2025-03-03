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
  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  const i18 = i18n.language;
  const articles = [
    {
      id: "1",
      title: {
        en: "BEST CRYPTO TRADING GROUPS",
        ru: "ЛУЧШИЕ ГРУППЫ ПО КРИПТОТРЕЙДИНГУ",
        tj: "БЕҲТАРИН ГУРӮҲҲОИ СОҲИБКОРИИ КРИПТО",
      },
      author: "ALGUAZAR",
      date: {
        en: "Jan 10, 2024",
        ru: "10 января 2024",
        tj: "10 январи 2024",
      },
      image: img4,
      description: {
        en: "Trading cryptocurrencies or cryptotrading is a type of activity that is aimed at extracting profit from processes aimed at analyzing and forecasting the price of digital currencies.",
        ru: "Торговля криптовалютами или криптотрейдинг – это деятельность, направленная на получение прибыли путем анализа и прогнозирования цен на цифровые валюты.",
        tj: "Муомилоти криптовалюта ё криптотрейдинг як навъи фаъолиятест, ки барои ба даст овардани фоида тавассути таҳлил ва пешгӯии нархи асъорҳои рақамӣ равона шудааст.",
      },
    },
    {
      id: "2",
      title: {
        en: "HOW CRYPTO TRADING SERVICES WORK?",
        ru: "КАК РАБОТАЮТ СЕРВИСЫ КРИПТОТРЕЙДИНГА?",
        tj: "ХИЗМАТРАСОНИҲОИ КРИПТОТрейдинг ЧӢ ТАВР КОР МЕКУНАНД?",
      },
      author: "ALGUAZAR",
      date: {
        en: "Jan 10, 2024",
        ru: "10 января 2024",
        tj: "10 январи 2024",
      },
      image: img5,
      description: {
        en: "If you read this article, then you are interested how crypto trading works.",
        ru: "Если вы читаете эту статью, значит вас интересует, как работает криптотрейдинг.",
        tj: "Агар шумо ин мақоларо мехонед, пас шумо мехоҳед фаҳмед, ки криптотрейдинг чӣ гуна кор мекунад.",
      },
    },
    {
      id: "3",
      title: {
        en: "HOW TO EARN MONEY WITH CRYPTO TRADING ALGORITHM?",
        ru: "КАК ЗАРАБОТАТЬ НА АЛГОРИТМЕ КРИПТОТРЕЙДИНГА?",
        tj: "ЧӢ ТАВР БО АЛГОРИТМИ КРИПТОТрейдинг ДАРОМАД ГИРИФТАН МУМКИН АСТ?",
      },
      author: "ALGUAZAR",
      date: {
        en: "Jan 10, 2024",
        ru: "10 января 2024",
        tj: "10 январи 2024",
      },
      image: img6,
      description: {
        en: "If you have available funds, and you want to multiply your capital in a short time, the best opportunity for this is crypto trading.",
        ru: "Если у вас есть свободные средства и вы хотите быстро увеличить свой капитал, лучшая возможность для этого – криптотрейдинг.",
        tj: "Агар шумо маблағи дастрас дошта бошед ва хоҳед, ки сармояи худро дар муддати кӯтоҳ афзоиш диҳед, беҳтарин имконият барои ин криптотрейдинг аст.",
      },
    },
    {
      id: "4",
      title: {
        en: "BEST CRYPTO TRADING GROUPS",
        ru: "ЛУЧШИЕ ГРУППЫ ПО КРИПТОТРЕЙДИНГУ",
        tj: "БЕҲТАРИН ГУРӮҲҲОИ СОҲИБКОРИИ КРИПТО",
      },
      author: "ALGUAZAR",
      date: {
        en: "Jan 10, 2024",
        ru: "10 января 2024",
        tj: "10 январи 2024",
      },
      image: img4,
      description: {
        en: "Trading cryptocurrencies or cryptotrading is a type of activity that is aimed at extracting profit from processes aimed at analyzing and forecasting the price of digital currencies.",
        ru: "Торговля криптовалютами или криптотрейдинг – это деятельность, направленная на получение прибыли путем анализа и прогнозирования цен на цифровые валюты.",
        tj: "Муомилоти криптовалюта ё криптотрейдинг як навъи фаъолиятест, ки барои ба даст овардани фоида тавассути таҳлил ва пешгӯии нархи асъорҳои рақамӣ равона шудааст.",
      },
    },
    {
      id: "5",
      title: {
        en: "HOW CRYPTO TRADING SERVICES WORK?",
        ru: "КАК РАБОТАЮТ СЕРВИСЫ КРИПТОТРЕЙДИНГА?",
        tj: "ХИЗМАТРАСОНИҲОИ КРИПТОТрейдинг ЧӢ ТАВР КОР МЕКУНАНД?",
      },
      author: "ALGUAZAR",
      date: {
        en: "Jan 10, 2024",
        ru: "10 января 2024",
        tj: "10 январи 2024",
      },
      image: img5,
      description: {
        en: "If you read this article, then you are interested how crypto trading works.",
        ru: "Если вы читаете эту статью, значит вас интересует, как работает криптотрейдинг.",
        tj: "Агар шумо ин мақоларо мехонед, пас шумо мехоҳед фаҳмед, ки криптотрейдинг чӣ гуна кор мекунад.",
      },
    },
    {
      id: "6",
      title: {
        en: "HOW TO EARN MONEY WITH CRYPTO TRADING ALGORITHM?",
        ru: "КАК ЗАРАБОТАТЬ НА АЛГОРИТМЕ КРИПТОТРЕЙДИНГА?",
        tj: "ЧӢ ТАВР БО АЛГОРИТМИ КРИПТОТрейдинг ДАРОМАД ГИРИФТАН МУМКИН АСТ?",
      },
      author: "ALGUAZAR",
      date: {
        en: "Jan 10, 2024",
        ru: "10 января 2024",
        tj: "10 январи 2024",
      },
      image: img6,
      description: {
        en: "If you have available funds, and you want to multiply your capital in a short time, the best opportunity for this is crypto trading.",
        ru: "Если у вас есть свободные средства и вы хотите быстро увеличить свой капитал, лучшая возможность для этого – криптотрейдинг.",
        tj: "Агар шумо маблағи дастрас дошта бошед ва хоҳед, ки сармояи худро дар муддати кӯтоҳ афзоиш диҳед, беҳтарин имконият барои ин криптотрейдинг аст.",
      },
    },
    {
      id: "10",
      title: {
        en: "HOW CAN BLOCKCHAIN BE USED FOR OWNERSHIP?",
        ru: "КАК БЛОКЧЕЙН МОЖЕТ ИСПОЛЬЗОВАТЬСЯ ДЛЯ СОБСТВЕННОСТИ?",
        tj: "БЛОКЧЕЙН ЧӢ ТАВР ДАР СОҲАИ СОҲИБИЯТ ИСТИФОДА ШУДА МЕТАВОНАД?",
      },
      author: "ALGUAZAR",
      date: {
        en: "Jan 8, 2024",
        ru: "8 января 2024",
        tj: "8 январи 2024",
      },
      image: img7,
      description: {
        en: "The Blockchain system makes a way of payment faster, safer and available, in conclusion it is becoming more widespread technology of making deals between many companies.",
        ru: "Система блокчейн делает платежи быстрее, безопаснее и доступнее. В итоге, она становится более распространенной технологией заключения сделок между компаниями.",
        tj: "Системаи блокчейн пардохтҳоро тезтар, бехатартар ва дастрастар мекунад. Дар натиҷа, он ҳамчун як технология барои бастани созишномаҳо байни ширкатҳои зиёд маъмул мешавад.",
      },
    },
    {
      id: "11",
      title: {
        en: "HOW DOES BLOCKCHAIN INCREASE TRANSPARENCY?",
        ru: "КАК БЛОКЧЕЙН ПОВЫШАЕТ ПРОЗРАЧНОСТЬ?",
        tj: "БЛОКЧЕЙН ЧӢ ТАВР ШАФФОФИЯТРО АФЗОИШ МЕДИҲАД?",
      },
      author: "ALGUAZAR",
      date: {
        en: "Jan 8, 2024",
        ru: "8 января 2024",
        tj: "8 январи 2024",
      },
      image: img8,
      description: {
        en: "Blockchain can be an effective solution to the problem of trust and verification. At its core, it is an independent register of digital events, which can only be changed by agreement of all participants.",
        ru: "Блокчейн может быть эффективным решением проблемы доверия и проверки. По сути, это независимый реестр цифровых событий, который можно изменить только по согласию всех участников.",
        tj: "Блокчейн метавонад як роҳи самараноки ҳалли мушкилоти эътимод ва тасдиқ бошад. Дар асл, он як феҳристи мустақили рӯйдодҳои рақамӣ мебошад, ки танҳо бо мувофиқаи ҳамаи иштирокчиён тағйир дода мешавад.",
      },
    },
    {
      id: "12",
      title: {
        en: "CRYPTO MINING: WHAT IS IT?",
        ru: "КРИПТО МАЙНИНГ: ЧТО ЭТО?",
        tj: "МАЙНИНГИ КРИПТО: ИН ЧИСТ?",
      },
      author: "ALGUAZAR",
      date: {
        en: "Jan 8, 2024",
        ru: "8 января 2024",
        tj: "8 январи 2024",
      },
      image: img9,
      description: {
        en: "Crypto-currencies have recently attracted a lot of crypto traders and crypto-investors – both experienced and quite beginners.",
        ru: "Криптовалюты в последнее время привлекли множество криптотрейдеров и криптоинвесторов – как опытных, так и новичков.",
        tj: "Дар солҳои охир, криптовалютҳо таваҷҷӯҳи бисёре аз криптотрейдерҳо ва криптоинвесторҳоро ҷалб карданд – ҳам касбиро ва ҳам шурӯъкунандагонро.",
      },
    },
  ];
  const back = () => window.history.back();
  const [cards, setCards] = useState(articles);
  return (
    <>
      <h1
        onClick={back}
        className="text-[50px] font-bold cursor-pointer ml-[50px]"
      >
        ←
      </h1>
      {cards.find((card) => card.id === id) ? (
        <div>
          <div className="flex flex-col items-center">
            <h1 className="text-[#222F3E] text-4xl font-bold">
              {cards.find((card) => card.id === id).title[i18]}
            </h1>
            <p className="text-[#222F3E] text-xl font-normal">
              {cards.find((card) => card.id === id).author}
            </p>
            <p className="text-[#222F3E] text-xl font-normal">
              {cards.find((card) => card.id === id).date[i18]}
            </p>
            <img src={cards.find((card) => card.id === id).image} alt="img" />
            <p className="text-[#222F3E] text-xl w-[80%] m-auto text-center font-normal">
              {cards.find((card) => card.id === id).description[i18]}
            </p>
            <p className="text-[#222F3E] text-xl w-[80%] m-auto font-bold mt-[10px]">
              {cards.find((card) => card.id === id).title[i18]}
            </p>
          </div>
        </div>
      ) : (
        <div>
          <h1>{t("Example.getbyid.text1")}</h1>
        </div>
      )}
      <div className="w-[80%] m-auto">
        <h1 className="text-[#889196] mt-[20px] text-[21px]">
          {t("get.text1")}
        </h1>
      </div>
    </>
  );
};

export default GetById;
