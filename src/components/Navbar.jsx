import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { courseInfo } from '../data/courseData';
import { Award, UserCheck, Sparkles, Sun, Moon } from 'lucide-react';

export const Navbar = ({ onOpenLogin }) => {
  const { currentView, setCurrentView, openCheckout, theme, toggleTheme } = useApp();
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
        ? 'bg-white/90 dark:bg-[#07090E]/90 backdrop-blur-xl border-b border-amber-500/20 py-2.5 shadow-xl' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo UNICEQ */}
        <div 
          onClick={() => setCurrentView('landing')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <img 
            src="/logo-uniceq.png" 
            alt="Logo UNICEQ" 
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col border-l border-slate-300 dark:border-slate-800 pl-3">
            <span className="text-[10px] tracking-widest uppercase font-bold text-amber-600 dark:text-amber-400">
              UNICEQ • SEP-CONOCER
            </span>
            <span className="text-xs sm:text-sm font-extrabold tracking-tight text-slate-900 dark:text-white">
              Diplomado CNPCyF
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#temario" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Temario (10 Módulos)</a>
          <a href="#certificacion" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-500" /> Validez SEP EC1038
          </a>
          <a href="#calendario" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Sede & Calendario</a>
          <a href="#inversion" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Inversión</a>
          <a href="#faqs" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Preguntas</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle (Light / Dark) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-amber-400 hover:scale-105 transition-all cursor-pointer"
            title={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'blanco'}`}
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </button>

          {/* Acceso a Alumnos Button */}
          <button
            onClick={onOpenLogin}
            className="px-3.5 py-2 text-xs font-bold rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 transition-all flex items-center gap-2 cursor-pointer"
          >
            <UserCheck className="w-4 h-4 text-amber-500" />
            <span className="hidden sm:inline">Acceso Alumnos</span>
          </button>

          {/* Inscribirme CTA -> Redirects to uniceq.carrd.co */}
          <button
            onClick={() => openCheckout('full')}
            className="gold-button px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 tracking-wide cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Inscribirme <span className="hidden sm:inline">($5,000 MXN)</span></span>
          </button>
        </div>
      </div>
    </header>
  );
};
