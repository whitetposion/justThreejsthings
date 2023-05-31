import React from 'react'
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'

import  {styles} from "../styles"
import {services } from "../constants"
import {fadeIn , textVariant } from "../utils/motion"
const ServiceCard = ({index , title , icon })=> {
  return (
    <p>{title}</p>
  )
}
const About = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className ={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("","",0.1,1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      I have always been fascinated by the ever-evolving world of technology and its impact on our daily lives. Through my education and practical experience, I have developed a strong foundation in web development, including proficiency in HTML, CSS, JavaScript, and various frameworks. I have also gained hands-on experience in building responsive and user-friendly websites.
      </motion.p>

      <div className="mt-20 flex flex flex-wrap gap=10">
        {services.map((service, index) =>{
          <ServiceCard key={service.title} index={index}{...service}/>
        })}
      </div>
    </>
  )
}

export default About