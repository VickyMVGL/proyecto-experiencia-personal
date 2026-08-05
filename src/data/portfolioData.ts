import { ExperienceItem, SkillCategory, EducationItem, LanguageItem } from '../types';
import fotoVictoriaLocal from '../assets/images/foto_victoria_1785894639223.jpeg';

export const PERSONAL_INFO = {
  name: 'María Victoria González',
  shortName: 'María González',
  title: 'Software Developer & Computer Engineering Student',
  status: 'Disponible para trabajar',
  location: 'San Diego, Carabobo, Venezuela',
  email: 'mariaviclg2005@gmail.com',
  phone: '0412-856 0713',
  linkedin: 'https://linkedin.com',
  github: 'https://github.com',
  photoUrl: fotoVictoriaLocal,
  photoAlt: 'Foto Victoria - María Victoria González',
  bio: 'Aplicar mis conocimientos y habilidades para contribuir a desarrollar un alcance funcional eficiente, con la visión de lograr los objetivos establecidos. Adicionalmente, proveer la mejor atención a los clientes internos y externos para canalizar sus necesidades.',
  objective: 'Desarrolladora Web y Estudiante de Ingeniería en Computación enfocada en React, TypeScript, Tailwind CSS, PHP, Laravel y MySQL. Apasionada por crear soluciones digitales ágiles, accesibles y orientadas a resultados.'
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'sh-software',
    company: 'S&H Software',
    period: 'Mayo 2025 - actualidad',
    role: 'Desarrolladora Web / Software Developer',
    type: 'software',
    icon: 'Briefcase',
    isCurrent: true,
    bullets: [
      'Creación y Desarrollo de la página Web principal de la compañía, utilizando tecnologías como React, Tailwind CSS y TypeScript.',
      'Mantenimiento y actualización de página web utilizando las tecnologías de PHP, Laravel y MySQL, aplicando manejo de errores y agregando requerimientos solicitados.',
      'Desarrollo de software, específicamente diseñado y realizando según sean los requerimientos de la empresa y clientes.'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind', 'PHP', 'Laravel', 'MySQL']
  },
  {
    id: 'simul-store',
    company: 'Simul Store',
    period: 'abril 2024 - octubre 2024',
    role: 'Asesora de Ventas & Webmaster',
    type: 'sales',
    icon: 'Store',
    bullets: [
      'Asesor de ventas online y presencial con enfoque en satisfacción del cliente.',
      'Creación y mantenimiento de página web creada en Wix.',
      'Manejo de atención al cliente a través de la red social Instagram y canales digitales.'
    ],
    techStack: ['Wix', 'Atención al Cliente', 'Social Media', 'Ventas']
  },
  {
    id: 'ferreteria-eurodeluxe',
    company: 'Ferretería Eurodeluxe',
    period: 'enero 2024 - marzo 2024',
    role: 'Asesora de Ventas & Asistente Administrativo',
    type: 'admin',
    icon: 'Wrench',
    bullets: [
      'Asesor de ventas Presencial brindando soporte oportuno a compradores.',
      'Organización del sistema de inventario físico y digital.',
      'Asistente administrativo en gestión de facturación y control diario.'
    ],
    techStack: ['Gestión de Inventario', 'Atención Presencial', 'Excel', 'Administración']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Técnicas',
    icon: 'Code2',
    iconBg: 'bg-[#00696c]/10',
    iconColor: 'text-[#00696c]',
    skills: [
      'HTML, CSS, JavaScript',
      'Desarrollo Web en WIX',
      'React',
      'TypeScript',
      'Tailwind',
      'PHP & Laravel'
    ]
  },
  {
    title: 'Blandas',
    icon: 'Brain',
    iconBg: 'bg-[#356668]/10',
    iconColor: 'text-[#356668]',
    skills: [
      'Atención al cliente',
      'Resolución de problemas',
      'Atención al detalle',
      'Organización'
    ]
  },
  {
    title: 'Herramientas',
    icon: 'Wrench',
    iconBg: 'bg-[#485f84]/10',
    iconColor: 'text-[#485f84]',
    skills: [
      'Word',
      'Excel',
      'Power Point',
      'MySQL'
    ]
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    title: 'Ingeniería en computación (10mo semestre)',
    institution: 'Universidad José Antonio Páez',
    period: '2022 - Actualidad',
    isCurrent: true,
    details: 'Especialización en desarrollo de software, algoritmos, bases de datos e ingeniería de sistemas.'
  },
  {
    title: 'Bachillerato',
    institution: 'Olga Bayone',
    period: '2017 - 2022',
    details: 'Educación Media General con alto desempeño académico y participación en actividades científicas.'
  },
  {
    title: 'Escuela Preescolar y primaria',
    institution: 'Olga Bayone',
    period: '2008 - 2017',
    details: 'Educación primaria con menciones de honor e interés temprano en lógica y tecnología.'
  }
];

export const LANGUAGES: LanguageItem[] = [
  {
    language: 'Español',
    level: 'Nativo',
    percentage: 100,
    badgeColor: 'bg-[#00696c]/10 text-[#00696c]'
  },
  {
    language: 'Inglés',
    level: 'Avanzado',
    percentage: 80,
    badgeColor: 'bg-[#356668]/10 text-[#356668]'
  }
];
