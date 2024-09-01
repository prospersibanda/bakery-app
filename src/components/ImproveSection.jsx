import React from 'react'

const ImproveSection = () => {
  const list = [
    "Learn New recipes",
    "Learn New recipes",
    "Learn New recipes",
    "Learn New recipes",
    "Learn New recipes",
    "Learn New recipes",
  ]
  return (
    <div className='section improve-section'>
          <div className='col img'>
              <img src="/img/b5.jpg" alt="" />
          </div>
          <div className='col typography'>
              <h1 className='title'>What Are We About</h1>
              { list.map((item, index) => (
                <p className='section-item' key={index}>{item}</p>
              ))}
              <button className='btn'>signup now</button>
          </div>
    </div>
  )
}

export default ImproveSection