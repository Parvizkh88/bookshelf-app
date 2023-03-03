import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to='/' className='navbar-link'>Home</Link>
            <Link to='/show-book' className='navbar-link'>Show Books</Link>
            <Link to='/add-book' className='navbar-link'> Add Book</Link>
        </nav>

    )
}

export default Navbar