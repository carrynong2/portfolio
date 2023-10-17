import { faGithub, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import picExp from "../../assets/exp_site.png"
import picLittleLemon from "../../assets/littlelemon.png"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import FormattedDate from '../../components/FormattedDate'
import Picture from '../../components/Picture'
import TitleLink from '../../components/TitleLink'
import Material from '../../components/Material'
import Description from '../../components/Description'
import Tech from '../../components/Tech'

const Experience = () => {
  const [isMouseEnter, setIsMouseEnter] = useState({});

  return (
    <div className=''>
      <div className='text-primaryAccent font-medium'>Experience</div>
      <div className={`grid grid-cols-[25%_75%] rounded-md px-2 py-6 transition-all ${isMouseEnter.exp1 ? 'bg-primaryBase' : ''}`}
        onMouseEnter={() => setIsMouseEnter({ exp1: true })}
        onMouseLeave={() => setIsMouseEnter({ exp1: false })}
      >
        <div>
          <FormattedDate isHighLight={isMouseEnter.exp1}>2020-2023</FormattedDate>
          <Picture picture={picExp} title='Fashtion Ecommerce' />
        </div>
        <div className='grid gap-y-4'>
          <TitleLink isHighLight={isMouseEnter.exp1} title='Fashtion Ecommerce' link='#' />

          <div className='flex gap-4 text-xl'>
            <Material icon={faGithub} link='#' />
            <Material icon={faYoutube} link='#' />
          </div>
          <Description description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nemo optio esse molestiae dolorum totam! Similique a maiores fugit quas.' />
          <div>
            <Tech isHighLight={isMouseEnter.exp1} data={['React', 'Redux', 'Tailwind']} />
          </div>
        </div>
      </div >
      <div className={`grid grid-cols-[25%_75%] rounded-md px-2 py-6 transition-all ${isMouseEnter.exp2 ? 'bg-primaryBase' : ''}`}
        onMouseEnter={() => setIsMouseEnter({ exp2: true })}
        onMouseLeave={() => setIsMouseEnter({ exp2: false })}
      >
        <div>
          <div><span className={`text-sm ${isMouseEnter.exp2 ? 'text-primaryAccent' : ''}`}>2022-2023</span></div>
          <div>
            <img src={picLittleLemon} className='w-5/6 rounded-md border-2 border-primarySubcontent' />
          </div>
        </div>
        <div className='grid gap-y-4'>
          <div className={`text-primaryAccent ${isMouseEnter.exp2 ? 'text-primaryTitle' : ''}`}>
            Fashion Ecommerce
            <FontAwesomeIcon className={`text-xs -rotate-45 duration-300 east-out ${isMouseEnter.exp2 ? 'translate-x-1 -translate-y-1' : ''}`} icon={faArrowRight} />
          </div>
          <div className='flex gap-4 text-xl'>
            <a href="#" target='_blank' className='hover:scale-110'><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#" target='_blank' className='hover:scale-110'><FontAwesomeIcon icon={faMedium} /></a>
            <a href="#" target='_blank' className='hover:scale-110'><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
          <div className='tex-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nemo optio esse molestiae dolorum totam! Similique a maiores fugit quas.</div>
          <div>
            <div className='flex gap-4 text-sm'>
              <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter.exp2 ? "text-primaryTitle" : ""} text-primaryTitle`}>React</div>
              <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter.exp2 ? "text-primaryTitle" : ""} text-primaryTitle`}>Tailwind</div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Experience