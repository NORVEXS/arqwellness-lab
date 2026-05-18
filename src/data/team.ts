export type TeamRoleKey =
  | 'leadLab'
  | 'leadTep1000'
  | 'senior'
  | 'junior'
  | 'contracted'
  | 'collaborators';

export interface TeamPerson {
  nameKey: string;
  roleKey: TeamRoleKey;
  href?: string;
}

export const LEADS: TeamPerson[] = [
  {
    nameKey: 'team.members.ignacio',
    roleKey: 'leadLab',
    href: 'https://investigacion.us.es/sisius/sis_showpub.php?idpers=13492',
  },
  {
    nameKey: 'team.members.jesica',
    roleKey: 'leadTep1000',
    href: 'https://investigacion.us.es/sisius/sis_showpub.php?idpers=16100',
  },
];

export const SENIORS: TeamPerson[] = [
  {
    nameKey: 'team.members.pedro',
    roleKey: 'senior',
    href: 'https://investigacion.us.es/sisius/sis_showpub.php?ct=1&cs=&idpers=7376',
  },
  {
    nameKey: 'team.members.miguel',
    roleKey: 'senior',
    href: 'https://personal.us.es/mcampano/cv/cvenglish/',
  },
  {
    nameKey: 'team.members.samuel',
    roleKey: 'senior',
    href: 'https://investigacion.us.es/sisius/sis_showpub.php?ct=1&cs=&idpers=5470',
  },
  {
    nameKey: 'team.members.jaime',
    roleKey: 'senior',
    href: 'https://investigacion.us.es/sisius/sis_showpub.php?ct=1&cs=&idpers=3062',
  },
  {
    nameKey: 'team.members.juanjose',
    roleKey: 'senior',
    href: 'https://investigacion.us.es/sisius/sis_showpub.php?idpers=3064',
  },
];

export const OTHERS: TeamPerson[] = [
  { nameKey: 'team.members.guillermo', roleKey: 'junior' },
  {
    nameKey: 'team.members.maria',
    roleKey: 'contracted',
    href: 'https://es.linkedin.com/in/mar%C3%ADa-e-triana-s%C3%A1nchez-mu%C3%B1oz-402640225',
  },
  { nameKey: 'team.members.patricia', roleKey: 'contracted' },
  { nameKey: 'team.members.juandiego', roleKey: 'collaborators' },
];
