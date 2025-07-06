import Footer from '@/component/footer'
import HeroSection from '@/component/heroSection'
import MyIntro from '@/component/MyIntro'
import Navbar from '@/component/navbar'
import ProjectSection from '@/component/project'
import React from 'react'

const page = () => {
  return (
    <div>
 
     <HeroSection/>
     <MyIntro/>
     <ProjectSection/>

    </div>
  )
}

export default page