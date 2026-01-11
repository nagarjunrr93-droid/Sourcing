
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

// Exact Dark Navy Blue from Brand Identity
const BRAND_NAVY = "#002a5c"; 
const ACCENT_BLUE = "#5da2e1"; // For non-brand highlights/UI elements only

const HexunoLogo = ({ size = "normal" }: { size?: "normal" | "large" }) => {
  const isLarge = size === 'large';
  
  return (
    <div className={`flex items-center gap-2 sm:gap-4 select-none ${isLarge ? 'scale-110 lg:scale-125' : ''}`}>
      {/* Icon: Entirely BRAND_NAVY */}
      <div 
        className="relative w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center bg-white border-2 rounded-xl shrink-0" 
        style={{ borderColor: BRAND_NAVY }}
      >
        <svg viewBox="0 0 100 100" className="w-6 h-6 sm:w-10 sm:h-10">
          <path 
            d="M20 20 L60 50 L20 80" 
            fill="none" 
            stroke={BRAND_NAVY} 
            strokeWidth="16" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <rect x="75" y="20" width="16" height="60" rx="4" fill={BRAND_NAVY} />
        </svg>
      </div>
      
      {/* Text: Entirely BRAND_NAVY and scaled larger */}
      <div className="flex flex-col items-start justify-center leading-none">
        <span 
          className="font-black text-2xl sm:text-4xl md:text-5xl tracking-tighter" 
          style={{ color: BRAND_NAVY, fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          HEXUNO
        </span>
        <span 
          className="text-[8px] sm:text-[10px] md:text-[11px] font-bold tracking-[0.5em] mt-1 opacity-90" 
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
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200 py-5 sm:py-8 px-6 sm:px-12 md:px-20 lg:px-32 sticky top-0 z-50 flex items-center justify-between shadow-sm">
        <HexunoLogo />
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-3 text-slate-500 font-bold text-xs uppercase tracking-widest">
            <Activity size={16} style={{ color: ACCENT_BLUE }} />
            <span>Strategic Case Study</span>
          </div>
          <div className="h-6 w-px bg-slate-200"></div>
          <span className="text-xs font-black text-slate-400">REF: LC-AUTO-2024</span>
        </div>
        <button className="lg:hidden p-3 text-slate-600 bg-slate-50 rounded-xl">
          <Menu size={24} />
        </button>
      </nav>

      {/* Hero Banner */}
      <header className="bg-slate-900 text-white py-20 sm:py-32 md:py-40 px-6 sm:px-12 md:px-20 lg:px-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] opacity-[0.07] rounded-full blur-[160px] -mr-96 -mt-96" style={{ backgroundColor: ACCENT_BLUE }}></div>
        <div className="absolute bottom-0 left-0 w-80 sm:w-[500px] h-80 sm:h-[500px] opacity-[0.05] rounded-full blur-[140px] -ml-64 -mb-64" style={{ backgroundColor: ACCENT_BLUE }}></div>
        
        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 mb-8 font-black tracking-widest uppercase text-[10px] sm:text-xs">
            <Globe2 size={16} />
            Supply Chain Resiliency Analysis
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 sm:mb-10 leading-[1.1] tracking-tight">
            Alternate Supplier <br className="hidden sm:block" />
            <span style={{ color: ACCENT_BLUE }}>LCC Identification</span>
          </h1>
          <p className="text-slate-400 text-xl sm:text-2xl md:text-3xl max-w-5xl leading-relaxed font-medium">
            Engineering a resilient global manufacturing footprint for automotive components through 
            strategic LCC diversification and regional cost benchmarking.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-20 lg:px-32 mt-16 sm:mt-24 md:mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 md:gap-24">
          
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-16 sm:space-y-24">
            {/* Problem Section */}
            <section id="problem-statement" className="bg-white rounded-[2.5rem] p-8 sm:p-16 shadow-xl shadow-slate-200/40 border border-slate-100 ring-1 ring-slate-200/30">
              <div className="flex items-center gap-5 sm:gap-7 mb-10 sm:mb-12">
                <div className="p-4 sm:p-5 bg-red-50 text-red-600 rounded-2xl shadow-inner">
                  <Target size={32} className="sm:w-10 sm:h-10" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight">The Problem Statement</h2>
                  <div className="h-1.5 w-16 sm:w-24 mt-3 rounded-full bg-red-500/10"></div>
                </div>
              </div>
              <p className="text-slate-600 text-lg sm:text-2xl leading-relaxed font-medium">
                {INITIAL_DATA.problemStatement}
              </p>
            </section>

            {/* Solution Highlights */}
            <section className="bg-white rounded-[2.5rem] p-8 sm:p-16 shadow-xl shadow-slate-200/40 border border-slate-100 ring-1 ring-slate-200/30">
              <div className="flex items-center gap-5 sm:gap-7 mb-10 sm:mb-12">
                <div className="p-4 sm:p-5 bg-blue-50 text-blue-600 rounded-2xl shadow-inner">
                  <Sparkles size={32} className="sm:w-10 sm:h-10" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight">Solution Strategy</h2>
                  <div className="h-1.5 w-16 sm:w-24 mt-3 rounded-full bg-blue-500/10"></div>
                </div>
              </div>
              <p className="text-slate-600 text-lg sm:text-2xl leading-relaxed mb-12 sm:mb-16 font-medium">
                {INITIAL_DATA.solutionHighlights}
              </p>
              
              <div className="bg-slate-50/70 rounded-3xl p-8 sm:p-14 border border-slate-200/60">
                <h3 className="text-[11px] sm:text-xs font-black text-slate-400 uppercase tracking-[0.4em] mb-12 sm:mb-16 flex items-center gap-4">
                  <FileText size={18} />
                  Sourcing Roadmap & Methodology
                </h3>
                <ProcessSteps steps={INITIAL_DATA.approach} />
              </div>
            </section>

            {/* Value Delivered */}
            <section className="bg-white rounded-[2.5rem] p-8 sm:p-16 shadow-xl shadow-slate-200/40 border border-slate-100 ring-1 ring-slate-200/30">
              <div className="flex items-center gap-5 sm:gap-7 mb-10 sm:mb-12">
                <div className="p-4 sm:p-5 bg-emerald-50 text-emerald-600 rounded-2xl shadow-inner">
                  <ListChecks size={32} className="sm:w-10 sm:h-10" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight">Value Delivered</h2>
                  <div className="h-1.5 w-16 sm:w-24 mt-3 rounded-full bg-emerald-500/10"></div>
                </div>
              </div>
              
              <div className="grid gap-6 sm:gap-10">
                {[
                  { id: 1, text: "Detailed cost breakdown including Material, Labor, Overhead (OH), and Tooling components." },
                  { id: 2, text: "Comprehensive cost comparison report with regional savings insights and competitiveness indexing." },
                  { id: 3, text: "Verified value delivery quantified in EXW (Ex-Works) condition for objective benchmarking." }
                ].map((item) => (
                  <div key={item.id} className="group flex items-start gap-6 sm:gap-10 p-6 sm:p-10 rounded-2xl border border-slate-100 hover:border-emerald-100 hover:bg-emerald-50/30 transition-all duration-500">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl sm:text-2xl font-black shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                      {item.id}
                    </div>
                    <p className="text-slate-700 font-bold text-lg sm:text-2xl pt-2 leading-snug">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* AI Report */}
            {isExpanded && aiReport && (
              <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 space-y-16 sm:space-y-24">
                <section className="bg-blue-50/40 rounded-[2.5rem] p-8 sm:p-16 border border-blue-100 relative overflow-hidden shadow-sm">
                  <h2 className="text-2xl sm:text-4xl font-black text-slate-800 mb-8 sm:mb-12 flex items-center gap-5">
                    <Sparkles className="text-blue-500" size={32} />
                    Executive Summary Expansion
                  </h2>
                  <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-lg sm:text-xl whitespace-pre-wrap font-medium">
                    {aiReport.executiveSummary}
                  </div>
                </section>
                
                <section className="bg-white rounded-[2.5rem] p-8 sm:p-16 shadow-xl border border-slate-100">
                  <h2 className="text-2xl sm:text-4xl font-black text-slate-800 mb-8 sm:mb-12">Detailed Methodology</h2>
                  <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-lg sm:text-xl whitespace-pre-wrap font-medium">
                    {aiReport.detailedMethodology}
                  </div>
                </section>

                <section className="bg-slate-900 text-white rounded-[2.5rem] p-8 sm:p-16 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-emerald-400"></div>
                  <h2 className="text-2xl sm:text-4xl font-black mb-8 sm:mb-12">Strategic Outlook</h2>
                  <div className="text-slate-300 leading-relaxed text-lg sm:text-xl whitespace-pre-wrap font-medium">
                    {aiReport.strategicOutlook}
                  </div>
                </section>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 space-y-12">
            <section className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 lg:sticky lg:top-40 ring-1 ring-slate-200/40">
              <div className="flex items-center gap-5 mb-10 sm:mb-12">
                <div className="p-4 bg-slate-900 text-white rounded-2xl shadow-lg">
                  <ShieldCheck size={28} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">Outcome Metrics</h2>
              </div>

              <div className="space-y-12 sm:space-y-16">
                <SavingsChart data={INITIAL_DATA.results} />

                <div className="space-y-5 sm:space-y-6">
                  {INITIAL_DATA.results.map((res, i) => (
                    <div key={i} className="flex items-center justify-between p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200/50 hover:bg-white transition-all shadow-sm hover:shadow-xl hover:-translate-y-1">
                      <div>
                        <p className="text-[10px] sm:text-[11px] text-slate-400 font-black uppercase tracking-[0.25em] mb-2">{res.region}</p>
                        <p className="text-xl sm:text-3xl font-black text-slate-800 leading-none">
                          {res.suppliers} <span className="text-sm font-bold text-slate-500">Suppliers</span>
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[9px] sm:text-[10px] text-emerald-600 font-black uppercase tracking-widest">Savings</p>
                        <p className="text-3xl sm:text-4xl font-black text-emerald-600 leading-none">{res.savings}%</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-slate-100">
                  <h4 className="text-[10px] sm:text-[11px] font-black text-slate-400 mb-6 uppercase tracking-[0.3em]">Compliance Standards</h4>
                  <div className="flex flex-wrap gap-3">
                    {INITIAL_DATA.metrics.map((m, i) => (
                      <span key={i} className="px-5 py-2.5 bg-blue-50 text-blue-700 rounded-xl text-[10px] sm:text-[11px] font-black border border-blue-100 uppercase tracking-widest shadow-sm">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={handleDeepDive}
                  disabled={loading}
                  className="w-full mt-6 py-6 sm:py-8 px-8 bg-slate-900 text-white rounded-2xl font-black text-base sm:text-lg flex items-center justify-center gap-5 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-900/20 active:scale-[0.98] transition-all disabled:opacity-50 group"
                >
                  {loading ? (
                    <div className="w-7 h-7 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Sparkles size={24} className="text-blue-400 group-hover:rotate-12 transition-transform" />
                      GENERATE AI STRATEGY
                      <ChevronRight size={20} className="text-slate-500" />
                    </>
                  )}
                </button>
              </div>
            </section>

            <section className="bg-indigo-700 rounded-[2.5rem] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute -bottom-16 -right-16 opacity-[0.08] group-hover:scale-125 transition-transform duration-1000">
                <Building2 size={240} />
              </div>
              <div className="flex items-center gap-6 mb-8 sm:mb-10 relative z-10">
                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20">
                  <Building2 size={32} className="text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight">Client Segment</h3>
              </div>
              <div className="space-y-3 relative z-10">
                <p className="text-indigo-200 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em]">Industry focus</p>
                <div className="flex items-center gap-4">
                  <span className="text-white text-xl sm:text-3xl font-black">US Tier-1 Automotive</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Corporate Footer */}
      <footer className="mt-40 border-t border-slate-200 pt-24 pb-32 bg-white px-6 sm:px-12 md:px-20 lg:px-32">
        <div className="max-w-[1600px] mx-auto flex flex-col items-center gap-14">
          <HexunoLogo size="large" />
          <div className="flex flex-col items-center gap-5 text-center">
            <p className="text-slate-500 text-base sm:text-lg font-bold tracking-tight">© 2024 Hexuno Technologies. Global Strategic Operations Group.</p>
            <p className="text-slate-300 text-[10px] sm:text-[11px] uppercase tracking-[0.5em] font-black max-w-sm sm:max-w-xl">Confidential Case Study - Internal Distribution Only</p>
          </div>
          <div className="flex gap-5">
            <div className="w-14 h-2 bg-slate-900 rounded-full"></div>
            <div className="w-14 h-2 bg-slate-100 rounded-full"></div>
            <div className="w-14 h-2 bg-slate-100 rounded-full"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;