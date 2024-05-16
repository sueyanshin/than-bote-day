import { Helmet } from "react-helmet-async";
import "./App.css";
import Content from "./Content";
import "./Counter";
import { Counter } from "./Counter";
import logo from "./assets/logo.png";

const structuredData = {
  "@context": "https://thanboteday.vercel.app",
  "@type": "ThanBoteDay",
  name: "၅မျိုးသမ္ဗုဒ္ဓေ",
  url: "https://thanboteday.vercel.app",
  logo: "https://thanboteday.vercel.app/logo.png",
};

function App() {
  return (
    <div className="relative h-screen  text-center mx-auto">
      <Helmet>
        <title>၅မျိုးသမ္ဗုဒ္ဓေ</title>
        <meta name="description" content="သမ္ဗုဒ္ဓေ ၅မျိုး" />
        <meta
          name="keywords"
          content="၅မျိုးသမ္ဗုဒ္ဓေ, သမ္ဗုဒ္ဓေ ၅မျိုး, thanboteday,thanboteday.vercel.app"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <nav className=" text-center mx-auto w-full bg-violet-950	 fixed z-20 top-0 start-0 border-b border-gray-600 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex">
            <img loading="lazy" src={logo} alt="Logo" className="w-8" />
            <h1 className="font-bold ps-2">၅မျိုးသမ္ဗုဒ္ဓေ</h1>
          </div>
          <a
            href="https://github.com/sueyanshin"
            target="_blank"
            className="border border-white rounded-full p-1 hover:bg-violet-800"
          >
            👨‍💻
          </a>
        </div>
      </nav>
      <Content />
      <Counter />
    </div>
  );
}

export default App;
