import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const QouteSection = () => {
  return (
    <div className='section quote'>
      <p className='quote-text'><FontAwesomeIcon icon={ faQuoteLeft}/>Every day is sweeter at BakeryDoughHub. Indulge in our handcrafted delights, where each bite is made with love, passion, and the finest ingredients to bring joy and warmth to your day.
        <p className='quote-auther'>Antony Brother</p>
      </p>
    </div>
  )
}

export default QouteSection