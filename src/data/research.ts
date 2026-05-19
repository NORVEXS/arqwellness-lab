import generated from './research-members.generated.json';

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

export interface PrismaMember {
  id: string;
  url: string;
  fullName: string;
  shortName: string;
  role: 'ip' | 'member';
}

export interface PrismaPublication {
  id: string;
  url: string;
  type: string;
  dataType: string;
  year: string;
  title: string;
  journal: string;
}

interface GeneratedGroup {
  key: string;
  url: string;
  members: PrismaMember[];
  publications: PrismaPublication[];
  publicationsTotal: Record<string, number>;
}

interface GeneratedFile {
  generatedAt: string;
  source: string;
  groups: Record<GroupKey, GeneratedGroup | null>;
}

const data = generated as GeneratedFile;

export const MEMBERS_GENERATED_AT = data.generatedAt;

export function getGroupMembers(group: GroupKey): PrismaMember[] {
  return data.groups[group]?.members ?? [];
}

export function getGroupPublications(group: GroupKey): PrismaPublication[] {
  return data.groups[group]?.publications ?? [];
}

export function getGroupPublicationsTotal(group: GroupKey): number {
  return data.groups[group]?.publicationsTotal?.total ?? 0;
}

export function getGroupArticlesTotal(group: GroupKey): number {
  return data.groups[group]?.publicationsTotal?.['Artículo'] ?? 0;
}

export function getGroupPrismaUrl(group: GroupKey): string {
  return data.groups[group]?.url ?? '';
}
