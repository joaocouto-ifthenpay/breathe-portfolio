/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

// Images import
import Bolivia from "../assets/images/BoliviaCover.jpg"
import Ecuador from "../assets/images/EcuadorDig.jpg"
import Cedar from "../assets/images/CedarGrove.jpg"

const Research = () => {
  return (
    <div
      name="research"
      className="w-full h-50% bg-[#274C77] text-[#E7ECEF]"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto rounded-md p-4 flex flex-col justify-center w-full h-full">
        <div className="pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-[#A3CEF1]">
            Research
          </p>
          <p className="py-4">
            // These are current research projects I'm working on
          </p>
        </div>
        {/* Research Container */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center p-8 ">
          <div className="shadow-md shadow-[#040c16] bg-[#6096BA] rsch_hover rounded-md duration-300">
            <a href="https://www.utrgv.edu/parcc/index.htm" target="_blank" rel="noreferrer">
              <img className="w-50 mx-auto rounded-t-md hover:rounded-t-2xl duration-300" src={Ecuador} alt="Ecador Field Work"></img>
              <p className="my-4">Proyecto Arqueológico de los Ríos Culebra-Colín (PARCC)</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] bg-[#6096BA] rsch_hover rounded-md duration-300">
            <a href="https://caprileslab.la.psu.edu/research/emergence-of-social-inequality-in-the-eastern-andes/" target="_blank" rel="noreferrer">
              <img className="w-50 mx-auto rounded-t-md hover:rounded-t-2xl duration-300" src={Bolivia} alt="Bolivia Field Work"></img>
              <p className="my-4">Emergence of Social Inequality in the Eastern Andes</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16]  bg-[#6096BA] rsch_hover rounded-md duration-300">
            <a href="https://savecedargrove.org/" target="_blank" rel="noreferrer">
              <img className="w-50 mx-auto rounded-t-md hover:rounded-t-2xl duration-300" src={Cedar} alt="Cedar Grove Field Work"></img>
              <p className="my-4">Save Cedar Grove Cemetery</p>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Research;
