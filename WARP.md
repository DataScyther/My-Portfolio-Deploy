# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a modern personal portfolio website built for Nishant Kumar, a data science student and AI/ML enthusiast. The project is built using React 18, TypeScript, Vite, shadcn/ui, and Tailwind CSS, integrated with the Lovable development platform.

## Essential Development Commands

### Core Development
- `npm run dev` - Start development server on port 3000 with auto-open
- `npm run build` - Production build using Vite
- `npm run build:dev` - Development build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

### No Test Suite
This project currently has no test files or testing framework configured.

## Architecture & Structure

### Single Page Application (SPA) Layout
The application follows a vertical scrolling single-page design with these main sections:
- **Navigation** - Fixed header with scroll progress and smooth section navigation
- **HeroSection** - Landing area with typing animation and social links
- **AboutSection** - Personal journey and career timeline
- **SkillsSection** - Technical skills with animated progress bars
- **ExperienceSection** - Professional background
- **ProjectsSection** - Featured projects with GitHub integration
- **CertificationsSection** - Professional certifications and achievements
- **ContactSection** - Contact form and information
- **Footer** - Site footer

### Key Design Patterns

**Component-Based Architecture**: Each section is a separate React component with TypeScript
```tsx
// Typical section structure
const SectionName = () => {
  const ref = useScrollReveal(); // Custom hook for scroll animations
  return (
    <section id="section-name" ref={ref} className="py-20 px-4 relative scroll-reveal">
      {/* Section content */}
    </section>
  );
};
```

**Custom Hooks Pattern**:
- `useScrollReveal()` - Handles intersection observer animations
- `useTypingAnimation()` - Creates typewriter effects
- `useActiveSection()` - Manages active navigation state

**Animation System**: Built with anime.js for complex animations and CSS for simpler transitions
- Scroll-triggered reveals using IntersectionObserver
- Staggered card animations
- Magnetic hover effects
- Typing animations with custom timing

### Styling Architecture

**CSS Module + Tailwind Hybrid**: 
- Tailwind for utility classes and theme system
- CSS Modules for component-specific styles (`.module.css` files)
- Custom gradient system with CSS variables
- Dark/light theme support via `next-themes`

**Theme System**: Built on CSS custom properties
```css
/* Key color variables */
--gradient-purple, --gradient-pink, --gradient-orange
--background, --foreground, --muted, --accent
```

### State Management
- No global state management (Redux/Zustand)
- Local component state with React hooks
- Theme state managed by `next-themes`
- Form state with `react-hook-form`

### Data Architecture
All content is hardcoded within components (projects, skills, certifications, etc.). No external APIs or databases.

## Development Workflow

### Lovable Integration
This project is integrated with Lovable platform:
- Changes via Lovable are auto-committed to the repository
- Local development pushes are reflected in Lovable
- Project URL: https://lovable.dev/projects/23a583b1-9495-4cd6-bdc2-d7c428591f8d

### File Modification Patterns
When updating content:
1. **Projects**: Edit the `projects` array in `ProjectsSection.tsx`
2. **Skills**: Modify `skills` array in `SkillsSection.tsx`
3. **Certifications**: Update `certifications` array in `CertificationsSection.tsx`
4. **Personal Info**: Edit hero text in `HeroSection.tsx` and about content in `AboutSection.tsx`

### Adding New Sections
1. Create new component in `src/components/`
2. Add corresponding CSS module file
3. Import and add to `src/pages/Index.tsx`
4. Add navigation link to `Navigation.tsx`
5. Ensure section has `id` attribute for navigation

## Key Technical Considerations

### Performance Optimizations
- Uses Vite for fast development and optimized builds
- Intersection Observer for efficient scroll animations
- RequestAnimationFrame for smooth scroll listeners
- Lazy loading implemented for animations

### Browser Compatibility
- Modern browsers (ES2020 target)
- Uses modern CSS features (CSS Grid, Custom Properties, backdrop-filter)
- Progressive enhancement for animations

### Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Focus management for keyboard navigation
- Screen reader friendly content

## Common Customization Tasks

### Updating Portfolio Content
- Skills: Modify the nested arrays in `SkillsSection.tsx`
- Projects: Update project objects with new GitHub links, descriptions, and technologies
- Social Links: Change URLs in `HeroSection.tsx` and ensure icons match

### Styling Modifications
- Colors: Update CSS custom properties in `src/index.css`
- Animations: Modify anime.js parameters in component useEffect hooks
- Layout: Adjust Tailwind classes and CSS module styles

### Adding Interactive Features
- Use existing custom hooks pattern
- Implement animations with anime.js for consistency
- Follow scroll-reveal pattern for new sections

## Dependencies Overview

### Core Framework
- React 18.3+ with TypeScript
- Vite 5.4+ for build tooling

### UI & Styling
- shadcn/ui component library
- Tailwind CSS 4.1+ for utilities
- Radix UI primitives for accessible components
- next-themes for dark/light mode

### Animation & Interactivity
- anime.js for complex animations
- Intersection Observer API for scroll triggers
- Custom typing animation system

### Additional Tools
- ESLint for code quality
- PostCSS with nesting support
- Lucide React for icons
