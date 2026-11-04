'use client';

import React, { useState } from 'react';
import { X, Ruler, Calculator, Sparkles, CheckCircle2, Info } from 'lucide-react';

interface SizeAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeAdvisorModal: React.FC<SizeAdvisorModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [heightFeet, setHeightFeet] = useState<number>(5);
  const [heightInches, setHeightInches] = useState<number>(8);
  const [weightKg, setWeightKg] = useState<number>(68);
  const [fitPreference, setFitPreference] = useState<'regular' | 'slim' | 'loose'>('regular');
  const [calculatedSize, setCalculatedSize] = useState<string | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const totalHeightInches = heightFeet * 12 + heightInches;

    let baseSize = 'L (40)';
    if (weightKg < 58) {
      baseSize = 'M (38)';
    } else if (weightKg >= 58 && weightKg <= 67) {
      baseSize = fitPreference === 'slim' ? 'M (38)' : 'L (40)';
    } else if (weightKg >= 68 && weightKg <= 76) {
      baseSize = fitPreference === 'slim' ? 'L (40)' : 'XL (42)';
    } else if (weightKg >= 77 && weightKg <= 86) {
      baseSize = fitPreference === 'slim' ? 'XL (42)' : 'XXL (44)';
    } else {
      baseSize = 'XXL (44)';
    }

    if (totalHeightInches >= 72 && baseSize === 'M (38)') baseSize = 'L (40)';
    if (totalHeightInches >= 74 && (baseSize === 'L (40)' || baseSize === 'XL (42)')) baseSize = 'XXL (44)';

    setCalculatedSize(baseSize);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-stone-200 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col p-6 sm:p-8 text-left">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-stone-100 flex items-center justify-center text-stone-900">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold font-sans uppercase tracking-wider text-stone-900">
                SMART SIZE ADVISOR & CHART
              </h2>
              <p className="text-xs text-stone-500 font-bangla">সঠিক সাইজ নির্ধারণ করে শতভাগ মানানসই পোশাক বেছে নিন</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 hover:bg-stone-100 rounded-full text-stone-500 hover:text-black transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto space-y-6 pt-5">
          
          {/* Smart Calculator Form */}
          <div className="bg-stone-50 p-4 sm:p-5 border border-stone-200 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-900 uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>AI SMART SIZE CALCULATOR</span>
              </div>
              <span className="text-[10px] bg-black text-white px-2 py-0.5 font-bold uppercase tracking-widest">
                INSTANT
              </span>
            </div>

            <form onSubmit={handleCalculate} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  উচ্চতা (HEIGHT)
                </label>
                <div className="flex gap-2">
                  <select
                    value={heightFeet}
                    onChange={(e) => setHeightFeet(Number(e.target.value))}
                    className="w-1/2 bg-white border border-stone-300 text-xs text-stone-900 p-2 focus:border-black rounded-none cursor-pointer"
                  >
                    {[4, 5, 6].map((f) => (
                      <option key={f} value={f}>
                        {f} ft
                      </option>
                    ))}
                  </select>
                  <select
                    value={heightInches}
                    onChange={(e) => setHeightInches(Number(e.target.value))}
                    className="w-1/2 bg-white border border-stone-300 text-xs text-stone-900 p-2 focus:border-black rounded-none cursor-pointer"
                  >
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i} value={i}>
                        {i} in
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  ওজন (WEIGHT - KG)
                </label>
                <input
                  type="number"
                  min="40"
                  max="130"
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value))}
                  className="w-full bg-white border border-stone-300 text-xs text-stone-900 p-2 focus:border-black rounded-none"
                  placeholder="যেমন: 68"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  ফিটিং পছন্দ (FIT)
                </label>
                <select
                  value={fitPreference}
                  onChange={(e) => setFitPreference(e.target.value as any)}
                  className="w-full bg-white border border-stone-300 text-xs text-stone-900 p-2 focus:border-black rounded-none cursor-pointer"
                >
                  <option value="regular">রেগুলার কম্ফোর্ট (Regular)</option>
                  <option value="slim">বডি ফিট (Slim Fit)</option>
                  <option value="loose">লুজ বা ট্র্যাডিশনাল (Loose)</option>
                </select>
              </div>

              <div className="sm:col-span-3 pt-1">
                <button
                  type="submit"
                  className="w-full py-3 bg-black hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>CALCULATE MY OPTIMAL SIZE</span>
                </button>
              </div>
            </form>

            {calculatedSize && (
              <div className="p-3 bg-amber-50 border border-amber-300 flex items-center justify-between animate-fadeIn">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-600" />
                  <div>
                    <span className="text-xs text-stone-600">আপনার শারীরিক গঠনের জন্য প্রস্তাবিত সাইজ:</span>
                    <div className="text-base font-bold text-stone-950 font-sans tracking-wide">
                      {calculatedSize} ({fitPreference === 'slim' ? 'স্লিম ফিট' : 'কম্ফোর্ট রেগুলার'})
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-black text-white">
                  RECOMMENDED
                </span>
              </div>
            )}
          </div>

          {/* Table */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3">
              পাঞ্জাবি ও কাবলি সাইজ মেজারমেন্ট (ইঞ্চিতে)
            </h3>

            <div className="overflow-x-auto border border-stone-200">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-stone-100 text-stone-900 border-b border-stone-200 font-bold uppercase tracking-wider">
                    <th className="p-3">সাইজ</th>
                    <th className="p-3">বুক (CHEST)</th>
                    <th className="p-3">ঝুল (LENGTH)</th>
                    <th className="p-3">হাতা (SLEEVE)</th>
                    <th className="p-3">কলার (COLLAR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-700">
                  <tr className="hover:bg-stone-50">
                    <td className="p-3 font-bold text-black">M (38)</td>
                    <td className="p-3">38 - 39"</td>
                    <td className="p-3">40"</td>
                    <td className="p-3">24"</td>
                    <td className="p-3">15"</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="p-3 font-bold text-black">L (40)</td>
                    <td className="p-3">40 - 41"</td>
                    <td className="p-3">41"</td>
                    <td className="p-3">24.5"</td>
                    <td className="p-3">15.5"</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="p-3 font-bold text-black">XL (42)</td>
                    <td className="p-3">42 - 43"</td>
                    <td className="p-3">42"</td>
                    <td className="p-3">25"</td>
                    <td className="p-3">16"</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="p-3 font-bold text-black">XXL (44)</td>
                    <td className="p-3">44 - 45"</td>
                    <td className="p-3">43"</td>
                    <td className="p-3">25.5"</td>
                    <td className="p-3">16.5"</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-3 bg-stone-100 flex items-start gap-2 text-xs text-stone-600">
            <Info className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
            <p>
              <strong>টিপস:</strong> আপনি যদি বুক ৩৮ ইঞ্চি মেপে থাকেন, তবে চলাফেরার আরামের জন্য ৪ ইঞ্চি লুজেনিং ধরে সাইজ ৪০ (বুক ৪২ ইঞ্চি পাঞ্জাবি) নির্বাচন করা উত্তম।
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
