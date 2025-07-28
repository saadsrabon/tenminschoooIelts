import { Checklist } from '@/types/api'

interface ChecklistSectionProps {
  checklist: Checklist[]
}

export default function ChecklistSection({ checklist }: ChecklistSectionProps) {
  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What's Included in This Course
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to succeed in your IELTS exam
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {checklist.map((item) => (
            <div key={item.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">
                    {item.icon || '✓'}
                  </span>
                </div>
                <p className="text-gray-900 font-medium">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 