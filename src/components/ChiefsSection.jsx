import React from 'react';
import ChiefCard from './ChiefCard';


const ChiefsSection = () => {
  const chiefs = [
    {
      name: 'Prosper Sibanda',
      img: '/img/b1.jpg',
      experience: '10 years',
      expertise: 'Artisan Baking',
    },
    {
      name: 'Prosper Sibanda',
      img: '/img/b1.jpg',
      experience: '10 years',
      expertise: 'Artisan Baking',
    },
    {
      name: 'Prosper Sibanda',
      img: '/img/b1.jpg',
      experience: '10 years',
      expertise: 'Artisan Baking',
    },
    {
      name: 'Prosper Sibanda',
      img: '/img/b1.jpg',
      experience: '10 years',
      expertise: 'Artisan Baking',
    },
    {
      name: 'Prosper Sibanda',
      img: '/img/b1.jpg',
      experience: '10 years',
      expertise: 'Artisan Baking',
    },
    {
      name: 'Prosper Sibanda',
      img: '/img/b1.jpg',
      experience: '10 years',
      expertise: 'Artisan Bking',
    },
  ]
  return (
    <div className='section chiefs'>
        <h1 className='title'>Our Top Chiefs</h1>
        <div className='top-chiefs-container'>
          { chiefs.map(chief => <ChiefCard key={chief.name} chief={chief}/> ) }
        </div>
    </div>
  )
}

export default ChiefsSection