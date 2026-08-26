import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

const INITIAL_STUDENTS = [
  {
    id: 'STU-2026-001',
    name: 'Lic. Sofía Ramírez Mendoza',
    email: 'sofia.ramirez@abogadosmendoza.mx',
    phone: '442 198 4422',
    profile: 'Abogada Litigante',
    paymentStatus: 'Liquidado',
    amountPaid: 5000,
    totalAmount: 5000,
    paymentDate: '2026-08-20',
    stripeSessionId: 'cs_live_a1b2c3d4e5f6',
    modality: 'Híbrida (Presencial/Virtual)',
    attendancePercentage: 100,
    classroomJoined: true
  },
  {
    id: 'STU-2026-002',
    name: 'Mtro. Fernando Castillo Vera',
    email: 'fcastillo@poderjudicialqro.gob.mx',
    phone: '442 876 5432',
    profile: 'Secretario de Acuerdos',
    paymentStatus: 'Liquidado',
    amountPaid: 5000,
    totalAmount: 5000,
    paymentDate: '2026-08-21',
    stripeSessionId: 'cs_live_z9y8x7w6v5u4',
    modality: 'Virtual (Google Meet)',
    attendancePercentage: 90,
    classroomJoined: true
  },
  {
    id: 'STU-2026-003',
    name: 'Lic. Mariana Garza Treviño',
    email: 'm.garza@notaria44qro.com',
    phone: '442 345 6789',
    profile: 'Asesora Notarial',
    paymentStatus: 'Apartado ($2,000)',
    amountPaid: 2000,
    totalAmount: 5000,
    paymentDate: '2026-08-22',
    stripeSessionId: 'cs_live_k8j7h6g5f4d3',
    modality: 'Híbrida (Presencial/Virtual)',
    attendancePercentage: 80,
    classroomJoined: false
  },
  {
    id: 'STU-2026-004',
    name: 'Lic. Roberto Valenzuela Gil',
    email: 'roberto.valenzuela@defensoriapublica.gob.mx',
    phone: '442 654 9870',
    profile: 'Defensor Público',
    paymentStatus: 'Liquidado',
    amountPaid: 5000,
    totalAmount: 5000,
    paymentDate: '2026-08-23',
    stripeSessionId: 'cs_live_p9o8i7u6y5t4',
    modality: 'Híbrida (Presencial/Virtual)',
    attendancePercentage: 100,
    classroomJoined: true
  },
  {
    id: 'STU-2026-005',
    name: 'Lic. Claudia Elena Torres',
    email: 'claudia.torres.juridico@gmail.com',
    phone: '442 987 1234',
    profile: 'Abogada Corporativa / Familiar',
    paymentStatus: 'Apartado ($2,000)',
    amountPaid: 2000,
    totalAmount: 5000,
    paymentDate: '2026-08-24',
    stripeSessionId: 'cs_live_m3n4b5v6c7x8',
    modality: 'Virtual (Google Meet)',
    attendancePercentage: 70,
    classroomJoined: true
  }
];

const INITIAL_LINKS = {
  classroomUrl: 'https://classroom.google.com/c/diplomado-cnpcyf-uniceq-2026',
  classroomCode: 'cnpc2026',
  meetUrl: 'https://meet.google.com/abc-jur-cnpc',
  whatsappGroupUrl: 'https://chat.whatsapp.com/invite/diplomado-cnpcyf-uniceq',
  driveRepositoryUrl: 'https://drive.google.com/drive/folders/diplomado-cnpcyf-materiales-uniceq'
};

const INITIAL_MATERIALS = [
  {
    id: 'mat-1',
    title: 'Texto Íntegro y Concordado del CNPCyF (Edición de Estudio)',
    category: 'Normativa Oficial',
    size: '8.4 MB',
    format: 'PDF',
    date: '2026-08-20',
    downloads: 142
  },
  {
    id: 'mat-2',
    title: 'Guía y Guion Práctico para la Audiencia Preliminar Oral',
    category: 'Formato Procesal',
    size: '2.1 MB',
    format: 'DOCX / PDF',
    date: '2026-08-21',
    downloads: 98
  },
  {
    id: 'mat-3',
    title: 'Modelo de Demanda y Contestación bajo el Nuevo Estándar CNPCyF',
    category: 'Formato Procesal',
    size: '1.8 MB',
    format: 'DOCX',
    date: '2026-08-22',
    downloads: 115
  },
  {
    id: 'mat-4',
    title: 'Manual de Técnicas de Objeciones y Contrainterrogatorio',
    category: 'Litigación Oral',
    size: '3.6 MB',
    format: 'PDF',
    date: '2026-08-23',
    downloads: 87
  },
  {
    id: 'mat-5',
    title: 'Diapositivas y Esquemas Módulo I y II (Mtro. Ponente)',
    category: 'Presentaciones',
    size: '14.2 MB',
    format: 'PPTX / PDF',
    date: '2026-08-24',
    downloads: 64
  }
];

