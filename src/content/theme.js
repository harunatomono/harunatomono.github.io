// Colors for the whole site.
//
// 1. `palette` defines the raw colors.
// 2. Everything below it assigns a palette name (or any CSS color) to a role.
//
// Each role becomes a CSS variable, e.g. page.background -> var(--page-background),
// notes.sticky.fold -> var(--notes-sticky-fold). To add a new role, add it here and
// reference the variable from src/styles/components.css.

export const palette = {
  accent1: '#c6df8b',
  accent1Dark: '#8ba550',
  accent2: '#ffa7b0',
  accent2Dark: '#e44d5c',
  accent3: '#feab6c',
  accent3Dark: '#cd732e',
  accent4: '#8fd5f1',
  accent4Dark: '#4093b4',
  accent5: '#a166e0',
  accent5Dark: '#67418f',
  neutral1: '#faf9e9',
  neutral2: '#faf9e9',
  neutral3: '#f5efdc',
  neutral4: '#ebdebd',
  neutral5: '#dbc794',
  neutral6: '#b79663',
  neutral7: '#967648',
  neutral8: '#75582f',
  neutral9: '#503a1f',
  neutral10: '#362712',
  neutral11: '#211808',
};

export const roles = {
  page: {
    background: 'neutral1',
    text: 'neutral9',
    selectionBackground: 'accent4',
    selectionText: 'neutral10',
  },
  text: {
    muted: 'neutral8',
    subtle: 'neutral7',
  },
  border: {
    default: 'neutral4',
    soft: 'neutral3',
    underline: 'neutral4',
    news: 'neutral5',
    newsDot: 'neutral9',
  },
  // The three sticky notes on the home page.
  notes: {
    headline: { background: 'accent1', text: 'neutral10' },
    sticky: { background: 'accent2', fold: 'accent2Dark', text: 'neutral10' },
    contact: { background: 'accent3', text: 'neutral9' },
  },
  // Background colors of the three intro-animation screens.
  loader: {
    star: 'accent1',
    firstName: 'accent2',
    fullName: 'accent3',
    text: 'neutral10',
  },
  tags: {
    background: 'neutral3',
    text: 'neutral7',
  },
  footer: {
    background: 'neutral2',
    text: 'neutral9',
  },
  links: {
    hover: 'accent4',
  },
};
