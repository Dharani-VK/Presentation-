import React from 'react';
import {
  Brain,
  FileText,
  Mic,
  MessageSquare,
  TrendingUp,
  Boxes,
  ClipboardCheck,
  Zap,
  AlertTriangle,
  Rocket,
  Car,
  Search,
  Server,
  Monitor,
  Database,
  FileCode,
  Terminal,
  Cpu,
  Layers,
  Camera,
  CheckCircle2,
} from 'lucide-react';

export const Slide7Launch: React.FC = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto flex flex-col select-none text-slate-100 font-sans px-3 sm:px-6 py-2 gap-3">
      
      {/* ── TOP HEADER ── */}
      <div className="flex items-center shrink-0 pb-2 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">ClaimShield+</span>
          <span className="text-slate-600 text-2xl font-light">|</span>
          <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">
            AI & Automation
          </span>
        </div>
      </div>

      {/* ── MAIN 2-COLUMN GRID (LEFT 67% + RIGHT 33%) ── */}
      <div className="grid grid-cols-12 gap-3.5 w-full items-stretch">
        
        {/* ════════════════════════════════════════════════════════════════════
            LEFT SIDE (COL-SPAN-8): AI, AUTOMATION, FUTURE ENHANCEMENT
        ════════════════════════════════════════════════════════════════════ */}
        <div className="col-span-8 flex flex-col gap-3 justify-between">
          
          {/* TOP ROW: AI INTELLIGENCE & AUTOMATION */}
          <div className="grid grid-cols-2 gap-3.5 w-full">
            
            {/* ── 1. AI INTELLIGENCE (EMERALD HIGHLIGHT THEME) ── */}
            <div 
              className="rounded-2xl p-3.5 flex flex-col justify-between gap-2.5 backdrop-blur-md transition-all shadow-lg"
              style={{
                background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.12) 0%, rgba(4, 28, 22, 0.70) 100%), rgba(2, 6, 18, 0.90)',
                border: '1.5px solid rgba(16, 185, 129, 0.50)',
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.12)',
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-2.5 pb-2 border-b border-emerald-500/25">
                <div className="w-7 h-7 rounded-xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center shrink-0 shadow-sm shadow-emerald-500/30">
                  <Brain className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-[12.5px] font-black text-emerald-400 uppercase tracking-wider leading-tight">
                    AI Intelligence
                  </h3>
                  <p className="text-[9.5px] text-slate-300 font-medium leading-tight">
                    Intake & document data extraction
                  </p>
                </div>
              </div>

              {/* 4 Dark High-Contrast Sub-Cards */}
              <div className="flex flex-col gap-1.5 w-full">
                
                {/* 1. OCR */}
                <div 
                  className="flex items-center gap-2.5 rounded-xl p-2 transition-all hover:scale-[1.01]"
                  style={{
                    background: 'rgba(2, 18, 14, 0.85)',
                    border: '1px solid rgba(16, 185, 129, 0.35)',
                  }}
                >
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
                    <FileText className="w-3 h-3 text-emerald-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-bold text-white leading-tight">OCR Extraction</div>
                    <div className="text-[9px] text-slate-300 leading-tight mt-0.5">
                      Automated capture from RC, License, FIR & bills
                    </div>
                  </div>
                </div>

                {/* 2. Voice Assist */}
                <div 
                  className="flex items-center gap-2.5 rounded-xl p-2 transition-all hover:scale-[1.01]"
                  style={{
                    background: 'rgba(2, 18, 14, 0.85)',
                    border: '1px solid rgba(16, 185, 129, 0.35)',
                  }}
                >
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
                    <Mic className="w-3 h-3 text-emerald-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-bold text-white leading-tight">Voice Assistant</div>
                    <div className="text-[9px] text-slate-300 leading-tight mt-0.5">
                      Hands-free natural claim intake via Web Speech API
                    </div>
                  </div>
                </div>

                {/* 3. Chatbot */}
                <div 
                  className="flex items-center gap-2.5 rounded-xl p-2 transition-all hover:scale-[1.01]"
                  style={{
                    background: 'rgba(2, 18, 14, 0.85)',
                    border: '1px solid rgba(16, 185, 129, 0.35)',
                  }}
                >
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-3 h-3 text-emerald-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-bold text-white leading-tight">Smart Chatbot</div>
                    <div className="text-[9px] text-slate-300 leading-tight mt-0.5">
                      24/7 conversational FNOL guidance & status queries
                    </div>
                  </div>
                </div>

                {/* 4. Decision Support */}
                <div 
                  className="flex items-center gap-2.5 rounded-xl p-2 transition-all hover:scale-[1.01]"
                  style={{
                    background: 'rgba(2, 18, 14, 0.85)',
                    border: '1px solid rgba(16, 185, 129, 0.35)',
                  }}
                >
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-3 h-3 text-emerald-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-bold text-white leading-tight">Decision Support</div>
                    <div className="text-[9px] text-slate-300 leading-tight mt-0.5">
                      Policy history, risk profiling & validation insights
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ── 2. AUTOMATION (SKY BLUE HIGHLIGHT THEME) ── */}
            <div 
              className="rounded-2xl p-3.5 flex flex-col justify-between gap-2.5 backdrop-blur-md transition-all shadow-lg"
              style={{
                background: 'linear-gradient(180deg, rgba(56, 189, 248, 0.12) 0%, rgba(8, 28, 56, 0.70) 100%), rgba(2, 6, 18, 0.90)',
                border: '1.5px solid rgba(56, 189, 248, 0.50)',
                boxShadow: '0 0 20px rgba(56, 189, 248, 0.12)',
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-2.5 pb-2 border-b border-sky-500/25">
                <div className="w-7 h-7 rounded-xl bg-sky-500/20 border border-sky-400/50 flex items-center justify-center shrink-0 shadow-sm shadow-sky-500/30">
                  <Boxes className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-[12.5px] font-black text-sky-400 uppercase tracking-wider leading-tight">
                    Automation
                  </h3>
                  <p className="text-[9.5px] text-slate-300 font-medium leading-tight">
                    Policy logic execution & triage
                  </p>
                </div>
              </div>

              {/* 4 Dark High-Contrast Sub-Cards */}
              <div className="flex flex-col gap-1.5 w-full">
                
                {/* 1. Rule Engine */}
                <div 
                  className="flex items-center gap-2.5 rounded-xl p-2 transition-all hover:scale-[1.01]"
                  style={{
                    background: 'rgba(4, 16, 32, 0.85)',
                    border: '1px solid rgba(56, 189, 248, 0.35)',
                  }}
                >
                  <div className="w-6 h-6 rounded-lg bg-sky-500/20 border border-sky-400/40 flex items-center justify-center shrink-0">
                    <Boxes className="w-3 h-3 text-sky-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-bold text-white leading-tight">Deterministic Rule Engine</div>
                    <div className="text-[9px] text-slate-300 leading-tight mt-0.5">
                      Predefined business logic for fast risk evaluation
                    </div>
                  </div>
                </div>

                {/* 2. Validation */}
                <div 
                  className="flex items-center gap-2.5 rounded-xl p-2 transition-all hover:scale-[1.01]"
                  style={{
                    background: 'rgba(4, 16, 32, 0.85)',
                    border: '1px solid rgba(56, 189, 248, 0.35)',
                  }}
                >
                  <div className="w-6 h-6 rounded-lg bg-sky-500/20 border border-sky-400/40 flex items-center justify-center shrink-0">
                    <ClipboardCheck className="w-3 h-3 text-sky-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-bold text-white leading-tight">Automated Validation</div>
                    <div className="text-[9px] text-slate-300 leading-tight mt-0.5">
                      Zero-touch checks for policy validity & coverage limits
                    </div>
                  </div>
                </div>

                {/* 3. Fast Track */}
                <div 
                  className="flex items-center gap-2.5 rounded-xl p-2 transition-all hover:scale-[1.01]"
                  style={{
                    background: 'rgba(4, 16, 32, 0.85)',
                    border: '1px solid rgba(56, 189, 248, 0.35)',
                  }}
                >
                  <div className="w-6 h-6 rounded-lg bg-sky-500/20 border border-sky-400/40 flex items-center justify-center shrink-0">
                    <Zap className="w-3 h-3 text-sky-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-bold text-white leading-tight">Fast-Track Processing</div>
                    <div className="text-[9px] text-slate-300 leading-tight mt-0.5">
                      Straight-through settlement for eligible low-risk claims
                    </div>
                  </div>
                </div>

                {/* 4. Exception Handling */}
                <div 
                  className="flex items-center gap-2.5 rounded-xl p-2 transition-all hover:scale-[1.01]"
                  style={{
                    background: 'rgba(4, 16, 32, 0.85)',
                    border: '1px solid rgba(56, 189, 248, 0.35)',
                  }}
                >
                  <div className="w-6 h-6 rounded-lg bg-sky-500/20 border border-sky-400/40 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-3 h-3 text-sky-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-bold text-white leading-tight">Exception Triage</div>
                    <div className="text-[9px] text-slate-300 leading-tight mt-0.5">
                      Intelligent routing of complex claims to specialists
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* ── 3. FUTURE ENHANCEMENT (PURPLE HIGHLIGHT THEME) ── */}
          <div 
            className="rounded-2xl p-3 flex flex-col gap-2 backdrop-blur-md transition-all shadow-lg"
            style={{
              background: 'linear-gradient(180deg, rgba(168, 85, 247, 0.12) 0%, rgba(32, 10, 52, 0.70) 100%), rgba(2, 6, 18, 0.90)',
              border: '1.5px solid rgba(168, 85, 247, 0.50)',
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.12)',
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-2 pb-1.5 border-b border-purple-500/25">
              <div className="w-7 h-7 rounded-xl bg-purple-500/20 border border-purple-400/50 flex items-center justify-center shadow-sm shadow-purple-500/30">
                <Rocket className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <h3 className="text-[12px] font-black text-purple-300 uppercase tracking-wider leading-tight">
                  Future Enhancement <span className="text-slate-500 font-light">|</span> AI Picture Assessment
                </h3>
              </div>
            </div>

            {/* 4 Dark High-Contrast Sub-Cards */}
            <div className="grid grid-cols-4 gap-2 w-full">
              
              {/* Step 1 */}
              <div 
                className="rounded-xl p-2.5 flex flex-col gap-0.5 transition-all hover:scale-[1.02]"
                style={{
                  background: 'rgba(20, 6, 36, 0.85)',
                  border: '1px solid rgba(168, 85, 247, 0.35)',
                }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-purple-500/20 flex items-center justify-center">
                    <Camera className="w-3 h-3 text-purple-300" />
                  </div>
                  <span className="text-[10px] font-bold text-white">1. Photo Intake</span>
                </div>
                <p className="text-[8.5px] text-slate-300 leading-tight mt-0.5">
                  Multi-angle accident photo capture
                </p>
              </div>

              {/* Step 2 */}
              <div 
                className="rounded-xl p-2.5 flex flex-col gap-0.5 transition-all hover:scale-[1.02]"
                style={{
                  background: 'rgba(20, 6, 36, 0.85)',
                  border: '1px solid rgba(168, 85, 247, 0.35)',
                }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-purple-500/20 flex items-center justify-center">
                    <Car className="w-3 h-3 text-purple-300" />
                  </div>
                  <span className="text-[10px] font-bold text-white">2. Damage Area</span>
                </div>
                <p className="text-[8.5px] text-slate-300 leading-tight mt-0.5">
                  Computer vision dent & scratch analysis
                </p>
              </div>

              {/* Step 3 */}
              <div 
                className="rounded-xl p-2.5 flex flex-col gap-0.5 transition-all hover:scale-[1.02]"
                style={{
                  background: 'rgba(20, 6, 36, 0.85)',
                  border: '1px solid rgba(168, 85, 247, 0.35)',
                }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-purple-500/20 flex items-center justify-center">
                    <Search className="w-3 h-3 text-purple-300" />
                  </div>
                  <span className="text-[10px] font-bold text-white">3. Cost Estimate</span>
                </div>
                <p className="text-[8.5px] text-slate-300 leading-tight mt-0.5">
                  Automated OEM parts & labor calculation
                </p>
              </div>

              {/* Step 4 */}
              <div 
                className="rounded-xl p-2.5 flex flex-col gap-0.5 transition-all hover:scale-[1.02]"
                style={{
                  background: 'rgba(20, 6, 36, 0.85)',
                  border: '1px solid rgba(168, 85, 247, 0.35)',
                }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-purple-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-purple-300" />
                  </div>
                  <span className="text-[10px] font-bold text-white">4. Auto Settle</span>
                </div>
                <p className="text-[8.5px] text-slate-300 leading-tight mt-0.5">
                  Touchless visual claim settlement
                </p>
              </div>

            </div>
          </div>

        </div>


        {/* ════════════════════════════════════════════════════════════════════
            RIGHT SIDE (COL-SPAN-4): 4. TECHNOLOGY STACK (INDIGO HIGHLIGHT THEME)
        ════════════════════════════════════════════════════════════════════ */}
        <div 
          className="col-span-4 rounded-2xl p-3.5 flex flex-col justify-between gap-2 backdrop-blur-md transition-all shadow-lg w-full"
          style={{
            background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.12) 0%, rgba(18, 16, 48, 0.70) 100%), rgba(2, 6, 18, 0.90)',
            border: '1.5px solid rgba(99, 102, 241, 0.50)',
            boxShadow: '0 0 20px rgba(99, 102, 241, 0.12)',
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-2.5 pb-2 border-b border-indigo-500/25">
            <div className="w-7 h-7 rounded-xl bg-indigo-500/20 border border-indigo-400/50 flex items-center justify-center shrink-0 shadow-sm shadow-indigo-500/30">
              <Layers className="w-4 h-4 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-[12.5px] font-black text-indigo-300 uppercase tracking-wider leading-tight">
                Technology Stack
              </h3>
              <p className="text-[9.5px] text-slate-300 font-medium leading-tight">
                Enterprise .NET 8 & Modern Cloud Architecture
              </p>
            </div>
          </div>

          {/* 6 Dark High-Contrast Category Rows */}
          <div className="flex flex-col gap-1.5 w-full">
            
            {/* 1. Backend */}
            <div 
              className="rounded-xl p-2 flex items-start gap-2.5 transition-all hover:scale-[1.01]"
              style={{
                background: 'rgba(10, 10, 32, 0.85)',
                border: '1px solid rgba(99, 102, 241, 0.35)',
              }}
            >
              <div className="w-5 h-5 rounded-lg bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center shrink-0 mt-0.5">
                <Server className="w-3 h-3 text-indigo-300" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10.5px] font-bold text-white flex items-center justify-between">
                  <span>Backend Architecture</span>
                  <span className="text-[8px] font-medium text-indigo-300 bg-indigo-500/20 px-1.5 py-0.2 rounded border border-indigo-500/40">.NET 8</span>
                </div>
                <div className="text-[8.5px] text-slate-300 leading-tight mt-0.5">
                  • .NET 8 ASP.NET Core Web API • C# • EF Core • PostgreSQL
                </div>
              </div>
            </div>

            {/* 2. Frontend */}
            <div 
              className="rounded-xl p-2 flex items-start gap-2.5 transition-all hover:scale-[1.01]"
              style={{
                background: 'rgba(10, 10, 32, 0.85)',
                border: '1px solid rgba(99, 102, 241, 0.35)',
              }}
            >
              <div className="w-5 h-5 rounded-lg bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center shrink-0 mt-0.5">
                <Monitor className="w-3 h-3 text-indigo-300" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10.5px] font-bold text-white flex items-center justify-between">
                  <span>Frontend Application</span>
                  <span className="text-[8px] font-medium text-indigo-300 bg-indigo-500/20 px-1.5 py-0.2 rounded border border-indigo-500/40">Web App</span>
                </div>
                <div className="text-[8.5px] text-slate-300 leading-tight mt-0.5">
                  • Role-Based Responsive Web App • Web Speech API
                </div>
              </div>
            </div>

            {/* 3. Database & Cloud */}
            <div 
              className="rounded-xl p-2 flex items-start gap-2.5 transition-all hover:scale-[1.01]"
              style={{
                background: 'rgba(10, 10, 32, 0.85)',
                border: '1px solid rgba(99, 102, 241, 0.35)',
              }}
            >
              <div className="w-5 h-5 rounded-lg bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center shrink-0 mt-0.5">
                <Database className="w-3 h-3 text-indigo-300" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10.5px] font-bold text-white flex items-center justify-between">
                  <span>Database & Cloud Infra</span>
                  <span className="text-[8px] font-medium text-indigo-300 bg-indigo-500/20 px-1.5 py-0.2 rounded border border-indigo-500/40">Supabase</span>
                </div>
                <div className="text-[8.5px] text-slate-300 leading-tight mt-0.5">
                  • PostgreSQL • Supabase Cloud & Auth • JWT • Storage
                </div>
              </div>
            </div>

            {/* 4. API & Documentation */}
            <div 
              className="rounded-xl p-2 flex items-start gap-2.5 transition-all hover:scale-[1.01]"
              style={{
                background: 'rgba(10, 10, 32, 0.85)',
                border: '1px solid rgba(99, 102, 241, 0.35)',
              }}
            >
              <div className="w-5 h-5 rounded-lg bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center shrink-0 mt-0.5">
                <FileCode className="w-3 h-3 text-indigo-300" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10.5px] font-bold text-white flex items-center justify-between">
                  <span>API & Documentation</span>
                  <span className="text-[8px] font-medium text-indigo-300 bg-indigo-500/20 px-1.5 py-0.2 rounded border border-indigo-500/40">OpenAPI</span>
                </div>
                <div className="text-[8.5px] text-slate-300 leading-tight mt-0.5">
                  • Swagger UI • Swashbuckle • OpenAPI Specification
                </div>
              </div>
            </div>

            {/* 5. AI / Intelligent Technologies */}
            <div 
              className="rounded-xl p-2 flex items-start gap-2.5 transition-all hover:scale-[1.01]"
              style={{
                background: 'rgba(10, 10, 32, 0.85)',
                border: '1px solid rgba(99, 102, 241, 0.35)',
              }}
            >
              <div className="w-5 h-5 rounded-lg bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center shrink-0 mt-0.5">
                <Cpu className="w-3 h-3 text-indigo-300" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10.5px] font-bold text-white flex items-center justify-between">
                  <span>AI & Intelligent Services</span>
                  <span className="text-[8px] font-medium text-indigo-300 bg-indigo-500/20 px-1.5 py-0.2 rounded border border-indigo-500/40">AI Core</span>
                </div>
                <div className="text-[8.5px] text-slate-300 leading-tight mt-0.5">
                  • Tesseract OCR • Speech Recognition • Rule Engine
                </div>
              </div>
            </div>

            {/* 6. Development & Tools */}
            <div 
              className="rounded-xl p-2 flex items-start gap-2.5 transition-all hover:scale-[1.01]"
              style={{
                background: 'rgba(10, 10, 32, 0.85)',
                border: '1px solid rgba(99, 102, 241, 0.35)',
              }}
            >
              <div className="w-5 h-5 rounded-lg bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center shrink-0 mt-0.5">
                <Terminal className="w-3 h-3 text-indigo-300" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10.5px] font-bold text-white flex items-center justify-between">
                  <span>Dev & Collaboration</span>
                  <span className="text-[8px] font-medium text-indigo-300 bg-indigo-500/20 px-1.5 py-0.2 rounded border border-indigo-500/40">Tools</span>
                </div>
                <div className="text-[8.5px] text-slate-300 leading-tight mt-0.5">
                  • Visual Studio Code • Claude Code • Git
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
