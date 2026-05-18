export const NAV_IDS = [
  'introduction',
  'about',
  'research-lines',
  'research-groups',
  'training',
  'projects',
  'publications',
  'contact',
] as const;

export type NavId = (typeof NAV_IDS)[number];
