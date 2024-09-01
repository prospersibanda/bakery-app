import React from 'react';
import CustomImage from "./CustomImage";

const MenuItems = () => {
  return (
    <div className='menu-card'>
        <CustomImage imgSrc="/img/b1.jpg" pt="65%"/>
        <div className='menu-card-info'>
            <img className='auther-img' src="/img/chiefs/chief1.jpg" alt="" />
            <p className='menu-title'>Scones</p>
            <p className='menu-desc'>Hi am a scone</p>
            <a className='view-btn' href="#!">VIEW MENU</a>
        </div>
    </div>
  )
}

export default MenuItems