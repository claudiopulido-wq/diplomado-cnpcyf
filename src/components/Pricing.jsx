import React from 'react';
import { courseInfo } from '../data/courseData';
import { useApp } from '../context/AppContext';
import { Check, ShieldCheck, Sparkles, CreditCard, Lock, ArrowRight, HelpCircle } from 'lucide-react';

export const Pricing = () => {
  const { openCheckout } = useApp();

  const benefits = [
    "Acceso a las 10 sesiones en vivo (Viernes virtual y Sábados presencial/online)",
    "Certificado Oficial SEP-CONOCER en el Estándar EC1038",
    "Diploma Institucional con valor curricular de 22 horas emitido por UNICEQ",
    "Acceso 24/7 a las grabaciones en alta definición en el Portal y Google Classroom",
    "Biblioteca de formatos procesales editables bajo el nuevo CNPCyF",
    "Diapositivas y presentaciones de todos los ponentes magistrales",
    "Constancia oficial de conclusión de horas cursadas",
    "Asesoría técnica y acompañamiento durante todo el diplomado"
  ];

  return (
    <section id="inversion" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-gold text-xs font-bold uppercase tracking-wider mb-4">
            <CreditCard className="w-4 h-4 text-amber-400" />
            <span>Tarifa de Preventa Exclusiva</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Inversión Oficial del Diplomado
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Asegura tu formación de alta especialización y tu certificación oficial nacional con descuento de preventa antes del <strong className="text-amber-400">18 de Septiembre</strong>.
          </p>

          {/* Urgent Promo Callout Banner */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>¡Ahorra $3,000 MXN inscribiéndote antes del 18 de Septiembre!</span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-16">
          
          {/* Option 1: Pago Total Preventa Recomendado */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#141B2D] to-[#0A0E1A] border-2 border-amber-500 shadow-2xl shadow-amber-500/10 relative flex flex-col justify-between">
            <div className="absolute -top-4 right-8 bg-gradient-to-r from-amber-400 to-amber-600 text-black text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
              Preventa Especial
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider font-bold text-amber-400">
                  Pago Único con Descuento
                </span>
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/30">
                  Ahorras $3,000 MXN
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-2">
                Inscripción Total
              </h3>
              <p className="text-xs text-slate-300 mb-5">
                Válido inscribiéndote antes del <strong>18 de septiembre</strong>. Cubre el 100% de tu diplomado y certificación.
              </p>

              {/* Price display with Strike-through Regular Price */}
              <div className="p-4 rounded-2xl bg-black/50 border border-amber-500/30 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                  <span>Precio regular total:</span>
                  <span className="line-through text-slate-400 font-semibold">$8,000.00 MXN</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white">$5,000</span>
                  <span className="text-sm font-bold text-amber-400">MXN neto</span>
                </div>
                <div className="text-[11px] text-amber-200/80 mt-1">
                  * Tarifa de $5,000 MXN vigente hasta el 18 de septiembre (a partir del 19 de sep: $8,000 MXN).
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-amber-500/20 mb-8 flex items-center gap-2.5 text-xs text-amber-200">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Incluye Certificación Oficial SEP-CONOCER EC1038 y Diploma UNICEQ</span>
              </div>

              <div className="space-y-3 mb-8">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <button
                onClick={() => openCheckout('full')}
                className="w-full gold-button py-4 rounded-xl text-base font-extrabold flex items-center justify-center gap-2 cursor-pointer shadow-xl"
              >
                <span>Pagar en Preventa ($5,000 MXN)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 mt-4 text-[11px] text-slate-400">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>Pago 100% seguro en línea vía Stripe</span>
              </div>
            </div>
          </div>

          {/* Option 2: Plan con Apartado de $2,000 */}
          <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-slate-700/80 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">
                Plan de Pagos Flexible
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Apartado con $2,000
              </h3>
              <p className="text-xs text-slate-400 mb-5">
                Congela la tarifa preferencial de <strong>$5,000 MXN</strong> apartando hoy antes del 18 de septiembre.
              </p>

              <div className="p-4 rounded-2xl bg-black/40 border border-slate-800 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                  <span>Inversión total congelada:</span>
                  <span className="text-white font-bold">$5,000.00 MXN</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white">$2,000</span>
                  <span className="text-sm font-semibold text-slate-400">MXN inicial</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 mb-8 space-y-2 text-xs text-slate-300">
                <div className="flex justify-between font-medium">
                  <span>1. Apartado Inicial:</span>
                  <span className="font-bold text-amber-400">$2,000.00 MXN</span>
                </div>
                <div className="flex justify-between font-medium border-t border-slate-800 pt-2">
                  <span>2. Saldo restante:</span>
                  <span className="font-bold text-white">$3,000.00 MXN</span>
                </div>
                <div className="text-[11px] text-slate-400 pt-1">
                  * El saldo se liquida antes de concluir el Módulo 3. A partir del 19 de septiembre el precio regular es de $8,000 MXN.
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>Congela la tarifa de preventa ($5,000 MXN en vez de $8,000 MXN)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>Acceso inmediato al Classroom y enlaces Google Meet</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>Emisión de constancia y certificación oficial al liquidar</span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => openCheckout('deposit')}
                className="w-full py-4 rounded-xl text-sm font-bold text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-600 hover:border-amber-400 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Apartar mi Lugar ($2,000 MXN)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 mt-4 text-[11px] text-slate-400">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>Cobro seguro en línea vía Stripe</span>
              </div>
            </div>
          </div>

        </div>

        {/* Corporate / Special Invoice note */}
        <div className="max-w-3xl mx-auto p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center text-xs text-slate-400">
          ¿Requieres factura fiscal o inscripción institucional para despachos, juzgados o dependencias? Contáctanos a <span className="text-amber-400 font-semibold">{courseInfo.contact.email}</span> o al WhatsApp <span className="text-amber-400 font-semibold">{courseInfo.contact.phone}</span>.
        </div>

      </div>
    </section>
  );
};
