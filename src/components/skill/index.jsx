import React from 'react'
import './styles.scss'

const Skill = (props) => {
  const { skillIcon, skillTitle } = props
  return (
    <div className='skill' id='skill'>
      <span className='skill__skillIcon'>{skillIcon}</span>
      <p className='skill__skillTitle'>{skillTitle}</p>
    </div>
  )
}

export default Skill
