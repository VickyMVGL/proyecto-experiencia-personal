import React, { useState } from 'react';
import { ArrowRight, Mail, MapPin, Check, ExternalLink, Maximize2, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenPhotoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPhotoModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-28 pb-16 px-4 md:px-8 relative overflow-hidden">
      {/* Ambient background glow spheres */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#4da6a9]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#839ac1]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10">
        
        {/* Left Column: Text & Hero Content */}
        <div className="order-2 lg:order-1 space-y-7 text-center lg:text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-[#bdc9c9]/40 text-[#00696c] font-semibold text-xs md:text-sm shadow-sm backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00696c] animate-pulse" />
            <span>{PERSONAL_INFO.status}</span>
            <Sparkles className="w-3.5 h-3.5 text-[#00696c] ml-1" />
          </div>

          {/* Main Headline */}
          <h1 className="font-extrabold text-3xl md:text-5xl lg:text-6xl text-[#191c1e] leading-[1.15] tracking-tight">
            Software Developer &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00696c] via-[#356668] to-[#4da6a9]">
              Computer Engineering Student
            </span>
          </h1>

          {/* Bio Description */}
          <p className="text-base md:text-lg text-[#3e4949] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
            {PERSONAL_INFO.bio}
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
            <a
              href="#experiencia"
              className="bg-[#00696c] text-white font-semibold text-sm md:text-base px-8 py-3.5 rounded-full hover:bg-[#005255] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 group cursor-pointer"
            >
              <span>Ver Proyectos</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#contacto"
              className="bg-white text-[#191c1e] font-semibold text-sm md:text-base px-8 py-3.5 rounded-full border border-[#bdc9c9] hover:border-[#00696c] hover:bg-[#f2f4f6] transition-all duration-300 flex items-center gap-2 shadow-sm"
            >
              <span>Contactar</span>
            </a>
          </div>

          {/* Info Details Row */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 text-[#3e4949] text-sm md:text-base font-medium">
            <button
              onClick={handleCopyEmail}
              className="hover:text-[#00696c] transition-colors flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/60 border border-transparent hover:border-[#bdc9c9]/30 group"
              title="Haz clic para copiar correo"
            >
              <Mail className="w-4 h-4 text-[#00696c] group-hover:scale-110 transition-transform" />
              <span>{PERSONAL_INFO.email}</span>
              {copied ? (
                <span className="text-xs bg-[#00696c] text-white px-2 py-0.5 rounded-full animate-bounce">
                  ¡Copiado!
                </span>
              ) : (
                <span className="text-xs text-[#00696c] opacity-0 group-hover:opacity-100 transition-opacity">
                  Copiar
                </span>
              )}
            </button>

            <div className="flex items-center gap-2 px-3 py-1.5">
              <MapPin className="w-4 h-4 text-[#00696c]" />
              <span>San Diego, Carabobo</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Image Frame ("Foto Victoria") */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative group">
          
          {/* Main Photo Card Container with Frame */}
          <div 
            onClick={onOpenPhotoModal}
            className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-[2.5rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 border-[8px] border-white bg-white cursor-pointer group-hover:shadow-[0_20px_50px_rgba(0,105,108,0.2)]"
          >
            {/* Foto Victoria */}
            <img
              src={PERSONAL_INFO.photoUrl}
              alt={PERSONAL_INFO.photoAlt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700"
            />

          </div>

          {/* Decorative Backing Glows & Shapes */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] bg-gradient-to-tr from-[#4da6a9]/20 via-[#839ac1]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-[#bdc9c9]/30 text-xs font-semibold text-[#191c1e] hidden sm:flex items-center gap-2 animate-bounce">
            <span className="w-2 h-2 rounded-full bg-[#00696c]" />
            <span>Ingeniería en Computación (8vo Semestre)</span>
          </div>
        </div>

      </div>
    </section>
  );
};
