import React from 'react'
import ButtonP from '../Button/ButtonP'
import './Consultation.css'

import { BsFillDice2Fill } from "react-icons/bs";
function WhySave() {
  return (
    <div className='whySave'>
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-900 text-white">
            <BsFillDice2Fill className="h-6 w-6" aria-hidden="true" />
        </div>
        <h2 className='text-4xl my-10'>
            Why Save With EastDale Finance
        </h2>

        <p  className='text-lg my-10'>
            Your savings will be secure and ethical. Credit Unions use their savings to lend to their members.
            We don&apos;t have shareholders. We are a financial co-operative: an organisation owned by its members, 
            for the benefit of its members. Competitive savings rates We strive to provide our members with 
            competitive rates on their savings. Our fixed term savings bonds are popular and can become 
            quickly oversubscribed. So keep a look out for new offers.
        </p>

        <ButtonP text="Contact Us" link="contact"/>
    </div>
  )
}

export default WhySave