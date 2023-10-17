import { faGithub, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons'
import React, { useState } from 'react'
import FormattedDate from '../../components/FormattedDate'
import Picture from '../../components/Picture'
import TitleLink from '../../components/TitleLink'
import Material from '../../components/Material'
import Description from '../../components/Description'
import Tech from '../../components/Tech'
import { data } from "../../contents/experience"

const SECTION_ID = 'experience-section'

const Experience = () => {
  const [isMouseEnter, setIsMouseEnter] = useState({});

  return (
    <div id={SECTION_ID}>
      <div className='text-primaryAccent font-medium px-2'>Experience</div>
      {
        data.map(({ date = '', title = '', link = '', descriptions, skills = [], materials = [], picture = '' }, index) => {
          return (
            <div
              key={`${SECTION_ID}-${index}`}
              className={`grid grid-cols-[25%_75%] rounded-md px-2 py-6 transition-all ${isMouseEnter[`${SECTION_ID}-${index}`] ? 'bg-primaryBase' : ''}`}
              onMouseEnter={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: true })}
              onMouseLeave={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: false })}
            >
              <div>
                <FormattedDate isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}>{date}</FormattedDate>
                <Picture picture={picture} title={title} />
              </div>
              <div className='grid gap-y-4'>
                <TitleLink isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} title={title} link={link} />
                {
                  materials.length > 0 && (<div className='flex gap-4 text-xl items-center'>
                    {
                      materials.map((e, i) => {
                        return <Material key={`${e.type}-material-${i}`} icon={e.type} link={e.link} />
                      })
                    }
                  </div>)
                }

                {
                  descriptions.map((e, i) => {
                    return <Description key={`${e}-material-${i}`} description={e} />
                  })
                }
                {
                  skills.map((e, i) => {
                    return <Tech key={`skill-${i}`} isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} data={e} />
                  })
                }
              </div>
            </div >
          )
        })
      }

    </div >
  )
}

export default Experience