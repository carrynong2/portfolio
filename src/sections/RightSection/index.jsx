import React from 'react'
import About from '../About'
import ContentContainer from '../../components/ContentContainer'
import { data as certificationData } from '../../contents/certication'
import { data as projectData } from '../../contents/project'
import Footer from '../Footer'

const RightSection = ({ onInitial }) => {
  return (
    <div className='grid gap-y-40 px-5'>
      <About onInitial={onInitial} title='About' />
      <ContentContainer onInitial={onInitial} title='Project' data={projectData} />
      <ContentContainer onInitial={onInitial} title='Certification' data={certificationData} />
      <Footer />
    </div>
  )
}

export default RightSection