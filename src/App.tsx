/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PrizesSection } from './components/PrizesSection';
import { ConditionsSection } from './components/ConditionsSection';
import { StepsSection } from './components/StepsSection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { LightboxModal } from './components/LightboxModal';
import { RulesModal } from './components/RulesModal';

export default function App() {
  const [rulesModalOpen, setRulesModalOpen] = useState(false);
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    image: string;
    title: string;
  }>({
    isOpen: false,
    image: '',
    title: '',
  });

  const handleOpenPhoto = (image: string, title: string) => {
    setLightboxState({
      isOpen: true,
      image,
      title,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#35271F] font-sans antialiased">
      {/* 1. Header with Top Bar Contract */}
      <Header onOpenRules={() => setRulesModalOpen(true)} />

      <main className="flex-1">
        {/* 2. Hero with Live Status & HTML Content */}
        <Hero />

        {/* 3. 5 Verified Prizes Structure */}
        <PrizesSection onSelectPrizeImage={handleOpenPhoto} />

        {/* 4. Participation Conditions & 3-Ticket Maximum Limit */}
        <ConditionsSection onOpenRules={() => setRulesModalOpen(true)} />

        {/* 5. 4 Simple Participation Steps */}
        <StepsSection />

        {/* 6. Real Showroom Experience & Gallery */}
        <GallerySection onSelectPhoto={handleOpenPhoto} />

        {/* 7. FAQs */}
        <FaqSection onOpenRules={() => setRulesModalOpen(true)} />

        {/* 8. Showroom Visit & Direct Hotline Contact */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer onOpenRules={() => setRulesModalOpen(true)} />

      {/* 10. Sticky Mobile Bottom Action Bar */}
      <MobileBottomBar />

      {/* 11. Modals */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        image={lightboxState.image}
        title={lightboxState.title}
        onClose={handleCloseLightbox}
      />

      <RulesModal
        isOpen={rulesModalOpen}
        onClose={() => setRulesModalOpen(false)}
      />
    </div>
  );
}
