import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
function Header() {
    return (
        <header className="text-gray-300 body-font bg-slate-800">
            <div className="container flex flex-wrap px-2 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center mb-4 md:mb-0 select-none">
                    <FontAwesomeIcon icon={solid('t')} className="w-10 h-10 object-cover object-center text-gray-300" />
                    <span className="ml-3 text-xl">Proj_T</span>
                </a>
                <div className="md:ml-auto flex flex-wrap items-center text-base justify-center flex-grow">
                    <input type="text" className="bg-white rounded border w-full border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-base outline-none text-gray-700 my-3 mx-6 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="flex title-font font-medium items-center cursor-pointer">
                    <FontAwesomeIcon icon={solid('ellipsis-vertical')} className="w-8 h-8 object-cover object-center text-gray-300" />
                </div>
            </div>
        </header>
    )
}

export default Header