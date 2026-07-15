import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Seção Sobre */}
        <div>
          <h3 className="text-xl font-bold mb-4">Minha Marca</h3>
          <p className="text-gray-400">
            Criando experiências digitais incríveis com desenvolvimento de
            softwares de alta qualidade.
          </p>
        </div>

        {/* Links Rápidos */}
        <div>
          <h3 className="text-xl font-bold mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Projetos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div>
          <h3 className="text-xl font-bold mb-4">Siga-nos</h3>
          <div className="flex space-x-4">
           
           <span className="cursor-pointer hover:text-blue-400"> <FaGithub size={24} /></span>
            <span className="cursor-pointer hover:text-blue-400"> <FaLinkedin size={24} /></span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Carol Sanches desenvolvimento. Todos
        os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
