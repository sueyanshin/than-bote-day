import "./App.css";
import Content from "./Content";
import "./Counter";
import { Counter } from "./Counter";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="relative h-screen  text-center mx-auto">
      <nav className=" text-center mx-auto w-full bg-violet-950	 fixed z-20 top-0 start-0 border-b border-gray-600 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex">
            <img src={logo} alt="Logo" className="w-8" />
            <h1 className="font-bold ps-2">၅မျိုးသမ္ဗုဒ္ဓေ</h1>
          </div>
          <button>🌙</button>
        </div>
      </nav>
      <Content />
      <Counter />
    </div>
  );
}

export default App;
