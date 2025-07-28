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
  code: 200,
  data: {
    slug: 'ielts-course',
    id: 153,
    title: 'IELTS Course by Munzereen Shahid',
    description: '<p>Master the IELTS exam with our comprehensive course designed by expert instructor Munzereen Shahid. This course covers all four modules: Listening, Reading, Writing, and Speaking.</p>',
    platform: 'skills',
    type: 'regular',
    modality: 'recorded',
    old_info: {
      cat_id: 21,
      course_id: 50,
      platform: 'skills',
      skills_cat_id: 90,
      slug: 'ielts-course'
    },
    start_at: '',
    media: [
      {
        name: 'preview_gallery',
        resource_type: 'video',
        resource_value: 'dQw4w9WgXcQ',
        thumbnail_url: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
      }
    ],
    checklist: [
      { color: 'black', icon: 'https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png', id: 'meta1', list_page_visibility: true, text: 'Total Enrolled 33031' },
      { color: 'black', icon: 'https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png', id: 'meta2', list_page_visibility: false, text: 'Time Required 50 hours' },
      { color: 'black', icon: 'https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video.png', id: 'meta3', list_page_visibility: true, text: '54 Videos' },
      { color: 'black', icon: 'https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png', id: 'meta4', list_page_visibility: false, text: '10 Reading & 10 Listening Mocktests' }
    ],
    seo: [],
    cta_text: {
      name: 'Enroll',
      value: 'enroll'
    },
    sections: [
      {
        type: 'instructors',
        name: 'Course instructor',
        description: '',
        bg_color: '',
        order_idx: 2,
        values: [
          {
            description: '<p>MSc (English), University of Oxford (UK);<br>BA, MA (English), University of Dhaka;<br>IELTS: 8.5</p>',
            has_instructor_page: true,
            image: 'https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg',
            name: 'Munzereen Shahid',
            short_description: 'Course Instructor',
            slug: 'munzereen-shahid'
          }
        ]
      },
      {
        type: 'features',
        name: 'How the course is laid out',
        description: '',
        bg_color: '',
        order_idx: 3,
        values: [
          {
            icon: 'https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604651_1684834874567.png',
            id: 'meta1',
            subtitle: 'IELTS Academic ও General Training এর Overview, Format ও প্রশ্নের ধরন নিয়ে in-depth আলোচনা',
            title: '৫০+ ভিডিও লেকচার'
          }
        ]
      },
      {
        type: 'pointers',
        name: 'What you will learn by doing the course',
        description: '',
        bg_color: '',
        order_idx: 5,
        values: [
          {
            color: 'black',
            icon: '0',
            id: 'meta1',
            text: 'Detailed rules and regulations of each module of the IELTS test'
          }
        ]
      },
      {
        type: 'about',
        name: 'Course details',
        description: '',
        bg_color: '',
        order_idx: 7,
        values: [
          {
            description: '<li>Those who aim to go abroad for work or higher education</li>',
            icon: '0',
            id: 'meta1',
            title: '<h2><b>This IELTS course is for</b></h2>'
          }
        ]
      }
    ],
    is_cohort_based_course: false,
    secondary_cta_group: [],
    delivery_method: 'pathao'
  },
  error: [],
  message: 'Success',
  payload: [],
  status_code: 200
} 