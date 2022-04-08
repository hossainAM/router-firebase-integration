import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-center my-3'>
            <nav>
                <Link className='mr-3 text-black hover:text-orange-500' to='/'>Home</Link>
                <Link className='text-black hover:text-orange-500 mr-3'to='products'>Products</Link>
                <Link className='text-black hover:text-orange-500 mr-3'to='orders'>Orders</Link>
                <Link className='text-black hover:text-orange-500 mr-3'to='register'>Register</Link>
                <Link className='text-black hover:text-orange-500'to='login'>Login</Link>
            </nav>
        </div>
    );
};

export default Header;