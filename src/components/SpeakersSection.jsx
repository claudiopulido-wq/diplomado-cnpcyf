import React from 'react';
import { courseInfo } from '../data/courseData';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Award, Scale, Sparkles, UserCheck, ArrowRight, BookOpen, GraduationCap } from 'lucide-react';

export const SpeakersSection = () => {
  const { openCheckout } = useApp();

  return (
    <section id="ponentes" className="py-24 relative overflow-hidden bg-[#080C16] border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-gold text-xs font-bold uppercase tracking-wider mb-4">
            <Scale className="w-4 h-4 text-amber-400" />
            <span>Poder Judicial • Autoridad & Excelencia</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Claustro Docente de <span className="gold-gradient-text">Alto Renombre</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Aprende directamente de Magistrados de Circuito, Jueces de Oralidad y Doctores en Derecho Procesal que resuelven y aplican en el foro el nuevo Código Nacional.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 items-stretch">
          {courseInfo.speakers.map((speaker) => (
            <div 
              key={speaker.id}
              className="group rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between overflow-hidden relative border border-slate-700/80 hover:border-amber-500/50 transition-all duration-300"
            >
              {/* Top Image Container */}
              <div className="relative aspect-square w-full overflow-hidden bg-slate-900">
                <img 
                  src={speaker.image} 
                  alt={speaker.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Gradient overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-[#0E131F]/30 to-transparent" />

                {/* Floating Badge */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase bg-black/70 backdrop-blur-md text-amber-300 border border-amber-500/30 shadow-lg">
                    {speaker.badge}
                  </span>
                </div>

                {/* Bottom title over image */}
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                    {speaker.honorific}
                  </div>
                  <h3 className="text-lg font-extrabold text-white leading-snug group-hover:text-amber-300 transition-colors">
                    {speaker.title}
                  </h3>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-[#0E131F]/90">
                <div>
                  {/* Institution & Specialty */}
                  <div className="mb-4 space-y-1.5 pb-3 border-b border-slate-800">
                    <div className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{speaker.institution}</span>
                    </div>
                    <div className="text-xs text-amber-400/90 font-medium flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{speaker.specialty}</span>
                    </div>
                  </div>

                  {/* Bio / Semblanza */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {speaker.bio}
                  </p>
                </div>

                {/* Tags / Competencies */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                  {speaker.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-medium text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Judicial Guarantee Banner */}
        <div className="rounded-3xl p-8 sm:p-10 glass-panel border border-amber-500/30 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Garantía de Rigor Académico & Judicial</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Formación impartida por quienes redactan y dictan sentencias
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Cada módulo del diplomado cuenta con ponentes de máximo perfil judicial. La lista nominal final con las semblanzas curriculares completas de cada magistrado y juez se actualizará progresivamente previo al arranque de generación del <strong>9 y 10 de octubre de 2026</strong>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              onClick={() => openCheckout('full')}
              className="gold-button px-8 py-4 rounded-xl text-sm font-extrabold flex items-center gap-2 cursor-pointer shadow-xl"
            >
              <Sparkles className="w-4 h-4 text-[#07090E]" />
              <span>Asegurar Lugar con los Ponentes</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
