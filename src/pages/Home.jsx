import React from "react";

import Navbar from "../layout/Navbar/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <div className="hero min-h-screen text-black">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6 text-xl">Welcome to My MiniApps</p>
            <div className="grid grid-cols-2 lg:space-x-3">
              <Link to="/bmi" className="px-5 py-2 rounded-lg block mx-auto text-black hover:text-[#AB74B9] font-semibold cursor-pointer bg-[#d4e5ce] border-2 border-black">
                BMI Calculator
              </Link>
              <Link to="/hex" className="px-5 py-2 rounded-lg block mx-auto text-black hover:text-[#AB74B9] font-semibold cursor-pointer bg-[#d4e5ce] border-2 border-black">
                Convert RGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
