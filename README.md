# IELTS Course Product Page

A modern, responsive product page for the IELTS Course by Munzereen Shahid, built with Next.js, TypeScript, and TailwindCSS.

## Features

- **Server-Side Rendering (SSR)**: Optimized for SEO and performance
- **Incremental Static Generation (ISR)**: Automatic revalidation every hour
- **Localization**: Support for English and Bengali languages
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **TypeScript**: Full type safety throughout the application
- **YouTube Video Integration**: Embedded video player for course trailers
- **Modern UI/UX**: Clean, professional design with smooth animations

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **State Management**: React Hooks
- **API Integration**: Fetch API with proper error handling

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main page component
├── components/         # Reusable components
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── InstructorSection.tsx
│   ├── FeaturesSection.tsx
│   ├── LearningPointsSection.tsx
│   ├── ChecklistSection.tsx
│   ├── VideoPlayer.tsx
│   └── Footer.tsx
├── lib/               # Utility functions
│   └── api.ts         # API service
└── types/             # TypeScript interfaces
    └── api.ts         # API response types
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ielts-course-page
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## API Integration

The application integrates with the 10 Minute School API:

- **Endpoint**: `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course`
- **Query Parameters**: `lang=en` or `lang=bn`
- **Headers**: `X-TENMS-SOURCE-PLATFORM: web`

### API Response Structure

The application expects the following data structure:

```typescript
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
}
```

## Key Features Implementation

### 1. Server-Side Rendering
- Data is fetched on the server side for better SEO
- Proper metadata handling for search engines
- Fast initial page load

### 2. Localization
- Language switching between English and Bengali
- URL-based language parameter (`?lang=en` or `?lang=bn`)
- Maintains state across page refreshes

### 3. Video Integration
- YouTube video player with custom controls
- Thumbnail preview with play button overlay
- Responsive video container

### 4. Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions

### 5. Error Handling
- Graceful fallback to mock data if API fails
- User-friendly error states
- Console logging for debugging

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic component-level code splitting
- **Caching**: ISR with 1-hour revalidation
- **Bundle Analysis**: Built-in bundle analyzer support

## SEO Features

- Dynamic meta tags based on API data
- Structured data markup
- Open Graph tags
- Twitter Card support
- Semantic HTML structure

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@10minuteschool.com or create an issue in the repository. 