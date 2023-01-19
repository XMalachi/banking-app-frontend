import React from "react";
import questions from "./Faq.json";
import Banner from "./Banner";
 function Faq() {
  return (
    <div className="faq">
        <Banner >
            <Banner.Header>Frequently Asked Questions</Banner.Header>
            <div className="bg-blue-900 h-2 w-4/12 mb-4"/>
            {questions.map((question) => (
                <Banner.Entity key={question.id}>
                <Banner.Question>{question.question}</Banner.Question>
                <Banner.Text>{question.answer}</Banner.Text>
                </Banner.Entity>
            ))}
            
        </Banner>
    </div>
    
  );
}

export default Faq