import React from 'react'
import { feedback } from '../constants'
import styles, {layout} from '../style'
import { FeedbackCard } from './'

const Testimonials = () => (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className={`w-full flex flex-col items-start justify-between md:items-center md:flex-row sm:mb-16 mb-6`}>
            <h1 className={`${styles.heading2}`}> What people are <br className='hidden sm:block'/> saying about us </h1>
            <p className={`${styles.paragraph}text-start mt-5 md:mt-0 md:text-left max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>

        <div className='flex flex-wrap justify-center sm:justify-start w-full feedback-container'>
            {feedback.map(card => <FeedbackCard key={card.id} {...card} />)}
        </div>
    </section>
)


export default Testimonials