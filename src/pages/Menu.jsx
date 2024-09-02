import React from 'react'
import PreviousSection from '../components/PreviousSection'
import MenuItems from '../components/MenuItems'

const Menu = () => {
  const menuItems = [
    {
      menuImg:'/img/menu/choc.jpg',
      autherImg: '/img/chiefs/alice.jpg',
      name: 'Classic Chocolate Cake',
      desc: 'Rich chocolate layers with creamy frosting and a touch of vanilla',
    },
    {
      menuImg:'/img/menu/berry.jpg',
      autherImg: '/img/chiefs/alex.jpg',
      name: 'Fresh Berry Tart',
      desc: 'A crisp crust filled with vanilla cream, topped with fresh seasonal berries.',
    },
    {
      menuImg:'/img/menu/muffins.jpg',
      autherImg: '/img/chiefs/chief1.jpg',
      name: 'Cinnamon Swirl Muffins',
      desc: 'Soft muffins with a sweet cinnamon swirl, perfect for a morning treat.',
    },
    {
      menuImg:'/img/menu/lemon.jpg',
      autherImg: '/img/chiefs/linda.jpg',
      name: 'Lemon Drizzle Cake',
      desc: 'Zesty lemon cake with a tangy glaze; refreshing and light.',
    },
    {
      menuImg:'/img/menu/brownies.jpg',
      autherImg: '/img/chiefs/rayan.jpg',
      name: 'Caramel Pecan Brownies',
      desc: 'Decadent brownies topped with rich caramel and crunchy pecans.',
    },
    {
      menuImg:'/img/menu/vanilla.jpg',
      autherImg: '/img/chiefs/alice.jpg',
      name: 'Vanilla Bean Cupcakes',
      desc: 'Light and airy cupcakes with a rich vanilla bean frosting.',
    },
    {
      menuImg:'/img/menu/spice.jpg',
      autherImg: '/img/chiefs/mic.jpg',
      name: 'Pumpkin Spice Cheesecake',
      desc: 'Creamy cheesecake with a hint of pumpkin spice; perfect for fall.',
    },
    {
      menuImg:'/img/menu/marple.jpg',
      autherImg: '/img/chiefs/chief1.jpg',
      name: 'Maple Walnut Scones',
      desc: 'Buttery scones with a hint of maple and crunchy walnut bits.',
    },
    {
      menuImg:'/img/menu/mocha.jpg',
      autherImg: '/img/chiefs/rayan.jpg',
      name: 'Mocha Cream Puff',
      desc: 'Light cream puff filled with rich mocha cream; a delightful coffee-infused treat.',
    },
  ]
  return (
    <div className='container'>
        <PreviousSection/>
        <div className='menuItems-container'>
           {menuItems.map((item, index) => (
            <MenuItems key={index} item={item} />
           ))}
        </div>
    </div>
  )
}

export default Menu