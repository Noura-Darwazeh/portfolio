import React, { useState } from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import ImageOne from '../../assets/image/E-Commerce.png'
import ImageTwo from '../../assets/image/Salonati.jpg'
import ImageThree from '../../assets/image/Weather-App.PNG'
import './styles.scss';

const projects = [{
  id: 1,
  image: ImageOne,
  name: 'E-Commerce',
  date: 10 / 2023 - 11 / 2023,
  description: 'This is a front-end e-commerce website using React js with an easy-to-use interface for item management, browsing, and purchases. Explore, shop, log in, add items to their wishlists and carts, check item details, and place orders are all available to users.',
  link: 'https://github.com/Noura-Darwazeh/frontend-final-2',
},
{
  id: 2,
  image: ImageTwo,
  name: 'Salonati',
  date: 10 / 2023 - 11 / 2023,
  description: 'Achieved a 90% score on this project. I implemented a mobile app and website for booking an appointment in a specific beauty center using Flutter, Node js',
  link: 'https://github.com/Noura-Darwazeh/Graduation-project',

},
{
  id: 3,
  image: ImageThree,
  name: 'Weather App',
  date: 12 / 2023,
  description: 'Implemented weather website using react js , when user enter city name weather information for this city is displayed, such as temperature, wind speed, etc',
  link: 'https://github.com/Noura-Darwazeh/weather-app-using-react',

},

]
const Projects = () => {
  const [hoveredValue, setHoveredValue] = useState(null)
  function handleHover(index) {
    setHoveredValue(index);
  }
  return (
    <section id='projects' className='projects'>
      <PageHeaderContent headerText='my projects' />
      <div className='projects__content'>
        <div className='projects__content__cards'>
          {
            projects.map((item, index) => (
              <div className='projects__content__cards__item' index={item.id}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
              >
                <div className='projects__content__cards__item__img-wrapper'>
                  <a href={item.link}>
                    <img alt='item.name' src={item.image}></img>
                  </a>
                </div>
                <div className='projects__content__cards__item__description'>
                  <h3>{item.name}</h3>
                  <br />
                  <p>{item.description}</p>
                </div>

                <div className='overlay'>
                  {
                    index === hoveredValue && (
                      <div>
                        <a href={item.link}>
                          <button> View </button>
                        </a>
                      </div>
                    )
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Projects