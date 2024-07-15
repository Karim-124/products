import React from "react";
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const NavbarApp = () => {
    return (
        <nav className="bg-red-500 p-2 flex justify-center ">
            <div className="w-3/4 relative flex justify-center items-center">
                <input
                    type="text"
                    placeholder=""
                    className="w-full p-2 rounded-full mr-10 "
                />
                <FontAwesomeIcon
                    icon={faSearch}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
                <div className="text-white font-bold text-xl"><img src={logo} className="w-20" alt="movies" /></div>

            </div>

        </nav>
    );
};

export default NavbarApp;
