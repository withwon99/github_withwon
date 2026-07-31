import React from 'react';
import { Search, Monitor, Share2, Compass, BarChart, Settings, CheckCircle2, ArrowRight, Zap, Target } from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsultationModal?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultationModal }) => {
  const coreServices = [
    {
      icon: Search,
      tag: '매출 직결 CORE 01',
      title: '검색광고 (SA - Search Advertising)',
      summary: '네이버, 구글 검색 유저의 구매 의도를 최우선으로 타겟팅하여 즉각적인 매출을 견인합니다.',
      kpis: [
        '구매 전환율 높인 세부 키워드 3,000+개 정밀 조준',
        '24시간 부정클릭 및 매크로 실시간 탐지 차단',
        '품질지수 극대화로 동일 키워드 입찰가 25~40% 절감',
        '캠페인 & 광고그룹 세분화 전략으로 효율 극대화',
      ],
      platforms: ['Naver PowerLink', 'Naver Shopping', 'Kakao Keyword', 'Google Search'],
    },
    {
      icon: Monitor,
      tag: '매출 직결 CORE 02',
      title: '디스플레이 광고 (DA - Display Advertising)',
      summary: '고전환 타겟 오디언스를 정의하고, 이탈한 고객을 다차원 리타겟팅하여 브랜드 팬덤을 만듭니다.',
      kpis: [
        '고전환 카피 & 숏폼/이미지 A/B 다중 소재 기획',
        'Meta(Instagram/Facebook), Kakao, GDN 리타겟팅 퍼널',
        '자사몰 이탈 고객 픽셀 기반 동적 상품 광고(DPA)',
      ],
      platforms: ['Meta Ads (Insta/FB)', 'Kakao Moment', 'Google GDN', 'TikTok Ads'],
    },
  ];

  const supportingServices = [
    {
      icon: Share2,
      title: '바이럴 & 인플루언서',
      summary: '브랜드 인지도 형성 및 대세감 조성을 위한 진성 체험단 및 인플루언서 시너지',
      kpis: ['네이버 블로그/카페 진성 노출', '인스타그램/유튜브 협찬 릴스 기획'],
    },
    {
      icon: Compass,
      title: '브랜드 총괄 디렉팅',
      summary: '광고 클릭 후 구매 결제로 이어지도록 자사몰 상세페이지 및 오퍼 퍼널 개선',
      kpis: ['구매 전환용 상세페이지 UX 기획', '신규 고객 가입 허들 완화 오퍼'],
    },
    {
      icon: BarChart,
      title: '퍼포먼스 다차원 분석',
      summary: 'GA4, 픽셀 트래킹 코드 매핑 및 유저 행동 패턴 데이터 세밀 분석',
      kpis: ['GA4 맞춤 이벤트 트래킹 설계', '채널별 기여도(Attribution) 추적'],
    },
    {
      icon: Settings,
      title: '성과 극대화 유지관리',
      summary: '단발성 집행이 아닌 주간 A/B 테스트와 정기 소재 피보팅을 통한 ROAS 우상향',
      kpis: ['주 2회 성과 모니터링 피드백', '저효율 소재 즉시 교체 및 예산 재배치'],
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
    <section id="services" className="py-20 sm:py-28 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-4">
            <Target className="w-4 h-4 text-blue-600" />
            <span>위드원마케팅 체계적 서비스 포트폴리오</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            매출을 견인하는 핵심 퍼포먼스 서비스
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            모든 영역에 어설프게 분산 투자하지 않습니다. 매출과 직결되는 핵심 매체에 집중하고 통합 시너지를 만듭니다.
          </p>
        </div>

        {/* 1. CORE SERVICES - 2 Columns Large Cards */}
        <div className="mt-14 space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-blue-600 uppercase tracking-wider">
            <Zap className="w-4 h-4 text-blue-600" />
            <span>핵심 성과 서비스 (MAIN REVENUE DRIVERS)</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreServices.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 sm:p-9 border-2 border-slate-200 hover:border-blue-500 shadow-md transition-all flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
                        {service.tag}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                      {service.summary}
                    </p>

                    <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200/80 mb-6">
                      <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                        대표 직접 관리 핵심 KPI
                      </div>
                      <ul className="space-y-2">
                        {service.kpis.map((kpi, kIdx) => (
                          <li key={kIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>{kpi}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs text-slate-500 font-semibold">주요 매체:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.platforms.map((p, pIdx) => (
                        <span key={pIdx} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. SUPPORTING SERVICES - 4 Columns Smaller Cards */}
        <div className="mt-16 space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-500 uppercase tracking-wider">
            <span>이런 통합 시너지 마케팅도 함께 세팅이 가능합니다</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportingServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4 font-bold">
                      <IconComp className="w-5 h-5 text-indigo-600" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">
                      {service.title}
                    </h4>
                    <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                      {service.summary}
                    </p>
                  </div>

                  <ul className="space-y-1.5 pt-3 border-t border-slate-100">
                    {service.kpis.map((k, kIdx) => (
                      <li key={kIdx} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{k}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Low-barrier CTA Button */}
        <div className="mt-14 text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-lg active:scale-95 transition-all cursor-pointer"
          >
            <span>맞춤 마케팅 Mix 무료 진단 받기</span>
            <ArrowRight className="w-4 h-4 text-blue-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
