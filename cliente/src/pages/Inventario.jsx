import React, { useState } from "react";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import Logo from "../assets/logoalpha2.png";
import { getPostsBySearch } from "../actions/posts";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Inventario = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const searchPost = () => {
    if (search.trim()) {
      dispatch(getPostsBySearch({ search }));
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };
  return (
    <div>
      <div>
        <div className="flex justify-center bg-gray-800 p-4">
          <Link className="flex justify-center bg-[#ff8925] w-4/5" to="/">
            <img src={Logo} alt="LogoAlfa" />
          </Link>
        </div>
        <div className="flex justify-center bg-gray-800 p-8">
          <div className="flex items-center">
            <div className="flex space-x-1">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={handleKeyPress}
                type="text"
                className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Buscar..."
              />
              <button
                onClick={searchPost}
                className="px-4 text-white bg-orange-500 hover:bg-orange-700  rounded-full "
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </div>
        <Cards />
        <div className="bg-black flex justify-center p-4">
          <div className="bg-[#ff8925] hover:bg-[#ff5825] w-3/4 md:w-1/2 lg:w-1/4 rounded-3xl">
            <Link to="/login">
              <div className="h-16 flex items-center justify-center ">
                <h1 className="text-white font-bold text-center uppercase text-4xl">
                  Ingresar
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventario;
