import { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount !== null ? JSON.parse(savedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);
  return (
    <div className="row  fixed sm:w-1/4 bottom-0 end-0 w-full mx-auto text-center py-4 h-1/4 sm:h-screen ">
      <p className="text-5xl sm:mt-52 sm:mb-10">{count}</p>

      <button
        className="bg-red-500 hover:bg-red-300 shadow-lg rounded-full p-5 m-5"
        onClick={() => {
          setCount(0);
        }}
      >
        &#8635;
      </button>

      <button
        className="bg-green-600 shadow-lg hover:bg-green-400 font-bold text-white text-2xl w-20 h-20  rounded-full border border-yellow-700"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};
