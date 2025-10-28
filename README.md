# REDMOND Tax & Associated Advocates Website

A modern, responsive website for REDMOND Tax & Associated Advocates built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design using REDMOND brand colors
- **Responsive Layout**: Fully responsive design that works on all devices
- **Two Service Lines**: Clear separation between REDMOND Associated Advocates (Legal) and REDMOND Tax
- **Interactive Navigation**: Smooth navigation between pages
- **Contact Forms**: Professional contact forms with consultation booking
- **Team Profiles**: Detailed partner profiles with qualifications and expertise
- **Service Overview**: Comprehensive service listings for both legal and tax services

## Brand Colors

The website uses the official REDMOND brand colors:
- **Primary Blue**: `#4A6D7C` (REDMOND blue-grey)
- **Dark Blue**: `#1F5270` (Tagline color)
- **White**: `#FFFFFF` (Background and text)

## Pages

1. **Homepage**: Hero section with dual service panels, partners overview, services summary, testimonials, and contact CTA
2. **About Us**: Detailed information about both REDMOND Associated Advocates and REDMOND Tax
3. **Our Team**: Partner profiles with qualifications, expertise, and achievements
4. **Our Services**: Comprehensive service listings for legal and tax services
5. **Contact**: Contact form, office information, and consultation booking

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Building for Production

Build the production version:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **UI Components**: Headless UI
- **Font**: Inter (Google Fonts)

## Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx          # About Us page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── services/
│   │   └── page.tsx          # Services page
│   ├── team/
│   │   └── page.tsx          # Team page
│   ├── globals.css           # Global styles with brand colors
│   ├── layout.tsx            # Root layout with navigation
│   └── page.tsx              # Homepage
└── components/
    └── Navigation.tsx         # Navigation component
```

## Key Features Implemented

### Homepage
- Split hero banner for both service lines
- Interactive partners section
- Services overview with clear separation
- Client testimonials
- 4-step process explanation
- Call-to-action sections

### About Page
- Detailed sections for both REDMOND Associated Advocates and REDMOND Tax
- Highlighted dual qualifications and expertise
- Mission statement and values

### Team Page
- Comprehensive partner profiles
- Detailed qualifications and achievements
- Interactive hover effects
- Team strengths overview

### Services Page
- Clear separation between legal and tax services
- Detailed service descriptions
- Specialized tax areas
- "How We Help" section
- Service comparison and advantages

### Contact Page
- Professional contact form
- Office information and hours
- Consultation type selection
- Map placeholder for office location
- Quick action buttons

## Customization

### Colors
The brand colors are defined in `src/app/globals.css` and can be easily customized:

```css
:root {
  --redmond-blue: #4A6D7C;
  --redmond-dark-blue: #1F5270;
  --redmond-white: #FFFFFF;
}
```

### Content
All content is easily editable in the respective page components. Partner information, services, and contact details can be updated directly in the React components.

## Deployment

The website is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any static hosting service

## Support

For any questions or support regarding this website, please contact the development team.

---

**REDMOND Tax & Associated Advocates** - Your Strategic Partner in Tax Management and Legal Services