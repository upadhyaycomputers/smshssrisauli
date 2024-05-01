import { Link } from 'react-router-dom'

import {navLinks} from '../constants'

export default function Navbar() {
    const activeNavLink = window.location.pathname;

  return (
    <nav className='w-full bg-primary-color hidden md:flex justify-center mt-4'>
        <ul className='w-full max-w-7xl flex justify-around items-center py-4 px-2'>
            {navLinks.map((navLink, index) => (
                <li key={index}>
                    <Link to={navLink.link} className={`${navLink.link === activeNavLink ? 'text-secondary-color' : 'text-white'} subtitle font-poppins font-light cursor-pointer hover:text-secondary-color duration-[0.3s]`}>
                        {navLink.title}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}
