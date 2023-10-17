import React from 'react'
import About from '../About'
import ContentContainer from '../../components/ContentContainer'
import { data as expericeData } from '../../contents/experience'
import { data as projectData } from '../../contents/project'
import Footer from '../Footer'

const RightSection = () => {
  return (
    <div className='grid gap-y-40 px-5'>
      <About />
      <ContentContainer title='Experience' data={expericeData} />
      <ContentContainer title='Project' data={projectData} />
      <ContentContainer title='Article' data={projectData} />
      <Footer />
    </div>
  )
}

export default RightSection