import React, { useState } from 'react';
import { courseInfo } from '../data/courseData';
import { useApp } from '../context/AppContext';
import { BookOpen, ChevronDown, ChevronUp, User, CheckCircle2, Sparkles, Download, ArrowRight, Layers } from 'lucide-react';

export const Curriculum = () => {
  const { openCheckout } = useApp();
  const [openModule, setOpenModule] = useState(0); // Module 0 open by default
  const [filter, setFilter] = useState('all');

  const toggleModule = (index) => {
    setOpenModule(openModule === index ? null : index);
  };

  return (
    <section id="temario" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-gold text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-4 h-4 text-amber-400" />
            <span>Estructura Curricular de Excelencia</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Contenido Temático • <span className="gold-gradient-text">10 Módulos</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Un recorrido exhaustivo desde los fundamentos constitucionales hasta la simulación integral de audiencias orales y litigación estratégica.
          </p>
        </div>

        {/* Modules Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {courseInfo.modules.map((mod, idx) => {
            const isOpen = openModule === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0E1424] border-amber-500/40 shadow-xl shadow-amber-500/5'
                    : 'bg-[#0A0E18]/80 border-slate-800/90 hover:border-slate-700 hover:bg-[#0D1220]'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleModule(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-black text-base sm:text-lg shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/30'
                        : 'bg-slate-900 border border-slate-700 text-amber-400'
                    }`}>
                      {mod.number}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400/90">
                          Módulo {mod.number}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <User className="w-3 h-3 text-slate-400" />
                          {mod.speaker}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        {mod.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-2 rounded-full bg-slate-900/80 border border-slate-700 text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-amber-400" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-800/80">
                    {/* Objective Box */}
                    {mod.objective && (
                      <div className="p-4 rounded-xl bg-black/40 border border-amber-500/15 mb-4">
                        <div className="text-xs uppercase tracking-wider font-bold text-amber-400 mb-1">
                          Objetivo del Módulo:
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 italic">
                          "{mod.objective}"
                        </p>
                      </div>
                    )}

                    {/* Topics List */}
                    <div className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
                      Temas a Desarrollar:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {mod.topics.map((topic, tIdx) => (
                        <div key={tIdx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/60">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-300 font-normal leading-tight">
                            {topic}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA for syllabus */}
        <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl glass-panel border border-amber-500/20">
          <h3 className="text-xl font-bold text-white mb-2">
            ¿Listo para dominar el nuevo Código Nacional?
          </h3>
          <p className="text-sm text-slate-400 mb-6">
            Asegura tu lugar en esta primera edición con tarifa especial de preventa de <strong>$5,000 MXN</strong> (antes del 18 de septiembre • regular $8,000 MXN) con validez oficial SEP y valor curricular UNICEQ.
          </p>
          <button
            onClick={() => openCheckout('full')}
            className="gold-button px-8 py-3.5 rounded-xl text-sm font-bold inline-flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <span>Inscribirme en Preventa ($5,000 MXN)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
