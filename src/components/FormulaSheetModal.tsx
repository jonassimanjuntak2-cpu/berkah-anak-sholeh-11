import React from 'react';
import { MathView } from './MathView';
import { X, BookOpen, BookmarkCheck } from 'lucide-react';

interface FormulaSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FormulaSheetModal: React.FC<FormulaSheetModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const formulaCategories = [
    {
      title: '1. Vektor & Analisis Komponen',
      formulas: [
        { label: 'Resultan Dua Vektor', formula: 'R = \\sqrt{F_1^2 + F_2^2 + 2F_1 F_2 \\cos\\theta}' },
        { label: 'Rentang Resultan', formula: '|F_1 - F_2| \\le R \\le F_1 + F_2' },
        { label: 'Komponen Kartesius', formula: 'F_x = F \\cos\\theta, \\quad F_y = F \\sin\\theta' },
        { label: 'Arah Resultan', formula: '\\tan\\theta = \\frac{\\Sigma F_y}{\\Sigma F_x}' },
      ],
    },
    {
      title: '2. Kinematika Gerak Lurus (GLB & GLBB)',
      formulas: [
        { label: 'GLB Kecepatan Konstan', formula: 's = v \\cdot t' },
        { label: 'Kecepatan Akhir GLBB', formula: 'v_t = v_0 + a \\cdot t' },
        { label: 'Posisi GLBB', formula: 's = v_0 t + \\frac{1}{2} a t^2' },
        { label: 'Kaitan Tanpa Waktu', formula: 'v_t^2 = v_0^2 + 2 a s' },
        { label: 'Jarak Pengereman Mobil', formula: 's_{rem} = \\frac{v_0^2}{2a}' },
      ],
    },
    {
      title: '3. Gerak Parabola',
      formulas: [
        { label: 'Kecepatan Awal', formula: 'v_{0x} = v_0 \\cos\\theta, \\quad v_{0y} = v_0 \\sin\\theta' },
        { label: 'Waktu Puncak', formula: 't_p = \\frac{v_0 \\sin\\theta}{g}' },
        { label: 'Ketinggian Maksimum', formula: 'H_{maks} = \\frac{v_0^2 \\sin^2\\theta}{2g}' },
        { label: 'Jangkauan Terjauh', formula: 'X_{maks} = \\frac{v_0^2 \\sin(2\\theta)}{g}' },
        { label: 'Sudut Komplementer', formula: '\\theta_1 + \\theta_2 = 90^\\circ \\implies X_1 = X_2' },
      ],
    },
    {
      title: '4. Gerak Melingkar Beraturan',
      formulas: [
        { label: 'Kecepatan Sudut', formula: '\\omega = \\frac{2\\pi}{T} = 2\\pi f = \\frac{v}{r}' },
        { label: 'Percepatan Sentripetal', formula: 'a_s = \\frac{v^2}{r} = \\omega^2 r' },
        { label: 'Kelajuan Kritis Lingkaran Vertikal', formula: 'v_{min} = \\sqrt{g r}' },
        { label: 'Hubungan Rantai Gir', formula: 'v_1 = v_2 \\implies \\omega_1 r_1 = \\omega_2 r_2' },
      ],
    },
    {
      title: '5. Dinamika Gerak Hukum Newton',
      formulas: [
        { label: 'Hukum II Newton', formula: '\\Sigma F = m \\cdot a' },
        { label: 'Gaya Gesek Statis Maksimum', formula: 'f_{s,maks} = \\mu_s \\cdot N' },
        { label: 'Gaya Gesek Kinetis', formula: 'f_k = \\mu_k \\cdot N' },
        { label: 'Bidang Miring', formula: 'w_x = mg \\sin\\theta, \\quad N = mg \\cos\\theta' },
        { label: 'Percepatan Meluncur Kasar', formula: 'a = g (\\sin\\theta - \\mu_k \\cos\\theta)' },
      ],
    },
    {
      title: '6. Dinamika Rotasi & Kesetimbangan Benda Tegar',
      formulas: [
        { label: 'Momen Gaya (Torsi)', formula: '\\tau = F \\cdot r \\cdot \\sin\\theta' },
        { label: 'Syarat Kesetimbangan', formula: '\\Sigma F_x = 0, \\; \\Sigma F_y = 0, \\; \\Sigma \\tau = 0' },
        { label: 'Hukum II Newton Rotasi', formula: '\\Sigma \\tau = I \\cdot \\alpha' },
        { label: 'Momentum Sudut', formula: 'L = I \\cdot \\omega \\quad (\\Sigma \\tau_{luar} = 0 \\implies L_1 = L_2)' },
        { label: 'Energi Kinetik Menggelinding', formula: 'E_k = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2 = \\frac{1}{2}mv^2(1 + k)' },
        { label: 'Kecepatan di Dasar Bidang Miring', formula: 'v = \\sqrt{\\frac{2gh}{1 + k}}' },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80 rounded-t-2xl">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Kumpulan Rumus Fisika Inti Kelas XI
              </h3>
              <p className="text-[11px] text-slate-500">
                Referensi konsep, persamaan baku, dan trik kalkulasi
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {formulaCategories.map((cat, cIdx) => (
            <div key={cIdx} className="border border-slate-200/90 rounded-xl p-4 bg-slate-50/50">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <BookmarkCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>{cat.title}</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {cat.formulas.map((item, fIdx) => (
                  <div key={fIdx} className="bg-white p-3 rounded-lg border border-slate-200/80">
                    <span className="text-[11px] font-semibold text-slate-500 block mb-1">
                      {item.label}
                    </span>
                    <div className="text-xs font-serif text-slate-900">
                      <MathView math={item.formula} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50/80 rounded-b-2xl flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Tutup Buku Rumus
          </button>
        </div>
      </div>
    </div>
  );
};
