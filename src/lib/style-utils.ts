/**
 * Utility functions for handling dynamic styles in a type-safe way
 */

type CSSVariable = `--${string}`
type CSSPropertiesWithVars = React.CSSProperties & {
  [key: CSSVariable]: string | number | undefined;
  [key: string]: string | number | undefined;
}

export function createStyleObject(
  styles: Partial<Record<keyof React.CSSProperties, string | number>>
): React.CSSProperties {
  return styles as React.CSSProperties
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
