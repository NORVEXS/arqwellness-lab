export type TeamRoleKey =
  | 'leadLab'
  | 'leadTep1000'
  | 'senior'
  | 'junior';

export interface TeamPerson {
  nameKey: string;
  roleKey: TeamRoleKey;
  href?: string;
}

export const LEADS: TeamPerson[] = [
  {
    nameKey: 'team.members.ignacio',
    roleKey: 'leadLab',
    href: 'https://prisma.us.es/investigador/18',
  },
  {
    nameKey: 'team.members.jesica',
    roleKey: 'leadTep1000',
    href: 'https://prisma.us.es/investigador/5706',
  },
];

export const SENIORS: TeamPerson[] = [
  {
    nameKey: 'team.members.pedro',
    roleKey: 'senior',
    href: 'https://prisma.us.es/investigador/514',
  },
  {
    nameKey: 'team.members.miguel',
    roleKey: 'senior',
    href: 'https://prisma.us.es/investigador/589',
  },
  {
    nameKey: 'team.members.samuel',
    roleKey: 'senior',
    href: 'https://prisma.us.es/investigador/1091',
  },
  {
    nameKey: 'team.members.jaime',
    roleKey: 'senior',
    href: 'https://prisma.us.es/investigador/2955',
  },
  {
    nameKey: 'team.members.juanjose',
    roleKey: 'senior',
    href: 'https://prisma.us.es/investigador/4018',
  },
];

export const OTHERS: TeamPerson[] = [
  {
    nameKey: 'team.members.guillermo',
    roleKey: 'junior',
    href: 'https://prisma.us.es/investigador/10093',
  },
  {
    nameKey: 'team.members.maria',
    roleKey: 'junior',
    href: 'https://prisma.us.es/investigador/8449',
  },
];
