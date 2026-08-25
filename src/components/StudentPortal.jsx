import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { courseInfo } from '../data/courseData';
import { 
  BookOpen, Video, FileText, Download, Play, ExternalLink, 
  CheckCircle2, Clock, Calendar, MessageSquare, Award, Sparkles, CreditCard, ArrowLeft
} from 'lucide-react';

export const StudentPortal = () => {
  const { activeStudent, courseLinks, materials, recordings, setCurrentView, openCheckout } = useApp();
  const [activeTab, setActiveTab] = useState('materials'); // 'materials' | 'recordings' | 'schedule'
  const [downloadSuccess, setDownloadSuccess] = useState(null);

  const handleDownload = (material) => {
    setDownloadSuccess(material.title);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  const isDepositOnly = activeStudent?.paymentStatus?.includes('Apartado');

  return (
    <div className="pt-28 pb-24 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Top Header & Student Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
        <div>
          <button
            onClick={() => setCurrentView('landing')}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400 mb-3 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la Página Principal</span>
          </button>
          
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Aula Virtual del Estudiante
            </h1>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 border border-amber-500/30 text-amber-300">
              {activeStudent?.profile || 'Alumno'}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Bienvenido(a), <strong className="text-slate-200">{activeStudent?.name || 'Lic. Estudiante'}</strong> • Folio: <span className="font-mono text-amber-400">{activeStudent?.id || 'STU-2026-001'}</span>
          </p>
        </div>

        {/* Action badges: Classroom & Meet Quick Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={courseLinks.classroomUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 hover:bg-amber-500/25 text-amber-300 text-xs font-bold flex items-center gap-2 transition-all shadow-lg"
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>Google Classroom</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          <a
            href={courseLinks.meetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-900/30"
          >
            <Video className="w-4 h-4" />
            <span>Entrar a Google Meet</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </div>

      {/* Deposit Alert / Pending Balance Banner (if applicable) */}
      {isDepositOnly && (
        <div className="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-950/40 via-amber-900/20 to-black border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Tienes un saldo pendiente de $3,000.00 MXN (Apartado inicial: $2,000)
              </div>
              <div className="text-xs text-slate-300 mt-0.5">
                Recuerda liquidar tu saldo antes de concluir el Módulo 3 para la emisión de tu Certificado SEP-CONOCER.
              </div>
            </div>
          </div>

          <button
            onClick={() => openCheckout('deposit')}
            className="gold-button px-5 py-2.5 rounded-xl text-xs font-bold shrink-0 cursor-pointer shadow-lg"
          >
            Liquidar Saldo Restante
          </button>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 my-8 border-b border-slate-800 pb-4 overflow-x-auto">
        <button
          onClick={() => setActiveTab('materials')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shrink-0 ${
            activeTab === 'materials'
              ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
              : 'text-slate-400 hover:text-white bg-slate-900/50'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Biblioteca de Formatos y Materiales</span>
        </button>

        <button
          onClick={() => setActiveTab('recordings')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shrink-0 ${
            activeTab === 'recordings'
              ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
              : 'text-slate-400 hover:text-white bg-slate-900/50'
          }`}
        >
          <Video className="w-4 h-4" />
          <span>Videoteca de Grabaciones HD</span>
        </button>

        <button
          onClick={() => setActiveTab('schedule')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shrink-0 ${
            activeTab === 'schedule'
              ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
              : 'text-slate-400 hover:text-white bg-slate-900/50'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Cronograma & Sede</span>
        </button>
      </div>

      {/* Tab 1: Materials & Formats */}
      {activeTab === 'materials' && (
        <div>
          {downloadSuccess && (
            <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Descargando: <strong>{downloadSuccess}</strong></span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {materials.map((mat) => (
              <div key={mat.id} className="p-5 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/20">
                      {mat.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">{mat.format} • {mat.size}</span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                    {mat.title}
                  </h3>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">Actualizado: {mat.date}</span>
                  <button
                    onClick={() => handleDownload(mat)}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-amber-500 hover:text-black border border-slate-700 hover:border-amber-400 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Descargar</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Recordings */}
      {activeTab === 'recordings' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recordings.map((rec) => (
              <div key={rec.id} className="p-6 rounded-2xl glass-panel border border-slate-700/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-500/15 text-blue-300 border border-blue-500/20">
                      Módulo {rec.moduleNumber}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {rec.duration}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {rec.title}
                  </h3>
                  <div className="text-xs text-slate-400 mb-6">
                    Fecha de impartición: {rec.date}
                  </div>
                </div>

                {rec.status === 'Disponible' ? (
                  <a
                    href={courseLinks.classroomUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Reproducir en Google Classroom</span>
                  </a>
                ) : (
                  <div className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-500 text-xs font-medium text-center">
                    Próxima Sesión • Se publicará 24h después de la clase
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Schedule & Venue */}
      {activeTab === 'schedule' && (
        <div className="p-6 rounded-2xl glass-panel border border-slate-700/80 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Horarios y Puntos de Encuentro</h3>
            <p className="text-xs text-slate-400">
              Mantén a la mano tus enlaces de conexión y detalles de acceso a las salas presenciales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-xs font-bold text-blue-400 mb-1">Viernes Virtuales (Meet)</div>
              <div className="text-sm font-semibold text-white">Sesión Teórica</div>
              <div className="text-xs text-slate-400 mt-2">Horario vespertino según calendario del módulo</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-xs font-bold text-amber-400 mb-1">Sábados Presenciales (UNICEQ)</div>
              <div className="text-sm font-semibold text-white">9:00 a 13:00 h</div>
              <div className="text-xs text-slate-400 mt-2">Av. 5 de Febrero #1602, Col. San Pablo, Querétaro, Qro.</div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
