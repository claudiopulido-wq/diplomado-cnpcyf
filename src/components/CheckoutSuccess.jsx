import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, Award, Video, BookOpen, ArrowRight, Copy, Check, MessageSquare, Download } from 'lucide-react';

export const CheckoutSuccess = () => {
  const { activeStudent, courseLinks, setCurrentView } = useApp();
  const [copied, setCopied] = React.useState(false);

  const copyClassCode = () => {
    navigator.clipboard.writeText(courseLinks.classroomCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-2xl w-full bg-[#0C1220] border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative text-center">
        
        {/* Success Icon */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-500/15 border-2 border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-500/20 animate-bounce">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        {/* Title */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full badge-gold text-xs font-bold uppercase tracking-wider mb-2">
          <span>¡Inscripción Confirmada con Éxito!</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
          Bienvenido(a), <span className="text-amber-400">{activeStudent?.name || 'Colega'}</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mb-8 max-w-md mx-auto">
          Tu pago ha sido procesado exitosamente por Stripe y tu folio de matrícula ha sido generado ante UNICEQ y el registro SEP-CONOCER.
        </p>

        {/* Receipt & Student Summary Box */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-left mb-8 space-y-3 text-xs sm:text-sm">
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="text-slate-400">Folio de Estudiante:</span>
            <span className="font-mono font-bold text-amber-400">{activeStudent?.id}</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="text-slate-400">Estatus de Pago:</span>
            <span className="font-bold text-emerald-400">{activeStudent?.paymentStatus} (${activeStudent?.amountPaid?.toLocaleString()} MXN)</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="text-slate-400">Correo Registrado:</span>
            <span className="text-slate-200 font-medium">{activeStudent?.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Modalidad:</span>
            <span className="text-slate-200 font-medium">{activeStudent?.modality}</span>
          </div>
        </div>

        {/* Instant Access: Google Classroom & Meet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left">
          
          {/* Google Classroom Card */}
          <div className="p-4 rounded-2xl bg-black/40 border border-amber-500/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-1">
                <BookOpen className="w-4 h-4" />
                <span>Google Classroom</span>
              </div>
              <p className="text-[11px] text-slate-400 mb-3">
                Accede a lecturas, tareas, presentaciones y grabaciones.
              </p>
            </div>
            
            <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-slate-900 border border-slate-800 mb-3">
              <span className="text-xs font-mono text-slate-300">Código: <strong>{courseLinks.classroomCode}</strong></span>
              <button
                onClick={copyClassCode}
                className="p-1 text-slate-400 hover:text-amber-400 transition-colors"
                title="Copiar Código"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <a
              href={courseLinks.classroomUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Unirme al Classroom</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Google Meet Card */}
          <div className="p-4 rounded-2xl bg-black/40 border border-blue-500/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-400 mb-1">
                <Video className="w-4 h-4" />
                <span>Sesión en Vivo (Meet)</span>
              </div>
              <p className="text-[11px] text-slate-400 mb-3">
                Liga permanente para las sesiones virtuales de los viernes.
              </p>
            </div>

            <a
              href={courseLinks.meetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors mt-auto"
            >
              <span>Abrir Google Meet</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Big Action: Enter Student Portal */}
        <button
          onClick={() => setCurrentView('portal')}
          className="w-full gold-button py-4 rounded-xl text-base font-extrabold flex items-center justify-center gap-2 cursor-pointer shadow-xl"
        >
          <span>Ir a mi Aula de Alumno (Materiales y Clases)</span>
          <ArrowRight className="w-5 h-5" />
        </button>

      </div>
    </div>
  );
};
