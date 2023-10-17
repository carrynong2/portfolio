import React from 'react'

const Picture = ({ picture, title }) => {
  return (
    <div>
      <img src={picture} alt={title} className='w-5/6 rounded-md border-2 border-primarySubcontent' />
    </div>
  )
}

export default Picture