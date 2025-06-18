type CourseHeaderProps = {
  title: string
  progress: number
}

export function CourseHeader({ title, progress }: CourseHeaderProps) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h1>
        
        <div className="mt-4">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Course Progress</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </header>
  )
}
