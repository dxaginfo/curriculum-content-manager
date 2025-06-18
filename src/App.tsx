import { useState } from 'react'
import { CourseHeader } from './components/CourseHeader'
import { CourseOverview } from './components/CourseOverview'
import { CourseCurriculum } from './components/CourseCurriculum'
import { CourseFAQ } from './components/CourseFAQ'

export type CourseSection = {
  id: string
  title: string
  duration: string
  lessons: CourseLesson[]
}

export type CourseLesson = {
  id: string
  title: string
  duration: string
  completed?: boolean
}

export type FAQ = {
  question: string
  answer: string
}

// Sample course data
const COURSE_DATA = {
  title: "Creating AI Movies: From Script to Screen",
  description: "Learn how to leverage AI tools to create stunning movies from concept to final product. This comprehensive course covers scriptwriting, image generation, editing, and final production.",
  learningOutcomes: [
    "Master the process of creating movie scripts with ChatGPT",
    "Generate compelling visuals using AI image generation tools",
    "Edit and enhance AI-generated images for professional results",
    "Combine all elements into a cohesive final product"
  ],
  targetAudience: [
    "Content creators looking to leverage AI tools",
    "Filmmakers interested in new production techniques",
    "Digital artists wanting to expand their skillset",
    "Anyone interested in the intersection of AI and creative arts"
  ],
  requirements: [
    "Basic computer skills",
    "No programming knowledge required",
    "Free or paid access to ChatGPT",
    "Access to image editing software (free options will be discussed)"
  ],
  sections: [
    {
      id: "section-1",
      title: "Intro To Making AI Movies",
      duration: "05:30",
      lessons: [
        { id: "lesson-1-1", title: "Course Overview", duration: "01:30" },
        { id: "lesson-1-2", title: "Understanding AI Tools", duration: "02:00" },
        { id: "lesson-1-3", title: "Planning Your First AI Movie", duration: "02:00" }
      ]
    },
    {
      id: "section-2",
      title: "Developing with ChatGPT",
      duration: "05:44",
      lessons: [
        { id: "lesson-2-1", title: "Writing Effective Prompts", duration: "01:44" },
        { id: "lesson-2-2", title: "Generating Movie Scripts", duration: "02:00" },
        { id: "lesson-2-3", title: "Refining Your Script", duration: "02:00" }
      ]
    },
    {
      id: "section-3",
      title: "Creating Our Images",
      duration: "08:22",
      lessons: [
        { id: "lesson-3-1", title: "Introduction to AI Image Generation", duration: "02:00" },
        { id: "lesson-3-2", title: "Crafting Perfect Image Prompts", duration: "02:22" },
        { id: "lesson-3-3", title: "Generating Scene Images", duration: "02:00" },
        { id: "lesson-3-4", title: "Character Consistency", duration: "02:00" }
      ]
    },
    {
      id: "section-4",
      title: "Image Editing",
      duration: "07:35",
      lessons: [
        { id: "lesson-4-1", title: "Basic Image Enhancement", duration: "01:35" },
        { id: "lesson-4-2", title: "Advanced Editing Techniques", duration: "02:00" },
        { id: "lesson-4-3", title: "Creating Consistency Across Scenes", duration: "02:00" },
        { id: "lesson-4-4", title: "Finalizing Your Visuals", duration: "02:00" }
      ]
    }
  ],
  faqs: [
    {
      question: "Do I need any prior experience with AI tools?",
      answer: "No, this course is designed for beginners. We'll guide you through every step of using the necessary AI tools."
    },
    {
      question: "What AI tools will we be using in this course?",
      answer: "We'll primarily use ChatGPT for script generation and AI image generators like Midjourney or DALL-E for visuals. We'll also cover some basic image editing tools."
    },
    {
      question: "How much will the required tools cost?",
      answer: "Many of the tools we use have free tiers that are sufficient for learning. We'll also discuss paid options and their benefits, but they're not required to complete the course."
    },
    {
      question: "Will I have a complete movie by the end of the course?",
      answer: "Yes! By following along with the lessons, you'll create a short AI-generated movie from concept to completion."
    },
    {
      question: "How long does it take to complete the course?",
      answer: "The course contains approximately 27 minutes of video content, but we recommend setting aside 2-3 hours to practice the techniques and complete your project."
    }
  ]
}

function App() {
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({})
  
  const toggleLessonCompletion = (lessonId: string) => {
    setCompletedLessons(prev => ({
      ...prev,
      [lessonId]: !prev[lessonId]
    }))
  }
  
  // Calculate progress
  const totalLessons = COURSE_DATA.sections.reduce(
    (total, section) => total + section.lessons.length, 0
  )
  
  const completedCount = Object.values(completedLessons).filter(Boolean).length
  const progressPercentage = totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0
  
  // Enhance the sections data with completion status
  const sectionsWithCompletion = COURSE_DATA.sections.map(section => ({
    ...section,
    lessons: section.lessons.map(lesson => ({
      ...lesson,
      completed: !!completedLessons[lesson.id]
    }))
  }))

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <CourseHeader 
        title={COURSE_DATA.title} 
        progress={progressPercentage} 
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <CourseOverview 
            description={COURSE_DATA.description}
            learningOutcomes={COURSE_DATA.learningOutcomes}
            targetAudience={COURSE_DATA.targetAudience}
            requirements={COURSE_DATA.requirements}
          />
          
          <CourseCurriculum 
            sections={sectionsWithCompletion} 
            onToggleCompletion={toggleLessonCompletion} 
          />
          
          <CourseFAQ 
            faqs={COURSE_DATA.faqs} 
          />
        </div>
      </main>
    </div>
  )
}

export default App
