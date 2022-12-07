import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Example() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <Fragment>
      <Accordion
        className="py-5  bg-gray-900 rounded-t-2xl "
        open={open === 1}
        animate={customAnimation}
      >
        <AccordionHeader
          className="text-sm  px-4 lg:text-xl"
          onClick={() => handleOpen(1)}
        >
          ¿Donde se encuentra nuestro local?
        </AccordionHeader>
        <AccordionBody className="text-sm text-gray-400 md:underline pt-4 decoration-orange-400  lg:text-xl underline-offset-8">
          Nos encontramos en Av.59 2455
        </AccordionBody>
      </Accordion>
      <Accordion
        className="py-5  bg-gray-900"
        open={open === 2}
        animate={customAnimation}
      >
        <AccordionHeader
          className="text-sm px-4 lg:text-xl"
          onClick={() => handleOpen(2)}
        >
          ¿Cuales son los horarios?
        </AccordionHeader>
        <AccordionBody className="text-gray-400 md:underline pt-4 decoration-orange-400 text-sm lg:text-xl underline-offset-8">
          Abrimos de corrido, de 9:00 a 19:00hs
        </AccordionBody>
      </Accordion>
      <Accordion
        className="py-5  bg-gray-900"
        open={open === 3}
        animate={customAnimation}
      >
        <AccordionHeader
          className="text-sm px-4 lg:text-xl"
          onClick={() => handleOpen(3)}
        >
          ¿Que dias esta abierto?
        </AccordionHeader>
        <AccordionBody className="text-sm text-gray-400 md:underline pt-4 decoration-orange-400 lg:text-xl underline-offset-8">
          Estamos abiertos de lunes a viernes y sabados medio dia.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="py-5  bg-gray-900"
        open={open === 4}
        animate={customAnimation}
      >
        <AccordionHeader
          className="px-4 text-sm lg:text-xl"
          onClick={() => handleOpen(4)}
        >
          ¿Que productos puedo encontrar?
        </AccordionHeader>
        <AccordionBody className="text-gray-400 md:underline decoration-orange-400 pt-4 px-12 text-sm lg:text-xl underline-offset-8">
          Podes encontrar articulos de arte y pintura, impresiones B&N y a color
          ademas de insumos de colegio y oficina.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="py-5   bg-gray-900 rounded-b-2xl"
        open={open === 5}
        animate={customAnimation}
      >
        <AccordionHeader
          className="px-4 text-sm lg:text-xl"
          onClick={() => handleOpen(5)}
        >
          ¿Cual es el telefono de contacto?
        </AccordionHeader>
        <AccordionBody className="text-gray-400 md:underline pt-4 decoration-orange-400 lg:text-xl underline-offset-8 px-12 pb-8 rounded-b-2xl ">
          Podes contactarnos al 2262-573425. Tambien puedes enviarnos un mensaje
          en la pagina principal.
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
