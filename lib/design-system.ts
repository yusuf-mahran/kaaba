/**
 * Design System Configuration
 *
 * This file defines the color palette and design tokens for the application.
 * All components should use these tokens instead of hardcoded color values.
 */

export const colors = {
  // Primary colors - Amber-based palette
  primary: {
    DEFAULT: 'var(--color-primary)',
    light: 'var(--color-primary-light)',
    dark: 'var(--color-primary-dark)',
    foreground: 'var(--color-primary-foreground)',
  },

  // Accent color for CTAs and highlights
  accent: {
    DEFAULT: 'var(--color-accent)',
    foreground: 'var(--color-accent-foreground)',
  },

  // Neutral colors for text and backgrounds
  neutral: {
    50: 'var(--color-neutral-50)',
    100: 'var(--color-neutral-100)',
    200: 'var(--color-neutral-200)',
    300: 'var(--color-neutral-300)',
    400: 'var(--color-neutral-400)',
    500: 'var(--color-neutral-500)',
    600: 'var(--color-neutral-600)',
    700: 'var(--color-neutral-700)',
    800: 'var(--color-neutral-800)',
    900: 'var(--color-neutral-900)',
  },

  // Surface colors
  surface: {
    DEFAULT: 'var(--color-surface)',
    secondary: 'var(--color-surface-secondary)',
    elevated: 'var(--color-surface-elevated)',
  },

  // Text colors
  text: {
    primary: 'var(--color-text-primary)',
    secondary: 'var(--color-text-secondary)',
    tertiary: 'var(--color-text-tertiary)',
    inverse: 'var(--color-text-inverse)',
  },

  // Border colors
  border: {
    DEFAULT: 'var(--color-border)',
    light: 'var(--color-border-light)',
    focus: 'var(--color-border-focus)',
  },
} as const;

/**
 * Design system class names for common use cases
 * These can be used directly in components
 */
export const ds = {
  // Text colors
  text: {
    primary: 'text-text-primary',
    secondary: 'text-text-secondary',
    tertiary: 'text-text-tertiary',
    inverse: 'text-text-inverse',
  },

  // Background colors
  bg: {
    primary: 'bg-primary',
    primaryLight: 'bg-primary-light',
    primaryDark: 'bg-primary-dark',
    accent: 'bg-accent',
    surface: 'bg-surface',
    surfaceSecondary: 'bg-surface-secondary',
    surfaceElevated: 'bg-surface-elevated',
    neutral: {
      50: 'bg-neutral-50',
      100: 'bg-neutral-100',
      200: 'bg-neutral-200',
      300: 'bg-neutral-300',
      400: 'bg-neutral-400',
      500: 'bg-neutral-500',
      600: 'bg-neutral-600',
      700: 'bg-neutral-700',
      800: 'bg-neutral-800',
      900: 'bg-neutral-900',
    },
  },

  // Border colors
  border: {
    DEFAULT: 'border-border',
    light: 'border-border-light',
    focus: 'border-border-focus',
  },

  // Common button styles
  button: {
    primary: 'bg-neutral-900 text-text-inverse hover:bg-neutral-800',
    primaryWithAccent:
      'inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-text-inverse transition hover:bg-neutral-800',
    secondary:
      'border border-border bg-surface text-text-primary hover:border-border-focus',
    accent: 'bg-accent text-accent-foreground',
  },

  // Common card styles
  card: {
    DEFAULT: 'bg-surface rounded-3xl p-6',
    featured: 'bg-neutral-900 text-text-inverse rounded-3xl p-6',
    elevated: 'bg-surface-elevated rounded-2xl shadow-lg',
  },

  // Badge styles
  badge: {
    primary:
      'inline-flex w-fit rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-foreground',
    trustpilot:
      'flex w-fit items-center gap-3 rounded-full border border-border-light bg-surface px-3 py-2 shadow-sm',
  },
} as const;

export type ColorToken = typeof colors;
export type DesignSystemClasses = typeof ds;
