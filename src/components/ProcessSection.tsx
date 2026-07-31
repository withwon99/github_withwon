import React from 'react';
import { Search, Compass, Play, LineChart, ShieldCheck, UserCheck, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onOpenConsultationModal?: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenConsultationModal }) => {
  const steps = [
    {
      stepNumber: '01',
      title: '계정 & 퍼널 심층 진단',
      badge: '대표 1:1 무상 진단',
      icon: Search,
      description:
        '현재 운용 중인 광고 계정, 키워드 효율, 자사몰 구매 퍼널의 허점 5가지를 대표가 직접 정밀 점검합니다.',
    },
    {
      stepNumber: '02',
      title: '맞춤 전략 & 예산 설계',
      badge: '대표 1:1 전략 수립',
      icon: Compass,
      description:
        '낭비되는 예산을 즉시 차단하고, 브랜드 타겟층이 상주하는 매체 Mix 및 ROAS 목표치를 설계합니다.',
    },
    {
      stepNumber: '03',
      title: '대표 직접 세팅 & 실행',
      badge: '10년 차 대표 직접 집행',
      icon: Play,
      description:
        '계약 후 주니어에 배정되지 않습니다. 대표가 직접 소재 기획, 타겟팅 세팅, 입찰 관리를 1:1 관리합니다.',
    },
    {
      stepNumber: '04',
      title: '실시간 리포트 & 최적화',
      badge: '주 2회 수치 직접 체크',
      icon: LineChart,
      description:
        '투명한 실시간 수치 리포트 공유 및 A/B 테스트 피보팅을 통해 최적의 ROAS 상태를 지속 유지합니다.',
    },
  ];

  const scrollToContact = () => {
    if (onOpenConsultationModal) {
      onOpenConsultationModal();
    } else {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="process" className="py-20 sm:py-28 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs sm:text-sm font-semibold mb-4">
            <UserCheck className="w-4 h-4 text-indigo-600" />
            <span>투명하고 검증된 4단계 프로세스</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            시작부터 최적화까지, <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              모든 과정에 대표가 직접 함께합니다
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            대행사에 예산을 맡기고 방치되는 일 없이, 전 과정 1:1 밀착형 케어를 약속드립니다.
          </p>
        </div>

        {/* 4 Steps Horizontal Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-blue-500 hover:bg-white transition-all shadow-sm hover:shadow-md flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-slate-300 group-hover:text-blue-600 transition-colors">
                      {step.stepNumber}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Representative direct involvement badge */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-100/80 text-blue-800 text-[11px] font-bold mb-3 border border-blue-200/60">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>{step.badge}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 text-right">
                  <span className="text-[11px] font-semibold text-slate-400">
                    STEP {step.stepNumber} / 04
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action button */}
        <div className="mt-14 text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors cursor-pointer"
          >
            <span>01단계 무상 계정 진단부터 신청하기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
