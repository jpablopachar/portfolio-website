# React Component Enhancement Tool

## Meta

This prompt enhances React components by adding proper TypeScript props, comprehensive Spanish JSDoc documentation, and applying ESLint formatting rules. It translates English content within JSX tags to Spanish, separates component data into dedicated files when appropriate, and properly structures internal components.

## Response Format

For each enhanced component, provide:

1. An explanation of the changes made (in English)
2. The enhanced component code (formatted according to ESLint rules)
3. If applicable, the separate data file code
4. If applicable, the custom hook file code

## Component Enhancements Required

- Use TypeScript for props definition with proper interfaces/types
- Include comprehensive JSDoc documentation in Spanish
- Follow project ESLint rules for code formatting
- Translate any English text content inside JSX tags to Spanish
- Maintain the component's original functionality
- Use proper React patterns according to Next.js 15 best practices
- Extract component data into a separate ComponentNameData.tsx file when appropriate
- Position internal component definitions and their interfaces before the main component
- Extract business logic to custom hooks when it exceeds 35 lines of code

## Critical Warnings

- Do not alter import statements unless necessary for TypeScript props
- Do not change the component's functionality or behavior
- Only translate text content inside JSX tags, not variable names, props, or comments
- Maintain existing className attributes and styling
- Preserve component naming conventions
- Do not modify external dependencies or import new ones unless strictly necessary
- **Do not implement or add any functions, methods, or features not present in the original component**
- **If the original component doesn't include certain handlers or methods, do not invent or add them**

## Context

This enhancement tool is for a Next.js 15 project with TypeScript that uses:

- React 19+ features and functional components
- TypeScript for strong typing
- ESLint for code formatting
- JSDoc documentation in Spanish
- Various UI libraries and styled components

## Component Structure

The recommended structure follows this pattern:

1. Import statements
2. Interface definitions for internal component props
3. Internal component implementations with JSDoc documentation
4. Interface definitions for main component props
5. Main component implementation with JSDoc documentation
6. Export statement

## Documentation Guidelines

### Interface Documentation (in Spanish)

```tsx
/**
 * Propiedades para el componente ComponentName.
 * @property {Type} propertyName - Descripción de la propiedad.
 * @property {AnotherType} [optionalProperty] - Descripción de la propiedad opcional.
 */
interface ComponentNameProps {
  propertyName: Type
  optionalProperty?: AnotherType
}
```

### Component Documentation (in Spanish)

```tsx
/**
 * Componente `ComponentName`
 *
 * Descripción detallada del componente explicando su propósito y funcionalidad.
 *
 * @param {ComponentNameProps} props - Propiedades del componente
 * @param {Type} props.propertyName - Descripción de la propiedad
 * @param {AnotherType} [props.optionalProperty] - Descripción de la propiedad opcional
 * @returns {JSX.Element} Descripción de lo que el componente renderiza
 *
 * @example
 * <ComponentName propertyName="valor" optionalProperty="valorOpcional">
 *   Contenido hijo
 * </ComponentName>
 */
```

### Event Handler Documentation (in Spanish)

```tsx
/**
 * Maneja el evento de [acción].
 *
 * [Descripción detallada de lo que hace el manejador de eventos, incluyendo efectos secundarios].
 *
 * @param {EventType} event - El evento generado.
 * @returns {void}
 */
```

## Custom Hook Guidelines

When business logic exceeds 35 lines, extract it to a custom hook following this structure:

### Custom Hook Interface (in Spanish)

```tsx
/**
 * Interfaz `ComponentNameHook`
 *
 * Define la estructura del hook personalizado para el componente ComponentName.
 *
 * @property {Type} propertyName - Descripción de la propiedad.
 * @property {(value: Type) => void} setPropertyName - Función para actualizar la propiedad.
 */
interface ComponentNameHook {
  propertyName: Type
  setPropertyName: (value: Type) => void
}
```

### Custom Hook Implementation (in Spanish)

```tsx
/**
 * Hook personalizado `useComponentName`
 *
 * [Descripción detallada de lo que hace el hook].
 *
 * @returns {ComponentNameHook} Objeto con propiedades y funciones para el componente
 */
const useComponentName = (): ComponentNameHook => {
  // Implementation...
}
```

## Data Separation Guidelines

For static data (lists, configuration objects, mock data), create a separate file:

1. Create `ComponentNameData.tsx` in the same directory
2. Move all static data to this file with proper TypeScript interfaces
3. Export the data and import it in the main component

### Data File Structure

```tsx
/**
 * Interfaz para definir [descripción de la estructura].
 * @property {Type} propertyName - Descripción de la propiedad.
 */
export interface DataType {
  propertyName: Type
}

/**
 * [Descripción del conjunto de datos].
 */
export const dataArray: DataType[] = [
  // Data entries
]
```

## Complete Example

### Before Enhancement:

```tsx
const FeatureList = () => {
  const features = [
    { id: 1, title: 'Fast Shipping', description: 'Get your items quickly' },
    {
      id: 2,
      title: 'Secure Payment',
      description: 'Safe transaction guaranteed',
    },
    { id: 3, title: 'Quality Products', description: 'Only the best for you' },
  ]

  return (
    <div className="features">
      {features.map((feature) => (
        <div key={feature.id} className="feature-item">
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  )
}

export default FeatureList
```

### After Enhancement:

FeatureListData.tsx:

```tsx
/**
 * Interfaz para definir la estructura de una característica.
 * @property {number} id - Identificador único de la característica.
 * @property {string} title - Título de la característica.
 * @property {string} description - Descripción detallada de la característica.
 */
export interface Feature {
  id: number
  title: string
  description: string
}

/**
 * Lista de características destacadas del servicio.
 */
export const features: Feature[] = [
  {
    id: 1,
    title: 'Envío Rápido',
    description: 'Recibe tus artículos rápidamente',
  },
  {
    id: 2,
    title: 'Pago Seguro',
    description: 'Transacción segura garantizada',
  },
  {
    id: 3,
    title: 'Productos de Calidad',
    description: 'Solo lo mejor para ti',
  },
]
```

FeatureList.tsx:

```tsx
'use client'

import { features } from './FeatureListData'

/**
 * Componente `FeatureList`
 *
 * Muestra una lista de características destacadas del servicio organizadas
 * en una cuadrícula responsiva.
 *
 * @returns {JSX.Element} Lista de características renderizada
 *
 * @example
 * <FeatureList />
 */
const FeatureList: React.FC = () => {
  return (
    <div className="features">
      {features.map((feature) => (
        <div key={feature.id} className="feature-item">
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  )
}

export default FeatureList
```

## Enhancement Process Checklist

1. **Analyze the component** to identify:

   - Internal components that need interfaces
   - Static data that should be separated
   - Business logic that should be extracted

2. **Create TypeScript interfaces** for all components with proper JSDoc

3. **Translate user-facing text** from English to Spanish

4. **Extract business logic** to custom hooks when appropriate

5. **Extract static data** to separate files when appropriate

6. **Document everything** with proper Spanish JSDoc comments

7. **Ensure code formatting** follows ESLint rules

8. **Verify that component functionality** remains unchanged

9. **Organize the component structure** according to the recommended pattern
