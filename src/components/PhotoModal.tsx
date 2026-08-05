import React from 'react';
import { X, Sparkles, Download, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhotoModal: React.FC<PhotoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-scale-up">
        
        {/* Header bar */}
        <div className="p-4 bg-[#f7f9fb] border-b border-[#bdc9c9]/30 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#00696c]" />
            <h3 className="font-extrabold text-base text-[#191c1e]">Foto Victoria</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#e0e3e5] text-[#3e4949] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Photo Container */}
        <div className="p-6 flex flex-col items-center bg-[#f7f9fb]">
          <div className="w-full max-h-[60vh] rounded-2xl overflow-hidden shadow-lg border-4 border-white mb-4">
            <img
              src={PERSONAL_INFO.photoUrl}
              alt={PERSONAL_INFO.photoAlt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain bg-black/5"
            />
          </div>

          <div className="text-center space-y-1">
            <h4 className="font-extrabold text-lg text-[#191c1e]">{PERSONAL_INFO.name}</h4>
            <p className="text-xs font-semibold text-[#00696c]">{PERSONAL_INFO.title}</p>
            <p className="text-xs text-[#3e4949] pt-1">Estudiante de Ingeniería en Computación • San Diego, Venezuela</p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-white border-t border-[#bdc9c9]/30 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#00696c] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#005255] cursor-pointer"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
