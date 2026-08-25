import React from 'react';
import { courseInfo } from '../data/courseData';
import { Scale, ShieldCheck, Mail, Phone, MapPin, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#05070B] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-700 p-[1px]">
                <div className="w-full h-full bg-[#07090E] rounded-[11px] flex items-center justify-center">
                  <Scale className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div>
                <div className="text-white font-bold text-base">UNICEQ • Universidad Central de Querétaro</div>
                <div className="text-[11px] text-amber-400/90 font-medium">"{courseInfo.motto}"</div>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Diplomado de Alta Especialización en Código Nacional de Procedimientos Civiles y Familiares. Formación de excelencia con validez oficial y certificación nacional SEP-CONOCER en el Estándar EC1038.
            </p>

            <div className="flex items-center gap-4 text-slate-400 pt-2">
              <a 
                href="https://instagram.com/certificacionesuniceq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <span className="w-4 h-4 flex items-center justify-center text-amber-400">📷</span>
                <span>@certificacionesuniceq</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <div className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Navegación
            </div>
            <ul className="space-y-2.5">
              <li><a href="#temario" className="hover:text-amber-400 transition-colors">Temario (10 Módulos)</a></li>
              <li><a href="#certificacion" className="hover:text-amber-400 transition-colors">Certificación SEP EC1038</a></li>
              <li><a href="#calendario" className="hover:text-amber-400 transition-colors">Calendario & Sede</a></li>
              <li><a href="#inversion" className="hover:text-amber-400 transition-colors">Inversión ($5,000 MXN)</a></li>
              <li><a href="#faqs" className="hover:text-amber-400 transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Col 3: Contact info */}
          <div>
            <div className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Informes e Inscripciones
            </div>
            <ul className="space-y-3">
              <li className="font-semibold text-slate-200">
                {courseInfo.contact.coordinator}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${courseInfo.contact.email}`} className="hover:text-white transition-colors truncate">
                  {courseInfo.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${courseInfo.contact.phone}`} className="hover:text-white transition-colors">
                  {courseInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Av. 5 de Febrero #1602, Col. San Pablo, Querétaro, Qro.</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} UNICEQ • Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Privacidad de Datos</span>
            <span>•</span>
            <span>Términos del Servicio</span>
            <span>•</span>
            <span>Aviso Legal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
