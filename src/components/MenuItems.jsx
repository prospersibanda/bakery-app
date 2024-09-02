import React from 'react';
import CustomImage from "./CustomImage";

const MenuItems = ({item}) => {

  return (
    <div className='menu-card'>
        <CustomImage imgSrc={item.menuImg} pt="65%"/>
        <div className='menu-card-info'>
            <img className='auther-img' src={item.autherImg} alt="" />
            <p className='menu-title'>{item.name}</p>
            <p className='menu-desc'>{item.desc}</p>
            <a className='view-btn' href="#!">VIEW MENU</a>
        </div>
    </div>
  )
}

export default MenuItems