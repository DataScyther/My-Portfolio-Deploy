/**
 * Utility functions for handling dynamic styles in a type-safe way
 */

type CSSVariable = `--${string}`

export function createStyleObject(
  styles: Partial<Record<keyof React.CSSProperties, string | number>>
): React.CSSProperties {
  return styles as React.CSSProperties
}

export function createCSSVariables(
  variables: Record<string, string | number>
): React.CSSProperties {
  return Object.entries(variables).reduce<React.CSSProperties>((acc, [key, value]) => {
    const cssVar = key.startsWith('--') ? key : `--${key}`
    acc[cssVar as CSSVariable] = value
    return acc
  }, {})
}

/**
 * Creates a style object with CSS variables for dynamic theming
 */
export function createThemedStyle(
  baseStyles: React.CSSProperties = {},
  variables: Record<string, string | number> = {},
  additionalStyles: React.CSSProperties = {}
): React.CSSProperties {
  return {
    ...baseStyles,
    ...createCSSVariables(variables),
    ...additionalStyles,
  }
}
