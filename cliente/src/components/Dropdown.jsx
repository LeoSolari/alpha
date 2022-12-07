import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropdownComponent() {
  const [rotate, setRotate] = useState(false);

  const handleRotate = () => {
    setRotate(!rotate);
  };

  return (
    <Menu as="div" className="relative inline-block font-bold text-left">
      <div>
        <Menu.Button
          onClick={handleRotate}
          className={
            rotate
              ? "inline-flex justify-center w-full  px-4 py-2 text-sm font-medium text-white-700 bg-gray-700 border border-gray-300 rounded-md shadow-sm "
              : "inline-flex justify-center w-full  px-4 py-2 text-sm font-medium text-black bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-200 hover:border-gray-300 duration-300"
          }
        >
          <p>Opciones</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={
              rotate
                ? "w-5 h-5 ml-2 -mr-1 duration-700"
                : "w-5 h-5 ml-2 -mr-1 duration-700 rotate-180"
            }
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://www.google.com.ar/maps/place/Av.+59+2955,+B7630DYP+Necochea,+Provincia+de+Buenos+Aires/@-38.5518965,-58.7453749,17z/data=!3m1!4b1!4m5!3m4!1s0x958fbd64a7442491:0x2d95da8c1351d970!8m2!3d-38.5519007!4d-58.7431862"
                  target="_blank"
                  rel="noreferrer"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Buscanos en el mapa
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/inventario"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Inventario
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/insumos"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Envianos una consulta
                </Link>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <a
                    type="submit"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/alfa.necochea/?hl=es"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full text-left px-4 py-2 text-sm"
                    )}
                  >
                    Instagram
                  </a>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
