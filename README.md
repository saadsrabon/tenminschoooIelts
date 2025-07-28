# IELTS Course Landing Page

A comprehensive, modern landing page for the **IELTS Course by Munzereen Shahid** from **10 Minute School**. Built with Next.js 14, TypeScript, and TailwindCSS, featuring interactive video players, enrollment system, and complete SEO optimization.
## Live SITE 
harmonious-lolly-eb5d68.netlify.app/
## 🚀 Features

### **Core Functionality**
- **🎯 Interactive Video Players**: YouTube integration with custom controls and thumbnails
- **📝 Enrollment System**: Success popups for both Hero and Sidebar enrollment buttons
- **🌐 Localization**: Full support for English and Bengali languages
- **📱 Responsive Design**: Mobile-first approach with perfect mobile experience
- **⚡ Performance**: Server-Side Rendering (SSR) with Incremental Static Generation (ISR)

### **User Experience**
- **🎬 Video Sliders**: Testimonials with video cards and playable content
- **📋 Collapsible Sections**: Course details, content preview, and FAQ sections
- **🎨 Modern UI**: Clean design with smooth animations and hover effects
- **🔍 Search Optimization**: Complete SEO with structured data and meta tags
- **📊 Progress Indicators**: Visual feedback for user interactions

### **Technical Excellence**
- **🔒 Type Safety**: Full TypeScript implementation with strict mode
- **🎯 Error Handling**: Graceful fallbacks and user-friendly error states
- **📦 Code Splitting**: Automatic component-level optimization
- **🖼️ Image Optimization**: Next.js automatic image handling
- **🔧 Build Ready**: Production-optimized with multiple deployment options

## 🛠️ Tech Stack

| **Category** | **Technology** | **Version** |
|--------------|----------------|-------------|
| **Framework** | Next.js | 14.0.4 (App Router) |
| **Language** | TypeScript | 5.x (Strict Mode) |
| **Styling** | TailwindCSS | 3.3.0 |
| **State Management** | React Hooks | 18.x |
| **API Integration** | Fetch API | Native |
| **Deployment** | Netlify/Vercel/Docker | Multi-platform |
| **SEO** | Next.js Metadata API | Built-in |
| **Performance** | ISR ,SS + Code Splitting | Optimized |

## 📁 Project Structure

```
tenminschoooIelts/
├── 📂 src/
│   ├── 📂 app/                    # Next.js App Router
│   │   ├── globals.css           # Global TailwindCSS styles
│   │   ├── layout.tsx            # Root layout with SEO metadata
│   │   ├── page.tsx              # Main page component
│   │   ├── sitemap.ts            # Dynamic sitemap generation
│   │   └── robots.ts             # Robots.txt configuration
│   ├── 📂 components/            # Reusable React components
│   │   ├── Header.tsx            # Navigation with language switcher
│   │   ├── HeroSection.tsx       # Hero with video player
│   │   ├── CourseInstructorSection.tsx
│   │   ├── CourseFeaturesSection.tsx
│   │   ├── CourseLearningPointsSection.tsx
│   │   ├── CourseTestimonialsSection.tsx
│   │   ├── CourseGroupJoinSection.tsx
│   │   ├── CourseFeatureExplanationsSection.tsx
│   │   ├── CourseSidebar.tsx     # Sticky sidebar with enrollment
│   │   ├── CollapsibleContentPreview.tsx
│   │   ├── CollapsibleCourseDetails.tsx
│   │   ├── CollapsibleFAQ.tsx
│   │   ├── StructuredData.tsx    # JSON-LD structured data
│   │   ├── VideoPlayer.tsx       # YouTube video component
│   │   └── Footer.tsx            # Footer with logo
│   ├── 📂 lib/                   # Utility functions
│   │   └── api.ts               # API service with mock data
│   └── 📂 types/                 # TypeScript interfaces
│       └── api.ts               # API response types
├── 📂 public/                    # Static assets
│   ├── 10mslogo-svg.svg         # 10 Minute School logo
│   ├── favicon.svg              # Custom favicon
│   └── site.webmanifest         # PWA manifest
├── 📄 package.json              # Dependencies and scripts
├── 📄 next.config.js            # Next.js configuration
├── 📄 netlify.toml              # Netlify deployment config
├── 📄 Dockerfile                # Docker containerization
└── 📄 README.md                 # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18+ (LTS recommended)
- **Package Manager**: npm or yarn
- **Git**: For version control

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/saadsrabon/tenminschoooIelts.git
cd tenminschoooIelts
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Run the development server:**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🔌 API Integration

The application integrates with the **10 Minute School API** for dynamic content:

### **API Configuration**
- **Base URL**: `https://api.10minuteschool.com/discovery-service/api/v1`
- **Endpoint**: `/products/ielts-course`
- **Query Parameters**: `lang=en` or `lang=bn`
- **Headers**: `X-TENMS-SOURCE-PLATFORM: web`
- **Cache**: ISR with 1-hour revalidation

### **API Response Structure**

```typescript
interface ApiResponse {
  code: number
  data: Data
  error: any[]
  message: string
  payload: any[]
  status_code: number
}

interface Data {
  slug: string
  id: number
  title: string
  description: string
  media: Medium[]
  checklist: Checklist[]
  seo: Seo
  cta_text: CtaText
  sections: Section[]
  // Additional properties for course details
}
```

### **Error Handling**
- **Graceful Fallback**: Uses mock data if API fails
- **User-Friendly**: Console logging for debugging
- **Retry Logic**: Automatic retry on network issues

