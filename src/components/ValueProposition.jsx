import React from 'react';
import { courseInfo } from '../data/courseData';
import { Award, ShieldCheck, CheckCircle2, Star, Sparkles, Scale, FileText, Users, ArrowUpRight } from 'lucide-react';

export const ValueProposition = () => {
  return (
    <section id="certificacion" className="py-20 relative overflow-hidden bg-[#0A0E18]/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Big Spotlight: SEP CONOCER EC1038 Banner */}
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden border border-amber-500/30 bg-gradient-to-br from-[#121929] via-[#0E1322] to-[#0A0D17] shadow-2xl mb-20">
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 p-8 opacity-10 text-amber-300">
            <Award className="w-64 h-64" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Valor Agregado Exclusivo</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              Certificado Oficial <span className="gold-gradient-text">SEP-CONOCER EC1038</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              Además del <strong>Diploma UNICEQ</strong> y las constancias oficiales con 22 horas académicas, los egresados obtienen el <strong>Certificado Oficial SEP-CONOCER en el Estándar de Competencia EC1038</strong> (<em>Intervención para la solución de conflictos</em>).
            </p>

            <div className="p-4 rounded-xl bg-black/40 border border-amber-500/20 mb-8 flex items-start gap-3.5">
              <ShieldCheck className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-300">
                <strong className="text-amber-300">Diferenciador curricular de alto nivel:</strong> Con reconocimiento y validez oficial a nivel nacional con cédula de certificación digital ante la Secretaría de Educación Pública y el Consejo Nacional de Normalización y Certificación de Competencias Laborales.
              </p>
            </div>

            {/* Certifications Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 font-black text-lg">
                  SEP
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Estándar EC1038</div>
                  <div className="text-xs text-slate-400">Folio oficial SEP-CONOCER</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 font-black text-lg">
                  UQ
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Diploma UNICEQ</div>
                  <div className="text-xs text-slate-400">22 horas con valor curricular</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header: Competencies */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
            <Scale className="w-4 h-4" />
            <span>Perfil Profesional del Egresado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Competencias de Alto Nivel que Desarrollarás
          </h2>
          <p className="text-slate-400 text-base">
            El diplomado está diseñado para transformar a los operadores jurídicos en especialistas con dominio práctico e inmediato del nuevo modelo procesal oral.
          </p>
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {courseInfo.competencies.map((comp, idx) => (
            <div 
              key={idx} 
              className="p-5 rounded-2xl glass-panel glass-panel-hover flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 text-sm font-bold mt-0.5">
                {idx + 1}
              </div>
              <p className="text-sm font-medium text-slate-200 leading-relaxed">
                {comp}
              </p>
            </div>
          ))}
        </div>

        {/* Target Audience Profile */}
        <div className="p-8 rounded-2xl glass-panel border border-slate-700/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-1">
                Convocatoria Abierta
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                ¿A quién está dirigido este diplomado?
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Users className="w-4 h-4 text-amber-400" />
              <span>Dirigido a la comunidad jurídica nacional</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {courseInfo.targetAudience.map((audience, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">{audience}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
