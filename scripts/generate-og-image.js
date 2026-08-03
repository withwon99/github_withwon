import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resvg } from '@resvg/resvg-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.resolve(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const fontPaths = [
  '/tmp/Pretendard-Black.otf',
  '/tmp/Pretendard-Bold.otf',
  '/tmp/Pretendard-Medium.otf',
].filter((p) => fs.existsSync(p));

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020718" />
      <stop offset="50%" stop-color="#061233" />
      <stop offset="100%" stop-color="#091b48" />
    </linearGradient>
    <linearGradient id="arrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0055ff" stop-opacity="0.2" />
      <stop offset="50%" stop-color="#0088ff" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#2bc5ff" stop-opacity="1" />
    </linearGradient>
    <linearGradient id="barGrad1" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#0a2558" />
      <stop offset="100%" stop-color="#007aff" />
    </linearGradient>
    <linearGradient id="barGrad2" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#0a2558" />
      <stop offset="100%" stop-color="#2bc5ff" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="18" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(43, 197, 255, 0.07)" stroke-width="1" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)" />
  <rect width="1200" height="630" fill="url(#grid)" />

  <!-- Ambient Glows -->
  <circle cx="950" cy="280" r="280" fill="#0066ff" opacity="0.18" filter="url(#softGlow)" />
  <circle cx="1100" cy="100" r="150" fill="#00d8ff" opacity="0.22" filter="url(#softGlow)" />

  <!-- LEFT SECTION -->
  <!-- Logo -->
  <g transform="translate(80, 70)">
    <!-- W Arrow Icon -->
    <g transform="translate(0, 0)">
      <!-- Left W chevron -->
      <path d="M 0 8 L 12 36 L 24 16 L 36 36 L 48 8" fill="none" stroke="#007aff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M 8 10 L 18 34 L 28 16 L 38 34 L 48 10" fill="none" stroke="#2bc5ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <!-- Arrow Up right -->
      <path d="M 48 24 L 56 6 L 38 14" fill="none" stroke="#2bc5ff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
    </g>
    <!-- Brand Name -->
    <text x="72" y="24" font-family="Pretendard, sans-serif" font-weight="900" font-size="28" fill="#2bc5ff" letter-spacing="-0.5">WITH-WON</text>
    <text x="73" y="44" font-family="Pretendard, sans-serif" font-weight="700" font-size="16" fill="#007aff" letter-spacing="0.5">Marketing</text>
  </g>

  <!-- Main Title -->
  <text x="80" y="220" font-family="Pretendard, sans-serif" font-weight="900" font-size="76" fill="#ffffff" letter-spacing="-2">위드원마케팅</text>

  <!-- Subtitle -->
  <text x="80" y="295" font-family="Pretendard, sans-serif" font-weight="800" font-size="30" letter-spacing="-0.5">
    <tspan fill="#ffffff">10년차 대표가 </tspan>
    <tspan fill="#ff2e2e">직접 </tspan>
    <tspan fill="#ffffff">관리하는 </tspan>
    <tspan fill="#1e90ff">퍼포먼스 마케팅</tspan>
  </text>

  <!-- Accent Divider -->
  <rect x="80" y="340" width="68" height="4" rx="2" fill="#007aff" />

  <!-- Services List -->
  <g transform="translate(80, 400)">
    <text x="0" y="0" font-family="Pretendard, sans-serif" font-weight="800" font-size="24" fill="#0096ff" letter-spacing="2">SEARCH ADS</text>
    <text x="0" y="42" font-family="Pretendard, sans-serif" font-weight="800" font-size="24" fill="#ffffff" letter-spacing="2">DISPLAY ADS</text>
    <text x="0" y="84" font-family="Pretendard, sans-serif" font-weight="800" font-size="24" fill="#ffffff" letter-spacing="2">OFFLINE ADS</text>
    <text x="0" y="126" font-family="Pretendard, sans-serif" font-weight="800" font-size="24" fill="#0096ff" letter-spacing="2">VIRAL MARKETING</text>
    <text x="0" y="168" font-family="Pretendard, sans-serif" font-weight="700" font-size="24" fill="#4d6d9a" letter-spacing="4">.......</text>
  </g>

  <!-- RIGHT SECTION (DASHBOARD ANALYTICS) -->
  <g transform="translate(560, 65)">
    <!-- CARD 1: PERFORMANCE OVERVIEW -->
    <rect x="0" y="0" width="560" height="155" rx="18" fill="rgba(10, 24, 58, 0.78)" stroke="rgba(43, 197, 255, 0.32)" stroke-width="1.5" />
    <text x="28" y="34" font-family="Pretendard, sans-serif" font-weight="700" font-size="12" fill="#7594bc" letter-spacing="1">PERFORMANCE OVERVIEW</text>
    
    <!-- STAT 1: REVENUE -->
    <g transform="translate(28, 58)">
      <text x="0" y="0" font-family="Pretendard, sans-serif" font-weight="600" font-size="12" fill="#8aaad4">REVENUE</text>
      <text x="0" y="26" font-family="Pretendard, sans-serif" font-weight="800" font-size="22" fill="#ffffff">₩2,450,000,000</text>
      <text x="0" y="46" font-family="Pretendard, sans-serif" font-weight="700" font-size="12" fill="#00e5a0">▲ 32.4%</text>
    </g>

    <!-- STAT 2: ROAS -->
    <g transform="translate(210, 58)">
      <text x="0" y="0" font-family="Pretendard, sans-serif" font-weight="600" font-size="12" fill="#8aaad4">ROAS</text>
      <text x="0" y="26" font-family="Pretendard, sans-serif" font-weight="800" font-size="22" fill="#ffffff">612%</text>
      <text x="0" y="46" font-family="Pretendard, sans-serif" font-weight="700" font-size="12" fill="#2bc5ff">▲ 28.7%</text>
    </g>

    <!-- STAT 3: CONVERSION -->
    <g transform="translate(320, 58)">
      <text x="0" y="0" font-family="Pretendard, sans-serif" font-weight="600" font-size="12" fill="#8aaad4">CONVERSION</text>
      <text x="0" y="26" font-family="Pretendard, sans-serif" font-weight="800" font-size="22" fill="#ffffff">18,650</text>
      <text x="0" y="46" font-family="Pretendard, sans-serif" font-weight="700" font-size="12" fill="#2bc5ff">▲ 41.3%</text>
    </g>

    <!-- STAT 4: CPA -->
    <g transform="translate(450, 58)">
      <text x="0" y="0" font-family="Pretendard, sans-serif" font-weight="600" font-size="12" fill="#8aaad4">CPA</text>
      <text x="0" y="26" font-family="Pretendard, sans-serif" font-weight="800" font-size="22" fill="#ffffff">₩ 8,250</text>
      <text x="0" y="46" font-family="Pretendard, sans-serif" font-weight="700" font-size="12" fill="#6ba3ff">▼ 12.0%</text>
    </g>

    <!-- CARD 2: CHANNEL PERFORMANCE -->
    <g transform="translate(0, 185)">
      <rect x="0" y="0" width="270" height="230" rx="18" fill="rgba(10, 24, 58, 0.78)" stroke="rgba(43, 197, 255, 0.28)" stroke-width="1.5" />
      <text x="24" y="32" font-family="Pretendard, sans-serif" font-weight="700" font-size="12" fill="#7594bc" letter-spacing="1">CHANNEL PERFORMANCE</text>

      <!-- Donut chart approximation -->
      <g transform="translate(75, 125)">
        <circle cx="0" cy="0" r="46" fill="none" stroke="#10214a" stroke-width="24" />
        <circle cx="0" cy="0" r="46" fill="none" stroke="#007aff" stroke-width="24" stroke-dasharray="120 170" stroke-dashoffset="0" />
        <circle cx="0" cy="0" r="46" fill="none" stroke="#2bc5ff" stroke-width="24" stroke-dasharray="80 210" stroke-dashoffset="-120" />
        <circle cx="0" cy="0" r="46" fill="none" stroke="#48cae4" stroke-width="24" stroke-dasharray="50 240" stroke-dashoffset="-200" />
        <circle cx="0" cy="0" r="46" fill="none" stroke="#00b4d8" stroke-width="24" stroke-dasharray="39 250" stroke-dashoffset="-250" />
      </g>

      <!-- Legend -->
      <g transform="translate(150, 70)">
        <!-- Search -->
        <circle cx="0" cy="8" r="4" fill="#007aff" />
        <text x="14" y="12" font-family="Pretendard, sans-serif" font-weight="600" font-size="12" fill="#ffffff">Search   42%</text>
        <!-- Meta -->
        <circle cx="0" cy="34" r="4" fill="#2bc5ff" />
        <text x="14" y="38" font-family="Pretendard, sans-serif" font-weight="600" font-size="12" fill="#ffffff">Meta     28%</text>
        <!-- Naver -->
        <circle cx="0" cy="60" r="4" fill="#48cae4" />
        <text x="14" y="64" font-family="Pretendard, sans-serif" font-weight="600" font-size="12" fill="#ffffff">Naver    17%</text>
        <!-- YouTube -->
        <circle cx="0" cy="86" r="4" fill="#00b4d8" />
        <text x="14" y="90" font-family="Pretendard, sans-serif" font-weight="600" font-size="12" fill="#ffffff">YouTube   9%</text>
        <!-- Etc -->
        <circle cx="0" cy="112" r="4" fill="#4a6a96" />
        <text x="14" y="116" font-family="Pretendard, sans-serif" font-weight="600" font-size="12" fill="#ffffff">Etc       4%</text>
      </g>
    </g>

    <!-- CARD 3: ROAS TREND & ASCENDING BARS -->
    <g transform="translate(290, 185)">
      <rect x="0" y="0" width="270" height="230" rx="18" fill="rgba(10, 24, 58, 0.78)" stroke="rgba(43, 197, 255, 0.28)" stroke-width="1.5" />
      <text x="24" y="32" font-family="Pretendard, sans-serif" font-weight="700" font-size="12" fill="#7594bc" letter-spacing="1">ROAS TREND</text>

      <!-- Bars -->
      <g transform="translate(30, 185)">
        <rect x="0" y="-35" width="16" height="35" rx="3" fill="url(#barGrad1)" />
        <rect x="26" y="-50" width="16" height="50" rx="3" fill="url(#barGrad1)" />
        <rect x="52" y="-70" width="16" height="70" rx="3" fill="url(#barGrad1)" />
        <rect x="78" y="-95" width="16" height="95" rx="3" fill="url(#barGrad1)" />
        <rect x="104" y="-115" width="16" height="115" rx="3" fill="url(#barGrad2)" />
        <rect x="130" y="-135" width="16" height="135" rx="3" fill="url(#barGrad2)" />
        <rect x="156" y="-155" width="16" height="155" rx="3" fill="url(#barGrad2)" />
        <rect x="182" y="-175" width="16" height="175" rx="3" fill="url(#barGrad2)" filter="url(#glow)" />
      </g>
    </g>
  </g>

  <!-- Big Glowing Neon Ascending Arrow across chart -->
  <g filter="url(#glow)">
    <path d="M 520 540 C 680 500, 840 380, 1090 90" fill="none" stroke="url(#arrowGrad)" stroke-width="8" stroke-linecap="round" />
    <path d="M 1060 85 L 1095 85 L 1095 120" fill="none" stroke="#2bc5ff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  </g>

  <!-- Glowing dots on arrow -->
  <circle cx="710" cy="455" r="5" fill="#2bc5ff" filter="url(#glow)" />
  <circle cx="880" cy="315" r="6" fill="#2bc5ff" filter="url(#glow)" />
  <circle cx="1090" cy="90" r="7" fill="#ffffff" filter="url(#glow)" />
</svg>`;

const resvg = new Resvg(svgContent, {
  font: {
    fontFiles: fontPaths,
    loadSystemFonts: true,
    defaultFontFamily: 'Pretendard',
  },
  fitTo: {
    mode: 'original',
  },
});

const pngData = resvg.render();
const pngBuffer = pngData.asPng();

const outPath = path.join(publicDir, 'og-image.png');
fs.writeFileSync(outPath, pngBuffer);

console.log(`Successfully generated OG image at: ${outPath} (${pngBuffer.length} bytes)`);
