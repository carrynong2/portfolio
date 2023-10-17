import React from 'react'
import Header from '../Header/Index'
import Navbar from '../Navbar/Index'
import Contact from '../Contact'

const LeftSection = () => {
  return (
    <div className='px-5'>
      <div className="sticky top-14 grid gap-y-5 lg:grid-rows-[35%_45%_20%] lg:h-[82vh]">
        <Header />
        <Navbar />
        <Contact />
      </div>
    </div>
  )
}

export default LeftSection