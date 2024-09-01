import React from 'react';
import ChiefCard from './ChiefCard';


const ChiefsSection = () => {
  const chiefs = [
    {
      name: 'Prosper Sibanda',
      img: '/img/chiefs/chief1.jpg',
      experience: '10 years',
      expertise: 'Artisan Baking',
    },
    {
      name: 'Rayan Jimu',
      img: '/img/b1.jpg',
      experience: '7 years',
      expertise: 'Artisan Baking',
    },
    {
      name: 'Alexander Ngozo',
      img: '/img/b1.jpg',
      experience: '12 years',
      expertise: 'Artisan Baking',
    },
    {
      name: 'Michael Dlamini',
      img: '/img/b1.jpg',
      experience: '4 years',
      expertise: 'Artisan Baking',
    },
    {
      name: 'Alice Nyathi',
      img: '/img/b1.jpg',
      experience: '6 years',
      expertise: 'Artisan Baking',
    },
    {
      name: 'Linda Ngwenya',
      img: '/img/b1.jpg',
      experience: '5 years',
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