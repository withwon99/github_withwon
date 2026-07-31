import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import { FaqItem } from '../types';

interface FaqSectionProps {
  onOpenConsultationModal?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenConsultationModal }) => {
  const [openId, setOpenId] = useState<number | null>(1); // Open Q1 by default

  const faqList: FaqItem[] = [
    {
      id: 1,
      question: 'Q. 광고 계약 기간은 얼마나 되며, 의무 계약 기간이 있나요?',
      answer:
        '별도의 의무 계약 기간은 없습니다.\n위드원마케팅은 광고주분들을 장기간 계약으로 묶어두는 방식이 아닌,\n성과와 만족도를 기반으로 함께하는 것을 원칙으로 합니다.\n\n일반적인 광고 운영은 별도의 계약 기간 없이 진행되며,\n광고주분께서 필요에 따라 자유롭게 운영 여부를 결정하실 수 있습니다.\n\n불필요한 계약 부담 없이, 투명한 운영과 지속적인 성과 관리로\n신뢰받는 파트너가 되겠습니다.',
    },
    {
      id: 2,
      question: 'Q. 월 광고 예산은 최소 얼마부터 집행이 가능한가요?',
      answer:
        '월 광고 예산 300만 원 미만의 소액 예산부터 5,000만 원 이상의 스케일업 단계 브랜드까지 모두 가능합니다.\n\n중요한 것은 예산의 절대 액수가 아니라, 주어진 예산 안에서 "버려지는 광고비"를 컷트하고 고효율 핵심 세부 키워드와 고관여 타겟 퍼널에 집중하는 전략적 설계입니다.',
    },
    {
      id: 3,
      question: 'Q. 수치 보고 및 소통은 어떤 방식으로 이루어지나요?',
      answer:
        '주로 전화/메일/SNS(카톡)으로 대표 마케터가 1:1 실시간 소통을 진행합니다.\n단순 수치 나열식 보고서가 아니라,\n"금주 성과 원인 분석 + 차주 개선 실행안(A/B 테스트 소재)"을 담은 단도직입 실무 리포트를\n주간/월간 단위로 직관적으로 공유합니다.',
    },
    {
      id: 4,
      question: 'Q. 무료 진단을 신청하면 정확히 어떤 내용을 분석받게 되나요?',
      answer: (
        <span>
          현재 사용 중이신 네이버/구글/메타 등 광고 계정의 접근 권한을 공유해 주시거나
          <br />
          자사몰 주소를 주시면,
          <br />
          <br />
          대표가 직접 <span className="font-bold text-blue-600">5가지 핵심 요소</span>
          <br />
          <span className="font-bold text-blue-600">
            (부정클릭 누수 여부, 고관여 키워드 효율, 소재 CVR, 퍼널 이탈 지점, 매체 Mix)
          </span>
          를<br />
          정밀 체크하여 무상 진단 보고서를 드리며,
          <br />
          <br />
          어떤 식으로 성과를 개선하면 좋을지에 대해 피드백을 드립니다.
        </span>
      ),
    },
    {
      id: 5,
      question: 'Q. 광고 성과가 좋지 않으면 어떻게 대응하시나요?',
      answer: (
        <span>
          성과가 기대에 미치지 않는다면 단순히 예산을 늘리거나 그대로 유지하지 않습니다.
          <br />
          <br />
          데이터를 기반으로 원인을 분석한 후
          <br />
          키워드, 광고 소재, 타겟팅, 입찰 전략을 개선하며,
          <br />
          필요 시 랜딩페이지까지 함께 점검하여 성과 개선 방향을 제안드립니다.
        </span>
      ),
    },
    {
      id: 6,
      question: 'Q. 광고비 외에 추가 비용이 발생하나요?',
      answer: (
        <span>
          광고비와 대행비는 명확하게 구분하여 안내드리며,
          <br />
          사전에 협의되지 않은 추가 비용은 발생하지 않습니다.
          <br />
          <br />
          다만, 바이럴 마케팅이나 콘텐츠 제작 등
          <br />
          별도의 업무가 필요한 경우에는 진행 전 비용과 범위를 충분히 안내드린 후 진행합니다.
        </span>
      ),
    },
  ];

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

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
    <section id="faq" className="py-20 sm:py-28 bg-slate-50 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>자주 묻는 질문 (FAQ)</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            궁금하신 사항을 명확히 확인하세요
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            대행사 선정 시 광고주분들이 가장 자주 질문하시는 궁금증 6가지를 정리했습니다.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-4">
          {faqList.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border transition-all ${
                  item.isImportant
                    ? 'border-blue-300 shadow-md ring-1 ring-blue-500/20'
                    : 'border-slate-200 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    {item.isImportant && (
                      <span className="px-2.5 py-1 rounded bg-blue-600 text-white text-[11px] font-extrabold flex-shrink-0">
                        핵심 차별점
                      </span>
                    )}
                    <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 whitespace-pre-line">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card inside FAQ */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-slate-900">
              더 궁금한 점이나 내 브랜드 맞춤 질문이 있으신가요?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              대표가 직접 24시간 내 친절하게 답변해 드립니다.
            </p>
          </div>
          <button
            onClick={scrollToContact}
            className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <span>대표 1:1 직통 질문하기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
