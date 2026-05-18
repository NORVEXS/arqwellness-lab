export type ProjectType = 'rd' | 'contract';

export interface Project {
  id: string;
  type: ProjectType;
  year: string;
  i18nKey: string;
}

export const PROJECTS: Project[] = [
  { id: 'project1', type: 'rd', year: '2022 — 2024', i18nKey: 'projects.items.project1' },
  { id: 'project2', type: 'rd', year: '2021 — 2023', i18nKey: 'projects.items.project2' },
  { id: 'project3', type: 'rd', year: '2020 — 2022', i18nKey: 'projects.items.project3' },
  { id: 'project4', type: 'contract', year: '2023', i18nKey: 'projects.items.project4' },
  { id: 'project5', type: 'contract', year: '2022', i18nKey: 'projects.items.project5' },
];
