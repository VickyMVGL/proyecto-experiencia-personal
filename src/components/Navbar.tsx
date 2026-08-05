import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Mail, Briefcase, Award, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCV }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section based on scroll position
      const sections = ['inicio', 'experiencia', 'habilidades', 'educacion', 'contacto'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experiencia', href: '#experiencia', id: 'experiencia', icon: Briefcase },
    { name: 'Habilidades', href: '#habilidades', id: 'habilidades', icon: Award },
    { name: 'Educación', href: '#educacion', id: 'educacion', icon: GraduationCap },
    { name: 'Contacto', href: '#contacto', id: 'contacto', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 no-print ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2.5 border-b border-[#bdc9c9]/30'
          : 'bg-[#f7f9fb]/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#inicio"
          className="group flex items-center gap-1 font-bold text-2xl text-[#191c1e] tracking-tight transition-transform hover:scale-105"
        >
          <span className="font-extrabold tracking-tighter">MG</span>
          <span className="text-[#00696c] text-3xl leading-none">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`text-sm font-semibold transition-all relative py-1 ${
                activeSection === link.id
                  ? 'text-[#00696c]'
                  : 'text-[#3e4949] hover:text-[#00696c]'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00696c] rounded-full animate-fade-in" />
              )}
            </a>
          ))}

          {/* Download CV Button */}
          <button
            onClick={onOpenCV}
            className="bg-[#00696c] text-white font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-[#005255] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <FileDown className="w-4 h-4" />
            <span>Descargar CV</span>
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenCV}
            className="bg-[#00696c]/10 text-[#00696c] p-2 rounded-full hover:bg-[#00696c]/20 transition-colors"
            title="Descargar CV"
          >
            <FileDown className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#191c1e] hover:bg-[#eceef0] transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#bdc9c9]/30 px-6 py-5 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#00696c]/10 text-[#00696c] font-semibold'
                      : 'text-[#3e4949] hover:bg-[#eceef0]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </a>
              );
            })}
            <div className="pt-2 border-t border-[#bdc9c9]/20">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="w-full bg-[#00696c] text-white font-semibold text-center py-3 rounded-xl hover:bg-[#005255] transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <FileDown className="w-5 h-5" />
                <span>Ver / Descargar CV</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
