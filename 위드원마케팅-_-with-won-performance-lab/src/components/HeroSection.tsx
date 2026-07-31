import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, Award, TrendingUp, Sparkles, UserCheck } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultationModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultationModal }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [roasCount, setRoasCount] = useState(0);
  const [cpaCount, setCpaCount] = useState(0);
  const [efficiencyCount, setEfficiencyCount] = useState(0);
  const [budgetCount, setBudgetCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000;
    const steps = 50;
    const intervalTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // Ease out quad
      const easedProgress = 1 - (1 - progress) * (1 - progress);

      setRoasCount(Math.round(easedProgress * 414));
      setCpaCount(Math.round(easedProgress * 52));
      setEfficiencyCount(Math.round(easedProgress * 145));
      setBudgetCount(Math.round(easedProgress * 120));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-95/30 overflow-hidden text-white"
    >
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Highlight Tag */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold backdrop-blur-sm">
            <UserCheck className="w-4 h-4 text-blue-400" />
            <span>영업 담당자 X · 10년 차 대표가 1:1 직접 운영</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300 text-xs sm:text-sm font-semibold backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>전환율(CVR) 극대화 퍼포먼스 랩</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-tight">
            담당자 말고, <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">대표가 직접</span> 합니다. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              위드원마케팅
            </span>
          </h1>

          {/* Subcopy */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
            진단부터 설계, 전략 수립, 고관여 타겟팅, 최종 성과 개선까지 <br className="hidden md:inline" />
            계약 후 <span className="text-[#B0A8C9]">담당자(직원)에게 방치되지 않고</span>{' '}
            <span className="font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              10년 노하우의 대표가 직접 끝까지 밀착 관리합니다.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                if (onOpenConsultationModal) {
                  onOpenConsultationModal();
                } else {
                  scrollToSection('contact');
                }
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 active:scale-98 transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>대표 직접 1:1 무료 진단 신청하기</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('performance')}
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-base text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>실제 성과 사례 확인</span>
              <TrendingUp className="w-4 h-4 text-blue-400" />
            </button>
          </div>

          {/* Key promise list */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              10년 차 대표 1:1 밀착 관리
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              불필요 무의미 광고비 차단
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              투명한 실시간 수치 리포트
            </span>
          </div>
        </div>

        {/* Stats Grid with Countup Animation */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-slate-700/60 text-center hover:border-blue-500/50 transition-colors">
            <div className="text-2xl sm:text-4xl font-extrabold text-blue-400 tracking-tight">
              +{roasCount}%
            </div>
            <div className="mt-1.5 text-xs sm:text-sm font-semibold text-slate-300">
              평균 ROAS 개선
            </div>
            <p className="mt-1 text-[11px] text-slate-400 hidden sm:block">
              맞춤 소재 & 정밀 타겟팅 기반
            </p>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-slate-700/60 text-center hover:border-blue-500/50 transition-colors">
            <div className="text-2xl sm:text-4xl font-extrabold text-indigo-400 tracking-tight">
              -{cpaCount}%
            </div>
            <div className="mt-1.5 text-xs sm:text-sm font-semibold text-slate-300">
              CPA(전환당비용) 절감
            </div>
            <p className="mt-1 text-[11px] text-slate-400 hidden sm:block">
              부정 클릭 차단 & 효율화
            </p>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-slate-700/60 text-center hover:border-blue-500/50 transition-colors">
            <div className="text-2xl sm:text-4xl font-extrabold text-purple-400 tracking-tight">
              +{efficiencyCount}%
            </div>
            <div className="mt-1.5 text-xs sm:text-sm font-semibold text-slate-300">
              광고 효율 상승
            </div>
            <p className="mt-1 text-[11px] text-slate-400 hidden sm:block">
              전환 퍼널 최적화 적용
            </p>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-slate-700/60 text-center hover:border-blue-500/50 transition-colors">
            <div className="text-2xl sm:text-4xl font-extrabold text-emerald-400 tracking-tight">
              {budgetCount}억+
            </div>
            <div className="mt-1.5 text-xs sm:text-sm font-semibold text-slate-300">
              누적 관리 광고비
            </div>
            <p className="mt-1 text-[11px] text-slate-400 hidden sm:block">
              10년 경력의 검증된 집행액
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
