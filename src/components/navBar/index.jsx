import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import './styles.scss'
const data = [{
    label: 'HOME',
    to: '/'
},
{
    label: 'ABOUT ME',
    to: '/about'
},

{
    label: 'CONTACT',
    to: '/contact'
},
{
    label: 'PORTFOLIO',
    to: '/portfolio'
},
]
const Navbar = () => {
    const [toggelIcon, setToggelIcon] = useState(false)

    const handleToggelIcon = () => {
        setToggelIcon(!toggelIcon)
    }
    return (
        <div>
            <nav className='navbar'>
                <div className='navbar__container'>
                    <Link to={'/'} className='navbar__container__logo'>
                    NOURA
                    </Link>
                </div>

                <ul className={`navbar__container__menu ${toggelIcon ? 'active' : ''}`}>
                    {data.map((item, key) => (
                        <li key={key} className='navbar__container__menu__item'>
                            <Link className='navbar__container__menu__item__linkes' to={item.to}>
                                {item.label}

                            </Link>
                        </li>

                    ))
                    }
                </ul>

                <div className='nav-icon' onClick={handleToggelIcon}>
                    {
                        toggelIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar
