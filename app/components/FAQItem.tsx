// components/FAQItem.tsx
"use client";
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-300 py-4 transition duration-300 ease-in-out transform hover:scale-105">
      <button
        onClick={toggleAnswer}
        className={`w-full text-left flex justify-between items-center text-lg font-semibold transition-colors duration-200 
                    ${isOpen ? 'text-blue-600' : 'text-blue-800'}`}
      >
        {question}
        <span className={`text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <p className="mt-2 text-gray-700 leading-relaxed transition-opacity duration-300">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQItem;
