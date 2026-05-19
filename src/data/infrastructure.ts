export interface InfrastructureItem {
  id: string;
  image: string;
  titleKey: string;
  descriptionKey: string;
  badgeKey?: string;
}

import blowerDoor from '../assets/images/infrastructure/blower-door-arqwellness-us.webp';
import cabinaIluminacion from '../assets/images/infrastructure/cabina-iluminacion-arqwellness-us.webp';
import celdasEnsayo from '../assets/images/infrastructure/celdas-ensayo-arqwellness-us.webp';
import lightlabModulo from '../assets/images/infrastructure/lightlab-modulo-arquitectura.webp';

export const INFRASTRUCTURE: InfrastructureItem[] = [
  {
    id: 'blower-door',
    image: blowerDoor,
    titleKey: 'infrastructure.items.blowerDoor.title',
    descriptionKey: 'infrastructure.items.blowerDoor.description',
    badgeKey: 'infrastructure.items.blowerDoor.badge',
  },
  {
    id: 'cabina-iluminacion',
    image: cabinaIluminacion,
    titleKey: 'infrastructure.items.lightCabin.title',
    descriptionKey: 'infrastructure.items.lightCabin.description',
    badgeKey: 'infrastructure.items.lightCabin.badge',
  },
  {
    id: 'celdas-ensayo',
    image: celdasEnsayo,
    titleKey: 'infrastructure.items.testCells.title',
    descriptionKey: 'infrastructure.items.testCells.description',
    badgeKey: 'infrastructure.items.testCells.badge',
  },
  {
    id: 'lightlab',
    image: lightlabModulo,
    titleKey: 'infrastructure.items.lightlab.title',
    descriptionKey: 'infrastructure.items.lightlab.description',
    badgeKey: 'infrastructure.items.lightlab.badge',
  },
];
