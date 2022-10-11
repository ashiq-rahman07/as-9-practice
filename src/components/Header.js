import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Statiks', path: '/staticks' },
        { id: 3, name: 'Blog', path: '/blog' },
    ]
    return (
    <nav>
         
   <Link to='/'>Home</Link>
    <Link to='/staticks'>Statiks</Link>
   <Link to='/blog'>Blog</Link>
 </nav> 

    );
};

export default Header;
