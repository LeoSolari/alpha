import React from "react";
import ContactForm from "../components/ContactForm";
import instagram from "../assets/instagrampage.png";
import Accordion from "../components/Accordion";
import Logo from "../assets/logoalpha2.png";
import { Link } from "react-router-dom";

const Insumos = () => {
  return (
    <div className="flex justify-center bg-[#ff8925]">
      <div className="p-16 text-white  font-bold text-center bg-black w-4/5">
        <Link className="flex justify-center bg-[#ff8925] mb-12" to="/">
          <img src={Logo} alt="LogoAlfa" />
        </Link>
        <div className="">
          <p className="text-5xl pb-12">Sobre Nosotros</p>
          <Accordion />
        </div>

        <div className="pt-12 text-center">
          <p className="text-2xl p-2">¿Como puedo encontrarlos en las redes?</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/alfa.necochea/?hl=es"
            alt="instagram"
          >
            <img className="w-full h-80" src={instagram} alt="Insta" />
          </a>

          <p className="text-2xl">
            Pueden buscarnos en instagram como @alfa.necochea. O haz click en la
            imagen para ser redirigido a nuestro instagram.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default Insumos;
