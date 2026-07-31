import React, { useState } from 'react';
import { X, Send, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';

interface FreeDiagnosisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeDiagnosisModal: React.FC<FreeDiagnosisModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    budget: '',
    requirements: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.companyName.trim()) newErrors.companyName = '회사명/브랜드명을 입력해주세요.';
    if (!formData.contactName.trim()) newErrors.contactName = '담당자 성함을 입력해주세요.';
    if (!formData.phone.trim()) newErrors.phone = '연락처를 입력해주세요.';
    if (!formData.email.trim()) newErrors.email = '이메일을 입력해주세요.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xwvgjbzn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `[퀵 무료 진단 리포트 신청] ${formData.companyName} (${formData.contactName}님)`,
          '회사명/브랜드명': formData.companyName,
          '담당자 성함': formData.contactName,
          '연락처': formData.phone,
          '이메일 주소': formData.email,
          '희망 웹 광고 예산대': formData.budget || '미입력',
          '주요 고민 내용': formData.requirements || '미입력',
          companyName: formData.companyName,
          contactName: formData.contactName,
          phone: formData.phone,
          email: formData.email,
          budget: formData.budget,
          requirements: formData.requirements,
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSuccess(true);
      } else {
        throw new Error('Formspree submission failed');
      }
    } catch (error) {
      console.error('제출 오류:', error);
      alert('신청 접수 중 일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주시거나 withone99@naver.com 으로 문의해 주세요.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              무료 진단 신청이 완료되었습니다!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              24시간 이내 10년 차 대표가 직접 확인 후 안내드리겠습니다.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              확인
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 text-[11px] font-bold mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>10년 차 대표 1:1 무상 진단</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                무료 진단 리포트 신청
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                계정 진단 및 성과 개선안을 대표가 직접 작성해 전달해 드립니다.
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                회사명 / 브랜드명 <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => {
                  setFormData({ ...formData, companyName: e.target.value });
                  if (errors.companyName) setErrors({ ...errors, companyName: '' });
                }}
                placeholder="예: 위드원 스토어"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:border-blue-600 focus:outline-none"
              />
              {errors.companyName && (
                <p className="text-[11px] text-rose-500 mt-0.5">{errors.companyName}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  담당자 성함 <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.contactName}
                  onChange={(e) => {
                    setFormData({ ...formData, contactName: e.target.value });
                    if (errors.contactName) setErrors({ ...errors, contactName: '' });
                  }}
                  placeholder="홍길동"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:border-blue-600 focus:outline-none"
                />
                {errors.contactName && (
                  <p className="text-[11px] text-rose-500 mt-0.5">{errors.contactName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  연락처 <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: '' });
                  }}
                  placeholder="010-0000-0000"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:border-blue-600 focus:outline-none"
                />
                {errors.phone && (
                  <p className="text-[11px] text-rose-500 mt-0.5">{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                이메일 주소 <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
                placeholder="example@brand.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:border-blue-600 focus:outline-none"
              />
              {errors.email && (
                <p className="text-[11px] text-rose-500 mt-0.5">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                희망 웹 광고 예산대
              </label>
              <input
                type="text"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                placeholder="예: 100만원"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                주요 고민 내용 <span className="text-slate-400 font-normal">(선택)</span>
              </label>
              <textarea
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                rows={2}
                placeholder="간략히 작성해 주시면 더 정확한 진단이 가능합니다."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:border-blue-600 focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <span>신청 접수 중...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>무료 진단 리포트 신청하기</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
