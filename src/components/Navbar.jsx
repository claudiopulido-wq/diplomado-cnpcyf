import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Award, UserCheck, Sparkles, Scale, Menu, X, Calendar, DollarSign, HelpCircle, BookOpen } from 'lucide-react';
import logoUniceq from '../assets/logo-uniceq.png';

export const Navbar = ({ onOpenLogin }) => {
  const { setCurrentView, openCheckout } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || mobileMenuOpen
        ? 'bg-[#07090E]/98 backdrop-blur-xl border-b border-amber-500/20 py-2.5 shadow-2xl shadow-black/80' 
        : 'bg-transparent py-3 sm:py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo UNICEQ */}
        <div 
          onClick={() => { setCurrentView('landing'); setMobileMenuOpen(false); }}
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group"
        >
          <img 
            src={logoUniceq} 
            alt="Logo UNICEQ" 
            className="h-9 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col border-l border-slate-800 pl-2.5 sm:pl-3">
            <span className="text-[9px] sm:text-[10px] tracking-widest uppercase font-bold text-amber-400">
              UNICEQ • SEP-CONOCER
            </span>
            <span className="text-xs sm:text-sm font-extrabold tracking-tight text-white">
              Diplomado CNPCyF
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#temario" className="hover:text-amber-400 transition-colors">Temario</a>
          <a href="#certificacion" className="hover:text-amber-400 transition-colors flex items-center gap-1">
            <Award className="w-3.5 h-3.5 text-amber-400" /> Validez SEP
          </a>
          <a href="#ponentes" className="hover:text-amber-400 transition-colors flex items-center gap-1 text-amber-300 font-semibold">
            <Scale className="w-3.5 h-3.5 text-amber-400" /> Claustro Docente
          </a>
          <a href="#calendario" className="hover:text-amber-400 transition-colors">Sede & Calendario</a>
          <a href="#inversion" className="hover:text-amber-400 transition-colors">Inversión</a>
          <a href="#faqs" className="hover:text-amber-400 transition-colors">Preguntas</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Acceso a Alumnos Button */}
          <button
            onClick={() => { onOpenLogin(); setMobileMenuOpen(false); }}
            className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold rounded-lg border border-slate-700 bg-slate-900/90 text-slate-200 hover:border-amber-400 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <UserCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Alumnos</span>
          </button>

          {/* Inscribirme CTA */}
          <button
            onClick={() => { openCheckout('full'); setMobileMenuOpen(false); }}
            className="gold-button px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1.5 sm:gap-2 tracking-wide cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#07090E]" />
            <span>Inscribirme</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg lg:hidden bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-amber-400 focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 border-t border-slate-800/80 bg-[#07090E]/98 shadow-2xl backdrop-blur-2xl">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-200">
            <a 
              href="#temario" 
              onClick={handleNavClick} 
              className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900/60 hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Temario Completo (10 Módulos)</span>
            </a>
            <a 
              href="#certificacion" 
              onClick={handleNavClick} 
              className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900/60 hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>Certificación Oficial SEP-CONOCER</span>
            </a>
            <a 
              href="#ponentes" 
              onClick={handleNavClick} 
              className="flex items-center gap-2.5 p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:text-amber-200 transition-colors font-bold"
            >
              <Scale className="w-4 h-4 text-amber-400" />
              <span>Claustro Docente (Magistrados & Jueces)</span>
            </a>
            <a 
              href="#calendario" 
              onClick={handleNavClick} 
              className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900/60 hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Sede & Calendario de Clases</span>
            </a>
            <a 
              href="#inversion" 
              onClick={handleNavClick} 
              className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900/60 hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              <DollarSign className="w-4 h-4 text-amber-400" />
              <span>Inversión y Formas de Pago</span>
            </a>
            <a 
              href="#faqs" 
              onClick={handleNavClick} 
              className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900/60 hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>Preguntas Frecuentes</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
