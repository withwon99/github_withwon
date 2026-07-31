import React from 'react';
import { Quote, CheckCircle2, ShieldCheck, Flame, Shield, ArrowRight, UserCheck, Layers, LineChart, Lock } from 'lucide-react';

interface WhyWithWonSectionProps {
  onOpenConsultationModal?: () => void;
}

export const WhyWithWonSection: React.FC<WhyWithWonSectionProps> = ({ onOpenConsultationModal }) => {
  const solutions = [
    {
      title: '1:1 밀착형 물리적 집중 시스템',
      subtitle: '영업만 하고 빠지는 대표는 없습니다',
      description:
        '상담 미팅부터 계정 분석, 광고 소재 기획, 매체 세팅, 일일 모니터링, 리포트 작성까지 10년 차 대표 마케터가 전 과정을 1:1로 직접 집행합니다.',
    },
    {
      title: '동시 무차별 다수 계약 절대 거부',
      subtitle: '소수 정예 밀착 케어 시스템',
      description:
        '대행사가 계정을 과도하게 늘리면 관심의 밀도가 떨어집니다. 위드원마케팅은 한 명의 마케터가 집중할 수 있는 적정 수량을 엄격히 준수합니다.',
    },
    {
      title: '주 2회 이상 실시간 성과 교차 분석',
      subtitle: '깜깜이 운영 배제 및 단톡방 상시 소통',
      description:
        'ROAS 지표 추이 및 CPA 변동을 주 2회 실시간 교차 검증하여, 성과가 저하되는 지점 발견 시 즉시 소재 수정 및 예산 재배치를 감행합니다.',
    },
  ];

  const detailCards = [
    {
      icon: Layers,
      title: '컨설팅 기반 자산 성장',
      description:
        '단순히 광고비만 태우는 일회성 집행이 아닙니다. 자사몰 가입자, 리타겟팅 오디언스 세그먼트, 고효율 키워드 DB 등 브랜드만의 마케팅 자산을 구축합니다.',
    },
    {
      icon: Flame,
      title: '직접 팔아본 실전 마케터',
      description:
        '자체 커머스 및 브랜드 운영 경험을 보유한 마케터입니다. 광고주 입장에서 마진 구조, 재고 순환, 객단가(AOV)를 고려한 진짜 매출 마케팅을 합니다.',
    },
    {
      icon: LineChart,
      title: '10년 차 검증된 스케일업 로드맵',
      description:
        '초기 쇼핑몰 진단부터 월 예산 1,000만 원, 5,000만 원 이상 단계별로 통하는 매체 mix와 퍼널 최적화 공식으로 브랜드 성장을 에스코트합니다.',
    },
    {
      icon: Lock,
      title: '불필요 무의미 광고비 완벽 차단',
      description:
        '전환 가능성이 없는 저품질 검색 키워드, 매크로 부정클릭, 무의미한 타겟 범주를 24시간 감시하여 단 1원의 광고비도 헛되이 새지 않도록 만전을 기합니다.',
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
    <section id="why-us" className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold mb-4">
            <UserCheck className="w-4 h-4 text-blue-400" />
            <span>위드원마케팅의 철학과 약속</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            왜 시장의 다른 대행사들과 다를까요?
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            대행사의 '담당자 복불복' 문제에 마침표를 찍고, 대표가 직접 당신의 마케팅 메이트가 됩니다.
          </p>
        </div>

        {/* Founder's Conviction Quote Block */}
        <div className="mt-12 bg-slate-900/90 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative max-w-4xl mx-auto">
          <Quote className="w-10 h-10 text-blue-500/30 mb-6 mx-auto sm:mx-0" />
          
          <div className="text-slate-300 text-sm sm:text-base leading-[1.8] tracking-tight">
            {/* Paragraph 1 */}
            <p>많은 광고대행사는 계약을 따내는 사람이 광고를 운영하지 않습니다.</p>

            {/* Paragraph 2 */}
            <div className="mt-6 space-y-1">
              <p>상담할 때는 경력이 많은 팀장이나 영업 담당자가 직접 미팅을 하지만,</p>
              <p>계약이 끝나는 순간 실제 광고 계정은 다른 운영 담당자에게 넘어가는 경우가 대부분입니다.</p>
            </div>

            {/* Paragraph 3 */}
            <div className="mt-6 space-y-1">
              <p>심지어 연차가 낮은 신입에게 배정되어,</p>
              <p>광고가 며칠, 몇 주씩 방치되는 일도 업계에서는 흔한 이야기입니다.</p>
            </div>

            {/* Paragraph 4 */}
            <div className="mt-6 space-y-1">
              <p>광고주는 담당자가 누구인지도 모른 채,</p>
              <p>&quot;최적화 중입니다.&quot;, &quot;조금 더 지켜보겠습니다.&quot;라는 말만 반복해서 듣게 됩니다.</p>
            </div>

            {/* Highlight 1: Transition */}
            <div className="my-8">
              <p className="font-bold text-blue-400 text-base sm:text-lg">
                위드원마케팅은 이 구조 자체가 없습니다.
              </p>
            </div>

            {/* Paragraph 5 */}
            <div className="space-y-1">
              <p>10년 차 퍼포먼스 마케터인 대표가</p>
              <p>첫 상담부터 전략 기획, 키워드 분석, 광고 세팅, 소재 개선, 예산 운영,</p>
              <p>성과 분석, 일일 데이터 확인, 리포팅까지 모든 과정을 직접 관리합니다.</p>
            </div>

            {/* Paragraph 6 */}
            <div className="mt-6 space-y-1">
              <p>담당자가 바뀌는 일도,</p>
              <p>계정이 방치되는 일도,</p>
              <p>중간에 책임이 다른 사람에게 넘어가는 일도 없습니다.</p>
            </div>

            {/* Highlight 2: Transition */}
            <div className="my-8">
              <p className="font-bold text-blue-400 text-base sm:text-lg">
                또 하나의 차이가 있습니다.
              </p>
            </div>

            {/* Paragraph 7 */}
            <p>저희는 무리하게 계약 수를 늘려 회사를 키우지 않습니다.</p>

            {/* Paragraph 8 */}
            <div className="mt-6 space-y-1">
              <p>대표가 직접 책임질 수 있는 계정만 운영하기 때문에,</p>
              <p>한 브랜드에 더 많은 시간과 집중을 투자할 수 있습니다.</p>
            </div>

            {/* Paragraph 9 */}
            <p className="mt-6">결국 광고대행사의 성과는 계약 건수가 아니라 관리의 밀도에서 결정됩니다.</p>

            {/* Paragraph 10 */}
            <p className="mt-6">클라이언트의 성장이 곧 위드원마케팅의 성장입니다.</p>

            {/* Paragraph 11 */}
            <div className="mt-6 space-y-1">
              <p>그래서 저희는 영업으로 계약을 유지하지 않습니다.</p>
              <p>성과로 신뢰를 만들고, 신뢰로 함께 성장합니다.</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 text-center sm:text-right">
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              위드원마케팅 대표
            </p>
          </div>
        </div>

        {/* Solutions to Pain Points (1:1 밀착, 수량 제한, 실시간 수치 체크) */}
        <div className="mt-16">
          <h3 className="text-lg sm:text-xl font-bold text-slate-200 text-center mb-8">
            [페인포인트 해결책] 위드원마케팅의 3가지 핵심 집행 원칙
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((sol, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 font-bold text-sm flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-white">{sol.title}</h4>
                  <div className="text-xs font-semibold text-blue-400 mt-1 mb-3">
                    {sol.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {sol.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Detail Core Strengths Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {detailCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/60 rounded-2xl p-6 border border-slate-800/80 hover:bg-slate-900 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
                  <IconComp className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{card.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Low-barrier CTA Button */}
        <div className="mt-14 text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/30 active:scale-95 transition-all cursor-pointer"
          >
            <span>대표 1:1 밀착 무료 진단 신청하기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
