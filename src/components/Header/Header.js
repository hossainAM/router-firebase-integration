import React from 'react';
import { NavLink } from 'react-router-dom';
// import useFirebase from '../hooks/useFirebase';//custom hook
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Header = () => {
    // const {user, handleSignOut} = useFirebase();
    const [user] = useAuthState(auth)
    return (
        <nav className='bg-red-700 p-3'>
           <div className="container mx-auto">
               <div className='sm:flex justify-around'>
                   <a target="_blank" rel="noreferrer" href="https://majestic-sprite-6cec97.netlify.app/" className='text-white text-3xl font-bold p-3'>ROUTER FIREBASE INTEGRATION</a>

                    <ul className='text-gray-400 sm:self-center text-xl border-t sm:border-none'>
                    <li className='sm:inline-block'>
                        <NavLink style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} className='p-3 hover:text-white' to="/">Home</NavLink>
                    </li>
                    <li className='sm:inline-block'>
                        <NavLink style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} className='p-3 hover:text-white' to="/products">Products</NavLink>
                    </li>
                    <li className='sm:inline-block'>
                        <NavLink style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} className='p-3 hover:text-white' to="/orders">Orders</NavLink>
                    </li>
                    <li className='sm:inline-block'>
                        <NavLink style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} className='p-3 hover:text-white' to="/register">Register</NavLink>
                    </li>
                   { user?.uid 
                   ? 
                   <li className='sm:inline-block'>
                        <NavLink onClick={() => signOut(auth)}style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} className='p-3 hover:text-white' to="/login">Logout</NavLink>
                    </li>
                    :
                    <li className='sm:inline-block'>
                        <NavLink style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} className='p-3 hover:text-white' to="/login">Login</NavLink>
                    </li>
                    }
                </ul>
               </div>
           </div>
        </nav>
    );
};

export default Header;