import React, { useState } from 'react';
import { TrendingUp, BarChart3, CheckCircle2, ArrowRight, ArrowUpRight, Zap, Award, Target, Filter } from 'lucide-react';
import { CaseStudy } from '../types';

interface TrustPerformanceSectionProps {
  onOpenConsultationModal?: () => void;
}

export const TrustPerformanceSection: React.FC<TrustPerformanceSectionProps> = ({
  onOpenConsultationModal,
}) => {
  const [activeTab, setActiveTab] = useState<string>('fashion');

  const caseStudies: CaseStudy[] = [
    {
      id: 'fashion',
      category: 'D2C 의류/패션 브랜드',
      clientName: 'A 여성 디자이너 브랜드',
      period: '집행 3개월 차 성과',
      mainResult: 'CVR 2.5% 상승 & ROAS 180% → 600% 달성',
      description:
        '기존 대행사에서 단순 노출형 GDN 배너만 과도하게 세팅하여 타겟 불일치와 부정 클릭으로 예산이 고갈되던 상황. 고관여 오디언스 리타겟팅과 룩북 타겟 퍼널 재설계 적용.',
      metrics: [
        { label: '광고비', before: '10,000,000원', after: '7,000,000원', change: '30% 절감' },
        { label: '평균 ROAS', before: '200%', after: '1343%', change: '1140% 상승' },
        { label: '월 자사몰 매출', before: '2,000만원', after: '9,400만원', change: '370% 상승' },
        { label: '구매 전환율(CVR)', before: '1.2%', after: '3.8%', change: '+2.6%p' },
      ],
      strategyBullets: [
        '소재 A/B 테스팅으로 구매 유도 착샷 대표 소재 발굴',
        '카카오 모먼트 + Meta 커스텀 오디언스 세그먼트 구축',
        '상세페이지 이탈률 완화를 위한 카탈로그 매핑 최적화',
      ],
    },
    {
      id: 'health',
      category: '건강기능식품 / 바이오',
      clientName: 'B 리포솜 비타민 브랜드',
      period: '집행 4개월 차 성과',
      mainResult: '월 매출 3,500만원 → 1억 8,000만원 돌파',
      description:
        '단순 네이버 검색광고에만 의존해 성장의 한계에 부딪혔던 상권을 디스플레이 광고(DA) 및 바이럴 진성 체험단 연계 퍼널로 확장하여 폭발적인 성장 견인.',
      metrics: [
        { label: '월 매출액', before: '3,500만원', after: '1억 8,000만원', change: '+414%' },
        { label: '네이버 브랜드 검색 CTR', before: '4.1%', after: '12.8%', change: '+8.7%p' },
        { label: '구매 전환율', before: '1.8%', after: '5.1%', change: '3.3% 상승' },
        { label: '광고 ROAS', before: '118%', after: '600%', change: '483% 상승' },
      ],
      strategyBullets: [
        '검색광고(SA) 고효율 세부 키워드 1,200개 추가 발굴',
        'UGC(소비자 창작) 숏폼 인플루언서 콘텐츠 광고 소재화',
        '자사몰 신규 회원가입 혜택 결제 퍼널 다이렉트 연결',
      ],
    },
    {
      id: 'b2b',
      category: 'B2B SaaS / 서비스',
      clientName: 'C 인사관리 매니지먼트 솔루션',
      period: '집행 2개월 차 성과',
      mainResult: '상담문의 당 획득 비용 52%절감, 체험 가입자 3.2배 증가',
      description:
        '의사결정권자(HR/대표) 타겟팅이 난해했던 B2B 영역에서 구글 검색 키워드 정밀 타겟팅과 메타/링크드인 스폰서드 콘텐츠로 고품질 상담 리드 대량 확보.',
      metrics: [
        { label: 'CPA', before: '40,000원', after: '19,200원', change: '52% 절감' },
        { label: '월 유효 상담 신청', before: '24건', after: '78건', change: '+225%' },
        { label: '무료체험 가입자', before: '140명', after: '450명', change: '+221%' },
        { label: 'CTR', before: '0.7%', after: '2.9%', change: '2.2% 상승' },
      ],
      strategyBullets: [
        'B2B 의사결정권자 타겟 세부 상표/솔루션 키워드 세팅',
        '랜딩페이지 CVR(전환율) 모듈 개선 및 폼 제출 허들 제거',
        '리타겟팅 이메일 & 구글 리마케팅 듀얼 트래킹',
      ],
    },
  ];

  const currentCase = caseStudies.find((c) => c.id === activeTab) || caseStudies[0];

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
    <section id="performance" className="py-20 sm:py-28 bg-white text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-4">
            <BarChart3 className="w-4 h-4 text-blue-600" />
            <span>실제 집행 계정 수치 데이터</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            말뿐인 기획이 아닌, <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              실체적 성과 지표로 증명합니다
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            대행사를 바꾼 것만으로 ROAS와 매출이 어떻게 극적으로 바뀌는지, 실제 클라이언트 데이터를 투명하게 공개합니다.
          </p>
        </div>

        {/* 4 Key Overall Metrics Cards */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 hover:border-blue-300 transition-colors flex flex-col justify-between h-full">
            <div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                평균 광고비 절감률
              </div>
              <div className="mt-2 text-lg sm:text-xl lg:text-2xl font-extrabold text-blue-600 whitespace-nowrap tracking-tight">
                최대 30% 절감
              </div>
            </div>
            <div className="mt-2 text-xs text-slate-600">
              불필요 소재·타겟팅 최적화를 통한 광고비 효율화
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 hover:border-blue-300 transition-colors flex flex-col justify-between h-full">
            <div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                매출 성장률
              </div>
              <div className="mt-2 text-lg sm:text-xl lg:text-2xl font-extrabold text-purple-600 whitespace-nowrap tracking-tight">
                370% ~ 414% 상승
              </div>
            </div>
            <div className="mt-2 text-xs text-slate-600">
              동일 채널 대비 자사몰·브랜드 매출 확대
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 hover:border-blue-300 transition-colors flex flex-col justify-between h-full">
            <div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                평균 ROAS 달성률
              </div>
              <div className="mt-2 text-lg sm:text-xl lg:text-2xl font-extrabold text-purple-600 whitespace-nowrap tracking-tight">
                600% ~ 1343%
              </div>
            </div>
            <div className="mt-2 text-xs text-slate-600">
              동일 예산 대비 평균 5~7배 증가
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 hover:border-blue-300 transition-colors flex flex-col justify-between h-full">
            <div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                고객 재계약 유지율
              </div>
              <div className="mt-2 text-lg sm:text-xl lg:text-2xl font-extrabold text-emerald-600 whitespace-nowrap tracking-tight">
                94.2%
              </div>
            </div>
            <div className="mt-2 text-xs text-slate-600">
              대표 1:1 밀착 관리의 결과
            </div>
          </div>
        </div>

        {/* Interactive Case Studies Section */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold text-blue-400 tracking-wider uppercase">
                업종별 성공 사례 (SUCCESS CASES)
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white">
                대표가 직접 설계하고 개선한 실제 비포 & 애프터
              </h3>
            </div>

            {/* Case Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {caseStudies.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === item.id
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {item.category}
                </button>
              ))}
            </div>
          </div>

          {/* Active Case Content */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info & Strategy */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-md bg-blue-500/20 text-blue-300 text-xs font-semibold mb-2">
                  {currentCase.clientName} ({currentCase.period})
                </span>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {currentCase.mainResult}
                </h4>
                <p className="mt-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {currentCase.description}
                </p>
              </div>

              <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/80">
                <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-400" />
                  핵심 전환 개선 전략 (KEY STRATEGY)
                </h5>
                <ul className="space-y-2">
                  {currentCase.strategyBullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Metric Comparison Visual Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {currentCase.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/90 rounded-2xl p-4 sm:p-5 border border-slate-700 hover:border-blue-500/50 transition-all flex flex-col justify-between"
                >
                  <div className="text-xs text-slate-400 font-semibold mb-2">
                    {m.label}
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-slate-400 line-through">
                      기존: {m.before}
                    </div>
                    <div className="text-lg sm:text-2xl font-extrabold text-white flex items-center gap-1">
                      <span>{m.after}</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-700/60 flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-400">개선폭</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {m.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Low-friction CTA Section Bottom */}
        <div className="mt-12 text-center bg-blue-50 rounded-2xl p-6 sm:p-8 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              "우리 브랜드는 대행사를 바꾸면 어떤 성과 결과가 나올까?"
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              현재 운용 중인 광고 계정 URL을 알려주시면, 대표가 24시간 내 무상 진단해 드립니다.
            </p>
          </div>
          <button
            onClick={scrollToContact}
            className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 active:scale-95 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <span>무료 진단 리포트 받아보기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
