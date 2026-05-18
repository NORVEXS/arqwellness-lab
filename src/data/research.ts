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
