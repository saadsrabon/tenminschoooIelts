import { ApiResponse } from '@/types/api'

const API_BASE_URL = 'https://api.10minuteschool.com/discovery-service/api/v1'

export async function fetchProductData(lang: 'en' | 'bn' = 'en'): Promise<ApiResponse> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/products/ielts-course?lang=${lang}`,
      {
        headers: {
          'X-TENMS-SOURCE-PLATFORM': 'web',
          'accept': 'application/json',
        },
        next: { revalidate: 3600 }, // Revalidate every hour for ISR
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching product data:', error)
    throw error
  }
}

// Mock data for development/testing
export const mockProductData: ApiResponse = {
  success: true,
  data: {
    slug: 'ielts-course',
    id: 1,
    title: 'IELTS Course by Munzereen Shahid',
    description: '<p>Master the IELTS exam with our comprehensive course designed by expert instructor Munzereen Shahid. This course covers all four modules: Listening, Reading, Writing, and Speaking.</p>',
    media: [
      {
        id: 1,
        type: 'video',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        title: 'Course Trailer'
      }
    ],
    checklist: [
      { id: 1, text: 'Complete course materials', icon: '✓' },
      { id: 2, text: 'Practice tests included', icon: '✓' },
      { id: 3, text: 'Expert feedback available', icon: '✓' },
      { id: 4, text: 'Lifetime access', icon: '✓' }
    ],
    seo: {
      title: 'IELTS Course by Munzereen Shahid - 10 Minute School',
      description: 'Master IELTS with our comprehensive course. Expert guidance, practice tests, and lifetime access.',
      keywords: ['IELTS', 'English', 'Course', 'Munzereen Shahid', '10 Minute School'],
      og_image: 'https://via.placeholder.com/1200x630'
    },
    cta_text: {
      primary: 'Enroll Now',
      secondary: 'Start Learning Today'
    },
    sections: [
      {
        id: 1,
        type: 'instructor',
        title: 'Course Instructor',
        content: 'Munzereen Shahid is an experienced IELTS instructor with over 10 years of teaching experience.',
        items: [
          { name: 'Munzereen Shahid', role: 'IELTS Expert', experience: '10+ years' }
        ]
      },
      {
        id: 2,
        type: 'features',
        title: 'How the Course is Laid Out',
        content: 'Our course is structured to provide comprehensive coverage of all IELTS modules.',
        items: [
          'Module 1: Listening Skills',
          'Module 2: Reading Comprehension',
          'Module 3: Writing Tasks',
          'Module 4: Speaking Practice'
        ]
      },
      {
        id: 3,
        type: 'pointers',
        title: 'What You Will Learn',
        content: 'By the end of this course, you will have mastered all essential IELTS skills.',
        items: [
          'Advanced listening techniques',
          'Reading strategies for different question types',
          'Writing task 1 and 2 formats',
          'Speaking confidence and fluency'
        ]
      },
      {
        id: 4,
        type: 'about',
        title: 'Course Details',
        content: 'This comprehensive course includes everything you need to succeed in your IELTS exam.',
        items: [
          'Duration: 40+ hours of content',
          'Practice tests: 10 full mock tests',
          'Support: 24/7 instructor support',
          'Access: Lifetime access to all materials'
        ]
      }
    ]
  }
} 