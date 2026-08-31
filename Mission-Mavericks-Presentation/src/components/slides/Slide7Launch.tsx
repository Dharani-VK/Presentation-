import React from 'react';
import { motion } from 'framer-motion';
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
  Camera,
  Car,
  Search,
  CheckCircle2,
  Server,
  Monitor,
  Database,
  FileCode,
  Cpu,
  Terminal,
  Layers,
  LucideIcon,
} from 'lucide-react';

interface AiFeatureItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface TechStackItem {
  icon: LucideIcon;
  title: string;
  badge: string;
  desc: string;
}

export const Slide7Launch: React.FC = () => {
  // ── 1. AI INTELLIGENCE DATA ──
  const aiItems: AiFeatureItem[] = [
    {
      icon: FileText,
      title: 'OCR Extraction',
      desc: 'Automated capture from RC, License, FIR & bills',
    },
    {
      icon: Mic,
      title: 'Voice Assistant',
      desc: 'Hands-free natural claim intake via Web Speech API',
    },
    {
      icon: MessageSquare,
      title: 'Smart Chatbot',
      desc: '24/7 conversational FNOL guidance & status queries',
    },
    {
      icon: TrendingUp,
      title: 'Decision Support',
      desc: 'Policy history, risk profiling & validation insights',
    },
  ];

  // ── 2. AUTOMATION DATA ──
  const automationItems: AiFeatureItem[] = [
    {
      icon: Boxes,
      title: 'Deterministic Rule Engine',
      desc: 'Predefined business logic for fast risk evaluation',
    },
    {
      icon: ClipboardCheck,
      title: 'Automated Validation',
      desc: 'Zero-touch checks for policy validity & coverage limits',
    },
    {
      icon: Zap,
      title: 'Fast-Track Processing',
      desc: 'Straight-through settlement for eligible low-risk claims',
    },
    {
      icon: AlertTriangle,
      title: 'Exception Triage',
      desc: 'Intelligent routing of complex claims to specialists',
    },
  ];

  // ── 3. FUTURE ENHANCEMENT DATA ──
  const futureItems: AiFeatureItem[] = [
    {
      icon: Camera,
      title: '1. Photo Intake',
      desc: 'Multi-angle accident photo capture',
    },
    {
      icon: Car,
      title: '2. Damage Area',
      desc: 'Computer vision dent & scratch analysis',
    },
    {
      icon: Search,
      title: '3. Cost Estimate',
      desc: 'Automated OEM parts & labor calculation',
    },
    {
      icon: CheckCircle2,
      title: '4. Auto Settle',
      desc: 'Touchless visual claim settlement',
    },
  ];

  // ── 4. TECH STACK DATA ──
  const techStackItems: TechStackItem[] = [
    {
      icon: Server,
      title: 'Backend Architecture',
      badge: '.NET 8',
      desc: '• .NET 8 ASP.NET Core Web API • C# • EF Core • PostgreSQL',
    },
    {
      icon: Monitor,
      title: 'Frontend Application',
      badge: 'Web App',
      desc: '• Role-Based Responsive Web App • Web Speech API',
    },
    {
      icon: Database,
      title: 'Database & Cloud Infra',
      badge: 'Supabase',
      desc: '• PostgreSQL • Supabase Cloud & Auth • JWT • Storage',
    },
    {
      icon: FileCode,
      title: 'API & Documentation',
      badge: 'OpenAPI',
      desc: '• Swagger UI • Swashbuckle • OpenAPI Specification',
    },
    {
      icon: Cpu,
      title: 'AI & Intelligent Services',
      badge: 'AI Core',
      desc: '• Tesseract OCR • Speech Recognition • Rule Engine',
    },
    {
      icon: Terminal,
      title: 'Dev & Collaboration',
      badge: 'Tools',
      desc: '• Visual Studio Code • Claude Code • Git',
    },
  ];

  // Subtle Watermark Graphic Renderer
  const renderWatermark = (type: 'circular' | 'circuit' | 'tech', color: string) => {
    switch (type) {
      case 'circuit':
        return (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06] overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 500"
            fill="none"
          >
            <path
              d="M30 40 H180 V120 H360 V220 H200 V300 H320 V440"
              stroke={color}
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <path
              d="M70 180 V260 H150 V380 H280"
              stroke={color}
              strokeWidth="1.5"
            />
            <circle cx="180" cy="120" r="5" fill={color} />
            <circle cx="360" cy="220" r="6" fill={color} />
            <circle cx="200" cy="300" r="5" fill={color} />
            <circle cx="150" cy="380" r="4" fill={color} />
            <circle cx="280" cy="380" r="5" fill={color} />
          </svg>
        );
      case 'tech':
        return (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06] overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 600"
            fill="none"
          >
            <rect x="40" y="40" width="320" height="520" rx="16" stroke={color} strokeWidth="1.5" strokeDasharray="6 6" />
            <path d="M40 140 H360 M40 280 H360 M40 420 H360" stroke={color} strokeWidth="1" strokeOpacity="0.4" />
            <circle cx="70" cy="90" r="4" fill={color} />
            <circle cx="95" cy="90" r="4" fill={color} />
            <circle cx="120" cy="90" r="4" fill={color} />
          </svg>
        );
      case 'circular':
      default:
        return (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06] overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 500"
            fill="none"
          >
            <circle cx="320" cy="100" r="180" stroke={color} strokeWidth="1.5" strokeDasharray="8 8" />
            <circle cx="320" cy="100" r="120" stroke={color} strokeWidth="1.5" />
            <circle cx="80" cy="420" r="150" stroke={color} strokeWidth="1.5" strokeDasharray="6 6" />
          </svg>
        );
    }
  };

  return (
    <div className="w-full max-w-[1480px] h-[calc(100vh-8.2rem)] min-h-[580px] max-h-[840px] mx-auto flex flex-col justify-between items-center px-3 sm:px-6 lg:px-8 py-2 select-none">
      
      {/* Background Decorative Ambient Radial Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[8%] left-[10%] w-[420px] h-[320px] rounded-full bg-[#36E5B0]/10 blur-[130px]" />
        <div className="absolute top-[18%] left-[40%] w-[450px] h-[340px] rounded-full bg-[#00D9FF]/10 blur-[140px]" />
        <div className="absolute bottom-[10%] left-[25%] w-[480px] h-[300px] rounded-full bg-[#8B5CF6]/12 blur-[140px]" />
        <div className="absolute top-[12%] right-[10%] w-[420px] h-[320px] rounded-full bg-[#6366F1]/12 blur-[130px]" />
      </div>

      {/* ── 1. SLIDE HEADER ── */}
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center flex flex-col items-center shrink-0 mb-2.5"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-black font-display tracking-tight text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)] flex items-center justify-center gap-2.5 flex-wrap">
          <span>ClaimShield+</span>
          <span className="text-slate-600 font-light">|</span>
          <span className="bg-gradient-to-r from-[#36E5B0] via-[#00D9FF] to-[#8B5CF6] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,217,255,0.4)]">
            AI &amp; Automation
          </span>
        </h1>
      </motion.div>

      {/* ── 2. MAIN 2-COLUMN GRID (LEFT 67% + RIGHT 33%) ── */}
      <div className="relative z-10 w-full flex-1 grid grid-cols-12 gap-3.5 sm:gap-4 lg:gap-4.5 min-h-0 items-stretch">
        
        {/* ════════════════════════════════════════════════════════════════════
            LEFT SIDE (COL-SPAN-8): AI, AUTOMATION, FUTURE ENHANCEMENT
        ════════════════════════════════════════════════════════════════════ */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-3 sm:gap-3.5 justify-between min-h-0">
          
          {/* TOP ROW: AI INTELLIGENCE & AUTOMATION */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full flex-1 min-h-0">
            
            {/* ── 1. AI INTELLIGENCE (EMERALD HIGHLIGHT THEME) ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl bg-[#040f23]/80 border border-[#36E5B0]/25 hover:border-[#36E5B0]/60 backdrop-blur-2xl shadow-2xl hover:shadow-[0_0_35px_rgba(54,229,176,0.18)] transition-all duration-300 flex flex-col p-3.5 sm:p-4 overflow-hidden justify-between"
            >
              {/* 3px Top Gradient Highlight Bar */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#36E5B0] to-[#10B981] shadow-sm" />
              
              {/* Watermark */}
              {renderWatermark('circular', '#36E5B0')}

              {/* Header */}
              <div className="relative z-10 flex items-center gap-2.5 sm:gap-3 pb-2.5 mb-2 border-b border-white/[0.07] shrink-0">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center bg-[#36E5B0]/10 border border-[#36E5B0]/30 text-[#36E5B0] shadow-md shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-[#36E5B0]" />
                </div>
                <div>
                  <h2 className="text-xs sm:text-[13px] lg:text-sm font-black font-display tracking-wider text-[#36E5B0] uppercase drop-shadow-[0_0_12px_rgba(0,0,0,0.5)]">
                    AI Intelligence
                  </h2>
                  <p className="text-[9.5px] sm:text-[10px] text-slate-300 font-medium leading-tight">
                    Intake &amp; document data extraction
                  </p>
                </div>
              </div>

              {/* 4 Interactive Metric Rows */}
              <div className="relative z-10 flex-1 grid grid-rows-4 gap-1.5 sm:gap-2 min-h-0">
                {aiItems.map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.2 + idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ x: 4, transition: { duration: 0.18 } }}
                      className="row-item group/row flex items-center gap-2.5 sm:gap-3 px-3 py-1.5 sm:py-2 rounded-xl bg-[#071a38]/60 border border-[#173a67]/50 hover:bg-[#0c2f5d]/85 hover:border-[#36E5B0]/60 hover:shadow-[0_0_18px_rgba(54,229,176,0.22)] backdrop-blur-md transition-all duration-200 cursor-default"
                    >
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl flex items-center justify-center bg-[#36E5B0]/10 border border-[#36E5B0]/30 text-[#36E5B0] shrink-0 group-hover/row:scale-110 group-hover/row:border-opacity-80 transition-all duration-200">
                        <ItemIcon className="w-3.5 h-3.5 text-[#36E5B0]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[11px] sm:text-xs font-bold font-display text-white/95 group-hover/row:text-white tracking-wide transition-colors duration-200 leading-tight">
                          {item.title}
                        </div>
                        <div className="text-[9px] sm:text-[9.5px] text-slate-300/90 group-hover/row:text-slate-200 font-medium leading-tight mt-0.5 transition-colors duration-200">
                          {item.desc}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* ── 2. AUTOMATION (SKY BLUE HIGHLIGHT THEME) ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl bg-[#040f23]/80 border border-[#00D9FF]/25 hover:border-[#00D9FF]/60 backdrop-blur-2xl shadow-2xl hover:shadow-[0_0_35px_rgba(0,217,255,0.18)] transition-all duration-300 flex flex-col p-3.5 sm:p-4 overflow-hidden justify-between"
            >
              {/* 3px Top Gradient Highlight Bar */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#00D9FF] to-[#3B82F6] shadow-sm" />
              
              {/* Watermark */}
              {renderWatermark('circuit', '#00D9FF')}

              {/* Header */}
              <div className="relative z-10 flex items-center gap-2.5 sm:gap-3 pb-2.5 mb-2 border-b border-white/[0.07] shrink-0">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center bg-[#00D9FF]/10 border border-[#00D9FF]/30 text-[#00D9FF] shadow-md shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Boxes className="w-4 h-4 sm:w-5 sm:h-5 text-[#00D9FF]" />
                </div>
                <div>
                  <h2 className="text-xs sm:text-[13px] lg:text-sm font-black font-display tracking-wider text-[#00D9FF] uppercase drop-shadow-[0_0_12px_rgba(0,0,0,0.5)]">
                    Automation
                  </h2>
                  <p className="text-[9.5px] sm:text-[10px] text-slate-300 font-medium leading-tight">
                    Policy logic execution &amp; triage
                  </p>
                </div>
              </div>

              {/* 4 Interactive Metric Rows */}
              <div className="relative z-10 flex-1 grid grid-rows-4 gap-1.5 sm:gap-2 min-h-0">
                {automationItems.map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.3 + idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ x: 4, transition: { duration: 0.18 } }}
                      className="row-item group/row flex items-center gap-2.5 sm:gap-3 px-3 py-1.5 sm:py-2 rounded-xl bg-[#071a38]/60 border border-[#173a67]/50 hover:bg-[#0c2f5d]/85 hover:border-[#00D9FF]/60 hover:shadow-[0_0_18px_rgba(0,217,255,0.22)] backdrop-blur-md transition-all duration-200 cursor-default"
                    >
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl flex items-center justify-center bg-[#00D9FF]/10 border border-[#00D9FF]/30 text-[#00D9FF] shrink-0 group-hover/row:scale-110 group-hover/row:border-opacity-80 transition-all duration-200">
                        <ItemIcon className="w-3.5 h-3.5 text-[#00D9FF]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[11px] sm:text-xs font-bold font-display text-white/95 group-hover/row:text-white tracking-wide transition-colors duration-200 leading-tight">
                          {item.title}
                        </div>
                        <div className="text-[9px] sm:text-[9.5px] text-slate-300/90 group-hover/row:text-slate-200 font-medium leading-tight mt-0.5 transition-colors duration-200">
                          {item.desc}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

          </div>

          {/* ── 3. FUTURE ENHANCEMENT (PURPLE HIGHLIGHT THEME) ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3, transition: { duration: 0.25 } }}
            className="group relative rounded-2xl bg-[#040f23]/80 border border-[#8B5CF6]/25 hover:border-[#8B5CF6]/60 backdrop-blur-2xl shadow-2xl hover:shadow-[0_0_35px_rgba(139,92,246,0.18)] transition-all duration-300 flex flex-col p-3 sm:p-3.5 overflow-hidden shrink-0"
          >
            {/* 3px Top Gradient Highlight Bar */}
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] shadow-sm" />

            {/* Header */}
            <div className="relative z-10 flex items-center gap-2.5 pb-2 mb-2 border-b border-white/[0.07] shrink-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#8B5CF6] shadow-md shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8B5CF6]" />
              </div>
              <h2 className="text-xs sm:text-[13px] font-black font-display tracking-wider text-[#8B5CF6] uppercase drop-shadow-[0_0_12px_rgba(0,0,0,0.5)]">
                Future Enhancement <span className="text-slate-500 font-light mx-1">|</span> AI Picture Assessment
              </h2>
            </div>

            {/* 4 Interactive Step Cards */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2 w-full">
              {futureItems.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.4 + idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -3, transition: { duration: 0.18 } }}
                    className="row-item group/row rounded-xl p-2 sm:p-2.5 flex flex-col gap-1 bg-[#071a38]/60 border border-[#173a67]/50 hover:bg-[#0c2f5d]/85 hover:border-[#8B5CF6]/60 hover:shadow-[0_0_18px_rgba(139,92,246,0.22)] backdrop-blur-md transition-all duration-200 cursor-default"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg flex items-center justify-center bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#8B5CF6] shrink-0 group-hover/row:scale-110 group-hover/row:border-opacity-80 transition-all duration-200">
                        <ItemIcon className="w-3 h-3 text-[#8B5CF6]" />
                      </div>
                      <span className="text-[10.5px] sm:text-[11px] font-bold font-display text-white/95 group-hover/row:text-white tracking-wide truncate transition-colors duration-200">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-[8.5px] sm:text-[9px] text-slate-300/90 group-hover/row:text-slate-200 font-medium leading-tight mt-0.5 transition-colors duration-200">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* ════════════════════════════════════════════════════════════════════
            RIGHT SIDE (COL-SPAN-4): 4. TECHNOLOGY STACK (INDIGO HIGHLIGHT THEME)
        ════════════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -3, transition: { duration: 0.25 } }}
          className="col-span-12 lg:col-span-4 group relative rounded-2xl bg-[#040f23]/80 border border-[#6366F1]/25 hover:border-[#6366F1]/60 backdrop-blur-2xl shadow-2xl hover:shadow-[0_0_35px_rgba(99,102,241,0.18)] transition-all duration-300 flex flex-col p-3.5 sm:p-4 overflow-hidden justify-between min-h-0"
        >
          {/* 3px Top Gradient Highlight Bar */}
          <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#5B92FA] via-[#6366F1] to-[#8B5CF6] shadow-sm" />

          {/* Watermark */}
          {renderWatermark('tech', '#6366F1')}

          {/* Header */}
          <div className="relative z-10 flex items-center gap-2.5 sm:gap-3 pb-2.5 mb-2 border-b border-white/[0.07] shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center bg-[#6366F1]/10 border border-[#6366F1]/30 text-[#818CF8] shadow-md shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#818CF8]" />
            </div>
            <div>
              <h2 className="text-xs sm:text-[13px] lg:text-sm font-black font-display tracking-wider text-[#818CF8] uppercase drop-shadow-[0_0_12px_rgba(0,0,0,0.5)]">
                Technology Stack
              </h2>
              <p className="text-[9.5px] sm:text-[10px] text-slate-300 font-medium leading-tight">
                Enterprise .NET 8 &amp; Modern Cloud Architecture
              </p>
            </div>
          </div>

          {/* 6 Interactive Category Rows */}
          <div className="relative z-10 flex-1 grid grid-rows-6 gap-1.5 sm:gap-2 min-h-0">
            {techStackItems.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.35 + idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: 4, transition: { duration: 0.18 } }}
                  className="row-item group/row flex items-start gap-2.5 px-3 py-1.5 sm:py-2 rounded-xl bg-[#071a38]/60 border border-[#173a67]/50 hover:bg-[#0c2f5d]/85 hover:border-[#6366F1]/60 hover:shadow-[0_0_18px_rgba(99,102,241,0.22)] backdrop-blur-md transition-all duration-200 cursor-default"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center bg-[#6366F1]/10 border border-[#6366F1]/30 text-[#818CF8] shrink-0 mt-0.5 group-hover/row:scale-110 group-hover/row:border-opacity-80 transition-all duration-200">
                    <ItemIcon className="w-3 h-3 text-[#818CF8]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10.5px] sm:text-[11px] font-bold font-display text-white/95 group-hover/row:text-white flex items-center justify-between transition-colors duration-200">
                      <span className="truncate">{item.title}</span>
                      <span className="text-[8px] sm:text-[8.5px] font-semibold text-indigo-300 bg-indigo-500/20 px-1.5 py-0.2 rounded border border-indigo-500/40 group-hover/row:bg-indigo-500/30 group-hover/row:border-indigo-400/60 transition-all duration-200 shrink-0 ml-1">
                        {item.badge}
                      </span>
                    </div>
                    <div className="text-[8.5px] sm:text-[9px] text-slate-300/90 group-hover/row:text-slate-200 font-medium leading-tight mt-0.5 transition-colors duration-200">
                      {item.desc}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
};
