import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { courseInfo } from '../data/courseData';
import { X, Lock, CreditCard, ShieldCheck, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

export const CheckoutModal = () => {
  const { isCheckoutOpen, closeCheckout, checkoutPlan, registerStudent } = useApp();
  const [selectedPlan, setSelectedPlan] = useState(checkoutPlan);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profile: 'Abogado Litigante',
    modality: 'Híbrida (Presencial/Virtual)',
    cardNumber: '4242 •••• •••• 4242',
    cardExp: '12/28',
    cardCvc: '•••'
  });

  if (!isCheckoutOpen) return null;

  const isFull = selectedPlan === 'full';
  const amount = isFull ? 5000 : 2000;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Por favor completa todos los campos de contacto');
      return;
    }

    setLoading(true);

    // Simulate Stripe payment processing & webhook trigger
    setTimeout(async () => {
      setLoading(false);
      
      // Fire confetti celebration safely
      try {
        const confettiModule = await import('canvas-confetti');
        const confetti = confettiModule.default || confettiModule;
        if (typeof confetti === 'function') {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        }
      } catch (err) {
        console.log('Confetti effect skipped:', err);
      }

      registerStudent({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        profile: formData.profile,
        modality: formData.modality,
        plan: selectedPlan
      });

      closeCheckout();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#0C111E] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black my-8">
        
        {/* Close Button */}
        <button
          onClick={closeCheckout}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full badge-gold text-xs font-bold uppercase tracking-wider mb-2">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span>Pasarela de Pago Segura • Stripe</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Inscripción al Diplomado CNPCyF
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Validez Oficial UNICEQ y Certificación SEP-CONOCER EC1038
          </p>
        </div>

        {/* Plan Selector */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            type="button"
            onClick={() => setSelectedPlan('full')}
            className={`p-3.5 rounded-2xl border text-left transition-all ${
              selectedPlan === 'full'
                ? 'bg-amber-500/15 border-amber-400 text-white shadow-lg shadow-amber-500/10'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div className="text-[11px] uppercase font-bold text-amber-400">Pago Total</div>
            <div className="text-lg font-black text-white">$5,000 MXN</div>
            <div className="text-[10px] text-slate-300">Liquidación 100%</div>
          </button>

          <button
            type="button"
            onClick={() => setSelectedPlan('deposit')}
            className={`p-3.5 rounded-2xl border text-left transition-all ${
              selectedPlan === 'deposit'
                ? 'bg-amber-500/15 border-amber-400 text-white shadow-lg shadow-amber-500/10'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div className="text-[11px] uppercase font-bold text-amber-400">Apartado</div>
            <div className="text-lg font-black text-white">$2,000 MXN</div>
            <div className="text-[10px] text-slate-300">Saldo: $3,000 MXN</div>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Nombre Completo (para tu diploma y certificación SEP):
            </label>
            <input
              type="text"
              required
              placeholder="Ej. Lic. Alejandro Morales Ortiz"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Correo Electrónico (para acceso a Classroom):
              </label>
              <input
                type="email"
                required
                placeholder="tu.correo@ejemplo.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:border-amber-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Teléfono / WhatsApp:
              </label>
              <input
                type="tel"
                required
                placeholder="442 123 4567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:border-amber-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Perfil / Cargo Profesional:
              </label>
              <select
                value={formData.profile}
                onChange={(e) => setFormData({ ...formData, profile: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none"
              >
                <option value="Abogado Litigante">Abogado(a) Litigante</option>
                <option value="Juez / Magistrado">Juez / Magistrado(a)</option>
                <option value="Secretario de Acuerdos">Secretario(a) de Acuerdos</option>
                <option value="Defensor Público">Defensor(a) Público(a)</option>
                <option value="Notario Público">Notario(a) Público(a)</option>
                <option value="Servidor Público">Servidor(a) Público(a)</option>
                <option value="Estudiante / Académico">Estudiante / Académico(a)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Modalidad Preferida:
              </label>
              <select
                value={formData.modality}
                onChange={(e) => setFormData({ ...formData, modality: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none"
              >
                <option value="Híbrida (Presencial/Virtual)">Híbrida (Meet + UNICEQ Querétaro)</option>
                <option value="100% Virtual (Google Meet)">100% Virtual a Distancia</option>
              </select>
            </div>
          </div>

          {/* Stripe Card Mockup Field */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                <CreditCard className="w-4 h-4 text-amber-400" />
                Tarjeta de Crédito o Débito
              </span>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Stripe Encriptado
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                readOnly
                value={formData.cardNumber}
                className="col-span-2 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-300 font-mono"
              />
              <div className="flex gap-1.5">
                <input
                  type="text"
                  readOnly
                  value={formData.cardExp}
                  className="w-1/2 px-2 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-300 text-center font-mono"
                />
                <input
                  type="text"
                  readOnly
                  value={formData.cardCvc}
                  className="w-1/2 px-2 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-300 text-center font-mono"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full gold-button py-4 rounded-xl text-base font-extrabold flex items-center justify-center gap-2 cursor-pointer shadow-xl mt-4"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                Procesando Pago con Stripe...
              </span>
            ) : (
              <span>Confirmar Pago de ${amount.toLocaleString('es-MX')}.00 MXN</span>
            )}
          </button>
        </form>

        <div className="flex items-center justify-center gap-2 mt-4 text-[11px] text-slate-400 text-center">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>Garantía de registro oficial inmediato y comprobante digital</span>
        </div>

      </div>
    </div>
  );
};
