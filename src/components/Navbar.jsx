import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Scale, Award, BookOpen, Calendar, ShieldCheck, UserCheck, LayoutDashboard, Sparkles } from 'lucide-react';

export const Navbar = ({ onOpenLogin }) => {
  const { currentView, setCurrentView, openCheckout } = useApp();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#07090E]/90 backdrop-blur-xl border-b border-amber-500/15 py-3 shadow-2xl shadow-black/60' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <div 
          onClick={() => setCurrentView('landing')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-900 p-[1px] shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#07090E] rounded-[11px] flex items-center justify-center">
              <Scale className="w-5 h-5 text-amber-400" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs tracking-widest uppercase font-semibold text-amber-400/90 flex items-center gap-1">
              UNICEQ <span className="text-slate-500">•</span> SEP-CONOCER
            </span>
            <span className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
              Diplomado CNPCyF
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#temario" className="hover:text-amber-400 transition-colors">Temario (10 Módulos)</a>
          <a href="#certificacion" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-400" /> Validez SEP EC1038
          </a>
          <a href="#calendario" className="hover:text-amber-400 transition-colors">Sede & Calendario</a>
          <a href="#inversion" className="hover:text-amber-400 transition-colors">Inversión</a>
          <a href="#faqs" className="hover:text-amber-400 transition-colors">Preguntas</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Acceso a Alumnos Button */}
          <button
            onClick={onOpenLogin}
            className="px-3.5 py-2 text-xs font-semibold rounded-lg border bg-slate-900/80 border-slate-700/70 text-slate-300 hover:border-amber-400/50 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
          >
            <UserCheck className="w-4 h-4 text-amber-400" />
            <span>Acceso Alumnos</span>
          </button>

          {/* Inscribirme CTA */}
          <button
            onClick={() => openCheckout('full')}
            className="gold-button px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 tracking-wide cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#07090E]" />
            <span>Inscribirme <span className="hidden sm:inline">($5,000 MXN)</span></span>
          </button>
        </div>
      </div>
    </header>
  );
};
