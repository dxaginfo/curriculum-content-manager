import { useState } from 'react'

type CourseOverviewProps = {
  description: string
  learningOutcomes: string[]
  targetAudience: string[]
  requirements: string[]
}

export function CourseOverview({ 
  description, 
  learningOutcomes, 
  targetAudience, 
  requirements 
}: CourseOverviewProps) {
  const [activeTab, setActiveTab] = useState('description')
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex">
          <button
            className={`px-4 py-4 text-sm font-medium ${activeTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            className={`px-4 py-4 text-sm font-medium ${activeTab === 'learn' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
            onClick={() => setActiveTab('learn')}
          >
            What You'll Learn
          </button>
          <button
            className={`px-4 py-4 text-sm font-medium ${activeTab === 'audience' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
            onClick={() => setActiveTab('audience')}
          >
            Who This is For
          </button>
          <button
            className={`px-4 py-4 text-sm font-medium ${activeTab === 'requirements' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
            onClick={() => setActiveTab('requirements')}
          >
            Requirements
          </button>
        </nav>
      </div>
      
      <div className="p-6">
        {activeTab === 'description' && (
          <div className="text-gray-700 dark:text-gray-300">
            <p>{description}</p>
          </div>
        )}
        
        {activeTab === 'learn' && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">What You'll Learn</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {learningOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {activeTab === 'audience' && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Who This Course is For</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {targetAudience.map((audience, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  <span>{audience}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {activeTab === 'requirements' && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Requirements</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-gray-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
