import React from 'react'
import { apple, bill, google } from '../assets'
import {Button} from './'
import styles, { layout } from '../style'

const Billing = () => (
    <section id='product' className={`${layout.sectionReverse} xl:px-0 sm:px-16 px-6`}>
        <div className={`${layout.sectionImgReverse}`}>
            <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
        </div>

        <div className={`${layout.sectionInfo}`}>
            <h2 className={styles.heading2}> Easily control your <br className='hidden sm:block' /> billing  & invoicing.</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>We consider the payment methods you'll offer your customers when you start your business. This is an important part of managing your business cash flow and meeting your customer's needs.</p>
            <div className={`${styles.flexStart} sm:mt-10 mt-6`}>  
                <img src={apple} alt="apple store" className='mr-6 w-[128px] h-[42px] object-contain cursor-pointer' />
                <img src={google} alt="google store" className='w-[128px] h-[42px] object-contain cursor-pointer' />
            </div>
        </div>
    </section>
)


export default Billing