// Turns the theme in content/theme.js into CSS custom properties.

import { palette, roles } from '../content/theme';

const toKebabCase = (name) => name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

// A role value is either a palette name ('accent1') or a raw CSS color ('#fff').
const resolveColor = (value) => (palette[value] ? `var(--palette-${toKebabCase(value)})` : value);

// { notes: { sticky: { fold: 'x' } } } -> { '--notes-sticky-fold': <color of x> }
const flattenRoles = (node, path = []) =>
  Object.entries(node).flatMap(([key, value]) => {
    const nextPath = [...path, toKebabCase(key)];
    return typeof value === 'object'
      ? flattenRoles(value, nextPath)
      : [[`--${nextPath.join('-')}`, resolveColor(value)]];
  });

export const themeVariables = Object.fromEntries([
  ...Object.entries(palette).map(([name, color]) => [`--palette-${toKebabCase(name)}`, color]),
  ...flattenRoles(roles),
]);

/** CSS color for a palette name or raw color (for inline styles). */
export const colorFor = resolveColor;
