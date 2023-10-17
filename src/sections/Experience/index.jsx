import React, { useState } from 'react'
import { data } from "../../contents/experience"
import ContentContainer from '../../components/ContentContainer'

const SECTION_ID = 'experience-section'

const Experience = () => {
  return (
    <ContentContainer title='Experience' data={data} />
  )
}

export default Experience