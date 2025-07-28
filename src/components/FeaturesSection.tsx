import { Section } from '@/types/api'

interface FeaturesSectionProps {
  section: Section
}

export default function FeaturesSection({ section }: FeaturesSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {section.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {section.content}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {section.items?.map((feature: string, index: number) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-600 font-bold text-lg">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 