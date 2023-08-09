import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <nav className='w-full flex py-6 justify-between items-center z-10 sticky top-0'>
            <img src={logo} alt="hoobank" className='logo w-[124px] h-[32px]' />

            <ul className='hidden sm:flex justify-center items-center'>
                {navLinks.map((link, index) => (
                    <li className={`font-poppins cursor-pointer  hover:text-secondary ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`} key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img onClick={() => setToggle((prev) => !prev)} src={`${toggle ? close : menu}`} alt="menu" className='cursor-pointer h-[28px w-[28px] object-contain' />
            </div>

            <div className={`${toggle ? 'flex' : 'hidden'} 
            rounded-xl justify-center sidebar p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px]`}>
                <ul className='flex flex-col items-center justify-center'>
                    {navLinks.map((link, index) => (
                        <li className={`font-poppins cursor-pointer hover:text-secondary ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`} key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar