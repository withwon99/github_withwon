import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenConsultationModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultationModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/70 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 group text-left focus:outline-none cursor-pointer"
          aria-label="위드원마케팅 최상단으로 이동"
        >
          <img
            src="/logo.svg"
            alt="위드원마케팅 WITH-WON Marketing"
            referrerPolicy="no-referrer"
            className={`w-auto object-contain transition-all duration-300 ${
              isScrolled ? 'h-8 sm:h-9' : 'h-10 sm:h-[40px]'
            }`}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <button
            onClick={() => scrollToSection('services')}
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            서비스 소개
          </button>
          <button
            onClick={() => scrollToSection('why-us')}
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            왜 위드원인가
          </button>
          <button
            onClick={() => scrollToSection('performance')}
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            성과 사례
          </button>
          <button
            onClick={() => scrollToSection('process')}
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            진행 프로세스
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            자주 묻는 질문
          </button>
        </nav>

        {/* Right Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            10년 차 대표 1:1 밀착 관리
          </span>
          <button
            onClick={() => {
              if (onOpenConsultationModal) {
                onOpenConsultationModal();
              } else {
                scrollToSection('contact');
              }
            }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md shadow-blue-500/20 active:scale-95 transition-all cursor-pointer"
          >
            <span>무료 진단 신청</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => {
              if (onOpenConsultationModal) {
                onOpenConsultationModal();
              } else {
                scrollToSection('contact');
              }
            }}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-md shadow-sm"
          >
            무료 진단
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-md focus:outline-none"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <button
            onClick={() => scrollToSection('services')}
            className="block w-full text-left py-2 text-sm font-semibold text-slate-800 hover:text-blue-600 border-b border-slate-100"
          >
            서비스 소개
          </button>
          <button
            onClick={() => scrollToSection('why-us')}
            className="block w-full text-left py-2 text-sm font-semibold text-slate-800 hover:text-blue-600 border-b border-slate-100"
          >
            왜 위드원인가
          </button>
          <button
            onClick={() => scrollToSection('performance')}
            className="block w-full text-left py-2 text-sm font-semibold text-slate-800 hover:text-blue-600 border-b border-slate-100"
          >
            성과 사례
          </button>
          <button
            onClick={() => scrollToSection('process')}
            className="block w-full text-left py-2 text-sm font-semibold text-slate-800 hover:text-blue-600 border-b border-slate-100"
          >
            진행 프로세스
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="block w-full text-left py-2 text-sm font-semibold text-slate-800 hover:text-blue-600 border-b border-slate-100"
          >
            자주 묻는 질문
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenConsultationModal) {
                  onOpenConsultationModal();
                } else {
                  scrollToSection('contact');
                }
              }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-center text-sm shadow-md"
            >
              대표 직접 1:1 무료 진단 신청하기
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