const INITIAL_RECORDINGS = [
  {
    id: 'rec-1',
    moduleNumber: 'I',
    title: 'Fundamentos Constitucionales y Principios Rectores del CNPCyF',
    date: '04 de Septiembre, 2026',
    duration: '2h 15m',
    status: 'Disponible',
    videoUrl: 'https://classroom.google.com/c/diplomado-cnpcyf-uniceq-2026/m1',
    thumbnail: '🏛️'
  },
  {
    id: 'rec-2',
    moduleNumber: 'II',
    title: 'Taller Práctico: Desahogo de la Audiencia Preliminar',
    date: '05 de Septiembre, 2026',
    duration: '3h 45m',
    status: 'Disponible',
    videoUrl: 'https://classroom.google.com/c/diplomado-cnpcyf-uniceq-2026/m2',
    thumbnail: '⚖️'
  },
  {
    id: 'rec-3',
    moduleNumber: 'III',
    title: 'Procedimiento Ordinario y Medidas Cautelares Urgentes',
    date: '11 de Septiembre, 2026',
    duration: '2h 30m',
    status: 'Próxima Grabación',
    videoUrl: '',
    thumbnail: '📜'
  }
];

// Safe storage helper with in-memory fallback for iOS Safari private browsing and restricted WebViews
const inMemoryStorage = new Map();

const safeStorage = {
  getItem: (key) => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return window.localStorage.getItem(key);
      }
    } catch (e) {
      console.warn('localStorage read disabled or restricted, using in-memory store:', e);
    }
    return inMemoryStorage.get(key) || null;
  },
  setItem: (key, value) => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, value);
        return;
      }
    } catch (e) {
      console.warn('localStorage write disabled or restricted, using in-memory store:', e);
    }
    inMemoryStorage.set(key, value);
  },
  removeItem: (key) => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(key);
        return;
      }
    } catch (e) {
      console.warn('localStorage remove disabled, using in-memory store:', e);
    }
    inMemoryStorage.delete(key);
  }
};

export const AppProvider = ({ children }) => {
  const [students, setStudents] = useState(() => {
    const saved = safeStorage.getItem('cnpcyf_students');
    return saved ? JSON.parse(saved) : INITIAL_STUDENTS;
  });

  const [courseLinks, setCourseLinks] = useState(() => {
    const saved = safeStorage.getItem('cnpcyf_links');
    return saved ? JSON.parse(saved) : INITIAL_LINKS;
  });

  const [materials, setMaterials] = useState(() => {
    const saved = safeStorage.getItem('cnpcyf_materials');
    return saved ? JSON.parse(saved) : INITIAL_MATERIALS;
  });

  const [recordings, setRecordings] = useState(() => {
    const saved = safeStorage.getItem('cnpcyf_recordings');
    return saved ? JSON.parse(saved) : INITIAL_RECORDINGS;
  });

  const [currentView, setCurrentView] = useState('landing'); // 'landing' | 'admin' | 'portal' | 'checkout-success'
  const [activeStudent, setActiveStudent] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutPlan, setCheckoutPlan] = useState('full'); // 'full' ($5,000 Preventa) or 'deposit' ($2,000 Apartado)

  useEffect(() => {
    safeStorage.removeItem('cnpcyf_theme');
    document.body.classList.remove('light-theme');
    document.documentElement.classList.remove('light-theme');
  }, []);

  useEffect(() => {
    safeStorage.setItem('cnpcyf_students', JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    safeStorage.setItem('cnpcyf_links', JSON.stringify(courseLinks));
  }, [courseLinks]);

  const registerStudent = (studentData) => {
    const isFull = studentData.plan === 'full';
    const amount = isFull ? 5000 : 2000;
    const newStudent = {
      id: `STU-2026-${String(students.length + 1).padStart(3, '0')}`,
      name: studentData.name,
      email: studentData.email,
      phone: studentData.phone,
      profile: studentData.profile || 'Abogado(a)',
      paymentStatus: isFull ? 'Liquidado (Preventa)' : 'Apartado ($2,000)',
      amountPaid: amount,
      totalAmount: 5000,
      paymentDate: new Date().toISOString().split('T')[0],
      stripeSessionId: `cs_live_${Math.random().toString(36).substring(2, 12)}`,
      modality: studentData.modality || 'Híbrida (Presencial/Virtual)',
      attendancePercentage: 0,
      classroomJoined: true
    };

    const updatedList = [newStudent, ...students];
    setStudents(updatedList);
    setActiveStudent(newStudent);
    setCurrentView('checkout-success');
    return newStudent;
  };

  const updatePaymentStatus = (studentId, newStatus) => {
    setStudents(prev =>
      prev.map(s => {
        if (s.id === studentId) {
          const isLiquidado = newStatus === 'Liquidado';
          return {
            ...s,
            paymentStatus: newStatus,
            amountPaid: isLiquidado ? 5000 : 2000
          };
        }
        return s;
      })
    );
  };

  const updateLinks = (newLinks) => {
    setCourseLinks(prev => ({ ...prev, ...newLinks }));
  };

  // Direct redirection to https://uniceq.carrd.co
  const openCheckout = (plan = 'full') => {
    window.open('https://uniceq.carrd.co', '_blank');
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        students,
        courseLinks,
        materials,
        recordings,
        currentView,
        setCurrentView,
        activeStudent,
        setActiveStudent,
        isCheckoutOpen,
        checkoutPlan,
        openCheckout,
        closeCheckout,
        registerStudent,
        updatePaymentStatus,
        updateLinks
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
