import React from "react";

const About = () => {
  return (
    <div name="project" className="w-full h-screen bg-[#04705C] text-[#E7ECEF]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* Container */}
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#09C9A4]">
              Sobre
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>
              Projeto de Engenharia Informática em Contexto Empresarial
            </p>
          </div>
          <div>
            <p>
              O presente projeto nasce no contexto da unidade curricular Projeto de Engenharia Informática em Contexto Empresarial em Engenharia Informática realizado pelo discente João Pedro Pinho Couto, no ano letivo de 2023/2024, ministrado na Escola Superior de Ciência e Tecnologia do ISPGaya – Instituto Superior Politécnico Gaya. O referido estágio decorreu sob orientação do Prof. Mário Santos, na qualidade de orientador interno, e do Eng.º Pedro Marques, enquanto orientador da Entidade de Acolhimento FMUP – Faculdade de Medicina da Universidade do Porto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
