/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./News.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

const newsLinks = [
  {
    id: 1,
    year: 2022,
    title:
      "Interviewed and featured in the Lincoln Times News regarding the Mt. Vernon Rosenwald School excavation",
    link: "https://www.lincolntimesnews.com/news/digging-for-history-graduate-students-conduct-archeological-dig-at-mount-vernon-rosenwald-school/article_9e2e2210-6cb9-11ed-8b68-af5d1045c9ad.html",
  },
  {
    id: 2,
    year: 2021,
    title:
      "Expert Commenter, The Scientist magazine regarding article “Computed tomography study of the mummy of King Seqenenre Taa II: New insights into his violent death”",
    link: "https://www.the-scientist.com/news-opinion/scientists-reconstruct-warrior-pharaohs-murder-using-ct-scans-68463",
  },
  {
    id: 3,
    year: 2020,
    title: "Interviewed and featured by the AnthroBiology Podcast",
    link: "https://podcasts.apple.com/us/podcast/dr-sara-juengst-bioarchaeology/id1493360298?i=1000467457377",
  },
  {
    id: 4,
    year: 2020,
    title:
      "Research referenced in Smithsonian Magazine coverage of child burials from India",
    link: "https://www.sciencefocus.com/news/babies-from-ancient-ecuador-found-wearing-the-skulls-of-other-children-as-helmets/",
  },
  {
    id: 5,
    year: 2019,
    title:
      "Research on unique Ecuadorian burials ranked “second most fascinating find of 2019” by Smithsonian  Magazine",
    link: "https://www.smithsonianmag.com/history/twelve-fascinating-finds-revealed-2019-180973837/",
  },
  {
    id: 6,
    year: 2019,
    title:
      "Research on unique Ecuadorian burials ranked as one of the “Top 10 Biggest Archaeological Discoveries of 2019” by LiveScience",
    link: "https://www.livescience.com/biggest-archaeology-discoveries-2019.html",
  },
  {
    id: 7,
    year: 2019,
    title:
      "Research on unique Ecuadorian burials featured on the Washington Post",
    link: "https://www.washingtonpost.com/science/2019/11/23/infant-skeletons-wearing-helmets-other-childrens-skulls-may-have-been-sad-farewell/",
  },
  {
    id: 8,
    year: 2019,
    title:
      "Research on unique Ecuadorian burials featured in Smithsonian Magazine",
    link: "https://www.smithsonianmag.com/smart-news/remains-infants-found-wearing-helmets-made-skulls-other-children-180973608/",
  },
  {
    id: 9,
    year: 2019,
    title:
      "Research on unique Ecuadorian burials featured on BBC Science Focus",
    link: "https://www.sciencefocus.com/news/babies-from-ancient-ecuador-found-wearing-the-skulls-of-other-children-as-helmets/",
  },
  {
    id: 10,
    year: 2019,
    title:
      "Research on unique Ecuadorian burials featured on Gizmodo en Español",
    link: "https://es.gizmodo.com/nadie-sabe-por-que-estos-bebes-fueron-enterrados-usando-1839976062",
  },
  {
    id: 11,
    year: 2019,
    title:
      "Research on unique Ecuadorian burials featured in the Charlotte Observer",
    link: "https://www.charlotteobserver.com/news/state/north-carolina/article237585894.html",
  },
];

const News = () => {
  return (
    <div>
      <div className="container max-w-[1000px] mx-auto flex  justify-center  text-[#E7ECEF] text-2xl font-bold">
        <p className="pt-1 pb-3">// In the News</p>
      </div>

      
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          className=" news_container mySwiper"
        >
          {newsLinks.map(({ id, year, title, link }) => {
            return (
              <SwiperSlide className="news_item rsch_hover" key={id}>
                <a href={link} target="_blank" rel="noreferrer">
                  <h5>{title}</h5>

                  <hr className="mt-8 w-48 h-1 mx-auto rounded border-0 bg-[#A3CEF1]"></hr>
                  <small className=""> {year}</small>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      
    </div>
  );
};

export default News;
