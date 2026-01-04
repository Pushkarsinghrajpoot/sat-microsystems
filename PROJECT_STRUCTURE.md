# SAT Microsystems - Project Structure

## Overview
This is a Next.js 14 project with Tailwind CSS, refactored into a modular component-based architecture for scalability.

## Directory Structure

```
sat-new/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage (composed of components)
│   ├── globals.css         # Global styles & custom classes
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── blog/
│   │   └── page.tsx        # Blog listing page
│   ├── contact/
│   │   └── page.tsx        # Contact form page
│   └── news/
│       └── page.tsx        # News listing page
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Global header navigation
│   │   └── Footer.tsx      # Global footer with links
│   │
│   └── home/               # Homepage sections
│       ├── HeroSection.tsx              # AI search hero section
│       ├── FeaturedAnnouncement.tsx     # Animated wave announcement
│       ├── LatestNews.tsx               # News cards grid
│       ├── FeaturedInsights.tsx         # Insights & events cards
│       ├── OurPurpose.tsx               # CEO quote section
│       ├── AwardsRecognitions.tsx       # Awards with gradient
│       ├── AreasOfExpertise.tsx         # AI, Cloud, Engineering cards
│       ├── MeetOurClients.tsx           # Client testimonial cards
│       ├── Testimonials.tsx             # Testimonial carousel
│       ├── CareersSection.tsx           # Careers CTA
│       └── FooterCTA.tsx                # Contact/Subscribe CTA
│
├── public/                 # Static assets (if needed)
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## Component Architecture

### Layout Components
- **Header**: Reusable navigation bar with logo, menu items, and utility buttons
- **Footer**: Comprehensive footer with links, social media, and copyright

### Home Page Components
Each section of the homepage is now a separate, reusable component:
- Easy to maintain and update individual sections
- Can be reordered or removed as needed
- Consistent styling across the application

## Routes Available

- `/` - Homepage (100% identical to original design)
- `/about` - About page with mission, vision, values
- `/blog` - Blog listing page (placeholder ready for CMS integration)
- `/news` - News page (placeholder ready for content)
- `/contact` - Contact form page

## Future Expansion

### Easy to Add:
1. **New Pages**: Create new folders in `/app` directory
2. **New Components**: Add to `/components` with proper categorization
3. **New Sections**: Create components in `/components/[section-name]`
4. **CMS Integration**: Components are ready for dynamic data
5. **API Routes**: Add to `/app/api` directory

### Suggested Next Steps:
- Add individual blog post pages (`/blog/[slug]`)
- Add individual news article pages (`/news/[slug]`)
- Create service pages (AI, Cloud, Engineering)
- Add industry-specific pages
- Integrate with a CMS (Contentful, Sanity, etc.)
- Add search functionality
- Implement form submissions
- Add analytics

## Styling

All custom styles are maintained in `/app/globals.css`:
- Custom gradient classes
- Animation styles
- Hover effects
- Color utilities

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Notes

- Homepage appearance is **100% identical** to the original HTML
- All components use 'use client' directive where needed
- Icons from `lucide-react` library
- Responsive design maintained
- All animations and interactions preserved
