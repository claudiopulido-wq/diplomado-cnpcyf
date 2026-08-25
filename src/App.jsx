import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { Curriculum } from './components/Curriculum';
import { ScheduleLocation } from './components/ScheduleLocation';
import { Pricing } from './components/Pricing';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { StudentPortal } from './components/StudentPortal';
import { AdminDashboard } from './components/AdminDashboard';
import { CheckoutSuccess } from './components/CheckoutSuccess';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

const MainContent = () => {
  const { currentView, openCheckout } = useApp();

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
      <Navbar />

      {currentView === 'landing' && (
        <main>
          <Hero />
          <ValueProposition />
          <Curriculum />
          <ScheduleLocation />
          <Pricing />
          <FaqSection />

          {/* Sticky Floating CTA Bar for High Conversion */}
          <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 z-40 max-w-md">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0D1220]/95 border border-amber-500/30 shadow-2xl backdrop-blur-xl flex items-center justify-between gap-3">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Inscripciones Abiertas</span>
                </div>
                <div className="text-sm font-extrabold text-white">
                  $5,000 MXN <span className="text-xs text-slate-400 font-normal sm:inline hidden">• SEP EC1038</span>
                </div>
              </div>

              <button
                onClick={() => openCheckout('full')}
                className="gold-button px-4 py-2.5 rounded-xl text-xs font-black flex items-center gap-1.5 cursor-pointer shadow-lg shrink-0"
              >
                <span>Apartar Lugar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </main>
      )}

      {currentView === 'portal' && <StudentPortal />}
      {currentView === 'admin' && <AdminDashboard />}
      {currentView === 'checkout-success' && <CheckoutSuccess />}

      <Footer />
      <CheckoutModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
