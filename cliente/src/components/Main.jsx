import React from "react";
import { Link } from "react-router-dom";
//Imagenes
import womandirections from "../assets/womandirections.png";
import inventario from "../assets/inventario.png";
import estudio from "../assets/estudio.png";
import ramacaja from "../assets/ramacaja.png";
import gotbanner from "../assets/gotbanner.png";

import lemoncard from "../assets/lemoncard.png";
import visa from "../assets/visa.png";
import mercadopago from "../assets/Mercadopago.png";
import mastercard from "../assets/mastercard.png";
import mascultura from "../assets/mascultura.png";
import cuentadni from "../assets/cuentadni.png";
import cabal from "../assets/cabal.png";
import credicoop from "../assets/credicoop.png";
import bbva from "../assets/bbva.png";
import galicia from "../assets/galicia.png";
import bancoprovincia from "../assets/bancoprovincia.png";
import macro from "../assets/macro.png";
//Iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingHeart,
  faHandshakeAlt,
  faBox,
  faPhone,
  faHouse,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <div>
      <div className="pt-20 bg-[#ff8925] flex justify-center">
        <div className="flex justify-center  bg-black w-4/5 pt-8 md:hidden  md:pt-0">
          <img
            src={estudio}
            alt="AlfaBanner"
            className="w-4/5 md:w-3/5 lg:w-11/12"
          />
        </div>
        <div className="md:flex justify-center bg-black w-4/5 pt-8 hidden">
          <img
            src={gotbanner}
            alt="AlfaBanner"
            className="w-4/5 md:w-3/5 lg:w-11/12"
          />
        </div>
      </div>
      <div className=" bg-[#ff8925] flex justify-center">
        <div className="flex justify-center bg-black w-4/5 pt-8 md:pt-0">
          <p className="text-white p-4 text-center w-3/4 md:w-1/2">
            Bienvenidos a nuestra pagina web, acá podras ver nuestro inventario
            y todo lo que podemos ofrecerte en nuestro local. Tabien puedes
            contactarnos y consultar por los productos en los cuales estas
            interesado.
          </p>
        </div>
      </div>
      <div className="flex justify-center text-white bg-[#ff8925] text-center ">
        <div className="w-4/5 bg-black flex flex-col lg:flex-row justify-around  pt-4  items-center ">
          <div className=" w-4/5 md:w-3/5 lg:w-3/12 my-4">
            <a
              target="_blank"
              href="https://www.google.com.ar/maps/place/Av.+59+2955,+B7630DYP+Necochea,+Provincia+de+Buenos+Aires/@-38.5518965,-58.7453749,17z/data=!3m1!4b1!4m5!3m4!1s0x958fbd64a7442491:0x2d95da8c1351d970!8m2!3d-38.5519007!4d-58.7431862"
              rel="noreferrer"
            >
              Haz click aquí para ver buscar en maps
            </a>
            <a
              target="_blank"
              href="https://www.google.com.ar/maps/place/Av.+59+2955,+B7630DYP+Necochea,+Provincia+de+Buenos+Aires/@-38.5518965,-58.7453749,17z/data=!3m1!4b1!4m5!3m4!1s0x958fbd64a7442491:0x2d95da8c1351d970!8m2!3d-38.5519007!4d-58.7431862"
              rel="noreferrer"
            >
              <img
                className="w-full h-52 opacity-80 hover:opacity-60 duration-300"
                src={womandirections}
                alt="Como llegar"
              />
            </a>
          </div>
          <div className="w-4/5 md:w-3/5 lg:w-3/12 my-4 ">
            <Link to="/inventario">
              Haz click aquí para ver nuestro inventario
            </Link>
            <Link to="/inventario">
              <img
                src={inventario}
                alt="Inventario"
                className="w-full h-52 hover:opacity-70 duration-300"
              />
            </Link>
          </div>
          <div className="w-4/5 md:w-3/5 lg:w-3/12 my-4">
            <Link to="/insumos">
              Haz click aquí para ver preguntas frecuentes
            </Link>
            <Link to="/insumos">
              <img
                className="w-full h-52 hover:opacity-70 duration-300"
                src={ramacaja}
                alt="Sobre nosotros"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#ff8925] hidden xl:flex justify-center">
        <div className="bg-black w-4/5  h-48 flex justify-around text-white ">
          <div className="pt-6 w-1/3">
            <h1 className="text-2xl pl-4 items-center flex justify-center">
              <FontAwesomeIcon className="pr-1 " icon={faHandshakeAlt} />
              Retiro en el local
            </h1>
            <p className="text-sm p-4 text-center">
              Pasate por nuestro negocio y recibe la atencion personalizada de
              nuestros mejores profesionales.
            </p>
          </div>
          <div className=" pt-6 w-1/3">
            <h1 className="text-2xl pl-4 items-center flex justify-center">
              <FontAwesomeIcon className="pr-1" icon={faBox} />
              La mejor calidad
            </h1>
            <p className="text-sm p-4 text-center">
              Revisa nuestros productos y encontra lo que necesitas!
            </p>
          </div>
          <div className="pt-6 w-1/3">
            <h1 className="text-2xl pl-4 items-center flex justify-center">
              <FontAwesomeIcon className="pr-1" icon={faHandHoldingHeart} />
              Aprende mas sobre Alfa
            </h1>
            <p className="text-sm p-4 text-center">
              Aprende mas sobre nosotros y descubre que podemos ofrecer
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#ff8925] text-white flex justify-center 4/5">
        <div className="flex bg-gray-800 justify-around px-8 w-4/5 py-12">
          <div>
            <div>
              <a
                href="https://www.instagram.com/alfa.necochea/?hl=es"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center"
              >
                <FontAwesomeIcon
                  className="h-8 w-h8 md:h-12  md:w-12 lg:w-16 lg:h-16"
                  icon={faCamera}
                />
              </a>

              <p className="text-center pt-2 text-sm md:text-xl md:text-md flex">
                @alfa.necochea
              </p>
            </div>
          </div>
          <div>
            <p className="flex justify-center">
              <FontAwesomeIcon
                className="h-8 w-h8 md:h-12  md:w-12 lg:w-16 lg:h-16"
                icon={faHouse}
              />
            </p>

            <p className="text-center pt-2 text-sm md:text-xl md:text-md flex">
              Av.59 2455
            </p>
          </div>

          <div>
            <p className="flex justify-center">
              <FontAwesomeIcon
                className="h-8 w-h8 md:h-12  md:w-12 lg:w-16 lg:h-16   md:block "
                icon={faPhone}
              />
            </p>

            <p className="text-center pt-2 text-sm md:text-xl md:text-md flex">
              2262-573425
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#ff8925] flex justify-center">
        <div className="flex flex-col bg-black p-8 md:pb-12 w-4/5 ">
          <div>
            <h1 className="text-white text-xl md:text-2xl lg:text-4xl font-bold text-center pb-12">
              Medios de pago
            </h1>
          </div>
          <div className="flex justify-around">
            <div>
              <img src={visa} className="w-20 h-12 pt-2" alt="visa" />
              <img
                src={mercadopago}
                className="w-20 h-12 pt-2"
                alt="MercadoPago"
              />
              <img
                src={mascultura}
                className="w-20 h-12 pt-2"
                alt="MasCultura"
              />
              <img
                src={mastercard}
                className="w-20 h-12 pt-2"
                alt="MasterCard"
              />
            </div>
            <div>
              <img src={cuentadni} className="w-20 h-12 pt-2" alt="cuentadni" />
              <img src={lemoncard} className="w-20 h-12 pt-2" alt="lemoncard" />
              <img src={cabal} className="w-20 h-12 pt-2" alt="cabal" />
              <img src={credicoop} className="w-20 h-12 pt-2" alt="credicoop" />
            </div>
            <div>
              <img src={bbva} className="w-20 h-12 pt-2" alt="bbva" />
              <img src={galicia} className="w-20 h-12 pt-2" alt="galicia" />
              <img src={macro} className="w-20 h-12 pt-2" alt="visa" />
              <img src={bancoprovincia} className="w-20 h-12 pt-2" alt="visa" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
