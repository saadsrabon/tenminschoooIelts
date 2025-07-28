import { Section } from '@/types/api'

interface LearningPointsSectionProps {
  section: Section
}

export default function LearningPointsSection({ section }: LearningPointsSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          {section.name}
        </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {section.content}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {section.items?.map((point: string, index: number) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-lg text-gray-900 font-medium">
                  {point}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 