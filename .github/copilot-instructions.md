# GitHub Copilot Instructions

## Project Overview
This is a professional portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. The project showcases a developer's work, skills, and services in a modern, interactive interface with animations and responsive design. It follows a component-based architecture with proper TypeScript typing and Spanish-language user interface.

## Package List
- **Next.js 15**: React framework with App Router
- **React 19**: UI library
- **TypeScript**: Static type checking
- **Tailwind CSS 4**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Swiper**: Touch slider
- **React Icons**: Icon library
- **Radix UI**: Headless UI components
- **React CountUp**: Animated counter component
- **React Type Animation**: Text typing animation

## Architecture Guidelines
- Use App Router for page routing
- Maintain clear separation between UI components and data
- Extract static data into separate data files (.ts or .tsx)
- Keep components focused on a single responsibility
- Implement responsive design for all screen sizes
- Use TypeScript strictly with proper interfaces and types
- Extract complex business logic (>35 lines) to custom hooks

## Folder Structure
- `/app`: Page components and App Router configuration
- `/components`: Reusable UI components
  - `/components/ui`: Base UI components from Radix
- `/lib`: Utility functions and shared code
- `/public`: Static assets (images, fonts, etc.)
- `/.github`: GitHub-related files including instructions and workflows

## Code Style Guidelines
- Use ESLint and Prettier configurations
- Follow functional component patterns
- Place 'use client' directive at the top of client components
- Import statements grouped by external/internal
- Use named exports for utilities and components
- Write comprehensive JSDoc comments in Spanish
- Follow React hooks rules strictly
- Consistent naming conventions (PascalCase for components)

## Naming Conventions
- **Components**: PascalCase (e.g., `HeroSection.tsx`)
- **Hooks**: camelCase with 'use' prefix (e.g., `useFormValidation.ts`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Data files**: ComponentNameData.ts/tsx (e.g., `ProjectsData.tsx`)
- **Interfaces**: PascalCase with descriptive names (e.g., `ProjectCardProps`)
- **CSS classes**: Tailwind utility classes with logical grouping

## Documentation Guidelines
- All documentation and comments should be in Spanish
- Components require JSDoc documentation with:
  - Component purpose and functionality
  - Props documentation with proper types
  - Return value description
  - Usage examples when appropriate
- Data structures should have documented interfaces
- File-level comments describing the purpose of the file
- Document complex logic or algorithms thoroughly
- Include accessibility considerations in component docs

## Important Note

- While the codebase and instructions are in English, all documentation, comments, and user-facing text should be maintained in Spanish.
- Always test your changes in development mode before committing.
- Make sure all components are properly typed with TypeScript.
- Follow the existing patterns in the codebase for consistency.
- When in doubt about a pattern or style, refer to the examples in the `components` directory.