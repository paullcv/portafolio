import {TAGS} from './tags'
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
        "Plataforma que conecta invitados, fotógrafos y organizadores de eventos mediante IA de reconocimiento facial (FaceAPI), integrada en Laravel, permitiendo a los asistentes encontrar y adquirir fácilmente sus fotografías. Incluye suscripciones y planes de pago con Stripe, almacenamiento de imágenes en AWS S3, y notificaciones automáticas por correo cuando un usuario aparece en una foto.",
      image: Fotovent,
      github: "https://github.com/paullcv/Fotovent.git",
      tags: [TAGS.LARAVEL, TAGS.TAILWIND, TAGS.MYSQL, TAGS.REACT, TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT, TAGS.POSTMAN],
    },
    {
      title: "TraBol - Turismo Inteligente",
      description:
        "Plataforma integral para incentivar el turismo en Bolivia, centralizando hoteles, boletos de transporte, restaurantes y renta de autos. Incluye carrito de compras, pagos en línea con PayPal y paquetes turísticos personalizados para viajeros.",
      image: Turismointeligente,
      github: "https://github.com/paullcv/ProyectoTurismoInteligente.git",
      tags: [TAGS.BOOTSTRAP, TAGS.LARAVEL, TAGS.MYSQL],
    },
    {
      title: "EmoCare",
      description:
        "Plataforma educativa diseñada para colegios en Santa Cruz - Bolivia, enfocada en la detección temprana de riesgos emocionales (bullying, acoso, depresión). Incluye cuestionarios basados en metodologías psicológicas y un modelo de análisis de sentimientos entrenado con vocabulario local (Hugging Face), capaz de clasificar respuestas como positivas, neutras o negativas. Genera reportes y alertas automáticas para docentes y padres cuando se detectan patrones de riesgo en los estudiantes.",
      image: EmoCareImage,
      github: "https://github.com/paullcv/emocare.git",
      tags: [TAGS.DJANGO, TAGS.BOOTSTRAP, TAGS.POSTGRES, TAGS.PYTHON],
    },
    {
      title: "RRHH microservicio y analizador de CV",
      description:
        "Sistema de Recursos Humanos desarrollado con enfoque en microservicios y soporte de inteligencia artificial. Integra una librería de Python para procesar currículums en PDF, extrayendo y categorizando la información más relevante de los postulantes. Realiza un match automático entre candidatos y requisitos de las vacantes, optimizando el proceso de reclutamiento en empresas de software.",
      image: mockup_rrhh,
      github: "https://github.com/paullcv/RRHH.git",
      tags: [TAGS.BOOTSTRAP, TAGS.LARAVEL, TAGS.SQLITE, TAGS.PHP],
    },
    {
      title: "Brillitos Rosa",
      description:
        "E-commerce desarrollado para un emprendimiento de cosméticos y productos de belleza. Integra pagos con Pago Fácil, carrito de compras, gestión completa de catálogo, productos y paquetes, control de ingresos/egresos, buscador avanzado y reportes gráficos con métricas clave.",
      image: brillitosrosa,
      github: "https://github.com/paullcv/Brillitos_Rosa.git",
      tags: [TAGS.LARAVEL, TAGS.SQLITE, TAGS.PHP],
    },
    {
      title: "SignaVox",
      description:
        "Aplicación móvil para la traducción en tiempo real del lenguaje de señas boliviano. La primera fase implementa correctamente la traducción de abecedario, números y saludos básicos mediante un modelo entrenado con librerías de Python. El proyecto estaba planificado en tres etapas, incluyendo reconocimiento de secuencias de señas y construcción de oraciones completas para comunicación fluida, quedando abierto para futuras ampliaciones.",
      image: mockup_signavox,
      github: "https://github.com/paullcv/SignaVoxBackend.git",
      tags: [TAGS.PHP, TAGS.BOOTSTRAP],
    },
  ]
  