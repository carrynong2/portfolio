import React from 'react'
import Header from '../Header/Index'
import Navbar from '../Navbar/Index'
import Contact from '../Contact'

const LeftSection = () => {
  return (
    <div>
      <div className="sticky top-14 grid grid-rows-[35%_45%_20%] h-[87vh]">
        <Header />
        <Navbar />
        <Contact />
      </div>
    </div>
  )
}

export default LeftSection