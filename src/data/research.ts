export type ResearchLineKey = 'comfort' | 'lighting' | 'control';

export interface ResearchLine {
  key: ResearchLineKey;
  iconName: 'Thermometer' | 'Sun' | 'Cpu';
  accent: 'blue' | 'red' | 'purple';
}

export const RESEARCH_LINES: ResearchLine[] = [
  { key: 'comfort', iconName: 'Thermometer', accent: 'blue' },
  { key: 'lighting', iconName: 'Sun', accent: 'red' },
  { key: 'control', iconName: 'Cpu', accent: 'purple' },
];

export const GROUPS = ['tep130', 'tep1000'] as const;
export type GroupKey = (typeof GROUPS)[number];

/** Maps a member's display name (as stored in i18n) to their PRISMA profile URL.
 *  When a name is not in this map, the chip stays as a plain span (no link). */
export const MEMBER_URLS: Record<string, string> = {
  'Juan José Sendra': 'https://prisma.us.es/investigador/4018',
  'Jaime Navarro': 'https://prisma.us.es/investigador/2955',
  'Samuel Domínguez': 'https://prisma.us.es/investigador/1091',
  'Ignacio Acosta': 'https://prisma.us.es/investigador/18',
  // TEP-1000 — sin URL individual conocida, enlazan al grupo
  'Carmen Galán': 'https://prisma.us.es/colectivo/grupo/TEP-1000',
  'Rafael Suárez': 'https://prisma.us.es/colectivo/grupo/TEP-1000',
  'Ángel Luis León': 'https://prisma.us.es/colectivo/grupo/TEP-1000',
  'Mónica Martínez': 'https://prisma.us.es/colectivo/grupo/TEP-1000',
};
