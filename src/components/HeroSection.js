import React from 'react'
import CustomImage from './CustomImage';
const HeroSection = () => {
  const images = [
    "/img/b1.jpg",
    "/img/b2.jpg",
    "/img/b3.jpg",
    "/img/b4.jpg",
    "/img/b5.jpg",
    "/img/b6.jpg",
    "/img/b7.jpg",
    "/img/b8.jpg",
    "/img/b9.jpg",
  ]
  return (
    <div className='section hero'>
        <div className='col typography'>
            <h1 className='title'>What Are We About</h1>
            <p className='info'>BakeryooHub is a place where you can please your soul and tummy with deliciuos foods. And our service is absolutely free. So start exploring now</p>
            <button className='btn'>Explore Now</button>
        </div>
        <div className='col gallery'>
            { images.map( (src, index) => (
                 <CustomImage key={index} imgSrc={src} pt={"90%"}/>
            ))}
           

        </div>
    </div>
  )
}

export default HeroSection