export const NAV_IDS = [
  'introduction',
  'about',
  'research-lines',
  'research-groups',
  'infrastructure',
  'training',
  'projects',
  'resources',
  'outreach',
  'contact',
] as const;

export type NavId = (typeof NAV_IDS)[number];
