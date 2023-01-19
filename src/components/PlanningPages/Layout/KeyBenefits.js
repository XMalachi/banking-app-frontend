import React from 'react'
import ConsultationForm from '../../Consultation/ConsultationForm'
import questions from "../../Faq/Faq.json";
import Banner from "../../Faq/Banner";

function KeyBenefits() {
  return (
    <div className='lg:grid lg:grid-cols-2 gap-4 mt-10'>
        <div>
            <div className='flex justify-center flex-col items-center'>
                <h2 className='text-2xl md:text-4xl text-center text-blue-900 uppercase'>Key Benefits</h2>
                <div className='h-1 bg-blue-900 w-36 mt-4'></div>
            </div>

            <div>
            {questions.map((question) => (
                <Banner.Entity key={question.id}>
                <Banner.Question>{question.question}</Banner.Question>
                <Banner.Text>{question.answer}</Banner.Text>
                </Banner.Entity>
            ))}
            </div>
            
        </div>
        
        

        <ConsultationForm />
    </div>
  )
}

export default KeyBenefits