export type PubTopic = 'lighting' | 'energy' | 'comfort';

export interface Publication {
  id: string;
  authors: string;
  journal: string;
  year: string;
  doi: string;
  topic: PubTopic;
  i18nKey: string;
}

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub1',
    authors: 'Domínguez, S., Sendra, J. J., León, A. L.',
    journal: 'Energy and Buildings',
    year: '2022',
    doi: '10.1016/j.enbuild.2022.0000',
    topic: 'lighting',
    i18nKey: 'publications.items.pub1',
  },
  {
    id: 'pub2',
    authors: 'Acosta, I., Navarro, J., Martínez, M.',
    journal: 'Building and Environment',
    year: '2023',
    doi: '10.1016/j.buildenv.2023.0000',
    topic: 'lighting',
    i18nKey: 'publications.items.pub2',
  },
  {
    id: 'pub3',
    authors: 'Suárez, R., Galán, C., León, A. L.',
    journal: 'Energy and Buildings',
    year: '2021',
    doi: '10.1016/j.enbuild.2021.0000',
    topic: 'comfort',
    i18nKey: 'publications.items.pub3',
  },
  {
    id: 'pub4',
    authors: 'Sendra, J. J., Domínguez, S., Suárez, R.',
    journal: 'Energy Efficiency',
    year: '2022',
    doi: '10.1007/s12053-022-0000',
    topic: 'energy',
    i18nKey: 'publications.items.pub4',
  },
  {
    id: 'pub5',
    authors: 'Acosta, I., Navarro, J., Martínez, M.',
    journal: 'Lighting Research & Technology',
    year: '2023',
    doi: '10.1177/1477153523000000',
    topic: 'lighting',
    i18nKey: 'publications.items.pub5',
  },
];
