import React from 'react'
import Header from '../Header/Index'
import Navbar from '../Navbar/Index'
import Contact from '../Contact'

const LeftSection = ({ navBarItems, currentSection }) => {
  return (
    <div className='px-5 mb-14 lg:mb-0'>
      <div className="sticky top-14 px-2 grid gap-y-5 lg:grid-rows-[1fr_2fr_20%] lg:h-[82vh]">
        <Header />
        <Navbar navBarItems={navBarItems} currentSection={currentSection} />
        <Contact />
      </div>
    </div>
  )
}

export default LeftSection