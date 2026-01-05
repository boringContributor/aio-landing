import { Course } from '@/lib/api'
import { SimpleLayout } from '../simple-layout'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { useState } from 'react'


type CourseProps = {
  courses: Course[]
}


export default function Courses(props: CourseProps) {
  return (
    <SimpleLayout title="Kurse" id="kurse">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
        {props.courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </SimpleLayout>
  )
}


const CourseCard = ({ course }: { course: Course }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Card Content */}
      <div className="p-6 sm:p-8">
        {/* Header with title and instructors */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight flex-1">
            {course.title}
          </h3>

          {/* Instructors */}
          {course.people.length > 0 && (
            <div className="flex -space-x-2 flex-shrink-0">
              {course.people.map((person) => (
                <img
                  key={person.url}
                  className="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-full bg-gray-100 ring-4 ring-white shadow-md"
                  src={person.url}
                  alt={course.title}
                />
              ))}
            </div>
          )}
        </div>

        {/* Description - collapsible */}
        <div
          className={`prose prose-sm sm:prose-base prose-gray max-w-none transition-all duration-300 ${
            isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-[120px] overflow-hidden'
          }`}
        >
          <div className={`relative ${!isExpanded ? 'line-clamp-4' : ''}`}>
            <RichText
              content={course.description?.raw}
              renderers={{
                ul: ({ children }) => <ul className="list-disc pl-5 space-y-1 mt-2">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-5 space-y-1 mt-2">{children}</ol>,
                p: ({ children }) => <p className="text-gray-700 leading-relaxed">{children}</p>
              }}
            />
          </div>

          {/* Gradient overlay when collapsed */}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          )}
        </div>

        {/* Expand/Collapse button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-700 hover:text-red-900 transition-colors group/btn"
        >
          <span>{isExpanded ? 'Weniger anzeigen' : 'Mehr erfahren'}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Subtle hover accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-100/0 group-hover:from-red-50/30 group-hover:to-red-100/20 transition-all duration-300 pointer-events-none rounded-2xl" />
    </div>
  )
}