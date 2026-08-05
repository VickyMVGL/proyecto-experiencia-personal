import React from 'react';
import { GraduationCap, Languages, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { EDUCATION_ITEMS, LANGUAGES } from '../data/portfolioData';

export const EducationLanguages: React.FC = () => {
  return (
    <section id="educacion" className="py-20 px-4 md:px-8 bg-[#f2f4f6]/40 relative">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Education Column */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-[#00696c]/10 rounded-2xl text-[#00696c]">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00696c]">Academia</span>
              <h2 className="font-extrabold text-2xl md:text-3xl text-[#191c1e]">
                Formación Educativa
              </h2>
            </div>
          </div>

          <div className="space-y-6">
            {EDUCATION_ITEMS.map((edu, idx) => (
              <div
                key={idx}
                className={`glass-card p-6 rounded-2xl transition-all border-l-4 shadow-sm hover:shadow-md ${
                  edu.isCurrent
                    ? 'border-l-[#00696c] bg-white ring-1 ring-[#00696c]/20'
                    : 'border-l-[#bdc9c9] bg-white/80'
                }`}
              >
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h3 className="font-extrabold text-lg text-[#191c1e] leading-snug">
                    {edu.title}
                  </h3>
                  {edu.isCurrent && (
                    <span className="px-3 py-1 rounded-full bg-[#00696c] text-white text-xs font-bold animate-pulse">
                      En Curso
                    </span>
                  )}
                </div>

                <p className="text-sm font-semibold text-[#3e4949]">{edu.institution}</p>
                
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#00696c] mt-2 mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.period}</span>
                </div>

                {edu.details && (
                  <p className="text-xs text-[#3e4949] leading-relaxed pt-2 border-t border-[#bdc9c9]/20">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Languages Column */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-[#356668]/10 rounded-2xl text-[#356668]">
              <Languages className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#356668]">Idiomas</span>
              <h2 className="font-extrabold text-2xl md:text-3xl text-[#191c1e]">
                Idiomas &amp; Dominio
              </h2>
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl space-y-8 border border-[#bdc9c9]/40 shadow-sm">
            {LANGUAGES.map((lang, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="font-extrabold text-xl text-[#191c1e]">{lang.language}</span>
                    <p className="text-xs text-[#3e4949] mt-0.5">Nivel de competencia profesional</p>
                  </div>
                  <span className={`font-bold text-xs px-3 py-1.5 rounded-full ${lang.badgeColor}`}>
                    {lang.level}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="h-3 w-full bg-[#e0e3e5] rounded-full overflow-hidden p-0.5 shadow-inner">
                  <div
                    className="h-full bg-gradient-to-r from-[#00696c] to-[#4da6a9] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${lang.percentage}%` }}
                  />
                </div>
              </div>
            ))}

            <div className="p-4 rounded-2xl bg-[#00696c]/5 border border-[#00696c]/20 text-xs text-[#3e4949] space-y-2 mt-6">
              <div className="flex items-center gap-2 font-bold text-[#00696c]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Capacidad de Comunicación Técnica</span>
              </div>
              <p>
                Comprensión fluida de documentación técnica en inglés, especificaciones de API, repositorios open-source y redacción de código limpio estructurado.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
