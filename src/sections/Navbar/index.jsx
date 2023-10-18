import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const navs = [
  { title: "About", sectionId: "About-section" },
  { title: "Project", sectionId: "Project-section" },
  { title: "Certification", sectionId: "Certification-section" },
]

const Navbar = ({ navBarItems, currentSection }) => {
  const [isMouseEnter, setIsMouseEnter] = useState({});

  const handleClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="hidden lg:flex flex-col gap-3 font-semibold mt-5">
      {
        navBarItems.map((e, i) => {
          return (
            <div
              className='cursor-pointer flex'
              key={`${e.sectionId}-${i}`}
              onClick={() => handleClick(e.sectionId)}
              onMouseEnter={() => setIsMouseEnter({ [e.title]: true })}
              onMouseLeave={() => setIsMouseEnter({ [e.title]: false })}
            >
              <div>
                <FontAwesomeIcon
                  className={`new-arrow ${currentSection === e.sectionId ? "text-primaryTitle" : isMouseEnter[e.title] ? "" : "hidden"}  `} icon={faArrowRight} />
              </div>
              <div className={`${currentSection === e.sectionId || isMouseEnter[e.title] ? 'translate-x-3' : ''} duration-500 ease-out`}>
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