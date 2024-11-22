'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import InputSlider from './inputSlider';
const Pricing: React.FC = () => {
  const [pageviews, setPageviews] = useState(1000);
  const [billing, setBilling] = useState("month"); // 'monthly' or 'yearly'
  const[price,setPrice]=useState(8);
  const [yearPrice,setyearPrice]=useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const discoutPercentageoOnYearly=25;
  const calculatePrice = ()=> {
    const basePrice = price; // Monthly price for 100K pageviews
    setyearPrice(billing === "year" ? basePrice * 12 *(1- (discoutPercentageoOnYearly/100)) : basePrice)
  };
  const calculateFillPercentage = () => {
    const min = 1000;
    const max = 1000000;
    return ((pageviews - min) / (max - min)) * 100;
  };
 const handlePageviewsChange = (value: number) => {
  setPageviews(value); // Update state
  if (value <= 10000) {
    setPrice(8);
  } else if (value <= 50000) {
    setPrice(12);
  } else if (value <= 100000) {
    setPrice(16);
  } else if (value <= 500000) {
    setPrice(24);
  } else {
    setPrice(36);
  }
};
useEffect(() => {
  calculatePrice();
}, [price, billing]);

  const toggleTheme = () => {

    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    console.log(theme);
  };
  return (
< div className={`${
    theme === "light" ? "bg-white" : "bg-gray-800"
  } items-center flex justify-center`}>
<button
        onClick={toggleTheme}
        className={`absolute top-4 bg-grayish-blue z-10 right-4 bg-${
          theme === "light" ? "gray-200" : "gray-700"
        } text-${theme === "light" ? "black" : "white"} p-2 rounded-full shadow-md hover:bg-gray-300`}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
        <Image src={"/bg-pattern.svg" }  alt="Image description"
         width={1500}
        height={80} 
        className=" absolute -z-2 top-0 w-full h-[50%] content-center "
        />
        <Image src={"/pattern-circles.svg" }  alt="Image description"
        width={120}
        height={80} 
        className=" absolute  top-10 content-center "
        />
        <div  className={` min-h-screen relative flex gap-16 flex-col items-center py-12 px-6 justify-center `}>
        <div>
      <h2 className="text-2xl font-semibold text-gray-800">Simple, traffic-based pricing</h2>
      <p className="text-gray-500 mt-2">Sign-up for our 30-day trial. No credit card required.</p>
      </div>
      <div className={` ${
    theme === "light" ? "bg-white" : "bg-gray-800"
  } ${
    theme === "light" ? "text-gray-500" : "text-white"
  } z-50    rounded-lg shadow-lg mt-6 p-6 w-full max-w-md`}>
        <div className={`flex  flex-wrap-reverse justify-center   sm:justify-between items-center mb-6`}>
          <span className="">   {pageviews >= 1000000
            ? `${pageviews / 1000000}M`
            : `${pageviews / 1000}K`}{" "}
         Pageviews</span>
          <span className="text-3xl font-extrabold ml-6  ">${yearPrice.toFixed(2)}  <span className="text-xl font-medium">/ {billing}</span></span>
        </div>

        <InputSlider
        pageviews={pageviews}
        handlePageviewsChange={handlePageviewsChange}
        calculateFillPercentage={calculateFillPercentage}
      />
        <div className="flex items-center justify-center space-x-4 mt-6">
          <span className="text-sm ">Monthly Billing</span>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="hidden"
              checked={billing === "year"}
              onChange={() =>
                setBilling(billing === "month" ? "year" : "month")
              }
            />
            <span className="bg-strong-cyan w-12 h-6 flex items-center rounded-full p-1">
              <span
                className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ${
                  billing === "year" ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </span>
          </label>
          <span className="text-sm">
            Yearly Billing <span className=" p-1 rounded-2xl bg-light-grayish-red text-light-red">25% discount</span>
          </span>
        </div>
        <div className="h-[1px] bg-slate-600 m-2"></div>
       <div className="flex flex-row-reverse flex-wrap sm:justify-between justify-center items-center ">
        <button className=" ml-4 bg-dark-desaturated-blue w-40 h-10 text-white rounded-3xl hover:bg-grayish-blue">
          Start my trial
        </button>

        <ul className="text-sm  mt-4 space-y-2">
          <li><div className="flex items-center "><Image src={"/icon-check.svg" }  alt="Image description"
         width={15}
        height={10} />  Unlimited websites</div> </li>
          <li><div className="flex items-center "><Image src={"/icon-check.svg" }  alt="Image description"
         width={15}
        height={10} />  100% data ownership </div></li>
          <li><div className="flex items-center "><Image src={"/icon-check.svg" }  alt="Image description"
         width={15}
        height={10} />Email reports </div></li>
        </ul>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Pricing;
