import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {

    Bars3BottomRightIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='relative flex items-center justify-between'>
                <div className='text-4xl font-bold'>
                    <h3>Life Changing</h3>
                </div>
            

                {/* Nav Items Section */}
                <ul className='items-center hidden space-x-8 lg:flex font-semibold text-1xl'>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/Statistics'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Statistics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/AppliedJobs'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            AppliedJobs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/Blog'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Start Applying
                    </button>

                    </li>
                    
                </ul>
                {/* Mobile Navbar Section */}
                <div className='lg:hidden'>
                    {/* Dropdown Open Button */}
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Bars3BottomRightIcon className='w-5 text-gray-600' />
                    </button>
                    {isMenuOpen && (
                        <div className='absolute top-0 left-0 w-full z-10'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                {/* Logo & Button section */}
                                <div className='flex items-center justify-between mb-4'>
                                   
                                    {/* Dropdown menu close button */}
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <XMarkIcon className='w-5 text-gray-600' />
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile Nav Items Section */}
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <Link to='/' className='default'>
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/Statistics'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                Statistics
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/AppliedJobs'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                AppliedJobs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/Blog'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                Blog
                                            </Link>
                                        </li>
                                        <Link>
                                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                                            Start Applying
                                        </button>
                                        </Link>
                                       
                                       
                                       
                                        
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Header;

// import React from 'react';
// import { BeakerIcon } from '@heroicons/react/24/solid'

// const Header = () => {
//     return (
//         <div className=''>
            
//             <div>
//                 <BeakerIcon className="h-6 w-6 text-blue-500" />
//             </div>
//             <h1>this is a header section</h1>

//         </div>
//     );
// };

// export default Header;