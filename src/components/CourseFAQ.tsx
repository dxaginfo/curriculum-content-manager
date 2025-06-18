import { useState } from 'react'
import { FAQ } from '../App'

type CourseFAQProps = {
  faqs: FAQ[]
}

export function CourseFAQ({ faqs }: CourseFAQProps) {
  const [expandedFAQs, setExpandedFAQs] = useState<Record<string, boolean>>({})
  
  const toggleFAQ = (index: number) => {
    setExpandedFAQs(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
      </div>
      
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {faqs.map((faq, index) => (
          <div key={index} className="overflow-hidden">
            <button
              className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</span>
              
              <svg
                className={`w-5 h-5 text-gray-500 transform ${expandedFAQs[index] ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            {expandedFAQs[index] && (
              <div className="px-6 pb-6 text-gray-700 dark:text-gray-300">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
