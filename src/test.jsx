import { useState } from "react";

const Content = () => {
  const data = [
    {
      title: "အ​ရှေ့ကျွန်းသ​မ္ဗု​ဒ္ဓေဂါထာတော်",

      content: [
        "သမ္ဗု​ဒ္ဓေ အဋ္ဌဝီသဥ္စ ၊ သဗ္ဗ​တေဇံ သဗ္ဗဂုဏံ ။",
        "သမ်‌ဗုတ်ဒေ အက်ထဝီသင်စ ၊ သပ်ဗတေဇံ သပ်ဗဂုဏံ ။",
        "သဗ္ဗသုခံ လဘတုမေ ၊ ဆရဝီ ဆာရံ ဆရီစ ဆာယံ ။",
        "သပ်ဗသုခံ လဘတုမေ ၊ ဆာရဝီ ဆာရန် ဆရီစ ဆာယံ ။ ",
        "ပဉ္စဗုဒ္ဓါ မဟာတေဇံ ၊ သဗ္ဗေညုတ ဉာဏဝရံ ။",
        "ပင်စဗုတ်ဓမဟာတေဇံ ၊ သပ်ဗေညုတ ဉာဏဝရံ ။ ",
        "သဗ္ဗသတ္တရု သဗ္ဗဘယံ ၊ ဝိနဿန္တု အသေ-သတော ။",
        "သပ်ဗသတ်တရု သပ်ဗဘယံ ၊ ဝိနတ်သန်တု အသေ-သတော ။ ",
      ],
    },

    {
      title: "အနောက်ကျွန်းသမ္ဗုဒ္ဓေဂါထာတော်",
      content: [
        "သမ္ဗုဒ္ဓေ အဌဝီသဉ္စ ၊ ဒွါဝီသဉ္စ ဣမေဗုဒ္ဓါ။",
        "သမ်ဗုတ်ဓေ အက်ထဝီသင်စ ၊ ဒွါဝီသင်စ ဣမေဗုဒ္ဓါ ",
        "ဧကတိံသ သဗ္ဗေဗုဒ္ဓါ ၊ ဒွတ္တိံသဉ္စ မဟာဗုဒ္ဓေါ ။",
        "အေကတိန်သ သတ်ဗေဗုတ်ဓါ ၊ ဒွတ်တိန်သစ မဟာဗုတ်ဓေါ",
        "ပဉ္စဝီသာ ဗုဒ္ဓါနတ္တိ ၊ တတ္တိံသ ဗုဒ္ဓဘာဝနာ ။",
        "ပင်စဝီသာဗုတ်ဓါနတ်တိ ၊ တစ်တိန်သဗုဒ္ဓဘာဝနာ",
        "ဧတေန ဗုဒ္ဓဂုဏေန ၊ တေသံ ဓမ္မဉ္စ သံဃဉ္စ ",
        "အေတေန ဗုတ်ဓဂုနေန ၊ တေတံ ဓမ်မင်စ သံဃင်စ",
        "အာဒရေန နမာမဟံ",
        "အာဒရေန နမာမဟံ ",
        "နမက္ကာရာ နုဘာဝေန ၊ ဟိတွာ သဗ္ဗေ ဥပဒ္ဒဝေ",
        "နမက်ကာရာနုဘာဝေန ၊ ဟိတ်တဝါ သဗ်ဗေ အုပဒ်ဒဝေ ။",
        "အနေကအန္တရာယာပိ ၊ ဝိနဿန္တု အသေသတော ။",
        "အနေက အန်တရာယာပိ ဝိနတ်သန်တု အသေသတော ။။",
      ],
    },
    {
      title: "တောင်ကျွန်းသမ္ဗုဒ္ဓေဂါထာတော်",
      content: [
        "သမ္ဗုဒ္ဓေ အဌဝီသဉ္စ ၊ ဒွါဒသဉ္စ သဟဿကေ ။",
        "သမ်ဗုတ်ဒေ အတ်ထဝီသင်စ ၊ ဒွါဒသင်စ သဟတ်သကေ",
        "ပဉ္စသတ သဟဿာနိ ၊ နမာမိ သိရသာမဟံ ။",
        "ပင်စသတ သဟတ်သာနိ ၊ နမာမိ သိရသာမဟံ ",
        "အက်ပကာ ဝါလုကာ ဂင်္ဂါ ၊ အနတ္တာ နိဗ္ဗုတာ ဇိနာ",
        "အပ်ပကာ ဝါလုကာ ဂင်ဂါ ၊ အနန်တာ နိတ်ဗုတာ ဇိနာ",
        "တေတံ ဓမ္မဉ္စ သံဃဉ္စ ၊ အာဒရေန နမာမဟံ",
        "တေတံ ဓမ်မင်စ သံဃင်စ ၊ အာဒရေန နမာမဟံ",
        "နမက္ကာရာ နုဘာဝေန ၊ ဟိတွာ သဗ္ဗေ ဥပဒ္ဒဝေ",
        "နမက်ကာရာ နုဘာဝေန ၊ ဟိတ်တွာ သဗ်ဗေ ဥပတ်ဒဝေ ",
        "အနေကအန္တရာယာပိ ၊ ဝိနဿန္တု အသေသတော ။",
        "အနေက အန်တရာယာပိ ဝိနတ်သန်တု အသေသတော ။။",
      ],
    },
    {
      title: "မြောက်ကျွန်းသမ္ဗုဒ္ဓေဂါထာတော်",
      content: [
        "သမ္ဗု​​ဒ္ဓေ အဋ္ဌဝီသဉ္စ ၊ ပဉ္စ သတ သဟဿာနိ။",
        "သမ်ဗုတ်ဒေ အတ်ထဝီသင်စ ၊ ပဉ္စသတ သဟဿာနိ",
        "ဒွါဒသဉ္စ သဟဿ​ကေ၊ ဂင်္ဂါယံ ဝါလုကာ စု​ဏ္ဏေ။",
        "ဒွါဒသင်စ သဟတ်သကေ၊ ဂင်ဂါယံ ဝါလုကာ စုန်နေ",
        "ပရာ​ဇေတွာ မဟာဖု​လ္လေ ၊ နမာမိ သိရသာမဟံ ။",
        "ပရာဇေတ်တဝါ မဟာဖု​န်လေ ၊ နမာမိ သိရသာမဟံ ။ ",
        "တေသံ ဓမ္မဉ္စ သံဃဉ္စ၊ အာဒ​ရေန နမာမဟံ။",
        "တေတံ ဓမ်မင်စ သံဃင်စ ၊ အာဒရေန နမာမဟံ",
        "နမက္ကာရာ နုဘာ​ဝေန၊ ဟိတွာ သ​ဗ္ဗေ ဥပ​ဒ္ဒ​ဝေ။",
        "နမက်ကာရာ နုဘာဝေန ၊ ဟိတ်တွာ သဗ်ဗေ ဥပတ်ဒဝေ ",
        "အ​နေက အန္တရာယာပိ၊ ဝိနဿန္တု အ​သေသ​တော ။",
        "အနေက အန်တရာယာပိ ဝိနတ်သန်တု အသေသတော ။။",
      ],
    },
    {
      title: "အောင်သမ္ဗုဒ္ဓေဂါထာတော်",
      content: [
        "သမ္ဗုဒ္ဓေ အဌဝီသတိ၊ မမ ဂစ္ဆတိ ပုရတော။",
        "သမ်ဗုတ်ဒေ အတ်ထဝီသတိ၊ မမ ဂစ်စတိ ပုရတော။",
        "ပဉ္စဗုဒ္ဓါ မဟာတေဇော၊ မမ သိသေနိ သေသတိ။",
        "ပဉ်စဗုတ်ဓါ မဟာတေဇော၊ မမ သိသေနိ သေသတိ။",

        "ဒိဗ္ဗတီတံ မာရက္ခန္တု၊ မေဇယမင်္ဂလံ၊ အဂ္ဂံ။",
        "ဒိတ်ဗတီတံ မာရက်ခန်တု၊ မေဇယမင်ဂလံ၊ အက်ဂံ။",
        "သဗ္ဗေပိ မေ နမဿာမိ၊ ဂုဏေ အာပတ္တိ ပုဂ္ဂလေ။ ",
        "သဗ်ဗေပိ မေ နမတ်သာမိ၊ ဂုဏေ အာပတ်တိ ပုတ်ဂလေ။ ",

        "အရိယာနဉ္စ သဗ္ဗေသံ၊ သာဝကာနဉ္စ သဗ္ဗသော။",
        "အရိယာနင်စ သတ်ဗေသံ၊ သာဝကာနင်စ သဗ်ဗသော။",
      ],
    },
  ];

  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  const handleNext = () => {
    setCurrentContentIndex((prevIndex) => {
      return prevIndex < 4 ? prevIndex + 1 : prevIndex;
      //   console.log(prevIndex);
      //   setCurrentContentIndex((prevIndex) => (prevIndex + 1) % data.length);
    });
  };

  const handlePrevious = () => {
    setCurrentContentIndex((prevIndex) => {
      return prevIndex > 0 ? prevIndex - 1 : prevIndex;
    });
  };
  return (
    <div className="sm:w-3/4 fixed mt-14">
      <h2 className="font-bold text-yellow-600 sm:text-4xl sm:py-10 py-3">
        {data[currentContentIndex].title}
      </h2>

      <div className="sm:text-3xl">
        {data[currentContentIndex].content.map((item, index) => {
          return (
            <p
              key={item}
              className={index % 2 !== 0 ? "sm:text-lg sm:pb-2" : "sm:text-3xl"}
            >
              {item}
            </p>
          );
        })}
      </div>

      <div className="flex justify-between mx-4 ">
        <button
          className="border border-white p-1 rounded shadow-lg  hover:bg-violet-900"
          onClick={handlePrevious}
        >
          &#8592;Previous
        </button>
        <button
          className="border border-white p-1 rounded shadow-lg hover:bg-violet-900"
          onClick={handleNext}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default Content;