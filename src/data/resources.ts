export type ResourceCategory =
  | 'standard'
  | 'presentation'
  | 'tool'
  | 'video'
  | 'workshop';

export interface Resource {
  id: string;
  category: ResourceCategory;
  titleKey: string;
  metaKey?: string;
  href: string;
}

export const RESOURCES: Resource[] = [
  {
    id: 'une-171380',
    category: 'standard',
    titleKey: 'resources.items.une171380.title',
    metaKey: 'resources.items.une171380.meta',
    href: 'https://www.une.org/encuentra-tu-norma/busca-tu-norma/norma/?c=N0072394',
  },
  {
    id: 'book-iaq',
    category: 'standard',
    titleKey: 'resources.items.bookIaq.title',
    metaKey: 'resources.items.bookIaq.meta',
    href: 'https://octaedro.com/libro/calidad-del-aire-interior-en-los-edificios-para-el-bienestar-estrategias-de-aplicacion-practicas/',
  },
  {
    id: 'covid-airborne-risk',
    category: 'tool',
    titleKey: 'resources.items.covidAirborne.title',
    metaKey: 'resources.items.covidAirborne.meta',
    href: 'https://www.covidairbornerisk.com/',
  },
  {
    id: 'co2-ventilation',
    category: 'tool',
    titleKey: 'resources.items.co2Ventilation.title',
    metaKey: 'resources.items.co2Ventilation.meta',
    href: 'https://hdvirtual.us.es/discovirt/index.php/s/SLAcjAznNtDkJRn?openfile=true',
  },
  {
    id: 'hepa-comparison',
    category: 'tool',
    titleKey: 'resources.items.hepa.title',
    metaKey: 'resources.items.hepa.meta',
    href: 'https://hdvirtual.us.es/discovirt/index.php/s/7f2sZKDH7fYcRfJ',
  },
  {
    id: 'ediaqi-pres',
    category: 'workshop',
    titleKey: 'resources.items.ediaqi.title',
    metaKey: 'resources.items.ediaqi.meta',
    href: 'https://institucional.us.es/arqwellness/wp-content/uploads/2026/05/IIWS-1.-EDIAQI.pptx',
  },
  {
    id: 'carelight-pres',
    category: 'workshop',
    titleKey: 'resources.items.carelight.title',
    metaKey: 'resources.items.carelight.meta',
    href: 'https://institucional.us.es/arqwellness/wp-content/uploads/2026/05/IIWS-4.-CARELIGHT-presentacion.pptx',
  },
  {
    id: 'natural-light-workshop',
    category: 'workshop',
    titleKey: 'resources.items.naturalLight.title',
    metaKey: 'resources.items.naturalLight.meta',
    href: 'https://institucional.us.es/arqwellness/wp-content/uploads/2026/05/IIWS-8.-Taller-de-luz-natural-en-Arquitectura.pptx',
  },
  {
    id: 'air-health',
    category: 'workshop',
    titleKey: 'resources.items.airHealth.title',
    metaKey: 'resources.items.airHealth.meta',
    href: 'https://institucional.us.es/arqwellness/wp-content/uploads/2026/05/20251117_Calidad-del-aire-y-prevencion-en-salud.pptx',
  },
];
