import React from 'react';
import { MessageSquareWarning, AlertTriangle, ArrowRight, UserX, RefreshCw, FileQuestion, DollarSign, Clock, ZapOff } from 'lucide-react';

interface PainPointSectionProps {
  onOpenConsultationModal?: () => void;
}

export const PainPointSection: React.FC<PainPointSectionProps> = ({ onOpenConsultationModal }) => {
  const painPoints = [
    {
      icon: UserX,
      quote: "“영업 미팅엔 대표가 직접 나와서 설명하더니, 계약 다음 날부터는 신입 마케터가 배정돼 제 계정을 관리하더군요.”",
      subtitle: "영업자와 실제 운영 담당자가 다름",
      description: "대다수 대행사는 계약을 따내는 영업 인력과 실제 세팅/운영을 담당하는 신입 인력이 완전히 분리되어 있어, 광고주의 소중한 예산이 실험 대상이 되곤 합니다.",
    },
    {
      icon: RefreshCw,
      quote: "“담당자가 2~3개월마다 퇴사해서 바뀌어요. 그때마다 우리 브랜드 이야기를 처음부터 다시 설명해야 합니다.”",
      subtitle: "잦은 퇴사와 담당자 교체로 인한 맥락 단절",
      description: "신입 마케터의 높은 퇴사율 때문에 전략의 연속성이 깨지고, 계정이 몇 달간 세팅 그대로 방치되는 일이 비일비재합니다.",
    },
    {
      icon: FileQuestion,
      quote: "“광고비는 매일 나가는데 대행사에서는 신경을 안 써주는 것 같아요. 광고비가 새고 있는지, 잘 되고 있는지 형식적인 보고서조차 제대로 주지 않아요.”",
      subtitle: "브랜드(계정) 방치와 성과 분석의 부재",
      description: "ROAS나 노출수만 나열된 구색 맞추기식 보고서로는 어디서 예산이 새고 있는지, 무엇을 개선해야 하는지 도무지 알 수 없습니다.",
    },
    {
      icon: DollarSign,
      quote: "“광고 클릭은 계속 발생하는데, 정작 전환(구매·문의)은 일어나지 않아요.”",
      subtitle: "매출 전환과 무관한 '겉보기용' 마케팅",
      description: "클릭수만 끌어올리는 예쁜 이미지 소재만 돌리고, 고관여 타겟팅과 자사몰 구매 전환 퍼널 설계는 외면한 채 광고비 누수가 지속됩니다.",
    },
    {
      icon: Clock,
      quote: "“대행 전엔 매주 보고하겠다더니, 대행 후엔 카톡 답장도 며칠씩 걸려요.”",
      subtitle: "초반 영업 태도와 실제 운영 태도의 괴리",
      description: "대행을 따내기 위한 약속과 실제 사후 관리 사이의 간극이 커서, 광고주는 캠페인 진행 상황을 제때 파악하기 어렵습니다.",
    },
    {
      icon: ZapOff,
      quote: "“매체 정책이 바뀐 지 한참 지나서야 우리 대행사가 뒤늦게 알아차려요.”",
      subtitle: "트렌드/정책 대응 속도 문제",
      description: "여러 계정을 동시에 관리하다 보니 매체별 정책 변화나 신규 기능을 실시간으로 따라가지 못해, 대응이 늦어지고 그 손해는 고스란히 광고주 몫이 됩니다.",
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
    <section id="pain-points" className="py-20 sm:py-28 bg-slate-50 text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subheader Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs sm:text-sm font-semibold mb-4">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            <span>대행사 계약 후 가장 많이 겪는 눈먼 광고비 누수</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            "광고 대행사에 맡겼는데... <br className="hidden sm:inline" />
            <span className="text-rose-600 underline decoration-rose-300 underline-offset-8">
              혹시 이런 답답한 경험 있으신가요?
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            성과는 제자리, 담당자만 계속 바뀌는 악순환. 혹시 우리 얘기 같지 않으신가요?
          </p>
        </div>

        {/* Quotes Cards Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {painPoints.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-rose-50 text-rose-600 font-bold text-xs sm:text-sm">
                      0{index + 1}
                    </span>
                    <IconComponent className="w-5 h-5 text-slate-400" />
                  </div>

                  {/* Speech Quote */}
                  <blockquote className="text-slate-900 font-bold text-xs sm:text-sm leading-snug sm:leading-relaxed bg-slate-50 p-3.5 rounded-xl border-l-4 border-rose-500 mb-3">
                    {item.quote}
                  </blockquote>

                  <h3 className="text-xs sm:text-sm font-bold text-rose-600 mb-1">
                    {item.subtitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Low-barrier CTA Banner at bottom of Pain Points */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex w-12 h-12 rounded-xl bg-blue-600/30 border border-blue-400/30 items-center justify-center text-blue-400 flex-shrink-0">
              <MessageSquareWarning className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">
                내 브랜드를 괴롭히던 마케팅 문제, 더 이상 방치하지 마세요.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                10년 차 대표 마케터가 현재 계정 상태와 광고비 누수 지점을 직접 진단해 드립니다.
              </p>
            </div>
          </div>

          <button
            onClick={scrollToContact}
            className="w-full md:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-slate-900 bg-white hover:bg-slate-100 shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap flex-shrink-0"
          >
            <span>무료 진단 리포트 신청</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </button>
        </div>
      </div>
    </section>
  );
};
