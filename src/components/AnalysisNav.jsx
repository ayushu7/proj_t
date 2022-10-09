import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import OverviewPanel from './OverviewPanel'


function AnalysisNav() {
    return (
        <>
            <div className='flex flex-row justify-center items-center m-2 text-slate-600 body-font rounded-md bg-slate-200 shadow-md'>
                <NavLink to='overview'>
                    <NavIcon title='Overview' icon={solid('house')} />
                </NavLink>
                <NavLink to='financials'>
                    <NavIcon title='Financials' icon={solid('coins')} />
                </NavLink>
                <NavLink to='transcripts'>
                    <NavIcon title='Transcripts' icon={solid('scroll')} />
                </NavLink>
                <NavLink to='ownership'>
                    <NavIcon title='Ownership' icon={solid('person')} />
                </NavLink>
            </div>
            <Routes>
                <Route path="overview" element={<OverviewPanel />} />
            </Routes>
        </>
    )
}

function NavIcon({ title, icon }) {
    return (
        <a className="inline-flex flex-col items-center p-3 select-none cursor-pointer w-full text-gray-600 hover:bg-slate-500 hover:text-slate-200 focus:bg-slate-700 focus:text-slate-200 rounded-lg transition-colors duration-200 ease-in-out">
            <FontAwesomeIcon icon={icon} className="w-5 h-5 flex-shrink-0" />
            <span className="title-font font-light ">{title}</span>
        </a>
    )
}


export default AnalysisNav