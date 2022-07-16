import React from 'react'

import { Link } from 'react-router-dom'
import './header.css'
const Header = () => {
  return (
    
    <div className='header'>
        <Link to='/' className='title'>Quiz hub</Link>
        <hr className='hrLine'></hr>
    </div>
    
  )
}

export default Header