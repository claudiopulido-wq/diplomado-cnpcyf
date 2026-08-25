import React from 'react';
import { courseInfo } from '../data/courseData';
import { Calendar, Video, MapPin, Clock, CheckCircle2, Navigation, ShieldCheck } from 'lucide-react';

export const ScheduleLocation = () => {
  return (
    <section id="calendario" className="py-24 relative bg-slate-50/80 dark:bg-[#090D16]/80 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-gold text-xs font-bold uppercase tracking-wider mb-4">
            <Calendar className="w-4 h-4 text-amber-500" />
            <span>Formato Híbrido Flexible</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Calendario de Sesiones & Sede
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Diseñado para profesionistas en activo. Clases virtuales los viernes y prácticas presenciales los sábados (con transmisión y grabación simultánea).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Friday Virtual */}
          <div className="p-8 rounded-3xl glass-panel border border-slate-200 dark:border-slate-700/80 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-500 mb-6">
              <Video className="w-6 h-6" />
            </div>

            <div className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold mb-1">
              Sesión Teórica • Virtual en Vivo
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Viernes por Google Meet
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Exposición especializada, análisis de reformas, criterios jurisprudenciales y debate normativo en vivo desde la comodidad de tu despacho u hogar.
            </p>

            <div className="space-y-3 p-4 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Interacción en tiempo real con los ponentes</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Grabaciones disponibles en HD 24/7 en el Aula</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Sesión de preguntas y respuestas al finalizar</span>
              </div>
            </div>
          </div>

          {/* Card 2: Saturday Presential */}
          <div className="p-8 rounded-3xl glass-panel border border-amber-500/30 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6">
              <MapPin className="w-6 h-6" />
            </div>

            <div className="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 font-bold mb-1">
              Sesión Práctica & Litigación Oral
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Sábados Presenciales (9:00 - 13:00 h)
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Talleres en sala de juicios orales, desahogo de pruebas, formulación de objeciones y simulación de audiencias con retroalimentación personalizada.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-black/40 border border-amber-500/20 text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-4">
              <div className="font-semibold text-slate-900 dark:text-white mb-1">Sede Oficial UNICEQ:</div>
              <div className="text-slate-800 dark:text-slate-300 font-medium">
                {courseInfo.schedule.saturday.venue}
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                {courseInfo.schedule.saturday.address}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-amber-700 dark:text-amber-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span>También disponible en transmisión remota para alumnos foráneos</span>
            </div>
          </div>
        </div>

        {/* Schedule Timeline */}
        <div className="p-8 rounded-3xl glass-panel border border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
              Cronograma de Fechas Oficiales
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              5 semanas consecutivas de alta formación profesional
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
            {courseInfo.schedule.dates.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-center hover:border-amber-500/50 shadow-sm transition-colors">
                <div className="text-xs uppercase font-bold text-amber-600 dark:text-amber-400 mb-1">
                  {item.day}
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {item.dates}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Viernes & Sábado
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
