import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const TitleLink = ({ isHighLight, title, link }) => {
  if (!link) {
    return <div><FontAwesomeIcon className={`text-xs -rotate-45 duration-300 east-out ${isHighLight ? 'translate-x-1 -translate-y-1' : ''}`} icon={faArrowRight} /></div>
  }

  return (
    <a href={link} target='_blank'>
      <div className={`text-primaryAccent ${isHighLight ? 'text-primaryTitle' : ''}`}>
        {title}
        <FontAwesomeIcon className={`text-xs -rotate-45 duration-300 east-out ${isHighLight ? 'translate-x-1 -translate-y-1' : ''}`} icon={faArrowRight} />
      </div>
    </a>
  )
}

export default TitleLink