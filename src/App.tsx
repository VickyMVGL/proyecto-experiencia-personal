/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { EducationLanguages } from './components/EducationLanguages';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';
import { PhotoModal } from './components/PhotoModal';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [photoModalOpen, setPhotoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] font-sans overflow-x-hidden selection:bg-[#00696c]/20 selection:text-[#00696c]">
      {/* Navigation */}
      <Navbar onOpenCV={() => setCvModalOpen(true)} />

      {/* Main Sections */}
      <main className="w-full">
        <Hero onOpenPhotoModal={() => setPhotoModalOpen(true)} />
        <Experience />
        <Skills />
        <EducationLanguages />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
      <PhotoModal isOpen={photoModalOpen} onClose={() => setPhotoModalOpen(false)} />
    </div>
  );
}

