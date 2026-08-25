import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, UserCheck, Lock, ArrowRight, ShieldCheck, Mail, KeyRound, AlertCircle } from 'lucide-react';

export const LoginModal = ({ isOpen, onClose }) => {
  const { students, setActiveStudent, setCurrentView } = useApp();
  const [tab, setTab] = useState('student'); // 'student' | 'admin'
  const [studentIdentifier, setStudentIdentifier] = useState('');
  const [adminPin, setAdminPin] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleStudentLogin = (e) => {
    e.preventDefault();
    setError('');

    const cleanInput = studentIdentifier.trim().toLowerCase();
    const found = students.find(s => 
      s.email.toLowerCase() === cleanInput || 
      s.phone.replace(/[^0-9]/g, '') === cleanInput.replace(/[^0-9]/g, '') ||
      s.id.toLowerCase() === cleanInput
    );

    if (found) {
      setActiveStudent(found);
      setCurrentView('portal');
      onClose();
    } else {
      // If not found in mock list, provide helpful message with demo option
      setError('No encontramos un alumno con ese correo o teléfono. Revisa tus datos o usa la cuenta de demostración.');
    }
  };

  const handleDemoStudentLogin = () => {
    if (students.length > 0) {
      setActiveStudent(students[0]);
      setCurrentView('portal');
      onClose();
    }
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    setError('');

    // Default Coordinator/Admin PIN
    if (adminPin.trim() === '2026' || adminPin.trim() === 'admin2026') {
      setCurrentView('admin');
      onClose();
    } else {
      setError('PIN o Clave de Administrador incorrecta. (Clave por defecto: 2026)');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-[#0C1220] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Title */}
        <div className="mb-6 text-center">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto mb-3">
            {tab === 'student' ? <UserCheck className="w-6 h-6" /> : <Lock className="w-6 h-6" />}
          </div>
          <h3 className="text-xl font-bold text-white">
            {tab === 'student' ? 'Acceso al Aula Virtual' : 'Acceso de Coordinación / Admin'}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {tab === 'student' 
              ? 'Ingresa con tu correo personal registrado para ver tus materiales y clases' 
              : 'Panel restringido para monitoreo de inscripciones'}
          </p>
        </div>

        {/* Tabs Switcher */}
        <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-slate-900 border border-slate-800 mb-6">
          <button
            type="button"
            onClick={() => { setTab('student'); setError(''); }}
            className={`py-2 text-xs font-bold rounded-lg transition-all ${
              tab === 'student'
                ? 'bg-amber-500 text-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Soy Alumno
          </button>

          <button
            type="button"
            onClick={() => { setTab('admin'); setError(''); }}
            className={`py-2 text-xs font-bold rounded-lg transition-all ${
              tab === 'admin'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Administrador
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Tab 1: Student Login */}
        {tab === 'student' && (
          <form onSubmit={handleStudentLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Correo Personal o Teléfono Registrado:
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="Ej. sofia.ramirez@abogadosmendoza.mx"
                  value={studentIdentifier}
                  onChange={(e) => setStudentIdentifier(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400"
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-1.5">
                * Usa el mismo correo con el que realizaste tu pago en Stripe.
              </p>
            </div>

            <button
              type="submit"
              className="w-full gold-button py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Entrar a mi Aula</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={handleDemoStudentLogin}
                className="text-[11px] text-amber-400/90 hover:text-amber-300 underline cursor-pointer"
              >
                Probar acceso demo con alumno de prueba
              </button>
            </div>
          </form>
        )}

        {/* Tab 2: Admin Login */}
        {tab === 'admin' && (
          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                PIN o Contraseña de Coordinador:
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  placeholder="Introduce el PIN de acceso"
                  value={adminPin}
                  onChange={(e) => setAdminPin(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-400 font-mono"
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-1.5">
                PIN predeterminado de prueba: <strong className="text-purple-300">2026</strong>
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-900/30 transition-colors"
            >
              <Lock className="w-4 h-4" />
              <span>Acceder al Panel Administrativo</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
