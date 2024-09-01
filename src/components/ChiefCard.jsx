import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; 

const ChiefCard = ({chief}) => {
  return (
    <div className='chief-card'>
        <img src={chief.img} alt="" />
        <div className='chief-card-info'>
          <h3 className='chief-name'>{chief.name}</h3>
          <p className='chief-experience'>Experience: <b>{chief.experience}</b></p>
          <p className='chief-expertise'>Expertise: <b>{chief.expertise}</b></p>
          <p className='chief-icons'>
              <FontAwesomeIcon icon={faFacebook}/>
              <FontAwesomeIcon icon={faTwitter}/>
              <FontAwesomeIcon icon={faInstagram}/>
          </p>
        </div>
    </div>
  )
}

export default ChiefCard