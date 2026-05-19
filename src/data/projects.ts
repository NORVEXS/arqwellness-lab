export type ProjectType = 'rd' | 'contract';

export interface Project {
  id: string;
  type: ProjectType;
  name: string;
  logo?: string;
  scope?: string; // free text shown as a small chip — keep it short
  topic: 'lighting' | 'air' | 'comfort' | 'energy' | 'health';
}

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
  },
  {
    id: 'hemolight',
    type: 'rd',
    name: 'Hemolight',
    logo: hemolight,
    scope: 'Luz y salud',
    topic: 'lighting',
  },
  {
    id: 'chronolux',
    type: 'rd',
    name: 'Chronolux',
    logo: chronolux,
    scope: 'Ritmos biológicos',
    topic: 'lighting',
  },
  {
    id: 'chronolight',
    type: 'rd',
    name: 'Chronolight',
    logo: chronolight,
    scope: 'Ritmos circadianos',
    topic: 'lighting',
  },
  {
    id: 'carelight',
    type: 'rd',
    name: 'Carelight',
    logo: carelight,
    scope: 'Entornos asistenciales',
    topic: 'health',
  },
  {
    id: 'chroniclight',
    type: 'rd',
    name: 'Chroniclight',
    logo: chroniclight,
    scope: 'Exposición lumínica prolongada',
    topic: 'lighting',
  },
  {
    id: 'neurolight',
    type: 'rd',
    name: 'Neurolight',
    logo: neurolight,
    scope: 'Iluminación y cognición',
    topic: 'lighting',
  },
  {
    id: 'uncover',
    type: 'rd',
    name: 'UNCOVER',
    logo: uncover,
    scope: 'Diseño urbano y confort',
    topic: 'comfort',
  },
  {
    id: 'metrco2',
    type: 'rd',
    name: 'MetrCO₂',
    logo: metrco2,
    scope: 'Medición de CO₂ interior',
    topic: 'air',
  },
  {
    id: 'dynalight',
    type: 'rd',
    name: 'Dynalight',
    logo: dynalight,
    scope: 'Iluminación dinámica adaptativa',
    topic: 'lighting',
  },
  {
    id: 'heriled',
    type: 'rd',
    name: 'Heriled',
    logo: heriled,
    scope: 'Iluminación de patrimonio',
    topic: 'lighting',
  },
  {
    id: 'metrorio',
    type: 'contract',
    name: 'MetroRío',
    logo: metrorio,
    scope: 'Río de Janeiro',
    topic: 'comfort',
  },
  {
    id: 'el-cubo-granada',
    type: 'contract',
    name: 'El Cubo · Granada',
    logo: elCubo,
    scope: 'Edificio judicial',
    topic: 'energy',
  },
  {
    id: 'wells-riley',
    type: 'contract',
    name: 'Wells-Riley',
    logo: wellsRiley,
    scope: 'Herramienta online de riesgo aéreo',
    topic: 'air',
  },
  {
    id: 'metro-sevilla',
    type: 'contract',
    name: 'Metro Sevilla',
    logo: metroSevilla,
    scope: 'Condiciones ambientales',
    topic: 'comfort',
  },
];
