
import React, { useState } from 'react';
import { INITIAL_DATA } from './constants';
import { generateExpandedReport } from './services/geminiService';
import { SavingsChart } from './components/SavingsChart';
import { ProcessSteps } from './components/ProcessSteps';
import { AIRenderedContent } from './types';
import { 
  Building2, 
  Target, 
  ShieldCheck, 
  ChevronRight, 
  Sparkles, 
  FileText,
  Activity,
  Globe2,
  ListChecks,
  Menu
} from 'lucide-react';

// Unified Brand Color: Dark Navy Blue as requested
const BRAND_NAVY = "#002a5c"; 
const HIGHLIGHT_BLUE = "#5da2e1"; // Kept for UI accents only, not the brand logo/text

const HexunoLogo = ({ size = "normal" }: { size?: "normal" | "large" }) => {
  const isLarge = size === 'large';
  
  return (
    <div className={`flex items-center gap-2 sm:gap-3 select-none ${isLarge ? 'scale-110 lg:scale-125' : ''}`}>
      {/* Icon: Unified dark blue color */}
      <div 
        className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white border-2 rounded-xl shrink-0" 
        style={{ borderColor: BRAND_NAVY }}
      >
        <svg viewBox="0 0 100 100" className="w-6 h-6 sm:w-8 sm:h-8">
          {/* Chevron part of the logo */}
          <path 
            d="M20 20 L60 50 L20 80" 
            fill="none" 
            stroke={BRAND_NAVY} 
            strokeWidth="15" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          {/* Vertical bar part of the logo */}
          <rect x="75" y="20" width="15" height="60" rx="4" fill={BRAND_NAVY} />
        </svg>
      </div>
      
      {/* Text: Unified dark blue color */}
      <div className="flex flex-col items-start justify-center leading-none">
        <span 
          className="font-black text-2xl sm:text-3xl md:text-4xl tracking-tighter" 
          style={{ color: BRAND_NAVY, fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          HEXUNO
        </span>
        <span 
          className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.45em] mt-0.5 opacity-90" 
          style={{ color: BRAND_NAVY }}
        >
          TECHNOLOGIES
        </span>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [aiReport, setAiReport] = useState<AIRenderedContent | null>(null);
  const [loading, setLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDeepDive = async () => {
    if (aiReport) {
      setIsExpanded(true);
      return;
    }
    setLoading(true);
    try {
      const report = await generateExpandedReport(INITIAL_DATA);
      setAiReport(report);
      setIsExpanded(true);
    } catch (err) {
      console.error("Failed to generate AI report", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pb-20 bg-[#f8fafc] overflow-x-hidden">
      {/* Top Header Bar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 sm:py-6 px-4 sm:px-8 md:px-16 lg:px-24 sticky top-0 z-50 flex items-center justify-between shadow-sm">
        <HexunoLogo />
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest">
            <Activity size={14} style={{ color: HIGHLIGHT_BLUE }} />
            <span>Market Intelligence</span>
          </div>
          <div className="h-4 w-px bg-slate-200"></div>
          <span className="text-xs font-black text-slate-400">DOC REF: STR-009</span>
        </div>
        <button className="md:hidden p-2 text-slate-600">
          <Menu size={24} />
        </button>
      </nav>

      {/* Hero Banner */}
      <header className="bg-slate-900 text-white py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] opacity-10 rounded-full blur-[140px] -mr-80 -mt-80" style={{ backgroundColor: HIGHLIGHT_BLUE }}></div>
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 opacity-10 rounded-full blur-[120px] -ml-48 -mb-48" style={{ backgroundColor: HIGHLIGHT_BLUE }}></div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 mb-6 sm:mb-8 font-black tracking-widest uppercase text-[9px] sm:text-[10px]">
            <Globe2 size={14} />
            Supply Chain Resiliency Strategy
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-[1.15] tracking-tight">
            Alternate Supplier <br className="hidden sm:block" />
            <span style={{ color: HIGHLIGHT_BLUE }}>LCC Identification</span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl md:text-2xl max-w-4xl leading-relaxed font-medium">
            A comprehensive study on diversifying automotive injection molding supply chains 
            leveraging regional cost advantages in India and South-East Asia.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 mt-12 sm:mt-20 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
          
          {/* Left Column (Main Body) */}
          <div className="lg:col-span-8 space-y-12 sm:space-y-16">
            {/* Problem Section */}
            <section id="problem-statement" className="bg-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 ring-1 ring-slate-200/40">
              <div className="flex items-center gap-4 sm:gap-5 mb-8 sm:mb-10">
                <div className="p-3 sm:p-4 bg-red-50 text-red-600 rounded-xl sm:rounded-2xl">
                  <Target size={24} className="sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-800 tracking-tight">The Problem Statement</h2>
                  <div className="h-1.5 w-12 sm:w-16 mt-2 rounded-full bg-red-500/10"></div>
                </div>
              </div>
              <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                {INITIAL_DATA.problemStatement}
              </p>
            </section>

            {/* Solution Highlights */}
            <section className="bg-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 ring-1 ring-slate-200/40">
              <div className="flex items-center gap-4 sm:gap-5 mb-8 sm:mb-10">
                <div className="p-3 sm:p-4 bg-blue-50 text-blue-600 rounded-xl sm:rounded-2xl">
                  <Sparkles size={24} className="sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-800 tracking-tight">Solution Strategy</h2>
                  <div className="h-1.5 w-12 sm:w-16 mt-2 rounded-full bg-blue-500/10"></div>
                </div>
              </div>
              <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12 font-medium">
                {INITIAL_DATA.solutionHighlights}
              </p>
              
              <div className="bg-slate-50/60 rounded-xl sm:rounded-3xl p-6 sm:p-10 border border-slate-200/50">
                <h3 className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-8 sm:mb-10 flex items-center gap-3">
                  <FileText size={16} />
                  Roadmap & Implementation
                </h3>
                <ProcessSteps steps={INITIAL_DATA.approach} />
              </div>
            </section>

            {/* Value Delivered Section */}
            <section className="bg-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 ring-1 ring-slate-200/40">
              <div className="flex items-center gap-4 sm:gap-5 mb-8 sm:mb-10">
                <div className="p-3 sm:p-4 bg-emerald-50 text-emerald-600 rounded-xl sm:rounded-2xl">
                  <ListChecks size={24} className="sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-800 tracking-tight">Value Delivered</h2>
                  <div className="h-1.5 w-12 sm:w-16 mt-2 rounded-full bg-emerald-500/10"></div>
                </div>
              </div>
              
              <div className="grid gap-6 sm:gap-8">
                {[
                  { id: 1, text: "Detailed cost breakdown including Material, Labor, Overhead (OH), and Tooling components." },
                  { id: 2, text: "Comprehensive cost comparison report with regional savings insights and competitiveness indexing." },
                  { id: 3, text: "Verified value delivery quantified in EXW (Ex-Works) condition for objective benchmarking." }
                ].map((item) => (
                  <div key={item.id} className="group flex items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-emerald-100 hover:bg-emerald-50/20 transition-all duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-base sm:text-lg font-black shrink-0 group-hover:scale-110 transition-transform">
                      {item.id}
                    </div>
                    <p className="text-slate-700 font-bold text-base sm:text-lg pt-1 leading-snug">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* AI Report Section */}
            {isExpanded && aiReport && (
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-12 sm:space-y-16">
                <section className="bg-blue-50/30 rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-12 border border-blue-100 relative overflow-hidden">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-800 mb-6 sm:mb-8 flex items-center gap-4">
                    <Sparkles className="text-blue-500" size={28} />
                    Executive Summary Expansion
                  </h2>
                  <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base sm:text-lg whitespace-pre-wrap font-medium">
                    {aiReport.executiveSummary}
                  </div>
                </section>
                
                <section className="bg-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-12 shadow-xl border border-slate-100">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-800 mb-6 sm:mb-8">Detailed Methodology</h2>
                  <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base sm:text-lg whitespace-pre-wrap font-medium">
                    {aiReport.detailedMethodology}
                  </div>
                </section>

                <section className="bg-slate-900 text-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-12 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-emerald-400"></div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-6 sm:mb-8">Strategic Outlook</h2>
                  <div className="text-slate-300 leading-relaxed text-base sm:text-lg whitespace-pre-wrap font-medium">
                    {aiReport.strategicOutlook}
                  </div>
                </section>
              </div>
            )}
          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-4 space-y-8 md:space-y-12">
            <section className="bg-white rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 shadow-2xl shadow-slate-200/50 border border-slate-100 lg:sticky lg:top-32 ring-1 ring-slate-200/40">
              <div className="flex items-center gap-4 mb-8 sm:mb-10">
                <div className="p-3 bg-slate-900 text-white rounded-xl">
                  <ShieldCheck size={24} />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">Outcome Metrics</h2>
              </div>

              <div className="space-y-8 sm:space-y-12">
                <SavingsChart data={INITIAL_DATA.results} />

                <div className="space-y-4 sm:space-y-5">
                  {INITIAL_DATA.results.map((res, i) => (
                    <div key={i} className="flex items-center justify-between p-4 sm:p-6 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-200/50 hover:bg-white transition-all shadow-sm hover:shadow-md">
                      <div>
                        <p className="text-[10px] sm:text-[11px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">{res.region}</p>
                        <p className="text-lg sm:text-2xl font-black text-slate-800 leading-none">
                          {res.suppliers} <span className="text-xs font-bold text-slate-500">Suppliers</span>
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[9px] sm:text-[10px] text-emerald-600 font-black uppercase tracking-widest">Savings</p>
                        <p className="text-2xl sm:text-3xl font-black text-emerald-600 leading-none">{res.savings}%</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 sm:pt-8 border-t border-slate-100">
                  <h4 className="text-[10px] sm:text-[11px] font-black text-slate-400 mb-4 sm:mb-5 uppercase tracking-[0.25em]">Compliance Framework</h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {INITIAL_DATA.metrics.map((m, i) => (
                      <span key={i} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 text-blue-700 rounded-lg sm:rounded-xl text-[10px] sm:text-[11px] font-black border border-blue-100 uppercase tracking-wider">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={handleDeepDive}
                  disabled={loading}
                  className="w-full mt-4 sm:mt-6 py-4 sm:py-6 px-6 sm:px-8 bg-slate-900 text-white rounded-xl sm:rounded-2xl font-black text-sm sm:text-base flex items-center justify-center gap-4 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/10 active:scale-[0.97] transition-all disabled:opacity-50 group"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Sparkles size={20} className="text-blue-400 group-hover:rotate-12 transition-transform" />
                      ANALYZE AI REPORT
                      <ChevronRight size={18} className="text-slate-400" />
                    </>
                  )}
                </button>
              </div>
            </section>

            <section className="bg-indigo-600 rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 text-white shadow-xl relative overflow-hidden group">
              <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-125 transition-transform duration-700">
                <Building2 size={160} />
              </div>
              <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8 relative z-10">
                <div className="p-3 bg-white/15 rounded-xl sm:rounded-2xl backdrop-blur-md border border-white/20">
                  <Building2 size={24} className="text-white sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight">Client Focus</h3>
              </div>
              <div className="space-y-2 relative z-10">
                <p className="text-indigo-200 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]">Industry Segment</p>
                <div className="flex items-center gap-3">
                  <span className="text-white text-lg sm:text-xl font-black">US Tier-1 Automotive</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Corporate Footer */}
      <footer className="mt-24 sm:mt-40 border-t border-slate-200 pt-16 sm:pt-24 pb-16 sm:pb-24 bg-white px-4 sm:px-8">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-10 sm:gap-12">
          <HexunoLogo size="large" />
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-slate-500 text-sm sm:text-base font-bold tracking-tight">© 2024 Hexuno Technologies. Global Sourcing Intelligence Division.</p>
            <p className="text-slate-300 text-[9px] sm:text-[10px] uppercase tracking-[0.4em] font-black max-w-xs sm:max-w-md">Proprietary Case Study - Authorized Access Only</p>
          </div>
          <div className="flex gap-4">
            <div className="w-10 sm:w-12 h-1 sm:h-1.5 bg-blue-500 rounded-full"></div>
            <div className="w-10 sm:w-12 h-1 sm:h-1.5 bg-slate-100 rounded-full"></div>
            <div className="w-10 sm:w-12 h-1 sm:h-1.5 bg-slate-100 rounded-full"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
