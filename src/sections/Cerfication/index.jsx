import React, { useState } from 'react'
import { data } from "../../contents/certication"
import ContentContainer from '../../components/ContentContainer'

const Experience = () => {
  return (
    <ContentContainer title='Certifiction' data={data} />
  )
}

export default Experience