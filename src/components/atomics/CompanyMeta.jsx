import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function CompanyMeta() {
  return (
    <div className='flex flex-row justify-between m-2 text-slate-600 body-font rounded-md bg-slate-200 shadow-md'>
            <div className='pl-3 flex flex-col justify-start items-center'>
                <a className="inline-flex items-center py-2 select-none w-full text-lg font-bold">
                    <span className="flex-grow flex flex-col">
                        <span className="title-font text-slate-500">Alphabet Inc. (GOOG.L)</span>
                    </span>
                    <FontAwesomeIcon icon={solid('heart')} className="w-5 h-5 pl-2 flex-shrink-0 object-cover object-center text-slate-500" />
                </a>
                <a className="inline-flex items-center py-2 select-none w-full">
                    <span className="flex-grow flex flex-row justify-start ">
                        <span className='bg-slate-700 rounded-md p-1 text-sm'>
                            <button className="title-font p-1 text-slate-300 font-bold border-r-2 border-gray-200">USD</button>
                            <button className="title-font p-1 text-slate-300">RUP</button>
                        </span>
                        <span className='flex justify-center items-center'>
                            <span className='text-xs flex justify-center h-4 items-center p-1 mx-3 rounded-lg border-2 border-slate-700'>
                                Show Price Chart
                            </span>
                        </span>
                    </span>
                </a>
            </div>
            <div className='p-2 flex flex-col justify-start items-center'>
                <a className="inline-flex items-center py-2 select-none w-full text-lg font-bold">
                    <span className="flex-grow flex flex-col items-end">
                        <span className="title-font text-4xl text-slate-500">$101.44</span>
                        <span className="title-font text-md pt-1 text-green-700">+$0.01 (+0.01%)</span>
                        <span className="title-font text-xs pt-1 text-slate-400">October 6, 2022 at 3:59 PM EDT IEX Last Trade</span>
                    </span>
                </a>
            </div>
        </div>
  )
}

export default CompanyMeta