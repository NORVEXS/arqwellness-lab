export type PubTopic = 'lighting' | 'energy' | 'comfort';

export interface Publication {
  id: string;
  authors: string;
  journal: string;
  year: string;
  topic: PubTopic;
  i18nKey: string;
  /** DOI completo (sin prefijo URL) */
  doi?: string;
  /** URL completa al artículo o a la página institucional con la referencia */
  href: string;
}

export const PUBLICATIONS: Publication[] = [
  {
    id: 'hemodialysis-iaq',
    authors:
      'Rodríguez, D.; Jiménez, E.; Quiles-Zafra, R.; Acosta, I.; Bustamante, P.; Campano, M. Á.',
    journal: 'Building and Environment',
    year: '2025',
    topic: 'comfort',
    i18nKey: 'publications.items.hemodialysisIaq',
    doi: '10.1016/j.buildenv.2025.113753',
    href: 'https://prisma.us.es/publicacion/269142',
  },
  {
    id: 'chronolight-hospital',
    authors:
      'Aguilar-Carrasco, M. T.; Domínguez-Amarillo, S.; Álvarez-López, A. I.; Carrillo-Vico, A.; Acosta, I.',
    journal: 'LEUKOS — Journal of the Illuminating Engineering Society',
    year: '2025',
    topic: 'lighting',
    i18nKey: 'publications.items.chronolightHospital',
    doi: '10.1080/15502724.2024.2424958',
    href: 'https://prisma.us.es/publicacion/253918',
  },
  {
    id: 'chronolight-pathogens',
    authors: 'Acosta, I.; Domínguez-Amarillo, S.; Fernández-Agüera, J. et al.',
    journal: 'International Journal of Infectious Diseases',
    year: '2025',
    topic: 'lighting',
    i18nKey: 'publications.items.chronolightPathogens',
    href: 'https://institucional.us.es/arqwellness/investigacion/publicaciones/',
  },
  {
    id: 'vulnerable-occupants',
    authors: 'Domínguez-Amarillo, S.; Fernández-Agüera, J.; Acosta, I. et al.',
    journal: 'Applied Sciences',
    year: '2025',
    topic: 'comfort',
    i18nKey: 'publications.items.vulnerableOccupants',
    href: 'https://institucional.us.es/arqwellness/investigacion/publicaciones/',
  },
  {
    id: 'dynamic-lighting-review',
    authors: 'Acosta, I.; Navarro, J.; León, Á. L. et al.',
    journal: 'Applied Sciences',
    year: '2025',
    topic: 'lighting',
    i18nKey: 'publications.items.dynamicLightingReview',
    href: 'https://institucional.us.es/arqwellness/investigacion/publicaciones/',
  },
  {
    id: 'dao-con',
    authors: 'Acosta, I.; Campano, M. Á.; Domínguez-Amarillo, S.; Navarro-Casas, J.',
    journal: 'LEUKOS — Journal of the Illuminating Engineering Society',
    year: '2023',
    topic: 'energy',
    i18nKey: 'publications.items.daoCon',
    doi: '10.1080/15502724.2022.2135528',
    href: 'https://prisma.us.es/publicacion/216968',
  },
];
