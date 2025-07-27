# replit.md

## Overview
This is a renewable energy company website for Gasbes Energy, built as a full-stack web application. The application features a modern React frontend with a Node.js/Express backend, designed to showcase solar and biogas solutions while capturing leads through contact forms and newsletter subscriptions.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture
The application follows a modern full-stack architecture with clear separation between frontend and backend concerns:

**Frontend**: React-based single-page application using Vite as the build tool
**Backend**: Express.js REST API server
**Database**: PostgreSQL with Drizzle ORM for data management
**Styling**: Tailwind CSS with shadcn/ui component library
**State Management**: TanStack Query for server state management
**Routing**: Wouter for lightweight client-side routing

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Icons**: Lucide React for consistent iconography
- **Forms**: React Hook Form with Zod validation
- **HTTP Client**: Fetch API with custom wrapper functions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL via Neon serverless
- **ORM**: Drizzle with Zod schema validation
- **Session Storage**: In-memory storage with interface for future database integration
- **API Design**: RESTful endpoints with proper error handling
- **Development**: Hot reload with Vite integration

### Database Schema
The application uses three main tables:
- **users**: Basic user authentication (currently unused)
- **contact_submissions**: Customer inquiries and service requests
- **newsletter_subscriptions**: Email subscriptions for marketing

### UI Components Structure
- **Layout Components**: Header with navigation, Footer with newsletter signup
- **Page Sections**: Hero, Services, About, Projects, Testimonials, Contact
- **Interactive Elements**: Forms, buttons, modals using shadcn/ui
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Data Flow

### Contact Form Submission
1. User fills out contact form with personal details and service interest
2. Frontend validates data using Zod schema
3. POST request sent to `/api/contact` endpoint
4. Backend validates and stores submission in database
5. Success/error feedback displayed to user

### Newsletter Subscription
1. User enters email in footer newsletter form
2. Email validation on frontend
3. POST request to `/api/newsletter` endpoint
4. Backend prevents duplicate subscriptions
5. Confirmation toast shown to user

### Admin Data Access
- GET `/api/contact` - Retrieve all contact submissions
- GET `/api/newsletter` - Retrieve all newsletter subscriptions

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for Neon database
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Form handling with validation
- **zod**: Runtime type validation and schema definition

### UI Dependencies
- **@radix-ui/***: Accessible component primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: SVG icon library
- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: Dynamic className handling

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and enhanced developer experience
- **tsx**: TypeScript execution for Node.js

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static assets in `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: Uses Vite dev server with Express API proxy
- **Production**: Serves static files from Express with API routes
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### File Structure Organization
```
├── client/          # React frontend application
├── server/          # Express backend application  
├── shared/          # Shared TypeScript types and schemas
├── dist/            # Production build output
└── migrations/      # Database migration files
```

The application is designed for easy deployment on platforms supporting Node.js with PostgreSQL databases, with Replit-specific optimizations for development environment.