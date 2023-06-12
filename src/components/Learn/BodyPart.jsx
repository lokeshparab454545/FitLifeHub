import React from 'react'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <div className='body-part' onClick={() => { setBodyPart(item); window.scrollTo({ top: 1200, left: 40, behavior: 'smooth' }) }}
      style={
        {
          borderTop: (bodyPart === item) ? '4px solid #ff2625' : '4px solid #000 ',
          color: (bodyPart === item) ? 'var(--primary-color)' : 'var(--heading-color) ',
        }
      }>
      <h3 style={{ textTransform: "capitalize" }}>{item}</h3>
    </div>
  )
}

export default BodyPart
