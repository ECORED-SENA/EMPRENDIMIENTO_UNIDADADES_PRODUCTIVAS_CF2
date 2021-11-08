export default {
  global: {
    componenteFormativo:
      'Ventas, contabilización, finanzas, estados de resultados y presupuestos  de unidades productivas.',
    descripcionCurso:
      'Los contenidos propuestos en este componente de formación, permiten conocer y analizar la planificación de ventas, donde se estudiará el plan y técnicas de ventas, de igual forma la proyección pronóstica de las mismas. Por otra parte, se analizará contabilización, finanzas y estados de resultados.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Planificación de ventas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Técnicas de ventas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Aida',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '<i>Spin</i>',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: '<i>Elevator Pitch</i>',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Comunicación comercial',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Post venta',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Previsión de ventas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Cuota de ventas',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Histórico de ventas y expectativas futuras',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Contabilidad y finanzas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Estado de resultados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Ventas, administración y logística',
            hash: 't_5_1',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Balance y documentación contable',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Tipos de balance',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Documentación contable',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Títulos de valor',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Presupuesto',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Fernández-Balaguer, G. (2006). El plan de ventas. ESIC Editorial.',
    },
    {
      referencia: 'Fernandez, F. J. (2017). Estudio de mercado.',
      link:
        'https://books.google.es/books?hl=es&lr=&id=yuskDwAAQBAJ&oi=fnd&pg=PA4&dq=volumen+del+mercado&ots=fHribfv6IW&sig=tT5eoRYCTvRUH1VyUs2eV43qAnY.',
    },
    {
      referencia:
        'REAL ACADEMIA ESPAÑOLA. (2021). Diccionario de la lengua española, 23.ª ed.',
      link: 'https://dle.rae.es',
    },
    {
      referencia:
        'Rizzo Coloma, M. F. (2015). Proceso de planificación de ventas y operaciones caso de estudio cervecería nacional (Bachelor&apos;s thesis).',
    },
    {
      referencia:
        'Rueda, L. A. (2020). Comunicación verbal y no verbal. [Trabajo final de especialización, Universidad Nacional de La Plata]. Repositorio institucional de la UNLP.',
      link: 'http://sedici.unlp.edu.ar/handle/10915/115645',
    },
    {
      referencia:
        'Stanton, W. J., Buskirk, R. H., & Spiro, R. (2001). Ventas: conceptos, planificación y estrategias. McGraw/Hill Interamericana.',
    },
  ],
  glosario: [
    {
      termino: 'Expectativas',
      significado: 'posibilidad razonable de que algo suceda.',
    },
    {
      termino: 'Mercado',
      significado:
        'conjunto de actividades realizadas libremente por los agentes económicos sin intervención del poder público. Interactúan oferentes y demandantes.',
    },
    {
      termino: 'Proyección',
      significado: 'acción o alcance del pronóstico de una actividad',
    },
    {
      termino: 'Ventas',
      significado:
        'contrato en virtud del cual se transfiere a dominio ajeno una cosa propia por el precio pactado.',
    },
  ],
  complementario: [
    {
      texto: 'Fernandez, F. J. (2017). Estudio de mercado.',
      tipo: 'Libro',
      link:
        'https://books.google.es/books?hl=es&lr=&id=yuskDwAAQBAJ&oi=fnd&pg=PA4&dq=volumen+del+mercado&ots=fHribfv6IW&sig=tT5eoRYCTvRUH1VyUs2eV43qAnY',
    },
    {
      texto:
        'Rueda, L. A. (2020). Comunicación verbal y no verbal. [Trabajo final de especialización, Universidad Nacional de La Plata]. Repositorio institucional de la UNLP.',
      tipo: 'Documento',
      link: 'http://sedici.unlp.edu.ar/handle/10915/115645',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Anderson Ferney Archila Calixto',
        cargo: 'Experto temático',
        centro:
          'Centro de la Industria de la Empresa y los Servicios (CIES) - Regional Norte de Santander',
      },
      {
        nombre: 'Paola Andrea Quintero Aguilar',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Bogotá',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Bogotá',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jorge Armando Villamizar Moreno',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Fabian Robles Méndez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima ',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo Lopez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Fernando Sarmiento Betancourth',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Villamizar Lizcano',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Víctor Raúl Cárdenas Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
