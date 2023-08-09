import React from 'react'
import styles, { layout } from '../style'
import { Button } from './'
import { features } from '../constants'


const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex p-6 rounded-[20px] ${index !== features.length -1 ? "mb-6" : "mb-0"}`}>
        <div className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}>
            <img src={icon} alt="icon" className='h-[50%] w-[50%] object-contain' />
        </div>
        <div className="flex flex-1 flex-col ml-3">
            <h4 className='font-poppins font-semibold text-[18px] leading-[23px]] mb-1'>{title}</h4>
            <p className={`font-poppins font-normal text-dimWhite text-[16px] leading-[24px]] mb-1`}>{content}</p>
        </div>
    </div>
)

const Business = () => (
    <section className={`${layout.section} xl:px-0 sm:px-16 px-6`}>
        <div className={`${layout.sectionInfo}`}>
            <h2 className={`${styles.heading2}`}>You do the business, <br className='sm:block hidden' /> we'll handle the money.</h2>
            <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market</p>
            <Button styles="mt-10" />
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
            {features.map((feature, index) => <FeatureCard key={feature.id} index={index} {...feature} />)}
        </div>
    </section>
)

export default Business