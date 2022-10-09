import React from 'react'
import SubSideBar from './atomics/SubSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom'
function SideBar(props) {
  return (
    <div className={props.className}>
      {/* <div className='w-full flex flex-row justify-end '>
        <FontAwesomeIcon icon={solid('xmark')} className="w-5 h-5 p-2 flex-shrink-0 object-cover object-center text-gray-300 cursor-pointer hover:bg-slate-500 rounded-lg"/>
      </div> */}
      <div className='h-32'>

      </div>
      <SubSideBar>
        <SideBarEntry text='Market Overview' icon={solid('shop')} />
      </SubSideBar>
      <SubSideBar title='Idea Generation'>
        <SideBarEntry text='Watchlist' icon={solid('list')} />
      </SubSideBar>
      <SubSideBar title='Fundamental Analysis'>
        <Link>
        <SideBarEntry text='Company Overview' icon={solid('house')} />
        </Link>
        <SideBarEntry text='Detailed Financials' icon={solid('coins')} />
        <SideBarEntry text='Transcripts' icon={solid('scroll')} />
        <SideBarEntry text='Ownership' icon={solid('person')} />
      </SubSideBar>
    </div>
  )
}

function SideBarEntry({ icon, text }) {
  return (
    <a className="inline-flex items-center p-3 select-none cursor-pointer w-full hover:bg-slate-500 rounded-lg transition-colors duration-200 ease-in-out">
      <FontAwesomeIcon icon={icon} className="w-5 h-5 flex-shrink-0 object-cover object-center text-gray-300" />
      <span className="flex-grow flex flex-col pl-4">
        <span className="title-font font-light text-gray-300">{text}</span>
      </span>
    </a>
  )
}

export default SideBar