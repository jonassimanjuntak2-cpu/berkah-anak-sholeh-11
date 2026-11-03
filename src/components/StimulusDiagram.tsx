import React from 'react';

interface StimulusDiagramProps {
  diagramId?: string;
  title?: string;
  variables?: Record<string, number | string>;
}

export const StimulusDiagram: React.FC<StimulusDiagramProps> = ({
  diagramId,
  title,
  variables = {},
}) => {
  if (!diagramId) return null;

  return (
    <div className="my-4 bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex flex-col items-center">
      <div className="w-full max-w-lg flex justify-center py-2">
        {diagramId === 'gambar-1' && (
          <svg viewBox="0 0 400 200" className="w-full max-h-52">
            {/* Ground */}
            <line x1="40" y1="160" x2="360" y2="160" stroke="#64748b" strokeWidth="2" />
            {[...Array(16)].map((_, i) => (
              <line key={i} x1={50 + i * 20} y1="160" x2={40 + i * 20} y2="175" stroke="#94a3b8" strokeWidth="1.5" />
            ))}
            {/* Wooden Crate */}
            <rect x="150" y="90" width="100" height="70" fill="#d4a373" stroke="#8c5836" strokeWidth="2" rx="2" />
            <line x1="150" y1="90" x2="250" y2="160" stroke="#8c5836" strokeWidth="1" strokeDasharray="3,3" />
            <line x1="250" y1="90" x2="150" y2="160" stroke="#8c5836" strokeWidth="1" strokeDasharray="3,3" />
            <text x="200" y="130" textAnchor="middle" className="text-xs font-semibold fill-amber-950 font-sans">
              Peti Kayu
            </text>
            {/* Force F1 */}
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#0c2340" />
              </marker>
              <marker id="arrow-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#881337" />
              </marker>
            </defs>
            <line x1="160" y1="95" x2="80" y2="50" stroke="#0c2340" strokeWidth="2.5" markerEnd="url(#arrow)" />
            <text x="70" y="40" className="text-xs font-bold fill-slate-900 font-sans">
              F₁ = {variables.F1 ?? 25} N
            </text>
            {/* Force F2 */}
            <line x1="240" y1="95" x2="320" y2="50" stroke="#881337" strokeWidth="2.5" markerEnd="url(#arrow-red)" />
            <text x="315" y="40" className="text-xs font-bold fill-rose-900 font-sans">
              F₂ = {variables.F2 ?? 60} N
            </text>
            <text x="200" y="45" textAnchor="middle" className="text-[11px] fill-slate-500 italic">
              arah kedua tali dapat diubah bebas
            </text>
          </svg>
        )}

        {diagramId === 'gambar-2' && (
          <svg viewBox="0 0 450 200" className="w-full max-h-52">
            {/* River banks */}
            <rect x="20" y="20" width="370" height="150" fill="#e0f2fe" opacity="0.6" />
            <line x1="20" y1="20" x2="390" y2="20" stroke="#0369a1" strokeWidth="2.5" />
            <line x1="20" y1="170" x2="390" y2="170" stroke="#0369a1" strokeWidth="2.5" />
            <text x="30" y="15" className="text-[10px] font-semibold fill-slate-500 uppercase">Tepi seberang</text>
            <text x="30" y="185" className="text-[10px] font-semibold fill-slate-500 uppercase">Tepi berangkat</text>
            {/* River current arrows */}
            <line x1="180" y1="70" x2="260" y2="70" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="270" y="74" className="text-xs font-medium fill-sky-800">
              v arus = {variables.vCurrent ?? 6} m/s
            </text>
            <line x1="180" y1="110" x2="260" y2="110" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow)" />
            {/* Boat trajectory */}
            <line x1="90" y1="170" x2="90" y2="60" stroke="#0c2340" strokeWidth="2.5" markerEnd="url(#arrow)" />
            <text x="85" y="120" textAnchor="end" className="text-xs font-bold fill-slate-900">
              v perahu = {variables.vBoat ?? 8} m/s
            </text>
            {/* Actual resultant path */}
            <line x1="90" y1="170" x2="210" y2="20" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,4" />
            <text x="165" y="80" className="text-[11px] font-semibold fill-rose-700 italic -rotate-45">
              lintasan sebenarnya
            </text>
            {/* River width dimension */}
            <line x1="400" y1="20" x2="400" y2="170" stroke="#64748b" strokeWidth="1.5" />
            <line x1="395" y1="20" x2="405" y2="20" stroke="#64748b" strokeWidth="1.5" />
            <line x1="395" y1="170" x2="405" y2="170" stroke="#64748b" strokeWidth="1.5" />
            <text x="415" y="100" className="text-xs font-bold fill-slate-800">
              {variables.width ?? 160} m
            </text>
          </svg>
        )}

        {diagramId === 'gambar-3' && (
          <svg viewBox="0 0 360 300" className="w-full max-h-60 bg-slate-50 border border-slate-200 rounded-lg">
            {/* Coordinate Grid */}
            {[...Array(15)].map((_, i) => (
              <line key={`gx-${i}`} x1={i * 24} y1="0" x2={i * 24} y2="300" stroke="#e2e8f0" strokeWidth="1" />
            ))}
            {[...Array(13)].map((_, j) => (
              <line key={`gy-${j}`} x1="0" y1={j * 24} x2="360" y2={j * 24} stroke="#e2e8f0" strokeWidth="1" />
            ))}
            {/* Origin at (x: 120, y: 192) */}
            <line x1="120" y1="10" x2="120" y2="280" stroke="#475569" strokeWidth="1.5" />
            <line x1="20" y1="192" x2="340" y2="192" stroke="#475569" strokeWidth="1.5" />
            <text x="345" y="196" className="text-xs font-bold fill-slate-700">X</text>
            <text x="115" y="15" className="text-xs font-bold fill-slate-700">Y</text>
            {/* Vector F1: 8 N along +X */}
            <line x1="120" y1="192" x2="280" y2="192" stroke="#b45309" strokeWidth="3" markerEnd="url(#arrow)" />
            <text x="240" y="182" className="text-xs font-bold fill-amber-800">F₁ = 8 N</text>
            {/* Vector F2: 6 N along +Y */}
            <line x1="120" y1="192" x2="120" y2="72" stroke="#0369a1" strokeWidth="3" markerEnd="url(#arrow)" />
            <text x="128" y="85" className="text-xs font-bold fill-sky-800">F₂ = 6 N</text>
            {/* Vector F3: (-4, -3) */}
            <line x1="120" y1="192" x2="40" y2="252" stroke="#be123c" strokeWidth="3" markerEnd="url(#arrow-red)" />
            <text x="30" y="270" className="text-xs font-bold fill-rose-800">F₃ = (-4, -3) N</text>
          </svg>
        )}

        {diagramId === 'grafik-1' && (
          <svg viewBox="0 0 420 220" className="w-full max-h-56">
            {/* Axes */}
            <line x1="40" y1="180" x2="380" y2="180" stroke="#334155" strokeWidth="2" />
            <line x1="40" y1="20" x2="40" y2="180" stroke="#334155" strokeWidth="2" />
            <text x="385" y="184" className="text-xs font-semibold fill-slate-700">t (s)</text>
            <text x="35" y="15" className="text-xs font-semibold fill-slate-700">v (m/s)</text>
            {/* Grid markings */}
            <text x="30" y="184" textAnchor="end" className="text-[11px] fill-slate-500">0</text>
            <text x="30" y="110" textAnchor="end" className="text-[11px] fill-slate-500">15</text>
            <text x="30" y="45" textAnchor="end" className="text-[11px] fill-slate-500 font-bold">30</text>
            <line x1="35" y1="40" x2="40" y2="40" stroke="#334155" strokeWidth="1.5" />
            <line x1="40" y1="40" x2="340" y2="40" stroke="#cbd5e1" strokeDasharray="3,3" />

            <text x="115" y="196" textAnchor="middle" className="text-[11px] fill-slate-600 font-medium">10</text>
            <text x="260" y="196" textAnchor="middle" className="text-[11px] fill-slate-600 font-medium">35</text>
            <text x="340" y="196" textAnchor="middle" className="text-[11px] fill-slate-600 font-bold">45</text>

            <line x1="115" y1="180" x2="115" y2="40" stroke="#cbd5e1" strokeDasharray="3,3" />
            <line x1="260" y1="180" x2="260" y2="40" stroke="#cbd5e1" strokeDasharray="3,3" />

            {/* Trapezoid Plot */}
            <polygon points="40,180 115,40 260,40 340,180" fill="#3b82f6" fillOpacity="0.15" />
            <polyline points="40,180 115,40 260,40 340,180" fill="none" stroke="#1d4ed8" strokeWidth="3" />
            {/* Points */}
            <circle cx="115" cy="40" r="4" fill="#1d4ed8" />
            <circle cx="260" cy="40" r="4" fill="#1d4ed8" />
            <circle cx="340" cy="180" r="4" fill="#1d4ed8" />
          </svg>
        )}

        {diagramId === 'gambar-4' && (
          <svg viewBox="0 0 450 200" className="w-full max-h-52">
            {/* Ground */}
            <line x1="20" y1="170" x2="430" y2="170" stroke="#475569" strokeWidth="2" />
            {/* Fire Truck Nozzle */}
            <polygon points="40,170 80,170 70,140 45,140" fill="#dc2626" />
            <line x1="65" y1="140" x2="95" y2="115" stroke="#475569" strokeWidth="4" />
            <text x="50" y="185" className="text-[11px] font-semibold fill-slate-600">nosel</text>
            {/* Building */}
            <rect x="330" y="30" width="80" height="140" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
            <text x="370" y="20" textAnchor="middle" className="text-[11px] font-bold fill-slate-700">dinding gedung</text>
            {/* Parabolic stream of water */}
            <path
              d="M 95 115 Q 200 15 330 65"
              fill="none"
              stroke="#0284c7"
              strokeWidth="3.5"
              strokeDasharray="5,2"
            />
            {/* Initial velocity vector */}
            <line x1="95" y1="115" x2="145" y2="65" stroke="#0c2340" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="150" y="60" className="text-xs font-bold fill-slate-900">
              v₀ = {variables.v0 ?? 30} m/s
            </text>
            {/* Angle arc */}
            <path d="M 125 115 A 30 30 0 0 0 115 95" fill="none" stroke="#0c2340" strokeWidth="1.5" />
            <text x="130" y="105" className="text-[11px] font-bold fill-slate-800">53°</text>
            {/* Horizontal dimension 36 m */}
            <line x1="95" y1="180" x2="330" y2="180" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="95" y1="175" x2="95" y2="185" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="330" y1="175" x2="330" y2="185" stroke="#94a3b8" strokeWidth="1.5" />
            <text x="210" y="195" textAnchor="middle" className="text-xs font-bold fill-slate-700">
              {variables.xTarget ?? 36} m
            </text>
          </svg>
        )}

        {diagramId === 'gambar-5' && (
          <svg viewBox="0 0 450 180" className="w-full max-h-48">
            <line x1="20" y1="150" x2="430" y2="150" stroke="#475569" strokeWidth="2" />
            {/* 37 degree trajectory */}
            <path d="M 50 150 Q 200 60 350 150" fill="none" stroke="#ea580c" strokeWidth="2.5" />
            <text x="200" y="90" textAnchor="middle" className="text-xs font-bold fill-orange-700">37°</text>
            {/* 53 degree trajectory */}
            <path d="M 50 150 Q 200 10 350 150" fill="none" stroke="#0284c7" strokeWidth="2.5" />
            <text x="200" y="35" textAnchor="middle" className="text-xs font-bold fill-sky-800">53°</text>
            <circle cx="350" cy="150" r="4" fill="#047857" />
            <text x="350" y="170" textAnchor="middle" className="text-[11px] font-semibold fill-emerald-800">
              Jangkauan Jatuh Sama (Komplementer 90°)
            </text>
          </svg>
        )}

        {diagramId === 'gambar-6' && (
          <svg viewBox="0 0 450 190" className="w-full max-h-48">
            <line x1="20" y1="160" x2="430" y2="160" stroke="#475569" strokeWidth="2" />
            <text x="40" y="178" className="text-[11px] font-semibold fill-slate-500">permukaan tanah</text>
            {/* Plane symbol */}
            <rect x="70" y="30" width="50" height="15" rx="3" fill="#64748b" />
            <polygon points="120,38 140,38 120,30" fill="#64748b" />
            <polygon points="90,30 98,15 108,30" fill="#475569" />
            <line x1="140" y1="38" x2="200" y2="38" stroke="#0c2340" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="210" y="42" className="text-xs font-bold fill-slate-900">
              v = {variables.vx ?? 60} m/s
            </text>
            {/* Parabolic drop */}
            <path d="M 120 45 Q 220 50 320 160" fill="none" stroke="#e11d48" strokeWidth="2" strokeDasharray="4,4" />
            {/* Height dimension */}
            <line x1="30" y1="38" x2="30" y2="160" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="25" y1="38" x2="35" y2="38" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="25" y1="160" x2="35" y2="160" stroke="#94a3b8" strokeWidth="1.5" />
            <text x="40" y="105" className="text-xs font-bold fill-slate-800">
              h = {variables.height ?? 180} m
            </text>
          </svg>
        )}

        {diagramId === 'gambar-7' && (
          <svg viewBox="0 0 440 200" className="w-full max-h-52">
            {/* Front Gear */}
            <circle cx="120" cy="100" r="52" fill="#f1f5f9" stroke="#0c2340" strokeWidth="2" />
            <circle cx="120" cy="100" r="4" fill="#0c2340" />
            <line x1="120" y1="100" x2="172" y2="100" stroke="#c2410c" strokeWidth="1.5" />
            <text x="140" y="93" className="text-[11px] font-bold fill-orange-700">r₁ = {variables.rFront ?? 14} cm</text>
            <text x="120" y="38" textAnchor="middle" className="text-xs font-bold fill-slate-800">
              {variables.rpm ?? 60} rpm
            </text>

            {/* Rear Gear & Rear Wheel */}
            <circle cx="320" cy="100" r="80" fill="none" stroke="#64748b" strokeWidth="3" strokeDasharray="3,3" />
            <circle cx="320" cy="100" r="26" fill="#f1f5f9" stroke="#881337" strokeWidth="2" />
            <circle cx="320" cy="100" r="4" fill="#881337" />
            <text x="320" y="70" textAnchor="middle" className="text-[11px] font-bold fill-rose-800">
              r₂ = {variables.rRear ?? 7} cm
            </text>
            <line x1="320" y1="100" x2="400" y2="100" stroke="#0369a1" strokeWidth="1.5" />
            <text x="350" y="118" className="text-[11px] font-bold fill-sky-800">
              R = {variables.rWheel ?? 35} cm
            </text>

            {/* Chain */}
            <line x1="120" y1="48" x2="320" y2="74" stroke="#334155" strokeWidth="2.5" />
            <line x1="120" y1="152" x2="320" y2="126" stroke="#334155" strokeWidth="2.5" />
          </svg>
        )}

        {diagramId === 'gambar-8' && (
          <svg viewBox="0 0 300 220" className="w-full max-h-56">
            <circle cx="150" cy="120" r="70" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4,4" />
            <circle cx="150" cy="120" r="4" fill="#334155" />
            <text x="150" y="138" textAnchor="middle" className="text-[10px] fill-slate-500">poros putaran</text>
            {/* Radius line */}
            <line x1="150" y1="120" x2="150" y2="50" stroke="#0369a1" strokeWidth="2" />
            <text x="155" y="85" className="text-xs font-bold fill-sky-800">
              R = {variables.radius ?? 1.6} m
            </text>
            {/* Bucket at highest point */}
            <polygon points="135,35 165,35 160,50 140,50" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
            <line x1="150" y1="50" x2="150" y2="80" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrow-red)" />
            <text x="155" y="70" className="text-[10px] font-bold fill-rose-700">mg</text>
            <text x="150" y="25" textAnchor="middle" className="text-xs font-bold fill-slate-800">ember + air</text>
          </svg>
        )}

        {diagramId === 'gambar-9' && (
          <svg viewBox="0 0 360 200" className="w-full max-h-52">
            <polygon points="40,160 320,160 320,50" fill="#f8fafc" stroke="#475569" strokeWidth="2" />
            <path d="M 90 160 A 50 50 0 0 0 85 140" fill="none" stroke="#0c2340" strokeWidth="1.5" />
            <text x="100" y="152" className="text-xs font-bold fill-slate-800">37°</text>
            {/* Inclined Block */}
            <g transform="translate(180, 105) rotate(-22)">
              <rect x="-30" y="-20" width="60" height="40" fill="#fbbf24" stroke="#d97706" strokeWidth="2" rx="2" />
              <text x="0" y="5" textAnchor="middle" className="text-xs font-bold fill-amber-950 font-sans">
                m = {variables.mass ?? 8} kg
              </text>
            </g>
            <text x="290" y="80" className="text-[11px] font-medium fill-slate-600">
              μs = {variables.muS ?? 0.45}
            </text>
            <text x="290" y="96" className="text-[11px] font-medium fill-slate-600">
              μk = {variables.muK ?? 0.35}
            </text>
          </svg>
        )}

        {diagramId === 'gambar-10' && (
          <svg viewBox="0 0 400 200" className="w-full max-h-52">
            {/* Table */}
            <rect x="40" y="70" width="220" height="15" fill="#94a3b8" />
            <line x1="70" y1="85" x2="70" y2="180" stroke="#64748b" strokeWidth="3" />
            <line x1="230" y1="85" x2="230" y2="180" stroke="#64748b" strokeWidth="3" />
            {/* Block A */}
            <rect x="100" y="35" width="50" height="35" fill="#fde047" stroke="#ca8a04" strokeWidth="2" rx="2" />
            <text x="125" y="58" textAnchor="middle" className="text-xs font-bold fill-yellow-950">A ({variables.mA ?? 2} kg)</text>
            <text x="125" y="25" textAnchor="middle" className="text-[10px] fill-slate-500 font-semibold">
              μk = {variables.muK ?? 0.5}
            </text>
            {/* Pulley */}
            <circle cx="260" cy="70" r="14" fill="#cbd5e1" stroke="#334155" strokeWidth="2" />
            {/* Cord */}
            <line x1="150" y1="52" x2="260" y2="52" stroke="#1e293b" strokeWidth="2" />
            <line x1="274" y1="70" x2="274" y2="120" stroke="#1e293b" strokeWidth="2" />
            {/* Hanging Block B */}
            <rect x="254" y="120" width="40" height="40" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" rx="2" />
            <text x="274" y="145" textAnchor="middle" className="text-xs font-bold fill-blue-950">B ({variables.mB ?? 8} kg)</text>
          </svg>
        )}

        {diagramId === 'gambar-12' && (
          <svg viewBox="0 0 380 180" className="w-full max-h-48">
            <line x1="30" y1="140" x2="350" y2="140" stroke="#475569" strokeWidth="2" />
            {/* Block */}
            <rect x="120" y="90" width="80" height="50" fill="#fed7aa" stroke="#ea580c" strokeWidth="2" rx="2" />
            <text x="160" y="120" textAnchor="middle" className="text-xs font-bold fill-amber-950">m</text>
            <text x="160" y="75" textAnchor="middle" className="text-[11px] font-semibold fill-emerald-700">
              kecepatan konstan
            </text>
            {/* Cord with angle theta */}
            <line x1="200" y1="110" x2="290" y2="60" stroke="#0c2340" strokeWidth="2.5" markerEnd="url(#arrow)" />
            <text x="295" y="55" className="text-xs font-bold fill-slate-900">T</text>
            <line x1="200" y1="110" x2="270" y2="110" stroke="#94a3b8" strokeDasharray="3,3" />
            <text x="245" y="103" className="text-[11px] font-bold fill-slate-700">θ (37°)</text>
          </svg>
        )}

        {diagramId === 'gambar-13' && (
          <svg viewBox="0 0 380 180" className="w-full max-h-48">
            <line x1="30" y1="140" x2="350" y2="140" stroke="#475569" strokeWidth="2" />
            <text x="100" y="158" className="text-[10px] fill-slate-500 font-semibold">lantai licin</text>
            {/* Block B */}
            <rect x="120" y="85" width="120" height="55" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" rx="2" />
            <text x="180" y="118" textAnchor="middle" className="text-xs font-bold fill-blue-950">
              B ({variables.mB ?? 6} kg)
            </text>
            {/* Block A */}
            <rect x="145" y="45" width="70" height="40" fill="#fed7aa" stroke="#ea580c" strokeWidth="2" rx="2" />
            <text x="180" y="70" textAnchor="middle" className="text-xs font-bold fill-amber-950">
              A ({variables.mA ?? 3} kg)
            </text>
            <text x="250" y="60" className="text-[10px] font-semibold fill-slate-600">
              μs = {variables.muS ?? 0.5}
            </text>
            {/* Force F on Block B */}
            <line x1="240" y1="112" x2="310" y2="112" stroke="#dc2626" strokeWidth="3" markerEnd="url(#arrow-red)" />
            <text x="315" y="116" className="text-xs font-bold fill-rose-800">F</text>
          </svg>
        )}

        {diagramId === 'gambar-14' && (
          <svg viewBox="0 0 440 180" className="w-full max-h-48">
            {/* Beam */}
            <rect x="60" y="70" width="320" height="20" fill="#fde047" stroke="#ca8a04" strokeWidth="2" rx="2" />
            <text x="220" y="60" textAnchor="middle" className="text-xs font-bold fill-amber-900">
              papan {variables.boardMass ?? 20} kg
            </text>
            {/* Supports A and B */}
            <polygon points="60,90 50,120 70,120" fill="#475569" />
            <text x="60" y="135" textAnchor="middle" className="text-xs font-bold fill-slate-800">A</text>
            <polygon points="380,90 370,120 390,120" fill="#475569" />
            <text x="380" y="135" textAnchor="middle" className="text-xs font-bold fill-slate-800">B</text>
            {/* Boy */}
            <rect x="160" y="40" width="20" height="30" fill="#3b82f6" rx="2" />
            <text x="170" y="30" textAnchor="middle" className="text-[10px] font-bold fill-blue-900">
              anak {variables.childMass ?? 60} kg
            </text>
            {/* Distance markers */}
            <line x1="60" y1="150" x2="160" y2="150" stroke="#94a3b8" />
            <text x="110" y="165" textAnchor="middle" className="text-[11px] font-semibold fill-slate-600">
              {variables.childDistA ?? 2} m
            </text>
            <line x1="60" y1="170" x2="380" y2="170" stroke="#475569" strokeWidth="1.5" />
            <text x="220" y="182" textAnchor="middle" className="text-xs font-bold fill-slate-800">
              panjang papan {variables.length ?? 6} m
            </text>
          </svg>
        )}

        {diagramId === 'batang-torsi-lima-gaya' && (
          <svg viewBox="0 0 450 180" className="w-full max-h-48">
            <line x1="40" y1="110" x2="400" y2="110" stroke="#334155" strokeWidth="4" />
            {/* Pivot O */}
            <polygon points="40,110 30,135 50,135" fill="#dc2626" />
            <circle cx="40" cy="110" r="3" fill="#ffffff" />
            <text x="40" y="150" textAnchor="middle" className="text-xs font-bold fill-rose-800">O</text>

            {/* Config (a): 25 N perpendicular at 0.20 m */}
            <line x1="110" y1="110" x2="110" y2="60" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="110" y="52" textAnchor="middle" className="text-[10px] font-bold fill-sky-800">(A) 25 N</text>
            <text x="110" y="125" textAnchor="middle" className="text-[9px] fill-slate-500">0,20 m</text>

            {/* Config (b): 40 N at 30 deg at 0.35 m */}
            <line x1="170" y1="110" x2="210" y2="65" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="210" y="58" className="text-[10px] font-bold fill-green-800">(B) 40 N</text>
            <text x="170" y="125" textAnchor="middle" className="text-[9px] fill-slate-500">0,35 m</text>

            {/* Config (c): 20 N at 30 deg at 0.50 m */}
            <line x1="235" y1="110" x2="265" y2="80" stroke="#ca8a04" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="260" y="95" className="text-[9px] font-bold fill-amber-700">(C) 20 N</text>

            {/* Config (d): 12 N perpendicular at 0.60 m */}
            <line x1="280" y1="110" x2="280" y2="70" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="280" y="60" textAnchor="middle" className="text-[10px] font-bold fill-purple-800">(D) 12 N</text>
            <text x="280" y="125" textAnchor="middle" className="text-[9px] fill-slate-500">0,60 m</text>

            {/* Config (e): 15 N perpendicular at 0.70 m */}
            <line x1="340" y1="110" x2="340" y2="65" stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#arrow-red)" />
            <text x="340" y="55" textAnchor="middle" className="text-[10px] font-bold fill-rose-800">(E) 15 N</text>
            <text x="340" y="125" textAnchor="middle" className="text-[9px] fill-slate-500">0,70 m</text>
          </svg>
        )}

        {diagramId === 'gambar-15' && (
          <svg viewBox="0 0 300 220" className="w-full max-h-56">
            <line x1="100" y1="20" x2="200" y2="20" stroke="#475569" strokeWidth="4" />
            <line x1="150" y1="20" x2="150" y2="60" stroke="#94a3b8" strokeWidth="3" />
            {/* Cylinder Pulley */}
            <circle cx="150" cy="80" r="30" fill="#e2e8f0" stroke="#0c2340" strokeWidth="2.5" />
            <circle cx="150" cy="80" r="4" fill="#0c2340" />
            <text x="100" y="70" textAnchor="end" className="text-[11px] font-bold fill-slate-800">
              M = {variables.M ?? 4} kg
            </text>
            <text x="100" y="85" textAnchor="end" className="text-[10px] fill-slate-500">I = ½MR²</text>
            {/* Cord and hanging weight */}
            <line x1="180" y1="80" x2="180" y2="150" stroke="#1e293b" strokeWidth="2" />
            <rect x="165" y="150" width="30" height="35" fill="#fde047" stroke="#ca8a04" strokeWidth="2" rx="2" />
            <text x="180" y="172" textAnchor="middle" className="text-xs font-bold fill-yellow-950">
              m = {variables.m ?? 6} kg
            </text>
          </svg>
        )}

        {diagramId === 'gambar-16' && (
          <svg viewBox="0 0 450 180" className="w-full max-h-48">
            <line x1="20" y1="150" x2="430" y2="150" stroke="#475569" strokeWidth="2" />
            {/* 3 identical planes */}
            <g transform="translate(30, 40)">
              <polygon points="0,110 110,110 0,50" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
              <circle cx="20" cy="50" r="14" fill="#64748b" />
              <text x="55" y="130" textAnchor="middle" className="text-xs font-bold fill-slate-700">bola pejal</text>
            </g>
            <g transform="translate(170, 40)">
              <polygon points="0,110 110,110 0,50" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
              <circle cx="20" cy="50" r="14" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" />
              <text x="55" y="130" textAnchor="middle" className="text-xs font-bold fill-slate-700">silinder pejal</text>
            </g>
            <g transform="translate(310, 40)">
              <polygon points="0,110 110,110 0,50" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
              <circle cx="20" cy="50" r="14" fill="none" stroke="#0f172a" strokeWidth="3" />
              <text x="55" y="130" textAnchor="middle" className="text-xs font-bold fill-slate-700">cincin tipis</text>
            </g>
          </svg>
        )}

        {diagramId === 'gambar-17' && (
          <svg viewBox="0 0 350 200" className="w-full max-h-52">
            {/* Door top view */}
            <rect x="60" y="30" width="20" height="20" fill="#94a3b8" />
            <circle cx="70" cy="50" r="6" fill="#334155" />
            <text x="90" y="45" className="text-xs font-bold fill-slate-700">engsel</text>
            {/* Door Leaf */}
            <line x1="70" y1="50" x2="70" y2="170" stroke="#854d0e" strokeWidth="6" strokeLinecap="round" />
            <text x="50" y="115" textAnchor="end" className="text-xs font-bold fill-amber-900">
              lebar {variables.width ?? 0.9} m
            </text>
            {/* Forces */}
            <line x1="70" y1="170" x2="135" y2="170" stroke="#dc2626" strokeWidth="3" markerEnd="url(#arrow-red)" />
            <text x="145" y="174" className="text-xs font-bold fill-rose-800">
              F₁ = {variables.forceOlder ?? 24} N (Kakak)
            </text>
            <line x1="70" y1="140" x2="120" y2="140" stroke="#0284c7" strokeWidth="2.5" markerEnd="url(#arrow)" />
            <text x="130" y="144" className="text-xs font-bold fill-sky-800">
              F₂ = {variables.forceYounger ?? 18} N (Adik)
            </text>
          </svg>
        )}

        {diagramId === 'gambar-18' && (
          <svg viewBox="0 0 450 190" className="w-full max-h-52">
            <rect x="20" y="20" width="370" height="140" fill="#e0f2fe" opacity="0.6" />
            <line x1="20" y1="20" x2="390" y2="20" stroke="#0369a1" strokeWidth="2.5" />
            <line x1="20" y1="160" x2="390" y2="160" stroke="#0369a1" strokeWidth="2.5" />
            <text x="30" y="15" className="text-[10px] font-bold fill-slate-600">tepi seberang (P)</text>
            <text x="30" y="178" className="text-[10px] font-bold fill-slate-600">tepi berangkat (O)</text>
            {/* Boat velocity */}
            <line x1="80" y1="160" x2="80" y2="70" stroke="#0c2340" strokeWidth="3" markerEnd="url(#arrow)" />
            <text x="75" y="115" textAnchor="end" className="text-xs font-bold fill-slate-900">
              v kapal = {variables.vBoat ?? 6} m/s
            </text>
            {/* River current */}
            <line x1="180" y1="60" x2="260" y2="60" stroke="#0284c7" strokeWidth="2.5" markerEnd="url(#arrow)" />
            <text x="270" y="65" className="text-xs font-bold fill-sky-800">
              v arus = {variables.vCurrent ?? 4} m/s
            </text>
            {/* Width 240 m */}
            <line x1="400" y1="20" x2="400" y2="160" stroke="#64748b" strokeWidth="1.5" />
            <text x="415" y="95" className="text-xs font-bold fill-slate-800">
              {variables.width ?? 240} m
            </text>
          </svg>
        )}

        {diagramId === 'gambar-19' && (
          <svg viewBox="0 0 440 160" className="w-full max-h-44">
            <line x1="20" y1="120" x2="420" y2="120" stroke="#475569" strokeWidth="2" />
            {/* Car */}
            <rect x="60" y="85" width="60" height="25" rx="4" fill="#0284c7" />
            <circle cx="75" cy="115" r="7" fill="#1e293b" />
            <circle cx="105" cy="115" r="7" fill="#1e293b" />
            <text x="90" y="75" textAnchor="middle" className="text-xs font-bold fill-sky-900">
              {variables.v0Kmh ?? 90} km/jam
            </text>
            {/* Obstacle */}
            <polygon points="340,120 355,75 370,120" fill="#dc2626" />
            <text x="355" y="65" textAnchor="middle" className="text-xs font-bold fill-rose-800">penghalang</text>
            {/* Distance marker */}
            <line x1="120" y1="140" x2="340" y2="140" stroke="#94a3b8" strokeWidth="1.5" />
            <text x="230" y="152" textAnchor="middle" className="text-xs font-bold fill-slate-700">
              jarak = {variables.distObstacle ?? 80} m
            </text>
          </svg>
        )}

        {diagramId === 'gambar-20' && (
          <svg viewBox="0 0 350 200" className="w-full max-h-52">
            <path d="M 50 180 A 130 130 0 0 1 270 50" fill="none" stroke="#94a3b8" strokeWidth="30" />
            <path d="M 50 180 A 130 130 0 0 1 270 50" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="6,6" />
            <circle cx="190" cy="110" r="12" fill="#0369a1" />
            <line x1="190" y1="110" x2="160" y2="135" stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#arrow-red)" />
            <text x="140" y="145" className="text-[10px] font-bold fill-rose-800">fs</text>
            <text x="230" y="100" className="text-xs font-bold fill-slate-800">
              R = {variables.radius ?? 80} m
            </text>
            <text x="230" y="115" className="text-[10px] font-medium fill-slate-600">
              μs = {variables.muS ?? 0.5}
            </text>
          </svg>
        )}

        {diagramId === 'gambar-21' && (
          <svg viewBox="0 0 380 200" className="w-full max-h-52">
            {/* Inclined plane */}
            <polygon points="50,170 300,170 300,50" fill="#f8fafc" stroke="#475569" strokeWidth="2" />
            <text x="100" y="162" className="text-xs font-bold fill-slate-800">37°</text>
            {/* Pulley at top */}
            <circle cx="300" cy="50" r="12" fill="#cbd5e1" stroke="#334155" strokeWidth="2" />
            {/* Block A on slope */}
            <g transform="translate(190, 102) rotate(-26)">
              <rect x="-25" y="-18" width="50" height="36" fill="#fed7aa" stroke="#ea580c" strokeWidth="2" rx="2" />
              <text x="0" y="5" textAnchor="middle" className="text-[11px] font-bold fill-amber-950">
                A ({variables.mA ?? 5} kg)
              </text>
            </g>
            {/* Cord & Block B */}
            <line x1="215" y1="90" x2="300" y2="40" stroke="#1e293b" strokeWidth="2" />
            <line x1="312" y1="50" x2="312" y2="120" stroke="#1e293b" strokeWidth="2" />
            <rect x="297" y="120" width="30" height="35" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" rx="2" />
            <text x="312" y="142" textAnchor="middle" className="text-xs font-bold fill-blue-950">
              B ({variables.mB ?? 8} kg)
            </text>
          </svg>
        )}

        {diagramId === 'gambar-22' && (
          <svg viewBox="0 0 380 190" className="w-full max-h-48">
            <polygon points="40,160 340,160 40,40" fill="#f8fafc" stroke="#475569" strokeWidth="2" />
            <text x="260" y="152" className="text-xs font-bold fill-slate-800">30°</text>
            {/* Solid Cylinder at peak */}
            <circle cx="65" cy="55" r="18" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
            <circle cx="65" cy="55" r="3" fill="#ca8a04" />
            <text x="95" y="45" className="text-[11px] font-bold fill-amber-950">
              silinder pejal ({variables.mass ?? 6} kg)
            </text>
            <text x="95" y="60" className="text-[10px] fill-slate-500">I = ½mR²</text>
            {/* Height dimension */}
            <line x1="25" y1="40" x2="25" y2="160" stroke="#94a3b8" strokeWidth="1.5" />
            <text x="15" y="105" textAnchor="end" className="text-xs font-bold fill-slate-800">
              h = {variables.height ?? 4.8} m
            </text>
          </svg>
        )}

        {/* Fallback generic illustration */}
        {!['gambar-1', 'gambar-2', 'gambar-3', 'grafik-1', 'gambar-4', 'gambar-5', 'gambar-6', 'gambar-7', 'gambar-8', 'gambar-9', 'gambar-10', 'gambar-12', 'gambar-13', 'gambar-14', 'batang-torsi-lima-gaya', 'gambar-15', 'gambar-16', 'gambar-17', 'gambar-18', 'gambar-19', 'gambar-20', 'gambar-21', 'gambar-22'].includes(diagramId) && (
          <div className="py-8 px-6 bg-slate-50 rounded-lg text-center text-slate-500 text-xs italic">
            Diagram stimulus {title || diagramId}
          </div>
        )}
      </div>

      {title && (
        <p className="mt-2 text-xs font-semibold text-slate-600 text-center italic border-t border-slate-100 pt-2 w-full">
          {title}
        </p>
      )}
    </div>
  );
};
