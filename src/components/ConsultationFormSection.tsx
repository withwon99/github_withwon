import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Lock, Clock, Sparkles, AlertCircle } from 'lucide-react';
import { ConsultationFormData } from '../types';

export const ConsultationFormSection: React.FC = () => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    website: '',
    budget: '',
    requirements: '',
    agreedToTerms: true,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<Record<keyof ConsultationFormData, string>> = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = '회사명(브랜드명)을 입력해 주세요.';
    }
    if (!formData.contactName.trim()) {
      newErrors.contactName = '담당자 성함을 입력해 주세요.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = '연락처를 입력해 주세요.';
    } else if (!/^[0-9\-\s]{9,15}$/.test(formData.phone.trim())) {
      newErrors.phone = '올바른 전화번호 형식으로 입력해 주세요.';
    }
    if (!formData.email.trim()) {
      newErrors.email = '이메일 주소를 입력해 주세요.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = '올바른 이메일 형식으로 입력해 주세요.';
    }
    if (!formData.budget.trim()) {
      newErrors.budget = '희망 웹 광고 예산대를 입력해 주세요.';
    }
    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = '개인정보 수집 및 이용에 동의해 주셔야 합니다.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
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
          _subject: `[1:1 무료 진단 신청] ${formData.companyName} (${formData.contactName}님)`,
          '회사명/브랜드명': formData.companyName,
          '담당자 성함': formData.contactName,
          '연락처': formData.phone,
          '이메일 주소': formData.email,
          '홈페이지/스토어 주소': formData.website || '미입력',
          '희망 웹 광고 예산대': formData.budget,
          '현재 고민 및 요청사항': formData.requirements || '미입력',
          '개인정보 수집 및 이용 동의': formData.agreedToTerms ? '동의함' : '미동의',
          companyName: formData.companyName,
          contactName: formData.contactName,
          phone: formData.phone,
          email: formData.email,
          website: formData.website,
          budget: formData.budget,
          requirements: formData.requirements,
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
      } else {
        throw new Error('Formspree submission failed');
      }
    } catch (error) {
      console.error('제출 오류:', error);
      alert('상담 신청 접수 중 일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주시거나 withone99@naver.com 으로 문의해 주세요.');
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error for field
    if (errors[name as keyof ConsultationFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Text & Pricing Notice */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>10년 차 대표 1:1 직접 진단 & 상담</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              매출을 바꾸는 첫 걸음, <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                1:1 무료 진단
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              영업 사원과의 유선 상담이 아닙니다. 현재 운용 중인 광고 계정과 브랜드의 구매 퍼널 문제점을 10년 차 대표 마케터가 직접 분석하여 개별 진단서로 답변드립니다.
            </p>

            {/* UNIFIED PRICE & PROMOTION NOTICE REQUIREMENT */}
            <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wide">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>가격 및 맞춤 견적 정책 안내</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                위드원마케팅은 획일적인 정찰제 패키지 상품을 판매하지 않습니다. <br />
                <strong className="text-white font-semibold">
                  무료 계정 진단 후 브랜드의 현재 단계와 희망 월 예산에 맞춘 1:1 개별 맞춤견적
                </strong>
                을 유연하게 제안해 드립니다.
              </p>
              <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>• 소수 정예 1:1 밀착 책임 관리</span>
                <span className="text-emerald-400 font-bold">● 신청 접수 가능</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>현재 계정의 부정클릭 및 광고비 누수 지점 정밀 분석</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>경쟁사 대비 고효율 세부 키워드 & 미선점 매체 발굴</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>24시간 이내 대표가 직접 전화 또는 이메일 피드백</span>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-100">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  무료 진단 신청이 정상 완료되었습니다!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  작성해 주신 정보는 <strong className="text-slate-900 font-bold">10년 차 대표 마케터가 직접 검토</strong>한 후, 24시간 내 유선 또는 작성하신 이메일로 분석 진단 리포트를 안내드리겠습니다.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        companyName: '',
                        contactName: '',
                        phone: '',
                        email: '',
                        website: '',
                        budget: '300만원 ~ 500만원',
                        requirements: '',
                        agreedToTerms: true,
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    새로운 상담 작성하기
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="text-xl font-extrabold text-slate-900">
                    1:1 무료 진단 신청하기
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    아래 항목을 작성해 주시면 빠른 진단이 진행됩니다. (* 표시는 필수)
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      회사명 / 브랜드명 <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="예: 위드원 스토어"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none transition-colors ${
                        errors.companyName
                          ? 'border-rose-500 focus:border-rose-500 bg-rose-50/30'
                          : 'border-slate-300 focus:border-blue-600'
                      }`}
                    />
                    {errors.companyName && (
                      <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1 font-semibold">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.companyName}</span>
                      </p>
                    )}
                  </div>

                  {/* Contact Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      담당자 성함 <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      placeholder="예: 홍길동 팀장"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none transition-colors ${
                        errors.contactName
                          ? 'border-rose-500 focus:border-rose-500 bg-rose-50/30'
                          : 'border-slate-300 focus:border-blue-600'
                      }`}
                    />
                    {errors.contactName && (
                      <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1 font-semibold">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.contactName}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      연락처 <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="010-0000-0000"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none transition-colors ${
                        errors.phone
                          ? 'border-rose-500 focus:border-rose-500 bg-rose-50/30'
                          : 'border-slate-300 focus:border-blue-600'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1 font-semibold">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      이메일 주소 <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="example@brand.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-rose-500 focus:border-rose-500 bg-rose-50/30'
                          : 'border-slate-300 focus:border-blue-600'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1 font-semibold">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Website URL (Optional) */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    홈페이지 또는 스토어 주소 <span className="text-slate-400 font-normal">(선택)</span>
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://smartstore.naver.com/..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:border-blue-600 focus:outline-none"
                  />
                </div>

                {/* Hope Budget Input */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    희망 웹 광고 예산대 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="예: 100만원"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none transition-colors ${
                      errors.budget
                        ? 'border-rose-500 focus:border-rose-500 bg-rose-50/30'
                        : 'border-slate-300 focus:border-blue-600'
                    }`}
                  />
                  {errors.budget && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1 font-semibold">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.budget}</span>
                    </p>
                  )}
                </div>

                {/* Requirements Textarea */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    현재 고민 및 요청사항 <span className="text-slate-400 font-normal">(선택)</span>
                  </label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="예: 기존 대행사 ROAS가 150%에서 정체 중입니다. 타겟팅 및 상세페이지 퍼널 문제점 진단을 원합니다."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:border-blue-600 focus:outline-none resize-none"
                  />
                </div>

                {/* Terms Agreement Checkbox */}
                <div>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreedToTerms"
                      checked={formData.agreedToTerms}
                      onChange={handleInputChange}
                      className="mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-xs text-slate-600">
                      개인정보 수집 및 이용 동의 (상담 및 진단 리포트 안내 목적){' '}
                      <span className="text-rose-500 font-bold">*</span>
                    </span>
                  </label>
                  {errors.agreedToTerms && (
                    <p className="text-[11px] text-rose-600 mt-1 font-semibold">
                      {errors.agreedToTerms}
                    </p>
                  )}
                </div>

                {/* Submit Button & Trust Notice */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl shadow-blue-600/30 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>진단서 생성 중...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>지금 신청하기</span>
                      </>
                    )}
                  </button>

                  <div className="mt-3 text-center flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Lock className="w-3.5 h-3.5 text-blue-600" />
                    <span>제출하신 정보는 24시간 내 대표가 직접 확인 후 연락드립니다.</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
