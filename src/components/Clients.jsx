import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Clients = () => (
    <section id='clients' className={`${styles.flexCenter}  flex-wrap w-full xl:px-0 sm:px-16 px-6`}>
        {clients.map(client => (
            <div key={client.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}>
                <img src={client.logo} alt='client ' className='sm:w-[192px] w-[100px] object-contain'/>
            </div>
        ))}
    </section>
)


export default Clients