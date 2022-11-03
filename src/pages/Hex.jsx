import React, { useEffect, useState } from "react";
import Masthead from "../components/Masthead";
import Navbar from "../layout/Navbar/Navbar";
import { Link } from "react-router-dom";

function Hex() {
  const [red, setRed] = useState(null);
  const [green, setGreen] = useState(null);
  const [blue, setBlue] = useState(null);
  const [hasil, setHasil] = useState("");
  const [data, setData] = useState("hidden");
  const [data1, setData1] = useState("hidden");
  const [data3, setData3] = useState("hidden");

  const convert = (e) => {
    e.preventDefault();
    if (red === null || isNaN(red) || green === null || isNaN(green) || blue === null || isNaN(blue)) {
      setHasil("Enter a valid data");
      e.target.classList.add("hidden");
      setData("");
      setData3("");
    } else if (red > 255 || green > 255 || blue > 255) {
      setHasil("Numbers cannot be above 255");
      e.target.classList.add("hidden");
      setData("");
      setData3("");
    } else {
      const merah = parseInt(red).toString(16);
      const hijau = parseInt(green).toString(16);
      const biru = parseInt(blue).toString(16);

      setHasil(`#${merah}${hijau}${biru}`);
      setData("");
      setData1("");
      e.target.classList.add("hidden");
      setData3("");
    }
  };
  const ok = () => {
    window.location.reload();
  };

  return (
    <>
      <Navbar />
      <div className="text-black font-mono p-10 md:px-44 text-center mx-auto h-screen" id="BMI">
        <Masthead judul={"Convert RGB to Hex"} />
        <form className="bg-[#fef5ee] px-5 md:px-20 py-10 rounded-xl border-2 border-[#9aa99a] w-full relative" id="form">
          <h1 className="mb-5 text-center lg:text-2xl text-base font-medium">Drop your color below</h1>
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:space-x-3">
            <div className="text-black mt-2 mb-2 text-center lg:text-start">
              <label htmlFor="r">
                <span>🔴 Red</span>
              </label>
              <br />
              <input type="text" placeholder="Type here" className="bg-white border border-black text-black text-sm rounded-lg block w-full p-2.5" maxLength={3} max="255" onChange={(e) => setRed(e.target.value)} />
            </div>
            <div className="text-black mt-2 mb-2 text-center lg:text-start">
              <label htmlFor="r">
                <span>🟢 Green</span>
              </label>
              <br />
              <input type="text" placeholder="Type here" className="bg-white border border-black text-black text-sm rounded-lg block w-full p-2.5" maxLength={3} onChange={(e) => setGreen(e.target.value)} />
            </div>
            <div className="text-black mt-2 mb-2 text-center lg:text-start">
              <label htmlFor="r">
                <span>🔵 Blue</span>
              </label>
              <br />
              <input type="text" placeholder="Type here" className="bg-white border border-black text-black text-sm rounded-lg block w-full p-2.5" maxLength={3} onChange={(e) => setBlue(e.target.value)} />
            </div>
          </div>

          <div className={`mt-6 mb-6 ${data}`}>{hasil}</div>
          <div className={`${data1} w-20 h-20 rounded-full mx-auto mb-2`} style={{ backgroundColor: `${hasil}` }}></div>
          <input id="submit" type="submit" value="Calculate BMI" className="px-5 py-2 rounded-lg block mx-auto text-black hover:text-[#AB74B9] font-semibold cursor-pointer bg-[#d4e5ce] border-2 border-black mt-6 mb-6" onClick={convert} />
          <input id="submit" type="submit" value="OK" className={`px-5 py-2 rounded-lg block mx-auto text-black hover:text-[#AB74B9] font-semibold cursor-pointer bg-[#d4e5ce] border-2 border-black mt-6 mb-6 ${data3}`} onClick={ok} />
          <p className="text-sm text-red-600 font-semibold">What does this RGB to Hex converter do? </p>
          <p className="text-xs">
            It takes input in the form of values for Red, Green and Blue ranging from 0 to 255 and then converts those values to a hexadecimal string that can be used to specify color in html/css code. Photo editing software usually
            represents color in RGB and therefore if you would like to use the colors you use in your photo editing software as the background of your html element then you will have to get the hexadecimal representation of the RGB values.
            This tool allows you to get those values.
          </p>
        </form>
      </div>
    </>
  );
}

export default Hex;
