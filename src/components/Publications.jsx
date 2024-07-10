/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./Publications.css";

// Publications
import doc1 from "../assets/publications/A3_Juengst2020_VITAL_TOPICS_FORUM_Cooperative_Bodies_Bi.pdf";
import doc2 from "../assets/publications/A7_Juengst_Chavez_2015_IJPP_Three_Trepanned_Skulls_from_the_Copacaba.pdf";
import doc3 from "../assets/publications/A10_Juengst_2018_BI_PowerBolivia.pdf";
import doc4 from "../assets/publications/Juengstetal_2019_LAQ_unique_infant_mortuary_ritual_at_salango_ecuador_100_bc.pdf";
import doc5 from "../assets/publications/Juengstetal2021_DietCopacabana (1).pdf";
import cv from "../assets/Juengst_CV_public.pdf";

import cover from "../assets/images/2023_1.jpg";

const pubData = [
  {
    id: 1,
    title: "Relatório Final",
    link: "https://www.google.com/",
    download: doc1,
  },
  {
    id: 2,
    title:
      "Protótipo",
    link: "https://www.google.com/",
    download: doc2,
  },
  {
    id: 3,
    title:
      "Complexity and Power: A Bioarchaeological Analysis of Socioeconomic Change on the Copacabana Peninsula, 800 BC–AD 200",
    link: "https://www.google.com/",
    download: doc3,
  },
  {
    id: 4,
    title: "Unique Infant Mortuary Ritual at Salango, Ecuador, 100 BC",
    link: "https://www.google.com/",
    download: doc4,
  },
  {
    id: 5,
    title: "The resiliency of diet on the Copacabana Peninsula, Bolivia",
    link: "https://www.google.com/",
    download: doc5,
  },
  {
    id: 6,
    title: "Download CV for full list of publications",
    link: "https://scholar.google.com/citations?user=BgXZnAcAAAAJ&hl=en",
    download: cv,
  },
];

const Publications = () => {
  const coverPhoto = {
    backgroundImage: `URL(${cover})`,
    height: "400px",
  };

  return (
    // Main Section
    <div
      name="publications"
      className="w-full bg-[#274C77] text-[#E7ECEF] p-4"
    >
      {/* Main Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        {/* Title Start */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#A3CEF1]">
            Documentação
          </p>
          <p className="py-6">Confira os documentos produzidos durante o desenvolvimento do projeto</p>
        </div>
        {/* Title End */}

        {/* Book Jumbotron */}
        {/* <div
          className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center border-solid border border-[#E7ECEF] jumbo_div"
          style={coverPhoto}
        >
          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed "
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="flex h-full items-center justify-center">
              <div className="text-white">
                <h2 className="mb-4 text-4xl font-semibold">Cooperation and Hierarchy in Ancient Bolivia</h2>
                <h4 className="mb-6 text-xl font-semibold">Building Community with the Body</h4>
                <a href="https://www.routledge.com/Cooperation-and-Hierarchy-in-Ancient-Bolivia-Building-Community-with-the/Juengst/p/book/9781032004709" target="_blank" rel="noreferrer">
                <button
                  type="button"
                  className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Shop Now
                </button>
                </a>
              </div>
            </div>
          </div>
        </div> */}
        {/* End Book Jumbotron */}

        {/* Card Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-8 flip-container">
          {/* Card Item & Mapping Start*/}
          {pubData.map(({ id, title, link, download }) => {
            return (
              // Flip Card Item
              <div key={id} class="flip-card rounded-lg">
                {/* Flip Card Inner */}
                <div class="flip-card-inner ">
                  {/* Flip Card Front */}
                  <div class="flip-card-front rounded-lg flex flex-row mx-auto items-center">
                    <h1 className="text-xl font-bold px-6 py-3">{title}</h1>
                  </div>
                  {/* End Flip Card Front */}
                  {/* Hover - Flip Card Back */}
                  <div class="flip-card-back rounded-lg">
                    {/* Flip Card Back Interior Div */}
                    <div className="pt-8 text-center flex flex-col item-center">
                      <a href={link} target="_blank" rel="noreferrer">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#E7ECEF] text-[#8B8C89] font-bold text-lg hover:text-[#274C77] ">
                          Read Now
                        </button>
                      </a>
                      <a
                        href={download}
                        download
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#E7ECEF] text-[#8B8C89] font-bold text-lg hover:text-[#274C77]">
                          Download
                        </button>
                      </a>
                    </div>
                    {/*  End interior div */}
                  </div>
                  {/* End Flip Card Back */}
                </div>
                {/* End Flip Card Inner */}
              </div>

              // End Flip Card Item
            );
          })}
          {/* End Mapping & Card Item*/}
        </div>

        {/* End Card Container */}
      </div>
      {/* End Main Container */}
    </div>
    // End Section
  );
};

export default Publications;
