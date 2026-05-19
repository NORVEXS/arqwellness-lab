export type PubTopic = 'lighting' | 'energy' | 'comfort';

export interface Publication {
  id: string;
  authors: string;
  journal: string;
  year: string;
  topic: PubTopic;
  i18nKey: string;
  /** URL completa al artículo o a la página institucional con la referencia */
  href: string;
}

const INSTITUTIONAL_PUBS = 'https://institucional.us.es/arqwellness/investigacion/publicaciones/';

export const PUBLICATIONS: Publication[] = [
  {
    id: 'chronolight-hospital',
    authors: 'Acosta, I.; Campano, M. Á.; Domínguez-Amarillo, S. et al.',
    journal: 'LEUKOS — Journal of the Illuminating Engineering Society',
    year: '2025',
    topic: 'lighting',
    i18nKey: 'publications.items.chronolightHospital',
    href: INSTITUTIONAL_PUBS,
  },
  {
    id: 'chronolight-pathogens',
    authors: 'Acosta, I.; Domínguez-Amarillo, S.; Fernández-Agüera, J. et al.',
    journal: 'International Journal of Infectious Diseases',
    year: '2025',
    topic: 'lighting',
    i18nKey: 'publications.items.chronolightPathogens',
    href: INSTITUTIONAL_PUBS,
  },
  {
    id: 'hemodialysis-iaq',
    authors: 'Fernández-Agüera, J.; Domínguez-Amarillo, S.; Campano, M. Á. et al.',
    journal: 'Building and Environment',
    year: '2025',
    topic: 'comfort',
    i18nKey: 'publications.items.hemodialysisIaq',
    href: INSTITUTIONAL_PUBS,
  },
  {
    id: 'vulnerable-occupants',
    authors: 'Domínguez-Amarillo, S.; Fernández-Agüera, J.; Acosta, I. et al.',
    journal: 'Applied Sciences',
    year: '2025',
    topic: 'comfort',
    i18nKey: 'publications.items.vulnerableOccupants',
    href: INSTITUTIONAL_PUBS,
  },
  {
    id: 'dynamic-lighting-review',
    authors: 'Acosta, I.; Navarro, J.; León, Á. L. et al.',
    journal: 'Applied Sciences',
    year: '2025',
    topic: 'lighting',
    i18nKey: 'publications.items.dynamicLightingReview',
    href: INSTITUTIONAL_PUBS,
  },
  {
    id: 'mediterranean-schools',
    authors: 'León, Á. L.; Suárez, R.; Galán, C. et al.',
    journal: 'Indoor Air',
    year: '2025',
    topic: 'energy',
    i18nKey: 'publications.items.mediterraneanSchools',
    href: INSTITUTIONAL_PUBS,
  },
];
