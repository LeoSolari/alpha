import React from "react";

const contactForm = () => {
  return (
    <div className="bg-black text-white pt-12">
      <p className="text-4xl py-6">Envianos un mensaje</p>
      <form
        action="https://getform.io/f/185914c4-9deb-4960-8b05-9bf977668c72"
        method="POST"
        className="flex flex-col w-full"
      >
        <div>
          <p>
            Llena con tus datos el formulario de abajo para enviarnos un
            mensaje!
          </p>
        </div>
        <input
          className="my-4 p-2 bg-[#ccd6f6] text-black"
          type="email"
          name="email"
          placeholder="Ingresa tu email"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] text-black"
          type="text"
          name="name"
          placeholder="Ingresa tu nombre"
        />
        <textarea
          className="my-4 p-2 h-40 bg-[#ccd6f6] text-black"
          placeholder="Ingresa el mensaje que quieres enviarnos"
          type="text"
          name="message"
        />
        <button className="bg-green-600 hover:bg-green-500 p-2 h-16 mt-4 uppercase">
          Enviar mensaje
        </button>
      </form>
    </div>
  );
};

export default contactForm;
