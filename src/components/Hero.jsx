import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { courseInfo } from '../data/courseData';
import { ShieldCheck, Sparkles, Clock, Calendar, CheckCircle2, ArrowRight, Play, Award, Scale, MapPin } from 'lucide-react';

export const Hero = () => {
  const { openCheckout } = useApp();

  // Countdown timer logic (targeting upcoming start date)
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 8,
    minutes: 45,
    seconds: 20
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-amber-600/15 via-amber-500/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badges */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2.5 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-gold text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>Primera Edición Querétaro</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-medium backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Validez Oficial UNICEQ</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-500/40 text-amber-200 text-xs font-semibold backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Certificación SEP-CONOCER EC1038</span>
          </div>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6">
          Código Nacional de{' '}
          <span className="gold-gradient-text block sm:inline">
            Procedimientos Civiles y Familiares
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mb-10">
          Teoría, implementación, litigación oral y aplicación práctica para jueces, magistrados, litigantes y servidores públicos.
        </p>

        {/* Countdown to Launch */}
        <div className="max-w-xl mx-auto mb-10 p-4 rounded-2xl glass-panel border border-amber-500/20 shadow-2xl backdrop-blur-xl">
          <div className="text-xs uppercase tracking-widest text-amber-400/90 font-semibold mb-3 flex items-center justify-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Apertura de Generación • Cupo Limitado</span>
          </div>
          <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
            <div className="p-2 sm:p-3 bg-black/40 rounded-xl border border-white/5">
              <span className="text-2xl sm:text-3xl font-black text-white">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mt-1">Días</span>
            </div>
            <div className="p-2 sm:p-3 bg-black/40 rounded-xl border border-white/5">
              <span className="text-2xl sm:text-3xl font-black text-amber-400">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mt-1">Horas</span>
            </div>
            <div className="p-2 sm:p-3 bg-black/40 rounded-xl border border-white/5">
              <span className="text-2xl sm:text-3xl font-black text-white">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mt-1">Min</span>
            </div>
            <div className="p-2 sm:p-3 bg-black/40 rounded-xl border border-white/5">
              <span className="text-2xl sm:text-3xl font-black text-amber-400">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mt-1">Seg</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
          <button
            onClick={() => openCheckout('full')}
            className="w-full sm:w-auto gold-button px-8 py-4 rounded-xl text-base font-extrabold flex items-center justify-center gap-3 cursor-pointer shadow-xl"
          >
            <span>Inscribirme Ahora</span>
            <span className="px-2 py-0.5 bg-black/20 rounded-md text-xs font-bold">$5,000 MXN</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#temario"
            className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/90 border border-slate-700 hover:border-amber-500/50 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>Ver 10 Módulos</span>
          </a>
        </div>

        {/* Key Features Quick Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-6 border-t border-slate-800/80">
          <div className="p-4 rounded-xl glass-panel text-left flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-white leading-tight">5 Semanas</div>
              <div className="text-xs text-slate-400 mt-0.5">10 sesiones especializadas</div>
            </div>
          </div>

          <div className="p-4 rounded-xl glass-panel text-left flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-white leading-tight">22 Horas</div>
              <div className="text-xs text-slate-400 mt-0.5">Valor curricular y práctico</div>
            </div>
          </div>

          <div className="p-4 rounded-xl glass-panel text-left flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-white leading-tight">Híbrido</div>
              <div className="text-xs text-slate-400 mt-0.5">Viernes Meet • Sábado UNICEQ</div>
            </div>
          </div>

          <div className="p-4 rounded-xl glass-panel text-left flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-white leading-tight">SEP EC1038</div>
              <div className="text-xs text-slate-400 mt-0.5">Certificado Oficial Nacional</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
