import React from "react";
// import Logo from "https://upload.wikimedia.org/wikipedia/commons/7/70/Logo_ispgaya.png";

const Logo = "https://upload.wikimedia.org/wikipedia/commons/7/70/Logo_ispgaya.png";

const Footer = () => {
  return (
    <footer className="bg-[#8b8c89] text-[#e7ecef]">
      <div className="w-full max-w-screen-xl mx-auto pb-4 ">
        <div className="flex flex-col justify-center items-center ">
          <a
            href="https://ispgaya.pt"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img src={Logo} className="h-20 mr-3" alt="SJ Logo" />
          </a>
          <div class="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 ">
            {/* <span className="block text-md sm:text-center">
              © 2024{" "}
              <a href="https://github.com/joaocouto-ifthenpay" className="hover:underline">
                João Couto
              </a>
              . Todos os direitos reservados.
            </span> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
