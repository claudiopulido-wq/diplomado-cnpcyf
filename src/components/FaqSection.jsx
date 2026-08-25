import React, { useState } from 'react';
import { courseInfo } from '../data/courseData';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

export const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (i) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <section id="faqs" className="py-24 relative bg-slate-50/70 dark:bg-[#0A0E18]/70 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-gold text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4 text-amber-500" />
            <span>Resolución de Dudas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Todo lo que necesitas saber sobre la acreditación, fechas, pagos y metodología del diplomado.
          </p>
        </div>

        {/* FAQs List */}
        <div className="space-y-4 mb-16">
          {courseInfo.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-white dark:bg-[#0E1528] border-amber-500/40 shadow-lg'
                    : 'bg-white/80 dark:bg-[#080B14] border-slate-200 dark:border-slate-800 hover:border-amber-400/40'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {faq.question}
                  </span>
                  <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-amber-500" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800/80 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Contact Card */}
        <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-amber-500/25 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
              ¿Tienes alguna duda específica sobre tu inscripción?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Nuestro coordinador académico Mtro. Claudio Pulido te atenderá de forma personalizada.
            </p>
          </div>

          <a
            href={`https://wa.me/${courseInfo.contact.whatsapp}?text=Hola,%20solicito%20información%20del%20Diplomado%20CNPCyF%20UNICEQ`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors shadow-lg shadow-emerald-900/30"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
