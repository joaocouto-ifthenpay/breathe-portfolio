import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#274C77]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        {/* <p className="text-[#A3CEF1]">Hi, my name is</p> */}
        <h1 className="text-4xl sm:text-6xl font-bold text-[#E7ECEF]">
          BREATHE:
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#6096BA]">
          Dashboard para Representação do Estado de Saúde de Doentes Com Patologias Respiratórias
        </h2>
        <p className="text-[#A3CEF1] py-4 max-w-[700px]">
          Projeto de estágio da Licenciatura em Engenharia Informática, lecionado na Escola Superior de Ciência e Tecnologia do Instituto Superior Politécnico Gaya realizado pelo discente João Pedro Pinho Couto.
        </p>
        <div>
          <button className="text-[#E7ECEF] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6096BA] hover:border-[#6096BA]"><Link to="publications" smooth={true} duration={500}>

            Ver documentação do projeto</Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>

          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
