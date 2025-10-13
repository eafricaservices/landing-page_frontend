# 🌍 E-Africa Landing Page

> **Empowering Africa's Workforce through Training, Innovation & Opportunity**

A modern, responsive landing page for E-Africa - a purpose-driven platform that connects African talent with global opportunities through comprehensive training, mentorship, and strategic partnerships.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Pages & Functionality](#pages--functionality)
- [API Integration](#api-integration)
- [Styling & Design](#styling--design)
- [Performance & SEO](#performance--seo)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

E-Africa is a comprehensive platform that bridges the gap between African talent and global opportunities. This landing page serves as the main entry point for both individuals seeking career development and companies looking to hire skilled African professionals.

### 🎯 Mission

To empower Africa's workforce through training, innovation, and opportunity creation while helping organizations build stronger teams through strategic consulting, talent sourcing, and digital transformation.

## ✨ Features

### 🏠 **Landing Page**

- **Hero Section** with dynamic animations and clear CTAs
- **Interactive Statistics** with real-time counters
- **Services Overview** with hover animations and detailed descriptions
- **Founder Profile** with social media integration
- **Testimonial Slider** with smooth transitions
- **Contact Form** with real-time validation

### 👨‍💼 **For Companies**

- **Discovery Form** for consultation booking
- **Service Cards** showcasing training, hiring, and consulting services
- **Trust Indicators** with company testimonials
- **Strategic Partnership** information

### 👨‍🎓 **For Individuals**

- **Training Registration** with comprehensive form validation
- **Talent Pool Application** with CV upload functionality
- **Career Development** resources and pathways

### 📱 **Responsive Design**

- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions
- Progressive enhancement

## 🛠 Tech Stack

### **Frontend**

- **Framework:** [Next.js 15.3.5](https://nextjs.org/) (React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** React Icons + Lucide React
- **Fonts:** Google Fonts (Poppins, Roboto Condensed)

### **Components & UI**

- **Components:** Custom React components with TypeScript
- **Forms:** Controlled components with validation
- **File Handling:** React file upload with type/size validation
- **State Management:** React useState hooks
- **Routing:** Next.js App Router

### **Development Tools**

- **Build Tool:** Turbopack (Next.js)
- **Linting:** ESLint with Next.js config
- **Type Checking:** TypeScript
- **Package Manager:** npm

### **Backend Integration**

- **API Client:** Axios
- **File Upload:** FormData with multipart/form-data
- **Endpoints:** RESTful API integration
- **Error Handling:** Comprehensive error boundaries

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+
- **npm** 8+

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Erubamigodstime/e-africa-landing_page-front-end.git
cd e-africa-landing_page-nv
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx                 # Root layout with header
│   ├── page.tsx                   # Home page
│   ├── globals.css                # Global styles
│   ├── companies/
│   │   └── page.tsx              # Companies landing page
│   ├── individuals/
│   │   └── page.tsx              # Individual training page
│   ├── talent-pool/
│   │   └── page.tsx              # Talent pool application
│   ├── success/
│   │   └── page.tsx              # Success confirmation page
│   ├── lib/
│   │   ├── definition.ts         # Type definitions
│   │   └── utils.ts              # Utility functions
│   └── ui/                       # Reusable UI components
│       ├── HeroSection.tsx
│       ├── ServiceSection.tsx
│       ├── AboutSection.tsx
│       ├── TestimonialSlider.tsx
│       ├── ContactSection.tsx
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── companiesComponents/  # Company-specific components
│       ├── individuals/          # Individual-specific components
│       ├── talentpool/          # Talent pool components
│       └── headerComponents/     # Header sub-components
```

## 🌐 Pages & Functionality

### **🏠 Home Page (`/`)**

- Hero section with animated CTAs
- Statistics counter with 100+ professionals trained
- Service overview with interactive cards
- About section with founder profile
- Training registration CTA
- Community testimonials
- Contact form

### **🏢 Companies Page (`/companies`)**

- Targeted hero section for businesses
- Service showcase (Training, Hiring, Consulting)
- Trust indicators and case studies
- Discovery form for consultation booking
- Partnership benefits

### **🎓 Individuals Page (`/individuals`)**

- Training program overview
- Comprehensive registration form:
  - Personal information
  - Training preferences
  - Career goals assessment
  - Referral tracking

### **💼 Talent Pool (`/talent-pool`)**

- Professional application form:
  - CV upload (PDF/DOC support)
  - LinkedIn profile integration
  - Work preference selection (Remote/Hybrid/Onsite)
  - Skills and experience validation

### **✅ Success Page (`/success`)**

- Confirmation message
- Next steps information
- Return navigation

## 🔗 API Integration

### **Backend Endpoints**

- **Base URL:** `https://e-africa-platform-backend.onrender.com/api`

### **Form Submissions**

- **Training Registration:** `POST /training/submit`
- **Talent Pool Application:** `POST /talent-pool/submit`
- **Company Discovery:** `POST /discovery/submit`
- **Contact Messages:** `POST /messages`

### **Data Validation**

- Frontend validation with TypeScript
- Backend validation with error mapping
- File upload validation (type, size)
- Real-time error feedback

## 🎨 Styling & Design

### **Design System**

- **Colors:** Green primary (#13672B), professional grays
- **Typography:** Poppins (main), Roboto Condensed (headings)
- **Spacing:** Consistent Tailwind scale
- **Components:** Custom UI components with variants

### **Animations**

- **Page Transitions:** Framer Motion
- **Hover Effects:** CSS transitions
- **Loading States:** Custom spinners
- **Scroll Animations:** Intersection Observer

### **Responsive Breakpoints**

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## ⚡ Performance & SEO

### **Optimization Features**

- **Image Optimization:** Next.js Image component
- **Font Loading:** Google Fonts with display: swap
- **Code Splitting:** Automatic with Next.js
- **Lazy Loading:** Built-in for images and components

### **SEO**

- **Meta Tags:** Comprehensive metadata
- **Structured Data:** JSON-LD for organization
- **Sitemap:** Auto-generated
- **Analytics Ready:** Google Analytics integration ready

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### **Development Guidelines**

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Implement proper error handling
- Add responsive design considerations
- Test across different devices

## 📄 License

This project is proprietary and confidential. All rights reserved to E-Africa Platform.

---

## 📞 Contact & Support

- **Website:** [E-Africa Platform](/)
- **Email:** empowerafrica.ng@gmail.com
- **Phone:** (+234) 907 662 8205
- **Location:** 794 Macallister St, San Francisco, 94102

### **Social Media**

- **LinkedIn:** [E-Africa Platform](/)
- **Twitter:** [@EAfricaPlatform](/)
- **Facebook:** [E-Africa](/)

---

**Built with ❤️ for Africa's future workforce**
