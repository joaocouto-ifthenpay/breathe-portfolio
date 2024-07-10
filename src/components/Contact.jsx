/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsGoogle } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { SiResearchgate } from "react-icons/si";
import Resume from "../assets/Juengst_CV_public.pdf";

const Contact = () => {
  return (
    <>
      {/* Contact Container */}
      <div
        name="contact"
        className="w-full h-screen bg-[#274C77]  flex justify-center items-center p-4"
      >
        {/* Contact Form */}
        <form
          action="https://getform.io/f/d62448d4-c8e1-4d6e-9921-e9506ece99b8"
          method="POST"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#A3CEF1] text-[#E7ECEF]">
              Contact
            </p>
            <p className="text-[#E7ECEF] py-4">
              // Submit the form below or shoot me an email -
              sjuengst@charlotte.edu{" "}
            </p>
          </div>
          <input
            className="p-2 bg-[#A3CEF1] rounded-md"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="my-4 p-2 bg-[#A3CEF1] rounded-md"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            className="p-2 bg-[#A3CEF1] rounded-md"
            name="message"
            rows="10"
            placeholder="Message"
            required
          ></textarea>
          <button className="text-[#E7ECEF] border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#6096BA] hover:border-[#6096BA]">
            Let's Collaborate
          </button>
        </form>
      </div>

      {/* Social Icons Md and Sm */}
      <div className="bg-[#6096BA] text-center text-[#E7ECEF] flex justify-center items-center ">
        <div className=" container pt-9 ">
          <div class=" flex justify-between bg-[#6096BA]">
            <a
              className="mr-9 hover:text-[#274C77]"
              href="https://twitter.com/JuengstExplores"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={30} />
            </a>

            <a
              className="mr-9 hover:text-[#274C77]"
              href="https://scholar.google.com/citations?user=BgXZnAcAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <BsGoogle size={28} />
            </a>

            <a
              className="mr-9 hover:text-[#274C77]"
              href=" https://www.researchgate.net/profile/Sara-Juengst"
              target="_blank"
              rel="noreferrer"
            >
              <SiResearchgate size={30} />
            </a>

            <a
              className="mr-9 hover:text-[#274C77]"
              href="https://anthropology.charlotte.edu/node/99/"
              target="_blank"
              rel="noreferrer"
            >
              <IoMdSchool size={35} />
            </a>

            <a
              className="mr-9 hover:text-[#274C77]"
              href="mailto:sjuengst@charlotte.edu"
              target="_blank"
              rel="noreferrer"
            >
              <HiOutlineMail size={35} />
            </a>

            <a
              className="mr-9 hover:text-[#274C77]"
              href={Resume}
              download
              target="_blank"
              rel="noreferrer"
            >
              <BsFillPersonLinesFill size={30} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
