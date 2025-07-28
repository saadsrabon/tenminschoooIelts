export interface ApiResponse {
  code: number
  data: Data
  error: any[]
  message: string
  payload: any[]
  status_code: number
}

export interface Data {
  slug: string
  id: number
  title: string
  description: string
  platform: string
  type: string
  modality: string
  old_info: {
    cat_id: number
    course_id: number
    platform: string
    skills_cat_id: number
    slug: string
  }
  start_at: string
  media: Medium[]
  checklist: Checklist[]
  seo: any[]
  cta_text: {
    name: string
    value: string
  }
  sections: Section[]
  is_cohort_based_course: boolean
  secondary_cta_group: any[]
  delivery_method: string
}

export interface Medium {
  name: string
  resource_type: string
  resource_value: string
  thumbnail_url?: string
  thumbnail?: string
}

export interface Checklist {
  color: string
  icon: string
  id: string
  list_page_visibility: boolean
  text: string
}

export interface Seo {
  title?: string
  description?: string
  keywords?: string[]
  og_image?: string
}

export interface CtaText {
  primary?: string
  secondary?: string
}

export interface Section {
  type: string
  name: string
  description: string
  bg_color: string
  order_idx: number
  values: any[]
}

export interface Instructor {
  description: string
  has_instructor_page: boolean
  image: string
  name: string
  short_description: string
  slug: string
}

export interface Feature {
  icon: string
  id: string
  subtitle: string
  title: string
}

export interface Pointer {
  color: string
  icon: string
  id: string
  text: string
}

export interface AboutItem {
  description: string
  icon: string
  id: string
  title: string
}

export interface Testimonial {
  description: string
  id: string
  name: string
  profile_image: string
  testimonial: string
  thumb: string
  video_type: string
  video_url: string
}

export interface FAQ {
  answer: string
  id: string
  question: string
}

export interface GroupJoinItem {
  background: {
    image: string
    primary_color: string
    secondary_color: string
  }
  cta: {
    clicked_url: string
    color: string
    text: string
  }
  description: string
  description_color: string
  id: string
  thumbnail: string
  title: string
  title_color: string
  top_left_icon_img: string
}

export interface FeatureExplanation {
  checklist: string[]
  file_type: string
  file_url: string
  id: string
  title: string
  video_thumbnail: string
} 