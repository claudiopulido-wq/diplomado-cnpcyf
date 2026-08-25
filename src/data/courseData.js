export const courseInfo = {
  title: "Diplomado de Alta Especialización en Código Nacional de Procedimientos Civiles y Familiares",
  shortTitle: "Diplomado CNPCyF",
  subtitle: "Teoría, implementación, litigación oral y aplicación práctica",
  edition: "Primera Edición Querétaro",
  institution: "UNICEQ • Universidad Central de Querétaro",
  motto: "El orgullo de poder ser",
  certifications: [
    {
      name: "Certificado Oficial SEP-CONOCER",
      standard: "Estándar de Competencia EC1038",
      description: "Intervención para la solución de conflictos con validez oficial en todo el territorio nacional.",
      highlight: true
    },
    {
      name: "Diploma Institucional UNICEQ",
      standard: "Validez Oficial Curricular",
      description: "Constancia de conclusión de 22 horas académicas con respaldo universitario.",
      highlight: false
    }
  ],
  pricing: {
    total: 5000,
    currency: "MXN",
    formattedTotal: "$5,000.00 MXN",
    installmentOption: {
      deposit: 2000,
      formattedDeposit: "$2,000.00 MXN",
      balance: 3000,
      formattedBalance: "$3,000.00 MXN",
      description: "Aparta tu lugar con $2,000 y liquida $3,000 antes de iniciar el Módulo 3"
    },
    stripePaymentUrl: "https://buy.stripe.com/test_diplomadocnpcyf", // Enlace de Stripe parametrizable
    stripeDepositUrl: "https://buy.stripe.com/test_apartadocnpcyf"
  },
  duration: {
    weeks: "5 semanas",
    hours: "22 horas académicas",
    sessions: "10 sesiones especializadas",
    format: "Híbrido (Viernes virtual • Sábado presencial)"
  },
  schedule: {
    friday: {
      modality: "Virtual en Vivo",
      platform: "Google Meet",
      time: "Viernes (Horario vespertino)"
    },
    saturday: {
      modality: "Presencial Práctico",
      time: "Sábados de 9:00 a 13:00 h",
      venue: "Campus UNICEQ Querétaro",
      address: "Av. 5 de Febrero #1602, Col. San Pablo, C.P. 76130, Santiago de Querétaro, Qro."
    },
    dates: [
      { day: "Semana 1", dates: "4 - 5 de Septiembre" },
      { day: "Semana 2", dates: "11 - 12 de Septiembre" },
      { day: "Semana 3", dates: "18 - 19 de Septiembre" },
      { day: "Semana 4", dates: "25 - 26 de Septiembre" },
      { day: "Semana 5", dates: "2 - 3 de Octubre" }
    ]
  },
  targetAudience: [
    "Abogados litigantes en materia civil y familiar",
    "Jueces, Magistrados y personal jurisdiccional",
    "Secretarios de Estudio y Cuenta y Secretarios de Acuerdos",
    "Actuarios y Defensores Públicos",
    "Asesores Jurídicos y Notarios Públicos",
    "Servidores Públicos del Poder Judicial y Administrativo",
    "Académicos, Investigadores y Estudiantes de Derecho"
  ],
  competencies: [
    "Interpretar sistemáticamente el nuevo Código Nacional (CNPCyF).",
    "Diseñar estrategias procesales avanzadas de litigación oral.",
    "Elaborar demandas, contestaciones y formular medidas cautelares.",
    "Litigar con técnica en audiencias preliminares y de juicio oral.",
    "Dominar los juicios especiales (Hipotecario y Arrendamiento Inmobiliario).",
    "Tramitar procedimientos familiares y medidas urgentes de protección.",
    "Estructurar juicios universales sucesorios y partición de bienes.",
    "Aplicar Mecanismos Alternativos de Solución de Controversias (MASC).",
    "Interponer recursos procesales y ejecutar eficazmente sentencias."
  ],
  modules: [
    {
      number: "I",
      title: "Fundamentos del Código Nacional de Procedimientos Civiles y Familiares",
      speaker: "Especialista en Derecho Procesal Constitucional",
      objective: "Analizar el origen constitucional del Código Nacional y comprender la transformación del sistema procesal mexicano.",
      topics: [
        "Evolución histórica del proceso civil mexicano",
        "Reforma constitucional y proceso de nacionalización",
        "Principios rectores del CNPCyF y jerarquía normativa",
        "Ámbito de aplicación espacial y temporal",
        "La oralidad como eje rector del nuevo sistema",
        "Retos estructurales para los operadores jurídicos"
      ]
    },
    {
      number: "II",
      title: "Principios Procesales y Estructura General del Procedimiento",
      speaker: "Magistrado / Juez de Primera Instancia",
      objective: "Dominar la operatividad de los principios procesales rectores en el nuevo esquema procesal unificado.",
      topics: [
        "Principios generales: Oralidad, Inmediación, Concentración, Publicidad, Continuidad y Contradicción",
        "Competencia y jurisdicción civil y familiar",
        "Legitimación y capacidad procesal de las partes",
        "Presupuestos procesales indispensables y saneamiento del proceso"
      ]
    },
    {
      number: "III",
      title: "Procedimientos Ordinarios y Especiales",
      speaker: "Abogado Litigante y Docente Certificado",
      objective: "Conocer paso a paso el desahogo del procedimiento ordinario civil desde los actos prejudiciales hasta la sentencia.",
      topics: [
        "Estructura integral del procedimiento ordinario",
        "Demanda, contestación, allanamiento y reconvención",
        "Solicitud y desahogo de medidas cautelares y providencias precautorias",
        "Audiencia preliminar: depuración procesal, fijación de acuerdos y admisión de pruebas",
        "Audiencia de juicio y técnica de desahogo de pruebas",
        "Emisión de la sentencia y valoración judicial probatoria"
      ]
    },
    {
      number: "IV",
      title: "Juicio Especial Hipotecario Oral",
      speaker: "Especialista en Derecho Financiero e Hipotecario",
      objective: "Comprender la dinámica procesal oral para la ejecución y defensa de garantías hipotecarias.",
      topics: [
        "Ejercicio de la acción hipotecaria y procedencia de la vía",
        "Fijación de la competencia y requisitos de la demanda",
        "Etapas procesales y sistema de audiencias orales",
        "Remate judicial electrónico y procedimiento de adjudicación",
        "Ejecución forzosa y criterios jurisprudenciales más recientes"
      ]
    },
    {
      number: "V",
      title: "Juicio Especial de Arrendamiento Inmobiliario Oral",
      speaker: "Juez Especializado en Materia Inmobiliaria",
      objective: "Litigar con celeridad la rescisión de contratos de arrendamiento, cobro de rentas y lanzamiento.",
      topics: [
        "Competencia y ejercicio de la acción de arrendamiento",
        "Requisitos específicos de demanda y contestación",
        "Oferta y desahogo probatorio especializado",
        "Desarrollo de las audiencias orales",
        "Trámite de lanzamiento y ejecución efectiva",
        "Errores frecuentes en la práctica y criterios judiciales determinantes"
      ]
    },
    {
      number: "VI",
      title: "Procedimientos en Materia Familiar",
      speaker: "Jueza de lo Familiar y Especialista en Derechos de la Infancia",
      objective: "Aplicar la perspectiva de género y el interés superior de la niñez en los litigios orales de familia.",
      topics: [
        "Guarda, custodia y ejercicio de la patria potestad",
        "Régimen de alimentos y aseguramiento cautelar",
        "Régimen de convivencias y escucha de niñas, niños y adolescentes",
        "Medidas urgentes de protección ante violencia familiar",
        "Audiencias orales familiares y solución judicial colaborativa"
      ]
    },
    {
      number: "VII",
      title: "Juicios Universales (Sucesiones)",
      speaker: "Notario Público y Especialista en Derecho Sucesorio",
      objective: "Dominar la tramitación oral de las sucesiones testamentarias e intestamentarias.",
      topics: [
        "Naturaleza jurídica y etapas de los juicios universales",
        "Sucesión testamentaria y legítima (intestamentaria)",
        "Sección de inventario y avalúos periciales",
        "Sección de administración y rendición de cuentas",
        "Liquidación, proyecto de partición y adjudicación final de bienes"
      ]
    },
    {
      number: "VIII",
      title: "Medios Alternativos de Solución de Controversias (MASC)",
      speaker: "Mediador Certificado SEP-CONOCER EC1038",
      objective: "Integrar la mediación, conciliación y justicia restaurativa en armonía con la Ley General de MASC.",
      topics: [
        "Conciliación y Mediación en sede judicial y privada",
        "Arbitraje y aplicación de justicia restaurativa",
        "Redacción de convenios con categoría de cosa juzgada",
        "Ejecución forzosa de convenios no cumplidos",
        "Articulación entre el CNPCyF y la Ley General de MASC con casos prácticos"
      ]
    },
    {
      number: "IX",
      title: "Recursos y Ejecución de Sentencias",
      speaker: "Magistrado en Materia Civil",
      objective: "Manejar con precisión el catálogo de medios de impugnación y las vías de ejecución forzosa.",
      topics: [
        "Nuevo sistema impugnativo bajo el CNPCyF",
        "Trámite del recurso de Reposición",
        "Procedencia y substanciación de la Queja",
        "El recurso de Apelación: requisitos de agravios y efectos suspensivos/devolutivos",
        "Vía de apremio y ejecución forzosa de convenios y sentencias",
        "Medios de defensa procesal durante la etapa de ejecución"
      ]
    },
    {
      number: "X",
      title: "Taller Integral de Litigación Oral en Materia Civil y Familiar",
      speaker: "Equipo Docente y Capacitadores en Juicios Orales",
      objective: "Desarrollar habilidades prácticas de litigación mediante simulación de audiencias completas.",
      topics: [
        "Construcción estratégica de la Teoría del Caso (Fáctica, Jurídica y Probatoria)",
        "Técnicas de oratoria forense y alegatos de apertura",
        "Técnica de interrogatorio directo y examen pericial",
        "Técnica de contrainterrogatorio y control de testigos hostiles",
        "Formulación y debate de objeciones procesales",
        "Incorporación técnica de pruebas documentales y materiales",
        "Estructura persuasiva de alegatos de clausura",
        "Simulación integral de audiencia preliminar y de juicio con retroalimentación personalizada"
      ]
    }
  ],
  faqs: [
    {
      question: "¿El diplomado cuenta con validez oficial?",
      answer: "Sí, cuenta con Diploma Institucional con valor curricular respaldado por UNICEQ (Universidad Central de Querétaro) y además el Certificado Oficial SEP-CONOCER en el Estándar de Competencia EC1038 (Intervención para la solución de conflictos), el cual cuenta con reconocimiento nacional oficial y folio ante el Registro Nacional de Estándares de Competencia (RENEC)."
    },
    {
      question: "¿Cómo funciona la modalidad híbrida si no radico en Querétaro?",
      answer: "Las sesiones de los viernes son 100% virtuales en vivo a través de Google Meet. Las sesiones de los sábados son presenciales en Campus UNICEQ Querétaro, pero también son transmitidas en tiempo real y grabadas en alta definición para quienes cursen la modalidad a distancia."
    },
    {
      question: "¿Qué pasa si no puedo asistir a alguna sesión en vivo?",
      answer: "Todas las clases se graban y se suben al Portal del Estudiante y Google Classroom en menos de 24 horas. Tendrás acceso ilimitado a las grabaciones, presentaciones y formatos procesales durante y después del diplomado."
    },
    {
      question: "¿Cómo puedo realizar mi pago de $5,000.00 MXN?",
      answer: "Puedes pagar de forma 100% segura mediante tarjeta de crédito o débito a través de Stripe (liga disponible en nuestra página o Instagram @certificacionesuniceq). Puedes realizar el pago total de $5,000.00 MXN o apartar tu lugar con $2,000.00 MXN y cubrir el resto posteriormente."
    },
    {
      question: "¿Qué material procesal recibiré?",
      answer: "Recibirás acceso a la biblioteca digital exclusiva con formatos editables de demandas bajo el nuevo CNPCyF, contestaciones, medidas cautelares, guías de objeciones para audiencias orales, diapositivas de todos los ponentes y bibliografía especializada."
    }
  ],
  contact: {
    coordinator: "Mtro. Claudio Pulido",
    email: "claudio.pulido@gesacademico.edu.mx",
    phone: "442 352 3965",
    whatsapp: "5214423523965",
    instagram: "@certificacionesuniceq"
  }
};
