/**
 * Utility functions for handling dynamic styles in a type-safe way
 */

import type { CSSProperties } from 'react';

type CSSVariable = `--${string}`
type CSSPropertiesWithVars = CSSProperties & {
  [key: CSSVariable]: string | number | undefined;
  [key: string]: string | number | undefined;
}

export function createStyleObject(
  styles: Partial<Record<keyof CSSProperties, string | number>>
): CSSProperties {
  return styles as CSSProperties
}

export function createCSSVariables(
  variables: Record<string, string | number>
): CSSPropertiesWithVars {
  return Object.entries(variables).reduce<CSSPropertiesWithVars>((acc, [key, value]) => {
    const cssVar = (key.startsWith('--') ? key : `--${key}`) as CSSVariable
    acc[cssVar] = value
    return acc
  }, {} as CSSPropertiesWithVars)
}

/**
 * Creates a style object with CSS variables for dynamic theming
 */
export function createThemedStyle(
  baseStyles: CSSProperties = {},
  variables: Record<string, string | number> = {},
  additionalStyles: CSSProperties = {}
): CSSProperties {
  return {
    ...baseStyles,
    ...createCSSVariables(variables),
    ...additionalStyles,
  }
}