## 🎯 Key Features Implementation

### **1. 🎬 Interactive Video System**
- **Hero Video Player**: Main course preview with thumbnail grid
- **Testimonials Slider**: Video cards with playable student testimonials
- **Sidebar Video**: Course preview in sticky sidebar
- **YouTube Integration**: Custom controls with autoplay and modal popups
- **Responsive Design**: Optimized for all screen sizes

### **2. 📝 Enrollment System**
- **Success Popups**: Beautiful modals for both Hero and Sidebar enrollment
- **Auto-dismiss**: 5-second timeout with manual close option
- **Brand Consistency**: Green theme matching 10 Minute School colors
- **User Feedback**: Clear confirmation messages

### **3. 🌐 Localization & SEO**
- **Language Support**: English and Bengali with URL parameters
- **Dynamic Metadata**: SEO tags based on API data
- **Structured Data**: JSON-LD for search engines
- **Sitemap & Robots**: Automatic generation
- **Open Graph**: Social media sharing optimization

### **4. 📱 Responsive Design**
- **Mobile-First**: Optimized for mobile devices
- **Breakpoint System**: TailwindCSS responsive classes
- **Touch-Friendly**: Large touch targets and smooth interactions
- **Performance**: Optimized images and lazy loading

### **5. 🎨 Modern UI/UX**
- **Clean Design**: Professional layout with proper spacing
- **Smooth Animations**: Hover effects and transitions
- **Color Scheme**: Green theme (#10B981) throughout
- **Typography**: Noto Sans Bengali for proper text rendering
- **Icons**: SVG icons for crisp display

### **6. 🔧 Technical Excellence**
- **TypeScript**: Full type safety with strict mode
- **Error Handling**: Graceful fallbacks and user-friendly messages
- **Performance**: ISR, code splitting, and image optimization
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🚀 Deployment

### **Netlify (Recommended)**
```bash
# Already configured with netlify.toml
Build Command: npm run build
Publish Directory: .next
Node Version: 18
```

**Steps:**
1. Connect GitHub repository to Netlify
2. Build settings are pre-configured
3. Automatic deployment on push to main branch

### **Vercel**
```bash
# Zero configuration deployment
1. Import GitHub repository to Vercel
2. Automatic deployment on push
3. Built-in analytics and performance monitoring
```

### **Docker**
```bash
# Multi-stage build with optimization
docker build -t ielts-course .
docker run -p 3000:3000 ielts-course
```

**Dockerfile Features:**
- Multi-stage build for smaller image size
- Production-optimized Node.js setup
- Security best practices with non-root user
- Standalone output for better performance

## ⚡ Performance Optimizations

### **Build Optimizations**
- **🖼️ Image Optimization**: Next.js automatic image handling with WebP support
- **📦 Code Splitting**: Automatic component-level code splitting
- **🔄 ISR Caching**: Incremental Static Regeneration with 1-hour revalidation
- **📊 Bundle Analysis**: Built-in bundle analyzer for optimization

### **Runtime Performance**
- **⚡ Fast Loading**: Server-side rendering for instant page loads
- **🎯 Lazy Loading**: Images and components load on demand
- **💾 Memory Efficient**: Optimized React components with proper cleanup
- **📱 Mobile Optimized**: Touch-friendly interactions and responsive images

### **SEO Performance**
- **🔍 Search Engine Ready**: Structured data and meta tags
- **📈 Core Web Vitals**: Optimized for LCP, FID, and CLS
- **🌐 Social Sharing**: Open Graph and Twitter Card optimization
- **📋 Sitemap**: Automatic sitemap generation for search engines

## 🔍 SEO Features

### **Search Engine Optimization**
- **📝 Dynamic Meta Tags**: Title, description, and keywords from API data
- **🏷️ Structured Data**: JSON-LD markup for rich search results
- **📱 Open Graph**: Facebook and social media sharing optimization
- **🐦 Twitter Cards**: Twitter-specific meta tags for better sharing
- **🏗️ Semantic HTML**: Proper HTML5 structure for accessibility

### **Technical SEO**
- **📋 Sitemap Generation**: Automatic XML sitemap with priority settings
- **🤖 Robots.txt**: Proper crawling instructions for search engines
- **🔗 Canonical URLs**: Prevents duplicate content issues
- **🌐 Language Tags**: Proper hreflang for multilingual support
- **📊 Analytics Ready**: Google Analytics and search console compatible


### **Development Guidelines**

- **TypeScript**: Maintain strict type safety
- **Code Style**: Follow existing code patterns
- **Testing**: Test on multiple devices and browsers
- **Documentation**: Update README for new features

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### **Getting Help**
- **📧 Email**: saadsrabon2@gmail.com
- **🐛 Issues**: Create an issue in the [GitHub repository](https://github.com/saadsrabon/tenminschoooIelts)
- **💬 Discussions**: Use GitHub Discussions for questions

### **Bug Reports**
Please include:
- **Browser**: Chrome, Firefox, Safari, Edge
- **Device**: Desktop, Mobile, Tablet
- **Steps**: Detailed reproduction steps
- **Expected vs Actual**: What you expected vs what happened

## 🙏 Acknowledgments

- **Munzereen Shahid**: Course instructor and content creator
- **10 Minute School**: Platform and API support
- **Next.js Team**: Amazing framework and documentation
- **TailwindCSS**: Beautiful utility-first CSS framework

---

**Built with ❤️ for better education By Saad** 