export type ProjectType = 'rd' | 'contract';

export interface Project {
  id: string;
  type: ProjectType;
  name: string;
  logo?: string;
  scope?: string; // free text shown as a small chip — keep it short
  topic: 'lighting' | 'air' | 'comfort' | 'energy' | 'health';
  /** Project-specific URL (institutional site or SISIUS record) */
  href: string;
}

/** Fallback for projects without a dedicated public page yet */
const GROUP_PAGE = 'https://institucional.us.es/proyectostep130/';

import ediaqi from '../assets/images/project-logos/ediaqi.svg';
import hemolight from '../assets/images/project-logos/hemolight.svg';
import chronolux from '../assets/images/project-logos/chronolux.webp';
import chronolight from '../assets/images/project-logos/chronolight.webp';
import carelight from '../assets/images/project-logos/carelight.svg';
import chroniclight from '../assets/images/project-logos/chroniclight.webp';
import neurolight from '../assets/images/project-logos/neurolight.webp';
import uncover from '../assets/images/project-logos/uncover.webp';
import metrco2 from '../assets/images/project-logos/metrco2.webp';
import dynalight from '../assets/images/project-logos/dynalight.webp';
import heriled from '../assets/images/project-logos/heriled.webp';
import metrorio from '../assets/images/project-logos/metrorio.webp';
import elCubo from '../assets/images/project-logos/el-cubo-granada.webp';
import wellsRiley from '../assets/images/project-logos/wells-riley.webp';
import metroSevilla from '../assets/images/project-logos/metro-sevilla.webp';

export const PROJECTS: Project[] = [
  {
    id: 'ediaqi',
    type: 'rd',
    name: 'EDIAQI',
    logo: ediaqi,
    scope: 'Calidad del aire interior',
    topic: 'air',
    href: 'https://ediaqi.eu/',
  },
  {
    id: 'hemolight',
    type: 'rd',
    name: 'Hemolight',
    logo: hemolight,
    scope: 'Luz y salud',
    topic: 'lighting',
    href: 'https://institucional.us.es/hemolight/',
  },
  {
    id: 'chronolux',
    type: 'rd',
    name: 'Chronolux',
    logo: chronolux,
    scope: 'Ritmos biológicos',
    topic: 'lighting',
    href: 'https://investigacion.us.es/sisius/sis_proyecto.php?idproy=41911',
  },
  {
    id: 'chronolight',
    type: 'rd',
    name: 'Chronolight',
    logo: chronolight,
    scope: 'Ritmos circadianos',
    topic: 'lighting',
    href: 'https://institucional.us.es/chronolight/',
  },
  {
    id: 'carelight',
    type: 'rd',
    name: 'Carelight',
    logo: carelight,
    scope: 'Entornos asistenciales',
    topic: 'health',
    href: 'https://institucional.us.es/carelightlite/',
  },
  {
    id: 'chroniclight',
    type: 'rd',
    name: 'Chroniclight',
    logo: chroniclight,
    scope: 'Exposición lumínica prolongada',
    topic: 'lighting',
    href: 'https://investigacion.us.es/sisius/sis_proyecto.php?idproy=40032',
  },
  {
    id: 'neurolight',
    type: 'rd',
    name: 'Neurolight',
    logo: neurolight,
    scope: 'Iluminación y cognición',
    topic: 'lighting',
    href: 'https://institucional.us.es/neurolight',
  },
  {
    id: 'uncover',
    type: 'rd',
    name: 'UNCOVER',
    logo: uncover,
    scope: 'Diseño urbano y confort',
    topic: 'comfort',
    href: 'https://institucional.us.es/uncover/',
  },
  {
    id: 'metrco2',
    type: 'rd',
    name: 'MetrCO₂',
    logo: metrco2,
    scope: 'Medición de CO₂ interior',
    topic: 'air',
    href: 'https://investigacion.us.es/sisius/sis_proyecto.php?idproy=34492',
  },
  {
    id: 'dynalight',
    type: 'rd',
    name: 'Dynalight',
    logo: dynalight,
    scope: 'Iluminación dinámica adaptativa',
    topic: 'lighting',
    href: 'https://investigacion.us.es/sisius/sis_proyecto.php?idproy=28492',
  },
  {
    id: 'heriled',
    type: 'rd',
    name: 'Heriled',
    logo: heriled,
    scope: 'Iluminación de patrimonio',
    topic: 'lighting',
    href: GROUP_PAGE,
  },
  {
    id: 'metrorio',
    type: 'contract',
    name: 'MetroRío',
    logo: metrorio,
    scope: 'Río de Janeiro',
    topic: 'comfort',
    href: 'https://investigacion.us.es/sisius/sis_proyecto.php?idproy=39499',
  },
  {
    id: 'el-cubo-granada',
    type: 'contract',
    name: 'El Cubo · Granada',
    logo: elCubo,
    scope: 'Edificio judicial',
    topic: 'energy',
    href: 'https://investigacion.us.es/sisius/sis_proyecto.php?idproy=39024',
  },
  {
    id: 'wells-riley',
    type: 'contract',
    name: 'Wells-Riley',
    logo: wellsRiley,
    scope: 'Herramienta online de riesgo aéreo',
    topic: 'air',
    href: 'https://investigacion.us.es/sisius/sis_proyecto.php?idproy=39551',
  },
  {
    id: 'metro-sevilla',
    type: 'contract',
    name: 'Metro Sevilla',
    logo: metroSevilla,
    scope: 'Condiciones ambientales',
    topic: 'comfort',
    href: GROUP_PAGE,
  },
];
