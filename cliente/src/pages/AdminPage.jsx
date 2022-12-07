import React, { useState } from "react";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import Form from "../components/Form";

const AdminPage = () => {
  const [currentId, setCurrentId] = useState(null);

  return (
    <div className="bg-black h-screen">
      <div>
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </div>
      <div>
        <Cards currentId={currentId} setCurrentId={setCurrentId} />

        <div className="bg-black flex justify-center p-4">
          <div className="bg-[#ff8925] hover:bg-[#ff5825] w-3/4 md:w-1/2 lg:w-1/4 rounded-3xl">
            <Link to="/">
              <div className="h-16 flex items-center justify-center ">
                <p className="text-white font-bold text-center uppercase text-4xl">
                  Salir
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
