import React, { useState } from 'react';
import { Briefcase, Store, Wrench, ArrowRight, Calendar, Sparkles, Filter, ChevronRight } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { ExperienceItem } from '../types';

export const Experience: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'software' | 'sales' | 'admin'>('all');
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (filter === 'all') return true;
    if (filter === 'software') return exp.type === 'software';
    if (filter === 'sales') return exp.type === 'sales' || exp.type === 'admin';
    return true;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'software':
        return <Briefcase className="w-5 h-5 text-white" />;
      case 'sales':
        return <Store className="w-5 h-5 text-[#3e4949]" />;
      case 'admin':
        return <Wrench className="w-5 h-5 text-[#3e4949]" />;
      default:
        return <Briefcase className="w-5 h-5 text-[#3e4949]" />;
    }
  };

  return (
    <section id="experiencia" className="py-20 px-4 md:px-8 bg-[#f2f4f6]/50 relative">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#00696c] font-bold text-xs uppercase tracking-widest bg-[#00696c]/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Trayectoria
          </span>
          <h2 className="font-extrabold text-3xl md:text-4xl text-[#191c1e] tracking-tight">
            Experiencia Profesional
          </h2>
          <p className="text-[#3e4949] text-base max-w-xl mx-auto mt-3">
            Experiencia práctica en desarrollo de software web, gestión de sistemas y atención al cliente.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#00696c] text-white shadow-md'
                  : 'bg-white text-[#3e4949] hover:bg-[#e0e3e5] border border-[#bdc9c9]/40'
              }`}
            >
              Todas ({EXPERIENCES.length})
            </button>
            <button
              onClick={() => setFilter('software')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                filter === 'software'
                  ? 'bg-[#00696c] text-white shadow-md'
                  : 'bg-white text-[#3e4949] hover:bg-[#e0e3e5] border border-[#bdc9c9]/40'
              }`}
            >
              Desarrollo Web
            </button>
            <button
              onClick={() => setFilter('sales')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                filter === 'sales'
                  ? 'bg-[#00696c] text-white shadow-md'
                  : 'bg-white text-[#3e4949] hover:bg-[#e0e3e5] border border-[#bdc9c9]/40'
              }`}
            >
              Ventas &amp; Administración
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#00696c] before:via-[#bdc9c9] before:to-transparent">
          
          {filteredExperiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={exp.id}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Timeline Icon Node */}
                <div
                  className={`flex items-center justify-center w-11 h-11 rounded-full border-4 border-[#f7f9fb] shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 ${
                    exp.isCurrent
                      ? 'bg-[#00696c] ring-4 ring-[#00696c]/20 animate-pulse'
                      : 'bg-[#e0e3e5] text-[#3e4949]'
                  }`}
                >
                  {getIcon(exp.type)}
                </div>

                {/* Timeline Content Card */}
                <div
                  onClick={() => setSelectedExp(exp)}
                  className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] glass-card glass-card-hover p-6 md:p-8 rounded-2xl cursor-pointer ml-4 md:ml-0 border border-[#bdc9c9]/40 hover:border-[#00696c]/50 transition-all shadow-sm"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="font-extrabold text-xl text-[#191c1e] group-hover:text-[#00696c] transition-colors">
                      {exp.company}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-[#00696c]/10 text-[#00696c]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-[#356668] mb-4 flex items-center gap-1">
                    <span>{exp.role}</span>
                  </p>

                  <ul className="space-y-2.5 text-sm text-[#3e4949] mb-5">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <ArrowRight className="w-4 h-4 text-[#00696c] shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack chips */}
                  {exp.techStack && exp.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#bdc9c9]/20">
                      {exp.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-full bg-[#e0e3e5]/70 text-[#191c1e] text-xs font-medium hover:bg-[#00696c]/15 hover:text-[#00696c] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedExp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl border border-[#bdc9c9]/40 relative">
            <button
              onClick={() => setSelectedExp(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#eceef0] text-[#3e4949] transition-colors"
            >
              ✕
            </button>

            <div className="inline-block px-3 py-1 rounded-full bg-[#00696c]/10 text-[#00696c] text-xs font-bold mb-2">
              {selectedExp.period}
            </div>

            <h3 className="text-2xl font-extrabold text-[#191c1e]">{selectedExp.company}</h3>
            <p className="text-sm font-semibold text-[#00696c] mb-4">{selectedExp.role}</p>

            <div className="space-y-3 text-sm text-[#3e4949] my-4 bg-[#f7f9fb] p-4 rounded-2xl border border-[#bdc9c9]/30">
              <h4 className="font-bold text-[#191c1e] text-xs uppercase tracking-wider">Responsabilidades principales:</h4>
              <ul className="space-y-2">
                {selectedExp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#00696c] font-bold">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {selectedExp.techStack && (
              <div>
                <h4 className="font-bold text-xs text-[#191c1e] uppercase tracking-wider mb-2">Tecnologías &amp; Competencias:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExp.techStack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-[#00696c] text-white text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-[#bdc9c9]/30 flex justify-end">
              <button
                onClick={() => setSelectedExp(null)}
                className="bg-[#00696c] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#005255]"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
