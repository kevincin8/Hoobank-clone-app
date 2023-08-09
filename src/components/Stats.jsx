import React from 'react'
import styles, {layout} from '../style'
import { stats } from '../constants'

const Stats = () => (
    <section id='features' className={`${styles.flexCenter} flex-wrap mb-6 sm:mb-20 xl:px-0 sm:px-16 px-6`}>
        {stats.map(stat => (
            <div key={stat.id} className={`flex flex-1 justify-start items-center m-3`}>
                <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] mr-4'>{stat.value}+</h4>
                <p className='font-poppins xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase'>{stat.title}</p>
            </div>
        ))}
    </section>
)


export default Stats