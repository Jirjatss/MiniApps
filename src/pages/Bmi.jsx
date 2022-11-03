import React, { useEffect, useState } from "react";
import Masthead from "../components/Masthead";
import Navbar from "../layout/Navbar/Navbar";

function Bmi() {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [value, setValue] = useState("");
  const [data, setData] = useState("hidden");

  const calculate = (e) => {
    e.preventDefault();
    if (weight === null || isNaN(weight) || height === null || isNaN(height)) {
      setValue("Enter A Valid Data");
      e.target.classList.add("hidden");
      setData("");
    } else {
      const hasil = (weight / ((height * height) / 10000)).toFixed(1);
      if (hasil < 18.5) {
        setValue(`Your BMI is ${hasil} which means you are Underweight`);
      } else if (hasil > 18.5 && hasil < 25) {
        setValue(`Your BMI is ${hasil} which means you are Normal`);
      } else if (hasil >= 25 && hasil < 30) {
        setValue(`Your BMI is ${hasil} which means you are Overweight`);
      } else {
        setValue(`Your BMI is ${hasil} which means you are Obesity`);
      }
      e.target.classList.add("hidden");
      setData("");
    }
  };
  const ok = () => {
    window.location.reload();
  };

  return (
    <>
      <Navbar />

      <div className="text-black font-signika p-10 md:px-44 text-center mx-auto h-screen" id="BMI">
        <Masthead judul={"BMI Calculator"} />
        <form className="bg-[#fef5ee] px-5 md:px-20 py-10 rounded-xl border-2 border-[#9aa99a] w-full" id="form">
          <h1 className="mb-5 text-center lg:text-2xl text-base font-medium">Check Your BMI</h1>
          <h5 className="text-center lg:mb-10 mb-5 font-medium lg:text-xl text-xs">Enter your weight and height below to check your BMI result</h5>
          <div className="mb-6 mx-auto">
            <label htmlFor="weight" className="block mb-2 ml-2 lg:text-sm text-xs font-medium text-black">
              Put your weight in here (KG)
            </label>
            <input type="text" id="weight" className="bg-white border border-black text-black text-sm rounded-lg block w-full p-2.5" placeholder="67" onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div className="mb-6">
            <label htmlFor="height" className="block mb-2 ml-2 text-sm font-medium text-black">
              Put your height in here (CM)
            </label>
            <input type="text" id="height" className="bg-white border border-black text-black text-sm rounded-lg block w-full p-2.5" placeholder="67" onChange={(e) => setHeight(e.target.value)} />
          </div>

          <input id="submit" type="submit" value="Calculate BMI" className="px-5 py-2 rounded-lg block mx-auto text-black hover:text-[#AB74B9] font-semibold cursor-pointer bg-[#d4e5ce] border-2 border-black" onClick={calculate} />
          <div>
            <p className="text-center text-base font-semibold text-black mb-3">{value}</p>
          </div>
          <div id="button" className={`${data}`}>
            <button className="px-5 py-2 rounded-lg block mx-auto text-black hover:text-[#AB74B9] font-semibold cursor-pointer bg-[#d4e5ce] border-2 border-black" onClick={ok}>
              OK
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Bmi;
