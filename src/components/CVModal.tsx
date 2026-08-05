import React from 'react';
import { X, Printer, Download, Mail, MapPin, Phone, Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, SKILL_CATEGORIES, EDUCATION_ITEMS, LANGUAGES } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl border border-[#bdc9c9]/50 my-auto max-h-[92vh] flex flex-col relative overflow-hidden">
        
        {/* Modal Top Control Bar */}
        <div className="px-6 py-4 bg-[#f7f9fb] border-b border-[#bdc9c9]/30 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#00696c]" />
            <h3 className="font-extrabold text-base text-[#191c1e]">Curriculum Vitae - {PERSONAL_INFO.shortName}</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="bg-[#00696c] text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-full hover:bg-[#005255] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#e0e3e5] text-[#3e4949] transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content Document */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white font-sans text-[#191c1e] selection:bg-[#00696c]/20">
          
          {/* Header Banner */}
          <div className="border-b-2 border-[#00696c] pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-[#191c1e] tracking-tight">{PERSONAL_INFO.name}</h1>
              <p className="text-lg font-bold text-[#00696c] mt-1">{PERSONAL_INFO.title}</p>
            </div>

            <div className="text-xs sm:text-sm text-[#3e4949] space-y-1">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00696c]" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#00696c]" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00696c]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Professional Profile Objective */}
          <div className="bg-[#f7f9fb] p-5 rounded-2xl border border-[#bdc9c9]/30">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#00696c] mb-2">Perfil Profesional</h2>
            <p className="text-sm text-[#3e4949] leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-base font-extrabold text-[#191c1e] border-b border-[#bdc9c9]/40 pb-2 mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#00696c]" />
              <span>Experiencia Profesional</span>
            </h2>

            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <h3 className="font-bold text-base text-[#191c1e]">{exp.company}</h3>
                    <span className="text-xs font-bold text-[#00696c] bg-[#00696c]/10 px-2.5 py-0.5 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#356668]">{exp.role}</p>

                  <ul className="space-y-1 text-xs text-[#3e4949] pl-2">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#00696c] font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#bdc9c9]/30">
            {/* Education */}
            <div>
              <h2 className="text-base font-extrabold text-[#191c1e] border-b border-[#bdc9c9]/40 pb-2 mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#00696c]" />
                <span>Formación Educativa</span>
              </h2>

              <div className="space-y-4">
                {EDUCATION_ITEMS.map((edu, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <p className="text-sm font-bold text-[#191c1e]">{edu.title}</p>
                    <p className="text-xs font-semibold text-[#3e4949]">{edu.institution}</p>
                    <p className="text-[11px] text-[#00696c] font-medium">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Languages */}
            <div>
              <h2 className="text-base font-extrabold text-[#191c1e] border-b border-[#bdc9c9]/40 pb-2 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#00696c]" />
                <span>Habilidades e Idiomas</span>
              </h2>

              <div className="space-y-4 text-xs">
                <div>
                  <p className="font-bold text-[#191c1e] mb-1.5">Habilidades Técnicas:</p>
                  <p className="text-[#3e4949] leading-relaxed">
                    {SKILL_CATEGORIES[0].skills.join(' • ')}
                  </p>
                </div>

                <div>
                  <p className="font-bold text-[#191c1e] mb-1.5">Idiomas:</p>
                  <div className="flex gap-4">
                    {LANGUAGES.map((l, i) => (
                      <span key={i} className="bg-[#f7f9fb] px-3 py-1 rounded-lg font-semibold text-[#191c1e] border border-[#bdc9c9]/30">
                        {l.language}: {l.level}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Modal Bar */}
        <div className="px-6 py-4 bg-[#f7f9fb] border-t border-[#bdc9c9]/30 flex justify-end no-print">
          <button
            onClick={onClose}
            className="bg-[#3e4949] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#191c1e] transition-colors cursor-pointer"
          >
            Cerrar Vista Previa
          </button>
        </div>

      </div>
    </div>
  );
};
