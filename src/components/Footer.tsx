import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenPrivacyModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyModal }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs sm:text-sm py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          {/* Left Brand Slogan */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <img
                src="/logo.svg"
                alt="위드원마케팅"
                referrerPolicy="no-referrer"
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </div>

            <p className="text-slate-300 font-medium text-xs sm:text-sm max-w-md leading-relaxed">
              "영업따로, 운영따로인 대행사에 지치셨나요?" <br />
              위드원마케팅은 10년 차 대표가 영업부터 전략, 세팅, 운영까지 1:1로 직접 관리하여 자사몰 매출 전환을 끌어올립니다.
            </p>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>동시 무차별 다수 계약 금지 (소수 정예 1:1 밀착 관리)</span>
            </div>
          </div>

          {/* Right Sitemap Links */}
          <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                서비스
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    검색광고 (SA)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    디스플레이 (DA)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    바이럴 & 퍼널 최적화
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                회사 정보
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    onClick={() => scrollToSection('why-us')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    왜 위드원인가
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('performance')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    실제 성과 사례
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('process')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    진행 프로세스
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                고객 지원
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    onClick={() => scrollToSection('faq')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    자주 묻는 질문
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="hover:text-white transition-colors cursor-pointer text-blue-400 font-bold"
                  >
                    무료 진단 신청
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal & Business Info */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="space-y-1">
            <p>
              <strong className="text-slate-400">상호명:</strong> 위드원마케팅 (WITH-WON Marketing) | <strong className="text-slate-400">대표자:</strong> 조원희 | <strong className="text-slate-400">사업자등록번호:</strong> 163-61-00845
            </p>
            <p>
              <strong className="text-slate-400">주소:</strong> 인천광역시 연수구 인천타워대로 323, 에이동 10층 1010-121호(송도동, 송도 센트로드) | <strong className="text-slate-400">이메일:</strong> withwon@with-won.co.kr
            </p>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <button
              type="button"
              onClick={onOpenPrivacyModal}
              className="hover:text-slate-300 underline underline-offset-2 cursor-pointer font-semibold text-slate-300"
            >
              개인정보처리방침
            </button>
          </div>
        </div>

        <div className="mt-6 text-[10px] text-slate-600 text-center sm:text-left">
          © {new Date().getFullYear()} WITH-WON Marketing. All rights reserved. 본 웹사이트의 성과 수치는 클라이언트 동의하에 집행된 실제 데이터를 기반으로 작성되었습니다.
        </div>
      </div>
    </footer>
  );
};
