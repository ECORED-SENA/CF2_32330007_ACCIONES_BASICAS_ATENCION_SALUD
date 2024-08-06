export default {
  global: {
    componenteFormativo:
      'Aseguramiento de la escena según protocolos de seguridad',
    descripcionCurso:
      'Este componente formativo ofrece guías para asegurar la escena de un incidente siguiendo protocolos de seguridad. Incluye procedimientos para valorar riesgos, realizar llamadas de emergencia y proporcionar cuidado inicial al lesionado. También cubre principios de bioseguridad, uso de barreras y eliminación de materiales contaminados, garantizando una respuesta efectiva y segura en situaciones de emergencia.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-7.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Llamar a la línea de emergencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Proporcionar cuidado al lesionado',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Evaluación de riesgos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Aseguramiento específico del área',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Bioseguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Principios de bioseguridad',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Medios de eliminación de material contaminado',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Llamar a la línea de emergencia',
      referencia:
        'Canal Capital (2023). Así funciona la Línea 123 l AHORA [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=5ilkXqyKZMw&ab_channel=CanalCapital',
    },
    {
      tema: 'Proporcionar cuidado al lesionado',
      referencia:
        'Agencia Nacional de Seguridad Vial (2022). MÓDULO 3 - PRINCIPIOS PARA ATENDER A UN LESIONADO. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=iMS1TUl9qm8&ab_channel=AgenciaNacionaldeSeguridadVial',
    },
    {
      tema: 'Evaluación de riesgos',
      referencia:
        'Pedro Blanco. (2020). 2 Evaluación de escena. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=waP6BMR_KcM&ab_channel=PedroBlanco',
    },
    {
      tema: 'Bioseguridad',
      referencia:
        'UDEC Virtual.  (2022). Principios de bioseguridad. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=oUbYsEqAXUM&ab_channel=UDECvirtual',
    },
    {
      tema: 'Bioseguridad',
      referencia:
        'Fundación Santa Fe de Bogotá. (2022). #42 Higiene de Manos - Jefe Sandra Gutiérrez. [Podcast]. Music Youtube.',
      tipo: 'Podcast',
      link: 'https://music.youtube.com/watch?v=DOvOzE4DMcg',
    },
  ],
  glosario: [
    {
      termino: 'Escena',
      significado: 'ambiente en el que se produjo la lesión.',
    },
    {
      termino: 'Evacuación',
      significado:
        'acción para establecer una barrera entre una fuente de riesgo y las personas amenazadas.',
    },
    {
      termino: 'Explosión',
      significado: 'liberación brusca de una gran cantidad de energía.',
    },
    {
      termino: 'Incendio',
      significado: 'fenómeno de combustión incontrolada.',
    },
    {
      termino: 'Primeros auxilios',
      significado: 'primeras medidas o cuidados provisionales.',
    },
    {
      termino: 'Recurso',
      significado:
        'personas, elementos, equipos y herramientas para evitar un desastre y atender la situación.',
    },
    {
      termino: 'Riesgo',
      significado: 'probabilidad de perturbación de la integridad física.',
    },
    {
      termino: 'Testigo',
      significado:
        'persona que presencia o adquiere conocimiento directo de algo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Defensoría del pueblo Ecuador. (2016). Manual de primeros auxilios.',
      link:
        'http://es.slideshare.net/onlinedpe/manual-de-primeros-auxilios-interactivo',
    },
    {
      referencia: 'Dentales en línea. (2016). Tapabocas.',
      link: '',
    },
    {
      referencia: 'Direct industry. (2016). Gafas de seguridad.',
      link: '',
    },
    {
      referencia: 'EnColombia. (2016). Guía de atención prehospitalaria.',
      link:
        'https://encolombia.com/medicina/guiasmed/guia-hospitalaria/valoraciondelaescena/',
    },
    {
      referencia:
        'Gente Tlx. (2016). Correcto lavado de manos puede prevenir enfermedades: IMSS.',
      link:
        'http://gentetlx.com.mx/2015/02/26/correcto-lavado-de-manos-puede-prevenir-enfermedades-imss/',
    },
    {
      referencia: 'Inter Life. (2016). Recipiente rojo residuos.',
      link: '',
    },
    {
      referencia:
        'Prehospital Trauma Life Support Committee of the National Association of Emergency Medical Technicians. (2012). The Committee on Trauma of the American College of Surgeons. Soporte vital básico y avanzado en el trauma prehospitalario PHTLS. 7, España: Ed. Elsevier.',
      link: '',
    },
    {
      referencia:
        'Unilimpio. (2016). Recipiente residuos corto punzantes rojo.',
      link: '',
    },
    {
      referencia:
        'Urgencias y emergencias médicas tanto para el personal paramédico y médico. (2013). Evaluación de la escena por un primer respondiente.',
      link:
        'http://urgenciasyemergenciasmedicas.blogspot.com.co/2013/01/3-evaluacion-de-la-escena-por-un-primer.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Luz María Cardona Correa',
          cargo: 'Experta Temática',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabián Zárate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edwin Sneider Velandia Suarez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
