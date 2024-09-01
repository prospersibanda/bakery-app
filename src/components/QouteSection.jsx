import React from 'react';
import { FontAwesomeIcon, faQuote } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const QouteSection = () => {
  return (
    <div className='section quote'>
      <p className='quote-text'><FontAwesomeIcon icon={ faQuoteLeft}/>Food is everything we are.It's an extension of national feeling, your personal history, your province,your region, your tribe,your grandma. It's inseparable from those from the get go.
        <p className='quote-auther'>Antony Brother</p>
      </p>
    </div>
  )
}

export default QouteSection