import React from "react";

const About = () => {

    const authorName = "João Pedro Pinho Couto";
    const avatarSrc = "https://media.licdn.com/dms/image/D4D03AQGRFEv6nI_BDQ/profile-displayphoto-shrink_800_800/0/1709251917384?e=1726099200&v=beta&t=OP3OddLO_9UgFM-sefgMbtEW0nY__HVnYOuUBxO6u_4";
    const avatarStyle = { width: 'auto', height: '200px' };

    return (
        <div name="author" className="w-full h-screen bg-[#04705C] text-[#E7ECEF]">
            <div className="flex flex-col justify-center items-center w-full h-full">
                {/* Container */}
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-[#09C9A4]">
                            Autor
                        </p>
                    </div>
                    <div></div>
                </div>
                <a class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={avatarSrc} alt={authorName} />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{authorName}</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            É estudante do terceiro ano de Engenharia Informática no Instituto Superior Politécnico Gaya e tem três anos de experiência profissional em desenvolvimento de software.
                        </p>
                    </div>
                </a>
                {/* <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <img style={avatarStyle} src={avatarSrc} alt={authorName} />
                    <div className="sm:text-right text-4xl font-bold ">
                        <p>
                            João Pedro Pinho Couto
                        </p>
                    </div>
                    <div>
                        <p>
                            O presente projeto nasce no contexto da unidade curricular Projeto de Engenharia Informática em Contexto Empresarial em Engenharia Informática realizado pelo discente João Pedro Pinho Couto, no ano letivo de 2023/2024, ministrado na Escola Superior de Ciência e Tecnologia do ISPGaya – Instituto Superior Politécnico Gaya. O referido estágio decorreu sob orientação do Prof. Mário Santos, na qualidade de orientador interno, e do Eng.º Pedro Marques, enquanto orientador da Entidade de Acolhimento FMUP – Faculdade de Medicina da Universidade do Porto.
                        </p>
                    </div>
                </div> */}










            </div>
        </div>
    );
};

export default About;
