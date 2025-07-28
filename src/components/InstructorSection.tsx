import { Section } from '@/types/api'

interface InstructorSectionProps {
  section: Section
}

export default function InstructorSection({ section }: InstructorSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {section.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {section.content}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {section.items?.map((instructor: any, index: number) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary-100 flex items-center justify-center">
                <svg className="w-12 h-12 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {instructor.name}
              </h3>
              <p className="text-primary-600 font-medium mb-2">
                {instructor.role}
              </p>
              <p className="text-gray-600">
                {instructor.experience} Experience
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 