import React, { useState } from 'react';
import { Code2, Brain, Wrench, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#00696c]" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-[#356668]" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-[#485f84]" />;
      default:
        return <Terminal className="w-6 h-6 text-[#00696c]" />;
    }
  };

  return (
    <section id="habilidades" className="py-20 px-4 md:px-8 bg-white relative">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#00696c] font-bold text-xs uppercase tracking-widest bg-[#00696c]/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Competencias
          </span>
          <h2 className="font-extrabold text-3xl md:text-4xl text-[#191c1e] tracking-tight">
            Habilidades &amp; Herramientas
          </h2>
          <p className="text-[#3e4949] text-base max-w-xl mx-auto mt-3">
            Conjunto de competencias técnicas, destrezas interpersonales y software especializado.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-8 rounded-3xl border border-[#bdc9c9]/40 flex flex-col justify-between shadow-sm relative overflow-hidden group"
            >
              {/* Card Top Icon Header */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3.5 rounded-2xl ${cat.iconBg} flex items-center justify-center shadow-inner`}>
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-xl text-[#191c1e]">{cat.title}</h3>
                    <p className="text-xs text-[#3e4949] font-medium">
                      {cat.skills.length} {cat.skills.length === 1 ? 'destreza' : 'destrezas'}
                    </p>
                  </div>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIdx) => {
                    const isSelected = activeSkill === skill;

                    return (
                      <button
                        key={sIdx}
                        onClick={() => setActiveSkill(isSelected ? null : skill)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border cursor-pointer flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-[#00696c] text-white border-[#00696c] shadow-md scale-105'
                            : 'bg-[#f7f9fb] text-[#191c1e] border-[#bdc9c9]/50 hover:border-[#00696c] hover:text-[#00696c] hover:bg-white'
                        }`}
                      >
                        <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-[#00696c]'}`} />
                        <span>{skill}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Card Footer Accent */}
              <div className="mt-8 pt-4 border-t border-[#bdc9c9]/20 flex justify-between items-center text-xs text-[#3e4949]">
                <span className="font-medium text-[#00696c]">Manejo comprobado</span>
                <Sparkles className="w-4 h-4 text-[#00696c] opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Highlight notification when clicking skills */}
        {activeSkill && (
          <div className="mt-8 p-4 rounded-2xl bg-[#00696c]/10 border border-[#00696c]/30 text-center max-w-lg mx-auto animate-fade-in">
            <p className="text-sm font-semibold text-[#00696c]">
              ✨ <strong>{activeSkill}</strong>: Aplicado activamente en proyectos académicos y de experiencia profesional.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
