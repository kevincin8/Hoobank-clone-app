import React from 'react'
import style, { layout } from '../style'
import { Button } from './'
import { card } from '../assets'

const CardDeal = () => (
    <section className={`${layout.section} xl:px-0 sm:px-16 px-6`} >
        <div className={`${layout.sectionInfo} mr-0`}>
            <h2 className={`${style.heading2}`}>Find a better card deal <br className='hidden sm:block'/> in few easy steps</h2>
            <p className={`${style.paragraph} mt-5 max-w-[470px]`}>We've been researching and comparing credit cards for over 15 years. You can easily compare more than 270 Australian credit cards using our free tools. When you find one that suits, we'll take you securely to the bank's website.</p>
            <Button styles='mt-10' />
        </div>
        
        <div className={`${layout.sectionImg}`}>
            <img src={card} alt="card" className='w-[100%] h-[100%]' />
        </div>
    </section>
)


export default CardDeal