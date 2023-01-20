import React from 'react'
import "./Planning.css"
import SideSlider from './Layout/SideSlider'

function Insurance() {
  return (
    <div>
        <div className='flex justify-center flex-col items-center'>
              <h2 className='text-lg md:text-xl font-bold text-center text-blue-900 uppercase'>Insurance Planning</h2>
              <div className='h-1 bg-blue-900 w-36 mt-4'></div>
        </div>
        
        <div className='lg:grid lg:grid-cols-3 lg:justify-between'>
            <div className='planningImage bg-slate-600 mt-10 w-full lg:col-span-2'>
              <img 
                src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                alt='tax planning'
                className='w-full h-full'
              />
            </div>

           
          
            <div className='mt-10 lg:col-span-1'>
                <SideSlider
                    headone="A well-planned insurance"
                    headonecall="A well-planned insurance policy helps to minimise the financial risks associated with illness, accidents, death, etc."
                    headtwo="Health Insurance Plans"
                    headtwocall="There are health insurance plans that offer coverage for medical emergencies, hospitalisation expenses, medications, doctor consultations, etc."
                />
            </div>
        </div>

        <div className='my-10 p-10 bg-blue-50'>
          <h2 className='text-2xl md:text-4xl text-blue-900 mb-4'>How We Perform Commodities Trading</h2>
          <p className='text-md leading-loose md:text-lg'>
            <div>
            <h3 className='text-lg text-red-200 font-bold my-8'>Health Insurance</h3>
            Health insurance policies are relevant due to the fact that medical emergencies are a part of everyone&apos;s 
            life. Such plans provide much-needed coverage to cover the costs related to disease management, hospitalisation, etc., 
            depending on the terms of a policy.
            Healthcare costs are constantly increasing and turning unaffordable for many families. Patients are paying a lot of money
             for quality healthcare, expert consultations and medications. Health insurance can help in this regard by offering timely
              financial assistance. Health insurance policies are relevant due to the fact that medical emergencies are a part of everyone’s 
            life. Such plans provide much-needed coverage to cover the costs related to disease management, hospitalisation, etc., 
            depending on the terms of a policy.
            Healthcare costs are constantly increasing and turning unaffordable for many families. Patients are paying a 
            lot of money for quality healthcare, expert consultations and medications. Health insurance can help in this 
            regard by offering timely financial assistance. 
            </div>
            
          </p>

          <div>
          <h3 className='text-lg text-red-200 font-bold my-8'>Motor Insurance</h3>
                The Motor Vehicles Act, 1988 states that all two and four-wheelers must be insured with at least third-party insurance. 
                A Third-party Insurance Policy covers third-party liabilities like property damage. 
                Beyond that, you can choose a Comprehensive Motor Insurance policy for coverage against vehicle damages, vehicle loss, vehicle theft, and other calamities. It can be car insurance, bike insurance, etc., depending
                on the types of vehicles you own. Such a policy allows you to enhance the coverage with add-ons. 
          </div>

          <div>
          <h3 className='text-lg text-red-200 font-bold my-8'>Term Insurance</h3>
            With term insurance, you get financial coverage against the chances of premature death. Such a policy 
            contains a specific tenure. The compensation specified in the policy is paid to the nominees if the 
            insured person dies within the tenure of the policy. 

            The uncertainty of life makes this type of insurance important, especially if you are the bread-earner of your
            family. In case the earning member of the family dies, the compensation under the policy helps the family to 
            remain financially stable. You can look for all-inclusive term insurance policies that provide
            coverage against various instances such as accidental deaths, terminal illnesses, and critical diseases. 
          </div>
        </div>
        
    </div>
  )
}

export default Insurance