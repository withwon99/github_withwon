import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PainPointSection } from './components/PainPointSection';
import { TrustPerformanceSection } from './components/TrustPerformanceSection';
import { WhyWithWonSection } from './components/WhyWithWonSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { PartnerMarqueeSection } from './components/PartnerMarqueeSection';
import { FaqSection } from './components/FaqSection';
import { ConsultationFormSection } from './components/ConsultationFormSection';
import { Footer } from './components/Footer';
import { FreeDiagnosisModal } from './components/FreeDiagnosisModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col font-sans">
      {/* ① 헤더 / 네비게이션 */}
      <Navbar onOpenConsultationModal={handleOpenModal} />

      <main className="flex-1">
        {/* ② 히어로 섹션 */}
        <HeroSection onOpenConsultationModal={handleOpenModal} />

        {/* ③ 페인포인트 섹션 */}
        <PainPointSection onOpenConsultationModal={handleOpenModal} />

        {/* ④ 신뢰 섹션 (성과 데이터) */}
        <TrustPerformanceSection onOpenConsultationModal={handleOpenModal} />

        {/* ⑤ 왜 위드원마케팅인가 (차별점/철학 - 다크 톤 배경) */}
        <WhyWithWonSection onOpenConsultationModal={handleOpenModal} />

        {/* ⑥ 서비스 소개 (위계화: 핵심 2컬럼 + 보조 4컬럼) */}
        <ServicesSection onOpenConsultationModal={handleOpenModal} />

        {/* ⑦ 진행 프로세스 (4단계 압축 + 대표 직접 참여 배지) */}
        <ProcessSection onOpenConsultationModal={handleOpenModal} />

        {/* ⑧ 파트너/매체 로고 섹션 (무한 가로 스크롤 마키) */}
        <PartnerMarqueeSection />

        {/* ⑨ FAQ 섹션 (아코디언) */}
        <FaqSection onOpenConsultationModal={handleOpenModal} />

        {/* ⑩ 최종 CTA + 상담 신청 폼 (가격/프로모션 통일 섹션) */}
        <ConsultationFormSection />
      </main>

      {/* ⑪ 푸터 */}
      <Footer onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)} />

      {/* 퀵 무료 진단 모달 */}
      <FreeDiagnosisModal isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* 개인정보처리방침 모달 */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </div>
  );
}

