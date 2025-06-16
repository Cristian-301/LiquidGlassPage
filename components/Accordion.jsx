'use client'

import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

export default function Accordion({questionData}) {
  const [isOpen, setIsOpen] = useState(null); // State to track which dropdown is open

    const handleToggle = (index) => {
        console.log("CIAO ", index)
        setIsOpen(isOpen === index ? null : index);
    };

    return <>
    {questionData.map((item, index) => (
              <div key={index} className='faq-item border-2 border-white p-4 mb-4'>
                <div 
                  className='faq-question text-lg font-semibold cursor-pointer text-start text-slate-100 flex justify-between align-center'
                  onClick={() => handleToggle(index)} 
                >
                  {item.domanda}
                  <span className='flex'>
                    <FiChevronRight className={`text-slate-50 transition-transform duration-300 my-auto transform ${isOpen === index ? 'rotate-90' : ''}`} />
                  </span>
                </div>
                {isOpen === index && ( 
                  <div className='faq-answer text-start text-slate-100 mt-6'>{item.risposta}</div>
                )}
              </div>
            ))}
    </>
}