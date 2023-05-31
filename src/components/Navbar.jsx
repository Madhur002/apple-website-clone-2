import React from 'react'

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul>
        <a href='/contact'><i className="bi bi-apple apple"></i></a>
        <li><a href='/'>Store</a></li>
        <li><a href='/about'>Mac</a></li>
        <li><a href='/contact'>iPad</a></li>
        <li><a href='/contact'>iPhone</a></li>
        <li><a href='/contact'>Watch</a></li>
        <li><a href='/contact'>AirPods</a></li>
        <li><a href='/contact'>TV & Home</a></li>
        <li><a href='/contact'>Entertainment</a></li>
        <li><a href='/contact'>Accessories</a></li>
        <li><a href='/contact'>Support</a></li>
        <a href='/contact'><i className="bi bi-search search"></i></a>
        <a href='/contact'><i className="bi bi-bag bag"></i></a>
      </ul>
    </nav>
  )
}

export default Navbar
