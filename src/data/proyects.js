import {TAGS} from './tags'
import AlmaImage from '../assets/projects/alma.png'
import ArchiImage from '../assets/projects/archig.png'
import BravoImage from '../assets/projects/bravosa.jpg'
import EGCImage from '../assets/projects/egc.png'
import EnCajaImage from '../assets/projects/encaja.png'
import PrivateImage from '../assets/projects/privatew.png'
import ViajaYaImage from '../assets/projects/viajaya.png'

export const PROJECTS = [
    {
      title: "Alma System",
      description:
        "Panel de administración para sistema de domótica",
      image: AlmaImage,
      tags: [TAGS.TAILWIND, TAGS.FIGMA, TAGS.MONGO, TAGS.VUE, TAGS.VUETI],
    },
    {
      title: "EGC-Cuba",
      description:
        "¡Obtén tus tarjetas de regalo favoritas de forma rápida, segura y con recompensas! Nuestra aplicación te permite encargar tarjetas de regalo de plataformas como (Google, Amazon, Netflix...). Disfruta de un proceso de compra sencillo, pagos seguros y la posibilidad de ganar puntos por cada compra y por referir a tus amigos.",
      image: EGCImage,
      github: "https://github.com/carterror/egc-cuba",
      analista: "https://carlosbrc98.atlassian.net/jira/software/projects/EGCCUBA/boards/1/backlog",
      datos: "https://github.com/carterror/egc-cuba/blob/b8e90d68e7f8a36ad3243a632918fd9da27bb5b2/database/database.png",
      test: "https://github.com/carterror/egc-cuba/tree/main/tests/Feature",
      tags: [TAGS.BOOTSTRAP, TAGS.LARAVEL, TAGS.MYSQL],
    },
    {
      title: "ViajaYa",
      description:
        "Sistema multiplataforma que permita la centralización de los pasajes de diferentes medios de transporte y la de las reservas.",
      image: ViajaYaImage,
      github: "https://github.com/carterror/viajaya-uci",
      analista: "https://carterror.github.io/doc-viaja-ya/",
      datos: "https://github.com/carterror/viajaya-uci/blob/14e9e285f76a4bc42ec3f048d5c46df9df2aea47/database.png",
      test: "https://github.com/carterror/viajaya-uci/tree/main/reservas/tests",
      tags: [TAGS.DJANGO, TAGS.BOOTSTRAP, TAGS.POSTGRES, TAGS.PYTHON],
    },
    {
      title: "PrivateWire",
      description:
        "Servicio VPN profesional para empresas y organizaciones. ",
      image: PrivateImage,
      github: "https://github.com/carterror/privatewire",
      analista: "https://github.com/users/carterror/projects/7/views/2",
      datos: "https://github.com/carterror/privatewire/blob/0b2fc1cb771d9c698810920bcfaee460deb01901/database/database.png",
      tags: [TAGS.LARAVEL, TAGS.PHP, TAGS.MYSQL, TAGS.BOOTSTRAP],
    },
    {
      title: "EnCaja",
      description:
        "Sistema de gestión de negocio + TPV (Terminal de Punto de Venta). IPV, Estadísticas, Almacén, Existencia,Ventas, etc.El sitio administrativo desde donde gestiona todo el negocio cuenta con 9 secciones principales",
      image: EnCajaImage,
      github: "https://github.com/users/carterror/projects/3/views/1",
      fotos: "https://drive.google.com/file/d/1aJQQ1iNPuJK2NljQiKAIl4NH6qkcbR79/view?usp=drive_link",
      analista: "https://github.com/users/carterror/projects/3/views/1",
      datos: "https://github.com/carterror/encaja/blob/fa397e2a77fd9a5630d0d3392e7c85a357c72622/database/database.png",
      tags: [TAGS.BOOTSTRAP, TAGS.LARAVEL, TAGS.SQLITE, TAGS.PHP],
    },
    {
      title: "ArchiGestor",
      description:
        "Esta iniciativa ha rescatado las páginas de décadas pasadas del deterioro y la mala manipulación, preservando un legado de conocimiento, lucha y empoderamiento femenino. La base de datos no solo conserva estos documentos históricos, sino que también los hace accesibles para la investigación, la educación y la inspiración.",
      image: ArchiImage,
      github: "https://github.com/carterror/archigestor",
      fotos: "",
      analista: "https://github.com/users/carterror/projects/1",
      datos: "https://github.com/carterror/archigestor/blob/9dc80f1d6cf0a11d1e28d444eff4ecc6d12f37a5/database/sqlite.png",
      test: "https://github.com/carterror/archigestor/tree/main/tests/Feature",
      tags: [TAGS.LARAVEL, TAGS.SQLITE, TAGS.PHP],
    },
    {
      title: "Bravosa",
      description:
        "El producto posee un alcance internacional. Este software esta creado con el propósito de que se conozcan los productos que se elaboran en la empresa mixta de productos cárnicos, Bravos S.A. ",
      image: BravoImage,
      github: "https://github.com/carterror/bravosa",
      fotos: "",
      analista: "https://github.com/users/carterror/projects/2/views/6",
      datos: "https://github.com/carterror/bravosa/blob/f6559a05820fcb763e9f1158822751995dc2254d/db/database.sql",
      tags: [TAGS.PHP, TAGS.BOOTSTRAP],
    },
  ]
  