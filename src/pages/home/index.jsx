import React from 'react'
import './styles.scss'
import myImage from '../../assets/image/profile.png'
import Typing from 'react-typing-effect';
import { Link } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import { FaFacebook } from 'react-icons/fa';
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";

const Home = () => {

  return (
    <section id='home' className='home'>
      <div className='home__image'>
        <img src={myImage} alt='profile image' />
      </div>

      <div className='home__content'>
        <span className='home__content__hello'>hello,</span>
        <h1 className='home__content__text'>I'm <span className='home__content__text__name'> Noura Darwazeh</span><br /><Typing speed={60} text={['Frontend developer']} />
        </h1>
        <br />
        <p className='home__content__paragraph'>Front-end developer from Palestine, available for remote work anywhere in the world, and ready to work with others on web projects.</p>
        <br />
        <div className='home__content__socialMedia'>
          <Link className='home__content__socialMedia__link' to="https://www.facebook.com/noura.darwazeh.7?mibextid=2JQ9oc" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </Link>
          <Link className='home__content__socialMedia__link' to='https://www.linkedin.com/in/nouradarwazeh/'>
            <BsLinkedin />
          </Link>

          <Link className='home__content__socialMedia__link' to='https://instagram.com/noura_darwazeh2000?igshid=YTQwZjQ0NmI0OA=='>
            <FaInstagram />
          </Link>
        </div>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateY(550px)",
          }}
          end={{
            transform: "translatex(0px)"
          }}
        >
          <button className='home__content__downloadCvBtn'>
            <Link className='home__content__downloadCvBtn_link' to="https://app.enhancv.com/share/5614e77d/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic">
              My CV
            </Link>
          </button>
        </Animate>
      </div>


    </section>
  )
}

export default Home
