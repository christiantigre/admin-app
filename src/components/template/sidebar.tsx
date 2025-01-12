import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const Sidebar = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<{ [key: string]: boolean }>({});

  const toggleSubmenu = (menu: string) => {
    setIsSubmenuOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <aside className="w-64 bg-gray-800 text-white h-full">
      <nav className="mt-10">
        <NavLink
          to="/"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          Inicio
        </NavLink>
        <NavLink
          to="/about"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          Acerca de
        </NavLink>

        {/* Services Menu with Submenu */}
        <div className="relative">
          <button
            className="flex items-center justify-between w-full py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 focus:outline-none"
            onClick={() => toggleSubmenu('services')}
          >
            <span>Servicios</span>
            {isSubmenuOpen['services'] ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          {isSubmenuOpen['services'] && (
            <div className="pl-8">
              <NavLink
                to="/services/web-development"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
              >
                Desarrollo Web
              </NavLink>
              <NavLink
                to="/services/mobile-development"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
              >
                Desarrollo Móvil
              </NavLink>
              <NavLink
                to="/services/seo"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
              >
                SEO
              </NavLink>
            </div>
          )}
        </div>

        <NavLink
          to="/contact"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          Contacto
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
