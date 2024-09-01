import React from 'react'
import PreviousSection from '../components/PreviousSection'
import MenuItems from '../components/MenuItems'

const Menu = () => {
 
  return (
    <div>
        <PreviousSection/>
        <div className='menuItems-container'>
            <MenuItems/>
            <MenuItems/>
            <MenuItems/>
            <MenuItems/>
            <MenuItems/>
            <MenuItems/>
            <MenuItems/>
            <MenuItems/>
            <MenuItems/>
        </div>
    </div>
  )
}

export default Menu