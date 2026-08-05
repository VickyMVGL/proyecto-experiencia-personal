import React from 'react';
import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#e6e8ea] py-12 px-4 md:px-8 border-t border-[#bdc9c9]/30 text-[#191c1e] no-print">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand & Copy */}
        <div className="text-center md:text-left space-y-2">
          <a href="#inicio" className="font-extrabold text-2xl tracking-tight inline-block text-[#191c1e]">
            MG<span className="text-[#00696c]">.</span>
          </a>
          <p className="text-xs text-[#3e4949] font-medium">
            © {new Date().getFullYear()} María Victoria González. Todos los derechos reservados.
          </p>
          <p className="text-[11px] text-[#00696c] font-semibold">
            Desarrolladora Web &amp; Estudiante de Ingeniería en Computación
          </p>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#3e4949] hover:text-[#00696c] hover:bg-[#00696c]/10 transition-all hover:-translate-y-1 shadow-sm"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#3e4949] hover:text-[#00696c] hover:bg-[#00696c]/10 transition-all hover:-translate-y-1 shadow-sm"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Email"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#3e4949] hover:text-[#00696c] hover:bg-[#00696c]/10 transition-all hover:-translate-y-1 shadow-sm"
          >
            <Mail className="w-5 h-5" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="w-10 h-10 rounded-full bg-[#00696c] text-white flex items-center justify-center hover:bg-[#005255] transition-all hover:-translate-y-1 shadow-md ml-2 cursor-pointer"
            title="Volver arriba"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
