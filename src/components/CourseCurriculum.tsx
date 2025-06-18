import { useState } from 'react'
import { CourseSection } from '../App'

type CourseCurriculumProps = {
  sections: CourseSection[]
  onToggleCompletion: (lessonId: string) => void
}

export function CourseCurriculum({ sections, onToggleCompletion }: CourseCurriculumProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    [sections[0]?.id]: true // Expand the first section by default
  })
  
  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Course Curriculum</h2>
      </div>
      
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {sections.map((section) => (
          <div key={section.id} className="overflow-hidden">
            <button
              className="flex justify-between items-center w-full p-6 focus:outline-none"
              onClick={() => toggleSection(section.id)}
            >
              <div className="flex items-center">
                <span className="text-lg font-medium text-gray-900 dark:text-white">{section.title}</span>
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">({section.duration})</span>
              </div>
              
              <svg
                className={`w-5 h-5 text-gray-500 transform ${expandedSections[section.id] ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            {expandedSections[section.id] && (
              <div className="px-6 pb-6 pt-2 space-y-4">
                {section.lessons.map((lesson) => (
                  <div key={lesson.id} className="flex justify-between items-center">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id={lesson.id}
                        checked={lesson.completed}
                        onChange={() => onToggleCompletion(lesson.id)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label 
                        htmlFor={lesson.id} 
                        className={`ml-3 text-sm font-medium ${lesson.completed ? 'text-gray-400 line-through dark:text-gray-500' : 'text-gray-700 dark:text-gray-300'}`}
                      >
                        {lesson.title}
                      </label>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{lesson.duration}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
