import React from 'react'

const ImproveSection = () => {
  const list = [
    "Baking with Passion",
    "Delivering Warmth Daily",
    "Bringing Joy to Every Bite",
    " Crafting Fresh Delights",
    "Embracing Community Spirit",
    "Serving with a Smile",
  ]
  return (
    <div className='section improve-section'>
          <div className='col img'>
              <img src="/img/b5.jpg" alt="" />
          </div>
          <div className='col typography'>
              <h1 className='title'>Bakery's Essence</h1>
              { list.map((item, index) => (
                <p className='section-item' key={index}>{item}</p>
              ))}
              <button className='btn'>signup now</button>
          </div>
    </div>
  )
}

export default ImproveSection