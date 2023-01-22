import React from "react";
import { Link } from "gatsby";
import { useState } from "react";
import logoGitLab from "../assets/images/gitlab-logo-500.png";
import logoGiHub from "../assets/images/github-mark.svg";
import logoIG from "../assets/images/Instagram_Glyph_Gradient.png";
import icono from "../assets/images/icon.png";

// en caso de tener scrollbar, la barra se achica, deberia hacer algun cambio para que esto no pase, pero no es prioritario en este momento
//agregar un index z para que el menu hamburguesa en mobile se superponga al conenido y no lo desplace al hacerse visible
const Navbar = () => {
  // variable algo tosca para que el menu hamburguesa comience cerrado si la pantalla es sm sino estaria abierto y seria el menu comun
  //por ahi tendria que desacoplar el nabvar largo y el menu en sm
  var estadoInicial = true;
  // if(window.innerWidth<=640)estadoInicial=true;

  const [estadoMenuHamburguesa, setMenuHamburguesa] = useState(estadoInicial);

  const toggleHamburguesa = () => {
    setMenuHamburguesa(!estadoMenuHamburguesa);
  };

  return (
    <>
      {/* justify-around  items-center justify-between flex*/}
      <nav className=" sm:flex flex-wrap pt-3 mx-12 md:mx-3 md:pb-4 md:pt-8  md:px-8 lg:px-10 justify-between">
        <div className="block sm:flex ">
          <div className="flex justify-between  ">
            <Link to="/" className="p-4  font-bold ">
              {/* <span className=" text-2xl">ICO</span> */}
              <img src={icono} alt="icono" className="w-14 h-14" />
            </Link>
            <button
              onClick={toggleHamburguesa}
              className="sm:hidden inline-block p-4"
            >
              {estadoMenuHamburguesa ? "MENU" : "X"}
            </button>
          </div>
          {/* la logica en vez de que el boton sea sm:hiden seria sm:flex en caso de poder setear el menu en true segun el estado */}
          <ul
            className={
              "p-4 text-center text-2xl font-bold sm:ml-10 " +
              (estadoMenuHamburguesa ? " hidden" : "block sm:hidden")
            }
          >
            <li>
              <Link
                to="/about"
                className="block mt-4"
              >
                Sobre mi
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block mt-4"
              >
                Sobre mi
              </Link>
            </li>
          </ul>
          {/* por comodidad hardcodeo este navbar duplicando codigo en otra ocasion agregare un windows en el client side o tomare otra estrategia */}
          <ul
            className={
              " text-center text-2xl font-bold  ml-16 hidden  sm:flex  items-center"
            }
          >
            <li>
              <Link
                to="/about"
                className="inline-block  mr-4"
              >
                Sobre mi
              </Link>
            </li>
          </ul>
        </div>
        {/* por comodidad hardcodeo este navbar duplicando codigo en otra ocasion agregare un windows en el client side o tomare otra estrategia */}

        <ul
          className={
            "p-4 text-center text-2xl font-bold " +
            (estadoMenuHamburguesa
              ? " hidden"
              : "flex justify-center sm:hidden")
          }
        >
          <a
            href="https://www.instagram.com/elsonidodelascosas/"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 sm:inline-block sm:mt-0 text-teal   mr-4"
          >
            <img src={logoIG} alt="Instagram" className="w-10 h-10" />
          </a>
          <a
            href="https://gitlab.com/stfg.prof"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 sm:inline-block sm:mt-0 text-teal   mr-4"
          >
            <img src={logoGitLab} alt="Gitlab" className="w-10 h-10" />
          </a>
          <a
            href="https://github.com/santitfg"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 sm:inline-block sm:mt-0 text-teal   mr-4"
          >
            <img src={logoGiHub} alt="Github" className="w-10 h-10" />
          </a>
        </ul>
        {/* hardcodeo duplicando seccion (usar una func ??*/}
        <ul
          className={
            " hidden sm:flex  items-center "
          }
        >
          <a
            href="https://www.instagram.com/elsonidodelascosas/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block  mr-4"
          >
            <img src={logoIG} alt="Instagram" className="w-10 h-10" />
          </a>
          <a
            href="https://gitlab.com/stfg.prof"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block  mr-4"
          >
            <img src={logoGitLab} alt="Gitlab" className="w-10 h-10" />
          </a>
          <a
            href="https://github.com/santitfg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mr-4"
          >
            <img src={logoGiHub} alt="Github" className="w-10 h-10" />
          </a>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;

