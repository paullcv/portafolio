import {TAGS} from './tags'
import BravoImage from '../assets/projects/bravosa.jpg'
import Fotovent from '../assets/projects/fotovent.png'
import Turismointeligente from '../assets/projects/turismointeligente.png'
import EmoCareImage from '../assets/projects/emocare.png'
import brillitosrosa from '../assets/projects/brillitosrosa.jpg'
import mockup_rrhh from '../assets/projects/mockup_rrhh.png'
import mockup_signavox from '../assets/projects/mockup_signavox.jpg'

export const PROJECTS = [
    {
      title: "Fotovent",
      description:
        "Plataforma que conecta invitados, fotógrafos y organizadores de eventos mediante IA de reconocimiento facial, permitiendo a los asistentes encontrar y adquirir fácilmente sus fotografías.",
      image: Fotovent,
      github: "https://github.com/paullcv/Fotovent.git",
      tags: [TAGS.TAILWIND, TAGS.FIGMA, TAGS.MONGO, TAGS.VUE, TAGS.VUETI],
    },
    {
      title: "TraBol - Turismo Inteligente",
      description:
        "¡Obtén tus tarjetas de regalo favoritas de forma rápida, segura y con recompensas! Nuestra aplicación te permite encargar tarjetas de regalo de plataformas como (Google, Amazon, Netflix...). Disfruta de un proceso de compra sencillo, pagos seguros y la posibilidad de ganar puntos por cada compra y por referir a tus amigos.",
      image: Turismointeligente,
      github: "https://github.com/paullcv/ProyectoTurismoInteligente.git",
      tags: [TAGS.BOOTSTRAP, TAGS.LARAVEL, TAGS.MYSQL],
    },
    {
      title: "EmoCare",
      description:
        "Sistema multiplataforma que permita la centralización de los pasajes de diferentes medios de transporte y la de las reservas.",
      image: EmoCareImage,
      github: "https://github.com/paullcv/emocare.git",
      tags: [TAGS.DJANGO, TAGS.BOOTSTRAP, TAGS.POSTGRES, TAGS.PYTHON],
    },
    {
      title: "RRHH microservicio y analizador de CV",
      description:
        "Sistema de gestión de negocio + TPV (Terminal de Punto de Venta). IPV, Estadísticas, Almacén, Existencia,Ventas, etc.El sitio administrativo desde donde gestiona todo el negocio cuenta con 9 secciones principales",
      image: mockup_rrhh,
      github: "https://github.com/paullcv/RRHH.git",
      tags: [TAGS.BOOTSTRAP, TAGS.LARAVEL, TAGS.SQLITE, TAGS.PHP],
    },
    {
      title: "Brillitos Rosa",
      description:
        "Esta iniciativa ha rescatado las páginas de décadas pasadas del deterioro y la mala manipulación, preservando un legado de conocimiento, lucha y empoderamiento femenino. La base de datos no solo conserva estos documentos históricos, sino que también los hace accesibles para la investigación, la educación y la inspiración.",
      image: brillitosrosa,
      github: "https://github.com/paullcv/Brillitos_Rosa.git",
      tags: [TAGS.LARAVEL, TAGS.SQLITE, TAGS.PHP],
    },
    {
      title: "SignaVox",
      description:
        "El producto posee un alcance internacional. Este software esta creado con el propósito de que se conozcan los productos que se elaboran en la empresa mixta de productos cárnicos, Bravos S.A. ",
      image: mockup_signavox,
      github: "https://github.com/paullcv/SignaVoxBackend.git",
      tags: [TAGS.PHP, TAGS.BOOTSTRAP],
    },
  ]
  