import React from 'react'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'
import styles from '../style'

const Footer = () => (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className='flex-1 flex flex-col items-start justify-start mr-10'>
                <img src={logo} alt="hoobank" className='ml-[-20px] w-[260px] h-[62px] object-contain' />
                <p className={`${styles.paragraph} mt-5 max-w-[310px]`}>A new way to make payments easy, reliable and secure.</p>
            </div>

            <div className='flex-[1.5] flex w-full flex-wrap justify-between md:mt-0 mt-10'>
                {footerLinks.map(footerLink => (
                    <div key={footerLink.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                        <h4 className='font-poppins font-medium text-18px leading-[27px]'>{footerLink.title}</h4>
                        <ul className='mt-4'>
                            {footerLink.links.map(link => (
                                <li key={link.name} className='font-poppins font-normal text-16px 
                                leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-2' >{link.name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className='flex flex-col w-full justify-between items-center md:flex-row'>
            <p className='font-poppins font-normal text-center text-18px leading-[27px]'>
                2021 HooBank. All Rights Reserved
            </p>
            <div className='flex flex-row md:mt-0 mt-6'>
                {socialMedia.map((social, index) => <img
                    key={index}
                    src={social.icon}
                    alt={social.id}
                    className={`h-[21px] w-[21px] object-contain cursor-pointer ${index !== socialMedia.length ? 'mr-6' : 'mr-0'}`} />)}
            </div>
        </div>
    </footer>
)


export default Footer