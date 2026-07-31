import React from 'react';
import { X, Shield } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-200 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">개인정보처리방침</h2>
              <p className="text-xs text-slate-500">위드원마케팅 (WITH-WON Marketing)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto py-6 pr-2 text-slate-700 text-sm leading-relaxed space-y-6">
          <p className="text-slate-600 leading-relaxed">
            위드원마케팅(WITH-WON Marketing)(이하 &quot;회사&quot;)은 「개인정보 보호법」 등 관련 법령을 준수하며, 이용자의 개인정보를 안전하게 보호하기 위해 다음과 같이 개인정보처리방침을 수립·공개합니다.
          </p>

          {/* 제1조 */}
          <div className="space-y-3 pt-2">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
              제1조 (수집하는 개인정보 항목 및 수집 방법)
            </h3>
            <p className="text-slate-600">
              회사는 홈페이지 내 &quot;1:1 무료 진단 신청&quot; 등 상담 신청 서비스 제공을 위해 아래와 같은 개인정보를 수집합니다.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-100 text-xs sm:text-sm">
              <p className="font-semibold text-slate-800">1. 수집 항목</p>
              <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
                <li><strong className="text-slate-700">필수항목:</strong> 회사명/브랜드명, 담당자 성함, 연락처, 이메일 주소</li>
                <li><strong className="text-slate-700">선택항목:</strong> 홈페이지 또는 스토어 주소, 희망 광고 예산대, 현재 고민 및 요청사항</li>
              </ul>
              <p className="font-semibold text-slate-800 pt-2">2. 수집 방법</p>
              <p className="text-slate-600 pl-1">홈페이지 내 상담 신청 폼을 통한 이용자의 직접 입력</p>
            </div>
          </div>

          {/* 제2조 */}
          <div className="space-y-3 pt-2">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
              제2조 (개인정보의 수집 및 이용 목적)
            </h3>
            <p className="text-slate-600">
              회사는 수집한 개인정보를 다음의 목적을 위해 이용합니다.
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs sm:text-sm">
              <li>무료 마케팅 진단 및 견적 상담 제공</li>
              <li>상담 신청에 대한 확인 및 결과 안내</li>
              <li>서비스 관련 문의 응대 및 커뮤니케이션</li>
              <li>계약 체결 및 서비스 제공 (상담 후 계약 진행 시)</li>
            </ul>
            <p className="text-xs text-slate-500">
              수집한 개인정보는 명시한 목적 범위 내에서만 이용하며, 목적이 변경되는 경우 별도의 동의를 받습니다.
            </p>
          </div>

          {/* 제3조 */}
          <div className="space-y-3 pt-2">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
              제3조 (개인정보의 보유 및 이용 기간)
            </h3>
            <p className="text-slate-600">
              회사는 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
            </p>
            <p className="text-slate-600">
              단, 상담 신청 후 미계약으로 종료된 건에 대해서는 신청일로부터 1년간 보관 후 파기하며, 이용자가 삭제를 요청하는 경우 즉시 파기합니다.
            </p>
            <p className="text-slate-600">
              계약이 체결된 경우, 계약 및 세무 관련 법령(전자상거래법, 국세기본법 등)에 따라 아래와 같이 일정 기간 보관될 수 있습니다.
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs sm:text-sm">
              <li><strong className="text-slate-700">계약 또는 청약철회 등에 관한 기록:</strong> 5년 (전자상거래법)</li>
              <li><strong className="text-slate-700">대금결제 및 재화 등의 공급에 관한 기록:</strong> 5년 (전자상거래법)</li>
              <li><strong className="text-slate-700">소비자의 불만 또는 분쟁처리에 관한 기록:</strong> 3년 (전자상거래법)</li>
            </ul>
          </div>

          {/* 제4조 */}
          <div className="space-y-3 pt-2">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
              제4조 (개인정보의 제3자 제공)
            </h3>
            <p className="text-slate-600">
              회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만 아래의 경우는 예외로 합니다.
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs sm:text-sm">
              <li>이용자가 사전에 별도로 동의한 경우</li>
              <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
            </ul>
          </div>

          {/* 제5조 */}
          <div className="space-y-3 pt-2">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
              제5조 (개인정보 처리의 위탁)
            </h3>
            <p className="text-slate-600">
              회사는 원활한 서비스 제공을 위해 아래와 같이 개인정보 처리 업무를 위탁하고 있으며, 위탁계약 시 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정합니다.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 text-slate-800 font-bold">
                  <tr>
                    <th className="p-3 border-b border-r border-slate-200">수탁업체</th>
                    <th className="p-3 border-b border-slate-200">위탁업무 내용</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-3 border-r border-slate-200 font-medium">아임웹(imweb.me)</td>
                    <td className="p-3">홈페이지 호스팅 및 시스템 운영·유지보수</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 제6조 */}
          <div className="space-y-3 pt-2">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
              제6조 (이용자 및 법정대리인의 권리와 그 행사 방법)
            </h3>
            <p className="text-slate-600">
              이용자는 언제든지 아래의 권리를 행사할 수 있습니다.
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs sm:text-sm">
              <li>개인정보 열람 요구</li>
              <li>오류 등이 있을 경우 정정 요구</li>
              <li>삭제 요구</li>
              <li>처리정지 요구</li>
            </ul>
            <p className="text-slate-600">
              권리 행사는 아래 개인정보 보호책임자에게 서면, 이메일 등을 통하여 하실 수 있으며, 회사는 이에 대해 지체 없이 조치하겠습니다.
            </p>
          </div>

          {/* 제7조 */}
          <div className="space-y-3 pt-2">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
              제7조 (개인정보의 안전성 확보 조치)
            </h3>
            <p className="text-slate-600">
              회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs sm:text-sm">
              <li>개인정보에 대한 접근 권한을 최소한의 인원으로 제한</li>
              <li>개인정보 취급자의 개인정보 보호 의무 준수</li>
              <li>개인정보를 안전하게 저장·전송할 수 있는 기술적 조치 적용</li>
            </ul>
          </div>

          {/* 제8조 */}
          <div className="space-y-3 pt-2">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
              제8조 (개인정보 보호책임자)
            </h3>
            <p className="text-slate-600">
              회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl space-y-1 border border-slate-100 text-xs sm:text-sm">
              <p><strong className="text-slate-800">성명:</strong> 조원희</p>
              <p><strong className="text-slate-800">직책:</strong> 대표</p>
              <p><strong className="text-slate-800">이메일:</strong> withone99@naver.com</p>
            </div>
            <p className="text-xs text-slate-500">
              이용자는 회사의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다.
            </p>
          </div>

          {/* 제9조 */}
          <div className="space-y-3 pt-2">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
              제9조 (개인정보처리방침의 변경)
            </h3>
            <p className="text-slate-600">
              이 개인정보처리방침은 법령·정책 또는 보안기술의 변경에 따라 내용의 추가·삭제 및 수정이 있을 시에는 시행 최소 7일 전에 홈페이지 공지사항을 통하여 고지할 것입니다.
            </p>
            <div className="text-xs text-slate-500 pt-1 space-y-0.5">
              <p>공고일자: 2026년 8월 3일</p>
              <p>시행일자: 2026년 8월 3일</p>
            </div>
          </div>

          {/* 회사 정보 */}
          <div className="mt-8 pt-6 border-t border-slate-200 bg-slate-50 p-5 rounded-2xl space-y-1.5 text-xs sm:text-sm text-slate-700">
            <h4 className="font-bold text-slate-900 text-sm mb-2">회사 정보</h4>
            <p><strong className="text-slate-900">상호명:</strong> 위드원마케팅 (WITH-WON Marketing)</p>
            <p><strong className="text-slate-900">대표자:</strong> 조원희</p>
            <p><strong className="text-slate-900">사업자등록번호:</strong> 163-61-00845</p>
            <p><strong className="text-slate-900">주소:</strong> 인천광역시 연수구 인천타워대로 323, 에이동 10층 1010-121호(송도동, 송도 센트로드)</p>
            <p><strong className="text-slate-900">이메일:</strong> withone99@naver.com</p>
          </div>
        </div>

        {/* Footer Button */}
        <div className="pt-4 border-t border-slate-200 flex justify-end flex-shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};
