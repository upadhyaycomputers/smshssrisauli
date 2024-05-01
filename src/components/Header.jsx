import logo from '../assets/images/favicon.png'
import adopen from '../assets/images/adopen.gif'
import close from '../assets/images/close.svg'
import menu from '../assets/images/menu.svg'

import {socials} from '../constants'
import {navLinks} from '../constants'

import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [toggle, setToggle] = useState(false)

  return (
    <div className='w-full h-full'>
        <div className='w-full h-full bg-primary-color p-2 text-white flex justify-end'>
            <div className='flex gap-4'>
                <a href='tel:+919999999999' className='flex items-center gap-2'>
                    <i className='uil uil-phone'></i>
                    <span>97196 33243</span>
                </a>

                <a href='mailto:' className='flex items-center gap-2'>
                    <i className='uil uil-envelope'></i>
                    <span>
                        email@gmail.com
                    </span>
                </a>
            </div>
        </div>

        <header className={`w-full flex items-center justify-between py-2 sm:px-4 px-2`}>
            <div className='flex items-center justify-between lg:justify-start gap-4 md:gap-6'>
                <div className='w-0 h-0 md:w-40 md:h-24 '>
                    <img src={logo} alt='School Logo' className='w-full h-full object-contain' />
                </div>

                <div className='flex flex-col xl:gap-[0.4rem] lg:ml-2'>
                    <h1 className='primary-heading'>
                        SHREE MAHUNRAM SMARAK H.S. SCHOOL
                    </h1>

                    <h4 className='subtitle'>
                        VILLAGE RISAULI, BUDAUN, (UTTAR PRADESH) - 243633
                    </h4>
                </div>
            </div>

            <div className='flex items-center gap-8'>
                <ul className='hidden md:flex text-[1.5rem] gap-2'>
                    {socials.map((social) => (
                        <li key={social.title}>
                            <a href={social.link} target='_blank'>
                                <i className={`uil uil-${social.title.toLowerCase()}`}></i>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className='hidden lg:inline-block mr-6'>
                    <img src={adopen} alt='Admission Open' className='w-24 h-24'/>
                </div>
            </div>

            <div className='md:hidden flex justify-end items-center relative'>
                <img src={toggle ? close : menu} alt="menu" onClick={() => setToggle(prev => !prev)} className='w-[28px] h-[28px] object-contain' />

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 absolute top-10 right-0 mx-4 my-2 min-w-[140px] bg-secondary-color rounded-xl z-[9999]`}>
                    <ul className='flex flex-col items-center py-4 px-2 gap-4'>
                        {navLinks.map((navLink, index) => (
                            <li key={index}>
                                <Link to={navLink.link} className= 'text-white subtitle font-poppins font-light cursor-pointer hover:text-black duration-[0.3s]'>
                                    {navLink.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>

        <hr className='w-full p-2 bg-primary-color md:hidden' />
    </div>
  )
}
