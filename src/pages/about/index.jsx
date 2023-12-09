import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { Animate } from 'react-simple-animate';
import Skill from '../../components/skill';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdLoop } from "react-icons/md";
import { MdOutlinePhp } from "react-icons/md";
import { FaSass } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

import './styles.scss';

const personalDetails = [
  {
    label: "Birthday:",
    value: "24.11.2000"
  },
  {
    label: "Age:",
    value: "23"
  },
  {
    label: "Email:",
    value: "noura.darwazeh11@gmail.com"
  },
  {
    label: "Phone:",
    value: "+972594650915"
  },
  {
    label: "Education:",
    value: "Computer Engineering, An-Najah National University"
  },
  {
    label: "Nationality:",
    value: "Palestinian"
  },
]
const About = () => {
  return (
    <section id='about' className='about'>
      <PageHeaderContent headerText="about me" />
      <div className='about__content'>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-900px)",
          }}
          end={{
            transform: "translatex(0px)"
          }}
        >
          <p className='about__content__paraghraph'>
            Hello, I'm Noura Darwazeh, a Front-end Developer.
            I've crafted user-friendly web interfaces that stay current with the latest technological advancements.
            Dedicated to collaborative teamwork, adept at problem-solving, and thriving in diverse environments. Committed to continual learning and personal growth, always striving for excellence in everything I undertake.
          </p>

        </Animate>

        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(500px)",
          }}
          end={{
            transform: "translatex(0px)"
          }}>
          <ul className='about__content__details'>
            {
              personalDetails.map((item, key) => (
                <li key={key} >
                  <span className='about__content__details__title'>{item.label}</span>
                  <span className='about__content__details__value'>{item.value}</span>
                </li>
              ))
            }
          </ul>
        </Animate>
      </div>

      <PageHeaderContent headerText="Skills" />
      <div className='allSkills'>
        <Skill className='skill' skillIcon={<FaHtml5 size={'6rem'} />} skillTitle="HTML" />
        <Skill className='skill' skillIcon={<FaCss3Alt size={'6rem'} />} skillTitle="CSS" />
        <Skill className='skill' skillIcon={<FaBootstrap size={'6rem'} />} skillTitle="BOOTSTRAP" />
        <Skill className='skill' skillIcon={<IoLogoJavascript size={'6rem'} />} skillTitle="JAVASCRIPT" />
        <Skill className='skill' skillIcon={<FaReact size={'6rem'} />} skillTitle="REACT" />
        <Skill className='skill' skillIcon={<SiMui size={'6rem'} />} skillTitle="MATERIAL-UI" />
        <Skill className='skill' skillIcon={<FaGitAlt size={'6rem'} />} skillTitle="GIT" />
        <Skill className='skill' skillIcon={<FaGithub size={'6rem'} />} skillTitle="GITHUB" />
        <Skill className='skill' skillIcon={<FaSass size={'6rem'} />} skillTitle="SASS" />
        <Skill className='skill' skillIcon={<SiTypescript size={'6rem'} />} skillTitle="TYPESCRIPT" />
      </div>
    </section>
  )
}

export default About
