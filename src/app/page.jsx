import HeroSection from '@/component/heroSection'
import Navbar from '@/component/navbar'
import ProjectSection from '@/component/project'
import React from 'react'

const page = () => {
  return (
    <div>
     <Navbar/>
     <HeroSection/>
     <ProjectSection/>
    </div>
  )
}

export default page