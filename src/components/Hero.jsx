import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import { GetStarted } from './'

const Hero = () => (
    <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                <img src={discount} alt="discount" className='h-[32px] w-[32px]' />
                <p className={`${styles.paragraph} ml-2`}>
                    <span className='text-white'>20%</span> Discount For {" "}
                    <span className='text-white'>1 Month</span> Account
                </p>
            </div>

            <div className="flex justify-between items-center w-full"   >
                <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]'>
                    The Next <br className='sm:block hidden' /> {" "}
                    <span className='text-gradient'>Generation</span>
                </h1>
                <div className="ss:flex hidden md:mr-4 mr-0">
                    <GetStarted />
                </div>
            </div>

            <h1 className="font-poppins font-semibold ss:text-[65px] text-[52px] ss:leading-[100px] leading-[75px] w-full">Payment Method</h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team of experts use a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees</p>
        </div>

        <div>
            <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-5" />
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}><GetStarted/> </div>
    </section>
)


export default Hero