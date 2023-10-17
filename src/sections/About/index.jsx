import React from 'react'
import { data } from "../../contents/about"

const About = () => {
  return (
    <div className='space-y-4 px-2'>
      <div className='text-primaryAccent font-medium'>{data.title}</div>
      <div>{data.description}</div>
    </div>
  )
}

export default About