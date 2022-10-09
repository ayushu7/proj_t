import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SubSideBar({ children, title }) {
    return (
        <div>
            {
                title ? <a className="inline-flex items-center w-full p-3 border-t-2 border-gray-200">
                {/* <FontAwesomeIcon icon={solid('bars')} class="w-5 h-5 flex-shrink-0 object-cover object-center"/> */}
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-normal text-gray-300">{title}</span>
                </span>
              </a>: <></>
            }
            {children}
        </div>
    )
}

export default SubSideBar