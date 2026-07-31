import React from 'react';

export const PartnerMarqueeSection: React.FC = () => {
  const partners = [
    { name: 'Naver Search Ads', type: '네이버 검색광고 공식', logo: '/logos/naver.svg' },
    { name: 'Google Ads Partner', type: '구글 애즈 파트너', logo: '/logos/google.svg' },
    { name: 'Meta Business Partner', type: '메타(인스타그램/FB)', logo: '/logos/meta.svg' },
    { name: 'Kakao Moment', type: '카카오 모먼트 공식', logo: '/logos/kakao.svg' },
    { name: 'TikTok For Business', type: '틱톡 애즈 타겟팅', logo: '/logos/tiktok.svg' },
    { name: 'GA4 & GTM Triggers', type: '구글 애널리틱스 분석', logo: '/logos/google.svg' },
    { name: 'Criteo Retargeting', type: '크리테오 리타겟팅', logo: '/logos/criteo.svg' },
    { name: 'Naver Brand Search', type: '네이버 브랜드 검색', logo: '/logos/naver.svg' },
    { name: '당근마켓 Local Ads', type: '당근 지역 광고', logo: '/logos/karrot.svg' },
  ];

  return (
    <section className="py-12 bg-slate-900 text-white border-y border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          주요 공식 파트너 & 퍼포먼스 마케팅 매체 연동
        </p>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden flex">
        {/* Left & Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-4 items-center shrink-0">
          {[...partners, ...partners, ...partners].map((p, idx) => (
            <div
              key={idx}
              className="w-fit shrink-0 px-5 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-blue-500/50 transition-colors flex flex-col justify-center"
            >
              <div className="flex items-center gap-2">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-5 w-auto object-contain shrink-0"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="text-sm font-bold text-white whitespace-nowrap leading-tight">
                  {p.name}
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-slate-400 mt-1 block whitespace-nowrap">
                {p.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

