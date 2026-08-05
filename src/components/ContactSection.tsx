import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contacto" className="py-20 px-4 md:px-8 bg-white relative">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#00696c] font-bold text-xs uppercase tracking-widest bg-[#00696c]/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Conectemos
          </span>
          <h2 className="font-extrabold text-3xl md:text-4xl text-[#191c1e] tracking-tight">
            ¿Interesado/a en Trabajar Juntos?
          </h2>
          <p className="text-[#3e4949] text-base max-w-xl mx-auto mt-3">
            Estoy disponible para oportunidades laborales, desarrollo de proyectos freelance o consultas técnicas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 glass-card p-8 rounded-3xl border border-[#bdc9c9]/40 space-y-6 shadow-sm">
            <h3 className="font-extrabold text-xl text-[#191c1e] pb-3 border-b border-[#bdc9c9]/20 flex items-center gap-2">
              <span>Información de Contacto</span>
              <Sparkles className="w-4 h-4 text-[#00696c]" />
            </h3>

            {/* Email item */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#f7f9fb] hover:bg-[#00696c]/5 transition-colors group">
              <div className="p-3 bg-[#00696c]/10 rounded-xl text-[#00696c] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-xs font-bold text-[#3e4949] uppercase tracking-wider">Correo Electrónico</p>
                <p className="text-sm font-semibold text-[#191c1e] truncate">{PERSONAL_INFO.email}</p>
                <button
                  onClick={handleCopy}
                  className="text-xs text-[#00696c] font-bold hover:underline mt-1 block cursor-pointer"
                >
                  {copiedEmail ? '¡Copiado al portapapeles!' : 'Copiar correo'}
                </button>
              </div>
            </div>

            {/* Location item */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#f7f9fb]">
              <div className="p-3 bg-[#356668]/10 rounded-xl text-[#356668] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#3e4949] uppercase tracking-wider">Ubicación</p>
                <p className="text-sm font-semibold text-[#191c1e]">{PERSONAL_INFO.location}</p>
                <p className="text-xs text-[#3e4949] mt-0.5">Disponibilidad remota y presencial</p>
              </div>
            </div>

            {/* Phone item */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#f7f9fb]">
              <div className="p-3 bg-[#485f84]/10 rounded-xl text-[#485f84] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#3e4949] uppercase tracking-wider">Teléfono / WhatsApp</p>
                <p className="text-sm font-semibold text-[#191c1e]">{PERSONAL_INFO.phone}</p>
              </div>
            </div>

            {/* Direct WhatsApp Action Button */}
            <a
              href={`https://wa.me/584128560713?text=Hola%20Mar%C3%ADa,%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20contactarte.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#356668] text-white font-semibold py-3.5 px-6 rounded-2xl hover:bg-[#284f51] transition-all flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enviar WhatsApp Directo</span>
            </a>
          </div>

          {/* Interactive Form Card (7 cols) */}
          <div className="lg:col-span-7 glass-card p-8 rounded-3xl border border-[#bdc9c9]/40 shadow-sm relative">
            <h3 className="font-extrabold text-xl text-[#191c1e] mb-6">
              Envíame un Mensaje Directo
            </h3>

            {submitted ? (
              <div className="p-8 text-center bg-[#00696c]/10 rounded-2xl border border-[#00696c]/30 animate-fade-in space-y-4">
                <div className="w-12 h-12 bg-[#00696c] text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-[#00696c]">¡Mensaje Enviado con Éxito!</h4>
                <p className="text-sm text-[#3e4949] max-w-md mx-auto">
                  Gracias por comunicarte, María te responderá lo antes posible al correo que indicaste.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#00696c] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#005255] cursor-pointer"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3e4949] mb-2">
                    Tu Nombre
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Carlos Mendoza"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#f7f9fb] border border-[#bdc9c9]/50 text-[#191c1e] text-sm focus:outline-none focus:border-[#00696c] focus:ring-2 focus:ring-[#00696c]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3e4949] mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nombre@empresa.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#f7f9fb] border border-[#bdc9c9]/50 text-[#191c1e] text-sm focus:outline-none focus:border-[#00696c] focus:ring-2 focus:ring-[#00696c]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3e4949] mb-2">
                    Mensaje / Asunto
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Escribe aquí tu mensaje o la propuesta de trabajo..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#f7f9fb] border border-[#bdc9c9]/50 text-[#191c1e] text-sm focus:outline-none focus:border-[#00696c] focus:ring-2 focus:ring-[#00696c]/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#00696c] text-white font-semibold py-4 rounded-2xl hover:bg-[#005255] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
