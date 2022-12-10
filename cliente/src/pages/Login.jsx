import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../assets/logoalpha2.png";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const [contraseña, setContraseña] = useState("");
  const [nombre, setNombre] = useState("");
  const [showPass, setShowPass] = useState(false);

  let navigate = useNavigate();

  const handleCredenciales = (e) => {
    e.preventDefault();
    if (contraseña === "librerianecochea" && nombre === "alfa") {
      return navigate("/admin");
    } else {
      return navigate("/login");
    }
  };

  const handleShowPassword = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="bg-black text-xl text-white">
      <Link className="flex justify-center bg-[#ff8925] w-full" to="/">
        <img src={Logo} alt="LogoAlfa" />
      </Link>
      <div className="p-4 font-bold text-4xl">
        <h1>Bienvenido!</h1>
      </div>
      <form>
        <div className="p-4">
          <h1>Nombre</h1>
          <input
            className="text-black p-2"
            value={nombre}
            name="nombre"
            type="text"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="p-4">
          <h1>Contraseña</h1>
          <input
            className="text-black p-2"
            value={contraseña}
            name="contraseña"
            type={showPass ? "text" : "password"}
            onChange={(e) => setContraseña(e.target.value)}
          />
          <FontAwesomeIcon
            className="pl-3 cursor-pointer"
            onClick={handleShowPassword}
            icon={showPass ? faEyeSlash : faEye}
          />
        </div>
        <div className="p-4">
          <button
            onClick={handleCredenciales}
            className="bg-[#ff8925] hover:bg-[#ff4a13] duration-300 text-white font-bold py-2 px-4 rounded"
          >
            INGRESAR
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
