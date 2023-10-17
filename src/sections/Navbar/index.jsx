import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const navs = [
  { title: "About", sectionId: "About-section" },
  { title: "Project", sectionId: "Project-section" },
  { title: "Certification", sectionId: "Certification-section" },
]

const Navbar = () => {
  const [isMouseEnter, setIsMouseEnter] = useState({});

  const handleClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col gap-3 font-semibold">
      {
        navs.map((e, i) => {
          return (
            <div
              className='cursor-pointer flex'
              key={`${e.sectionId}-${i}`}
              onClick={() => handleClick(e.sectionId)}
              onMouseEnter={() => setIsMouseEnter({ [e.title]: true })}
              onMouseLeave={() => setIsMouseEnter({ [e.title]: false })}
            >
              <div>
                <FontAwesomeIcon className={`mr-2 text-primaryTitle new-arrow ${isMouseEnter[e.title] ? '' : 'hidden'}  `} icon={faArrowRight} />
              </div>
              <div className={`${isMouseEnter[e.title] ? 'translate-x-3' : ''} duration-500 ease-out`}>
                {e.title}
              </div>
            </div>
          )
        })
      }
    </div >
  )
}

export default Navbar