import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  LayoutDashboard, Users, DollarSign, CreditCard, Download, Search, 
  CheckCircle2, Plus, MessageCircle, Link as LinkIcon, 
  ArrowLeft, Save, Mail, Phone
} from 'lucide-react';

export const AdminDashboard = () => {
  const { students, courseLinks, updatePaymentStatus, updateLinks, registerStudent, setCurrentView } = useApp();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [isManualModalOpen, setIsManualModalOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    phone: '',
    profile: 'Abogado Litigante',
    plan: 'full',
    modality: 'Híbrida (Presencial/Virtual)'
  });

  const [editLinks, setEditLinks] = useState({ ...courseLinks });
  const [linksSaved, setLinksSaved] = useState(false);

  // Financial and enrollment calculations
  const totalStudents = students.length;
  const totalRevenue = students.reduce((acc, curr) => acc + (curr.amountPaid || 0), 0);
  const fullPaidCount = students.filter(s => s.paymentStatus === 'Liquidado').length;
  const depositCount = students.filter(s => s.paymentStatus?.includes('Apartado')).length;
  const pendingRevenue = depositCount * 3000;

  // Filtered students
  const filteredStudents = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          s.phone.includes(searchTerm) ||
                          s.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (statusFilter === 'LIQUIDADO') return matchesSearch && s.paymentStatus === 'Liquidado';
    if (statusFilter === 'APARTADO') return matchesSearch && s.paymentStatus?.includes('Apartado');
    return matchesSearch;
  });

  const handleExportCSV = () => {
    const headers = ['Folio,Nombre,Correo,Telefono,Perfil,Modalidad,Estatus_Pago,Monto_Pagado_MXN,Fecha_Pago\n'];
    const rows = students.map(s => 
      `"${s.id}","${s.name}","${s.email}","${s.phone}","${s.profile}","${s.modality}","${s.paymentStatus}",${s.amountPaid},"${s.paymentDate}"`
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + headers.concat(rows).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `lista_alumnos_diplomado_cnpcyf_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSaveLinks = (e) => {
    e.preventDefault();
    updateLinks(editLinks);
    setLinksSaved(true);
    setTimeout(() => setLinksSaved(false), 3000);
  };

  const handleManualRegister = (e) => {
    e.preventDefault();
    if (!newStudent.name || !newStudent.email || !newStudent.phone) {
      alert('Completa los campos obligatorios');
      return;
    }
    registerStudent(newStudent);
    setIsManualModalOpen(false);
    setNewStudent({
      name: '',
      email: '',
      phone: '',
      profile: 'Abogado Litigante',
      plan: 'full',
      modality: 'Híbrida (Presencial/Virtual)'
    });
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 min-h-screen px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-slate-800">
        <div>
          <button
            onClick={() => setCurrentView('landing')}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-purple-400 mb-2 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la Página Principal</span>
          </button>
          
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="p-2 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400 shrink-0">
              <LayoutDashboard className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h1 className="text-xl sm:text-3xl font-black text-white leading-tight">
              Panel Administrativo
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Monitoreo en tiempo real de inscripciones, pagos y gestión de alumnos.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
          <button
            onClick={handleExportCSV}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span>Exportar CSV</span>
          </button>

          <button
            onClick={() => setIsManualModalOpen(true)}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg shadow-purple-900/30"
          >
            <Plus className="w-4 h-4" />
            <span>Inscribir Manualmente</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-6 sm:my-8">
        
        <div className="p-4 sm:p-5 rounded-2xl glass-panel border border-slate-700/80">
          <div className="flex items-center justify-between text-slate-400 text-[11px] sm:text-xs font-medium mb-1 sm:mb-2">
            <span>Alumnos Inscritos</span>
            <Users className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white">{totalStudents}</div>
          <div className="text-[10px] sm:text-[11px] text-slate-400 mt-1 flex flex-wrap items-center gap-1">
            <span className="text-emerald-400 font-bold">{fullPaidCount} liquidados</span>
            <span className="hidden sm:inline">•</span>
            <span>{depositCount} apartados</span>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl glass-panel border border-emerald-500/30">
          <div className="flex items-center justify-between text-slate-400 text-[11px] sm:text-xs font-medium mb-1 sm:mb-2">
            <span>Total Recaudado</span>
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-xl sm:text-3xl font-black text-emerald-400">
            ${totalRevenue.toLocaleString('es-MX')}
          </div>
          <div className="text-[10px] sm:text-[11px] text-slate-400 mt-1">
            Pesos Mexicanos (MXN)
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl glass-panel border border-amber-500/30">
          <div className="flex items-center justify-between text-slate-400 text-[11px] sm:text-xs font-medium mb-1 sm:mb-2">
            <span>Saldo por Cobrar</span>
            <CreditCard className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-xl sm:text-3xl font-black text-amber-300">
            ${pendingRevenue.toLocaleString('es-MX')}
          </div>
          <div className="text-[10px] sm:text-[11px] text-slate-400 mt-1">
            {depositCount} alumnos con saldo
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl glass-panel border border-purple-500/30">
          <div className="flex items-center justify-between text-slate-400 text-[11px] sm:text-xs font-medium mb-1 sm:mb-2">
            <span>Tarifa Preventa</span>
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-xl sm:text-3xl font-black text-white">$5,000</div>
          <div className="text-[10px] sm:text-[11px] text-slate-400 mt-1">
            Hasta 18 Sep (Reg. $8,000)
          </div>
        </div>

      </div>

      {/* Roster / Students Section */}
      <div className="p-4 sm:p-6 rounded-3xl glass-panel border border-slate-700/80 mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <h2 className="text-base sm:text-lg font-bold text-white">Alumnos Matriculados</h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-800 text-slate-300">
              {filteredStudents.length}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar alumno, email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-purple-400"
              />
            </div>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full sm:w-auto px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-purple-400"
            >
              <option value="ALL">Todos los estatus</option>
              <option value="LIQUIDADO">Liquidados ($5,000)</option>
              <option value="APARTADO">Apartados ($2,000)</option>
            </select>
          </div>
        </div>

        {/* Mobile View: Card List (< md screens) */}
        <div className="block md:hidden space-y-3">
          {filteredStudents.map((stu) => {
            const isFull = stu.paymentStatus === 'Liquidado';
            return (
              <div 
                key={stu.id} 
                className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-md">
                      {stu.id}
                    </span>
                    <h4 className="text-sm font-bold text-white mt-1">{stu.name}</h4>
                    <p className="text-xs text-slate-400">{stu.profile}</p>
                  </div>

                  <button
                    onClick={() => updatePaymentStatus(stu.id, isFull ? 'Apartado ($2,000)' : 'Liquidado')}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold border transition-colors cursor-pointer shrink-0 ${
                      isFull
                        ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
                        : 'bg-amber-500/15 border-amber-500/30 text-amber-300'
                    }`}
                  >
                    {stu.paymentStatus}
                  </button>
                </div>

                <div className="space-y-1 text-xs text-slate-300 border-t border-slate-800/80 pt-2.5">
                  <div className="flex items-center gap-2 truncate">
                    <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span className="truncate">{stu.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>{stu.phone}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                  <span className="text-xs font-bold text-white">
                    Monto: <strong className="text-emerald-400">${stu.amountPaid?.toLocaleString('es-MX')}.00</strong>
                  </span>

                  <a
                    href={`https://wa.me/52${stu.phone.replace(/[^0-9]/g, '')}?text=Estimado(a)%20${encodeURIComponent(stu.name)},%20te%20saludamos%20del%20Diplomado%20CNPCyF%20UNICEQ.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop View: Full Table (md+ screens) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-900/90 text-slate-400 uppercase tracking-wider text-[10px] border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Folio</th>
                <th className="py-3 px-4">Alumno</th>
                <th className="py-3 px-4">Contacto</th>
                <th className="py-3 px-4">Modalidad</th>
                <th className="py-3 px-4">Estatus de Pago</th>
                <th className="py-3 px-4">Monto</th>
                <th className="py-3 px-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {filteredStudents.map((stu) => {
                const isFull = stu.paymentStatus === 'Liquidado';
                return (
                  <tr key={stu.id} className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-amber-400">{stu.id}</td>
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-white">{stu.name}</div>
                      <div className="text-[11px] text-slate-400">{stu.profile}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div>{stu.email}</div>
                      <div className="text-[11px] text-slate-400 font-mono">{stu.phone}</div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-300">{stu.modality}</td>
                    <td className="py-3.5 px-4">
                      <button
                        onClick={() => updatePaymentStatus(stu.id, isFull ? 'Apartado ($2,000)' : 'Liquidado')}
                        title="Haz clic para alternar estatus de pago"
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold border transition-colors cursor-pointer ${
                          isFull
                            ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/25'
                            : 'bg-amber-500/15 border-amber-500/30 text-amber-300 hover:bg-amber-500/25'
                        }`}
                      >
                        {stu.paymentStatus}
                      </button>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-white">
                      ${stu.amountPaid?.toLocaleString('es-MX')}.00
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <a
                        href={`https://wa.me/52${stu.phone.replace(/[^0-9]/g, '')}?text=Estimado(a)%20${encodeURIComponent(stu.name)},%20te%20saludamos%20del%20Diplomado%20CNPCyF%20UNICEQ.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-[11px] font-medium transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Course Dynamic Settings: Classroom & Meet Links */}
      <div className="p-4 sm:p-8 rounded-3xl glass-panel border border-slate-700/80">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
            <LinkIcon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white">Configuración de Accesos para Alumnos</h3>
            <p className="text-xs text-slate-400">
              Se sincroniza automáticamente en el Aula Virtual de cada estudiante.
            </p>
          </div>
        </div>

        {linksSaved && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Enlaces guardados correctamente.</span>
          </div>
        )}

        <form onSubmit={handleSaveLinks} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Liga de Google Classroom:
            </label>
            <input
              type="url"
              value={editLinks.classroomUrl}
              onChange={(e) => setEditLinks({ ...editLinks, classroomUrl: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Código de Google Classroom:
            </label>
            <input
              type="text"
              value={editLinks.classroomCode}
              onChange={(e) => setEditLinks({ ...editLinks, classroomCode: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400 font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Liga Permanente de Google Meet:
            </label>
            <input
              type="url"
              value={editLinks.meetUrl}
              onChange={(e) => setEditLinks({ ...editLinks, meetUrl: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="sm:col-span-2 lg:col-span-3 pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg"
            >
              <Save className="w-4 h-4" />
              <span>Guardar Cambios de Enlaces</span>
            </button>
          </div>
        </form>
      </div>

      {/* Manual Registration Modal */}
      {isManualModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="w-full max-w-lg bg-[#0C1220] border border-purple-500/30 rounded-3xl p-5 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Inscribir Alumno Manualmente</h3>
            <p className="text-xs text-slate-400 mb-4">
              Para pagos en efectivo, transferencias bancarias o convenios institucionales.
            </p>

            <form onSubmit={handleManualRegister} className="space-y-3">
              <div>
                <label className="block text-xs text-slate-300 mb-1">Nombre Completo:</label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Lic. Fernando Trejo"
                  value={newStudent.name}
                  onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Correo Electrónico:</label>
                  <input
                    type="email"
                    required
                    placeholder="correo@ejemplo.com"
                    value={newStudent.email}
                    onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Teléfono (WhatsApp):</label>
                  <input
                    type="tel"
                    required
                    placeholder="4421234567"
                    value={newStudent.phone}
                    onChange={(e) => setNewStudent({ ...newStudent, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Modalidad de Pago:</label>
                  <select
                    value={newStudent.plan}
                    onChange={(e) => setNewStudent({ ...newStudent, plan: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs"
                  >
                    <option value="full">Liquidado Preventa ($5,000 MXN)</option>
                    <option value="deposit">Apartado ($2,000 MXN)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Modalidad:</label>
                  <select
                    value={newStudent.modality}
                    onChange={(e) => setNewStudent({ ...newStudent, modality: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs"
                  >
                    <option value="Híbrida (Presencial/Virtual)">Híbrida (Meet/UNICEQ)</option>
                    <option value="100% Virtual (Google Meet)">100% Virtual</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-slate-800 mt-4">
                <button
                  type="button"
                  onClick={() => setIsManualModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold"
                >
                  Registrar Alumno
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
