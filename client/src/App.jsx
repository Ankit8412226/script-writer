import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Bell,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  Clapperboard,
  Copy,
  Cpu,
  FileText,
  Flame,
  Home,
  LayoutGrid,
  Mail,
  RotateCcw,
  Save,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
  Theater,
  TrendingUp,
  Users,
  Video,
  Zap
} from 'lucide-react';
import { useState } from 'react';

// --- Sub-components ---

const BottomTabNav = ({ activeTab, setActiveTab }) => (
  <div className="fixed bottom-0 left-0 right-0 bg-dark-bg/80 backdrop-blur-xl border-t border-dark-border py-4 px-10 flex justify-between items-center z-[90] lg:hidden">
    <button onClick={() => setActiveTab('home')} className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}>
      <Home className="w-[20px] h-[20px]" />
      <span className="text-[9px] font-bold tracking-tight">Home</span>
    </button>
    <button onClick={() => setActiveTab('scripts')} className={`nav-item ${activeTab === 'scripts' ? 'active' : ''}`}>
      <FileText className="w-[20px] h-[20px]" />
      <span className="text-[9px] font-bold tracking-tight">Scripts</span>
    </button>
    <button onClick={() => setActiveTab('templates')} className={`nav-item ${activeTab === 'templates' ? 'active' : ''}`}>
      <LayoutGrid className="w-[20px] h-[20px]" />
      <span className="text-[9px] font-bold tracking-tight">Templates</span>
    </button>
    <button onClick={() => setActiveTab('settings')} className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}>
      <Settings className="w-[20px] h-[20px]" />
      <span className="text-[9px] font-bold tracking-tight">Settings</span>
    </button>
  </div>
);

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="figma-card group hover:bg-[#151930] transition-all">
    <div className="w-12 h-12 bg-primary-blue/10 border border-primary-blue/20 rounded-xl flex items-center justify-center mb-6 text-primary-blue group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-bold mb-3">{title}</h3>
    <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
  </div>
);

const StyleItem = ({ name, desc, icon: Icon, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full text-left p-4 rounded-2xl border transition-all flex flex-col gap-3 ${
      active
        ? 'border-primary-blue bg-primary-blue/10 shadow-[0_0_20px_rgba(48,49,255,0.1)]'
        : 'border-dark-border bg-dark-surface hover:border-text-muted/30'
    }`}
  >
    <div className={`${active ? 'text-white' : 'text-text-muted'} group-hover:text-primary-blue transition-colors`}>
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <div className="font-bold text-[13px] text-white group-hover:text-primary-blue transition-colors">{name}</div>
      <div className="text-[10px] text-text-muted">{desc}</div>
    </div>
  </button>
);

const HookCard = ({ visual, voiceover, onCopy }) => (
  <div className="bg-[#0F1221] border border-dark-border rounded-3xl overflow-hidden mb-6">
    <div className="flex justify-between items-center p-6 border-b border-dark-border/50 bg-[#151930]/30">
      <div className="flex items-center gap-2">
         <div className="w-1.5 h-1.5 bg-primary-blue rounded-full"></div>
         <span className="text-[10px] font-bold text-primary-hover uppercase tracking-widest">The Hook</span>
      </div>
      <div className="flex gap-4 text-text-muted/60">
        <button onClick={onCopy} className="hover:text-white transition-colors"><Copy className="w-3.5 h-3.5" /></button>
        <button className="hover:text-white transition-colors"><RotateCcw className="w-3.5 h-3.5" /></button>
      </div>
    </div>
    <div className="p-8 space-y-6">
      <div className="flex gap-4">
        <div className="w-1 bg-primary-blue/50 rounded-full"></div>
        <div className="space-y-1">
          <label className="text-[9px] font-extrabold text-text-muted uppercase tracking-wider">Visual Direction</label>
          <p className="text-[14px] text-white/90 leading-relaxed font-medium">{visual}</p>
        </div>
      </div>
      <div className="space-y-1 pl-5">
        <label className="text-[9px] font-extrabold text-text-muted uppercase tracking-wider">Voiceover Script</label>
        <p className="text-[15px] text-white/95 leading-relaxed font-bold italic">"{voiceover}"</p>
      </div>
    </div>
  </div>
);

const SceneCard = ({ label, visual, voiceover, onCopy }) => (
  <div className="bg-[#0F1221] border border-dark-border rounded-3xl overflow-hidden mb-6">
    <div className="flex justify-between items-center p-6 border-b border-dark-border/50">
      <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{label}</span>
      <div className="flex gap-4 text-text-muted/60">
        <button onClick={onCopy} className="hover:text-white transition-colors"><Copy className="w-3.5 h-3.5" /></button>
        <button className="hover:text-white transition-colors"><RotateCcw className="w-3.5 h-3.5" /></button>
      </div>
    </div>
    <div className="p-8 space-y-5">
      <div className="space-y-1">
        <label className="text-[9px] font-extrabold text-text-muted uppercase tracking-wider">Visual</label>
        <p className="text-[14px] text-white/70 leading-relaxed italic">{visual}</p>
      </div>
      <div className="space-y-1">
        <label className="text-[9px] font-extrabold text-text-muted uppercase tracking-wider">Voiceover</label>
        <p className="text-[15px] text-white/95 leading-relaxed font-medium">{voiceover}</p>
      </div>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [topic, setTopic] = useState('');
  const [duration, setDuration] = useState('30 Seconds (Shorts/Reels)');
  const [style, setStyle] = useState('Dark Comedy');
  const [platform, setPlatform] = useState('TikTok/Reels');
  const [email, setEmail] = useState(() => localStorage.getItem('user_email') || '');
  const [loading, setLoading] = useState(false);
  const [script, setScript] = useState(null);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const [copyAllStatus, setCopyAllStatus] = useState('Copy Full Script');
  const [loadingStep, setLoadingStep] = useState(0);

  const loadingSteps = [
    "Analyzing viral potential...",
    "Optimizing pattern interrupts...",
    "Synthesizing visual direction...",
    "Finalizing retention loops..."
  ];

  const styles = [
    { name: 'Dark Comedy', desc: 'Witty and edgy', icon: Theater },
    { name: 'Cinematic', desc: 'Visual storytelling', icon: Clapperboard },
    { name: 'Motivational', desc: 'Inspiring energy', icon: Zap },
    { name: 'Savage', desc: 'Direct and bold', icon: Flame },
    { name: 'Edu-tainment', desc: 'Fun learning', icon: BookOpen },
    { name: 'Storytelling', desc: 'Narrative arcs', icon: Video },
  ];

  const platforms = [
    { name: 'TikTok/Reels', icon: TrendingUp },
    { name: 'YouTube', icon: Video },
    { name: 'LinkedIn', icon: Users },
  ];

  const validateEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleInitialSubmit = () => {
    if (!topic.trim()) { setError('Please enter a video topic'); return; }
    setError('');

    const savedEmail = localStorage.getItem('user_email');
    if (savedEmail && validateEmail(savedEmail)) {
      generateScript();
    } else {
      setShowEmailModal(true);
    }
  };

  const generateScript = async () => {
    if (!validateEmail(email)) { setError('Invalid email address'); return; }

    setLoading(true);
    setLoadingStep(0);
    setShowEmailModal(false);
    setError('');

    // Cycle through loading steps
    const interval = setInterval(() => {
      setLoadingStep(prev => (prev < loadingSteps.length - 1 ? prev + 1 : prev));
    }, 2000);

    try {
      const response = await fetch('/api/generate-script', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, style, duration, platform, email })
      });
      const data = await response.json();
      if (data.success) {
        setScript(data.data);
        localStorage.setItem('user_email', email);
      } else {
        setError(data.error || 'Generation failed');
      }
    } catch {
      setError('Connection failed');
    } finally {
      setLoading(false);
      clearInterval(interval);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text || JSON.stringify(script));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyAll = () => {
    if (!script) return;
    const fullText = `TOPIC: ${topic}\nSTYLE: ${style}\nPLATFORM: ${platform}\n\nHOOK:\nVisual: ${script.hook?.visual || 'N/A'}\nVoiceover: ${script.hook?.voiceover || script.hook}\n\nSCENES:\n${script.scenes?.map((s, i) => `Scene ${i+1}:\nVisual: ${s.visual}\nVoiceover: ${s.voiceover}`).join('\n\n')}\n\nCTA: ${script.cta}`;
    navigator.clipboard.writeText(fullText);
    setCopyAllStatus('Copied! ✓');
    setTimeout(() => setCopyAllStatus('Copy Full Script'), 2000);
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white pb-24 font-['Inter'] relative overflow-x-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Navigation */}
        <header className="flex justify-between items-center py-8 lg:py-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-blue rounded-xl flex items-center justify-center shadow-lg shadow-primary-blue/20">
              <Clapperboard className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight leading-none">ScriptForge AI</span>
              <span className="text-[10px] text-primary-blue font-bold uppercase tracking-[0.2em] mt-1">Creator Suite</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            <nav className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-text-muted">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            </nav>
            <button className="w-11 h-11 bg-dark-surface rounded-full border border-dark-border flex items-center justify-center relative hover:border-text-muted transition-colors">
              <Bell className="w-5 h-5 text-text-muted" />
              <div className="absolute top-3.5 right-3.5 w-2 h-2 bg-primary-blue rounded-full border-2 border-dark-bg"></div>
            </button>
          </div>

          <button className="lg:hidden w-11 h-11 bg-dark-surface rounded-full border border-dark-border flex items-center justify-center">
            <Bell className="w-5 h-5 text-text-muted" />
          </button>
        </header>

        <AnimatePresence mode="wait">
          {!script && !loading ? (
            <motion.div
              key="landing-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-12 lg:mt-24"
            >
              {/* Hero Section */}
              <div className="grid lg:grid-cols-[1fr_450px] gap-12 lg:gap-24 items-start">

                <div className="lg:pt-12">
                   <div className="flex items-center gap-2 mb-6">
                      <span className="glass-tag">AI Powered</span>
                      <span className="text-text-muted text-[10px] font-bold uppercase tracking-widest">Version 2.0 Launch</span>
                   </div>
                   <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-8">
                     Turn Your Ideas Into <br />
                     <span className="text-primary-blue">Viral Video</span> Scripts <br />
                     In Seconds.
                   </h1>
                   <p className="text-lg text-text-muted leading-relaxed max-w-[500px] mb-10">
                     Stop staring at a blank screen. Generate high-retention, professional scripts optimized for YouTube, Reels, and TikTok using our advanced Meta-Llama engine.
                   </p>

                   <div className="flex flex-wrap gap-6 items-center mb-12">
                      <div className="flex -space-x-3">
                        {[1,2,3,4].map(i => (
                          <div key={i} className="w-10 h-10 rounded-full border-2 border-dark-bg bg-dark-surface flex items-center justify-center text-[10px] font-bold overflow-hidden">
                            <img src={`https://i.pravatar.cc/40?img=${i+10}`} alt="avatar" />
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-sm">Joined by 10,000+ Creators</span>
                        <div className="flex gap-1">
                          {[1,2,3,4,5].map(i => <Sparkles key={i} className="w-3 h-3 text-primary-blue fill-primary-blue" />)}
                          <span className="text-[10px] text-text-muted font-bold ml-1">4.9/5 Rating</span>
                        </div>
                      </div>
                   </div>

                   {/* Stats Grid */}
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-10 border-t border-dark-border/50 mb-12">
                      <div>
                        <div className="text-2xl font-black mb-1">15s</div>
                        <div className="text-[10px] text-text-muted uppercase font-bold tracking-widest">Avg Generation</div>
                      </div>
                      <div>
                        <div className="text-2xl font-black mb-1">98%</div>
                        <div className="text-[10px] text-text-muted uppercase font-bold tracking-widest">Retention Rate</div>
                      </div>
                      <div className="col-span-2 md:col-span-1">
                        <div className="text-2xl font-black mb-1">2M+</div>
                        <div className="text-[10px] text-text-muted uppercase font-bold tracking-widest">Scripts Generated</div>
                      </div>
                   </div>

                   {/* Social Proof Logos */}
                   <div className="flex flex-wrap items-center gap-x-10 gap-y-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] w-full mb-2">Powering Creators From</span>
                      <div className="flex items-center gap-2"><div className="w-6 h-6 bg-white rounded-full"></div><span className="font-black text-sm tracking-tighter">YouTube</span></div>
                      <div className="flex items-center gap-2"><div className="w-6 h-6 bg-white rounded-md"></div><span className="font-black text-sm tracking-tighter">TikTok</span></div>
                      <div className="flex items-center gap-2"><div className="w-6 h-6 bg-white rotate-45"></div><span className="font-black text-sm tracking-tighter">Instagram</span></div>
                      <div className="flex items-center gap-2 font-serif italic font-black text-lg">Twitch</div>
                   </div>
                </div>

                {/* Generator Component */}
                <div className="lg:sticky lg:top-12">
                  <div className="bg-[#12162B] border border-dark-border rounded-[2.5rem] p-8 lg:p-10 shadow-2xl relative overflow-hidden group">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-blue/10 rounded-full blur-[40px] group-hover:bg-primary-blue/20 transition-all"></div>

                    <div className="flex items-center gap-3 mb-8">
                       <Zap className="w-5 h-5 text-primary-blue" />
                       <h2 className="text-lg font-bold">Script Generator</h2>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-3 relative group/text">
                          <div className="flex justify-between items-center">
                            <label className="text-[11px] font-bold text-white uppercase tracking-tight opacity-70">Video Topic</label>
                            <span className={`text-[9px] font-bold ${topic.length > 300 ? 'text-red-400' : 'text-text-muted'}`}>
                              {topic.length}/500
                            </span>
                          </div>
                          <textarea
                            value={topic}
                            onChange={(e) => setTopic(e.target.value.slice(0, 500))}
                            placeholder="What is your video about? e.g. 'The dark truth about working from home'"
                            className="w-full h-32 bg-dark-bg/50 border border-dark-border rounded-2xl p-5 text-sm text-white placeholder:text-white/20 outline-none focus:border-primary-blue/60 focus:ring-4 ring-primary-blue/5 transition-all resize-none leading-relaxed"
                          />
                          {topic && (
                            <button
                              onClick={() => setTopic('')}
                              className="absolute bottom-4 right-4 text-[10px] font-bold text-text-muted hover:text-white transition-colors"
                            >
                              Clear
                            </button>
                          )}
                        </div>

                      {/* Duration */}
                      <div className="space-y-3">
                        <label className="text-[11px] font-bold text-white uppercase tracking-tight opacity-70">Target Duration</label>
                        <button className="w-full h-14 bg-dark-bg/50 border border-dark-border rounded-2xl px-6 flex justify-between items-center text-sm hover:border-primary-blue/30 transition-all">
                          <span className="text-white">{duration}</span>
                          <ChevronDown className="w-5 h-5 text-text-muted" />
                        </button>
                      </div>

                        {/* Platform Selection */}
                        <div className="space-y-3">
                          <label className="text-[11px] font-bold text-white uppercase tracking-tight opacity-70">Target Platform</label>
                          <div className="flex gap-2">
                            {platforms.map((p) => (
                              <button
                                key={p.name}
                                onClick={() => setPlatform(p.name)}
                                className={`flex-1 py-3 rounded-xl border text-[10px] font-bold transition-all flex items-center justify-center gap-2 ${
                                  platform === p.name
                                    ? 'border-primary-blue bg-primary-blue/10 text-white shadow-[0_0_15px_rgba(48,49,255,0.1)]'
                                    : 'border-dark-border bg-dark-surface/50 text-text-muted hover:border-white/20'
                                }`}
                              >
                                <p.icon className="w-3 h-3" />
                                {p.name}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Style Grid */}
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <label className="text-[11px] font-bold text-white uppercase tracking-tight opacity-70">Select Style</label>
                            <span className="text-[10px] font-bold text-primary-hover underline cursor-pointer hover:text-white transition-colors">Browse All</span>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            {styles.map((s) => (
                              <StyleItem
                                key={s.name}
                                {...s}
                                active={style === s.name}
                                onClick={() => setStyle(s.name)}
                              />
                            ))}
                          </div>
                        </div>

                      <button
                        onClick={handleInitialSubmit}
                        className="figma-button-primary w-full text-[15px] tracking-wide mt-4"
                      >
                        <Sparkles className="w-5 h-5" />
                        Generate Script
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <section id="features" className="py-24 lg:py-32">
                <div className="text-center mb-16 lg:mb-24">
                   <span className="glass-tag mb-4">Core Capabilities</span>
                   <h2 className="text-4xl lg:text-5xl font-black mb-6">Why ScriptForge AI?</h2>
                   <p className="text-text-muted max-w-2xl mx-auto">
                     We've trained our models on over 100,000 viral videos to understand the psychological triggers that keep viewers watching till the end.
                   </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <FeatureCard
                    icon={TrendingUp}
                    title="Viral Pacing"
                    desc="Automatic scene breaks and retention loops designed to minimize drop-off rates on TikTok and Reels."
                  />
                  <FeatureCard
                    icon={Cpu}
                    title="Meta-Llama Engine"
                    desc="Leveraging 70B parameters for human-like creativity with data-driven strategic precision."
                  />
                  <FeatureCard
                    icon={Target}
                    title="Topic Analysis"
                    desc="Our AI researches your topic in real-time to provide the most relevant 'Value Bombs' in every script."
                  />
                  <FeatureCard
                    icon={ShieldCheck}
                    title="Copyright Safe"
                    desc="All scripts are generated from scratch. No plagiarism, just unique content tailored to your voice."
                  />
                  <FeatureCard
                    icon={Users}
                    title="Creator Feedback"
                    desc="Continuously refined based on the performance metrics of thousands of professional creators."
                  />
                  <FeatureCard
                    icon={CheckCircle2}
                    title="Ready to shoot"
                    desc="Not just dialogue; you get visual directions, camera angles, and b-roll suggestions in every Scene."
                  />
                </div>
              </section>

              {/* How it Works Section */}
              <section id="how-it-works" className="py-24 bg-dark-surface/30 rounded-[3rem] border border-dark-border/50 px-8 lg:px-20 mb-24">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div>
                    <h2 className="text-4xl font-black mb-10 leading-tight">Master your workflow <br /> in 3 simple steps.</h2>
                    <div className="space-y-12">
                      <div className="flex gap-6">
                        <div className="w-10 h-10 rounded-full bg-primary-blue flex items-center justify-center text-sm font-black flex-shrink-0">01</div>
                        <div>
                          <h4 className="font-bold text-lg mb-2 text-primary-blue">Describe your vision</h4>
                          <p className="text-text-muted text-sm leading-relaxed">Simply enter a prompt or a rough idea. Our AI will analyze the hook potential and target audience instantly.</p>
                        </div>
                      </div>
                      <div className="flex gap-6">
                        <div className="w-10 h-10 rounded-full bg-primary-gray border border-dark-border flex items-center justify-center text-sm font-black flex-shrink-0">02</div>
                        <div>
                          <h4 className="font-bold text-lg mb-2">Configure Style & Vibe</h4>
                          <p className="text-text-muted text-sm leading-relaxed">Choose from cinematic storytelling to direct-to-camera savage vibes. Set your duration and watch the magic happen.</p>
                        </div>
                      </div>
                      <div className="flex gap-6">
                        <div className="w-10 h-10 rounded-full bg-primary-gray border border-dark-border flex items-center justify-center text-sm font-black flex-shrink-0">03</div>
                        <div>
                          <h4 className="font-bold text-lg mb-2">Get Shot-Ready Script</h4>
                          <p className="text-text-muted text-sm leading-relaxed">Receive a structured script with visual directions, voiceover text, and a compelling call-to-action that converts.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-tr from-primary-blue/20 to-transparent rounded-full absolute -top-10 -right-10 w-full blur-3xl opacity-30"></div>
                    <div className="figma-card relative z-10 p-0 overflow-hidden border-2 border-primary-blue/30 shadow-2xl">
                       <img
                        src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop"
                        alt="Workspace"
                        className="w-full h-full object-cover opacity-80"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>
                       <div className="absolute bottom-8 left-8 right-8 bg-dark-bg/60 backdrop-blur-md p-6 rounded-2xl border border-white/5">
                          <p className="text-sm font-medium italic">"ScriptForge saved me 10 hours a week in planning. My engagement on Reels went up by 40%."</p>
                          <div className="mt-4 flex items-center gap-3">
                             <div className="w-8 h-8 rounded-full bg-primary-blue flex items-center justify-center text-[10px] font-bold">MK</div>
                             <div>
                                <div className="text-[10px] font-bold">Marcus K.</div>
                                <div className="text-[8px] text-text-muted uppercase tracking-widest font-bold">YouTube Creator</div>
                             </div>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Use Cases Section */}
              <section className="py-24 lg:py-32">
                <div className="text-center mb-16 lg:mb-24">
                   <span className="glass-tag mb-4 tracking-widest uppercase font-bold text-[10px] py-1 px-3 bg-primary-blue/10 border border-primary-blue/20 rounded-full text-primary-blue">Endless Possibilities</span>
                   <h2 className="text-4xl lg:text-5xl font-black mb-6">Built for Every Creator</h2>
                   <p className="text-text-muted max-w-xl mx-auto text-sm lg:text-base leading-relaxed">
                     Whether you're a solo creator or a growing brand, ScriptForge adapts to your specific niche and goals.
                   </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: 'Short-form Pros', desc: 'TikTok & Reels mastery', icon: Zap },
                    { title: 'Educators', desc: 'Course & tutorial outlines', icon: BookOpen },
                    { title: 'E-commerce', desc: 'High-converting ad copy', icon: Clapperboard },
                    { title: 'Podcasters', desc: 'Episode intros & trailers', icon: Users },
                  ].map((use, i) => (
                    <div key={i} className="figma-card text-center p-10 group hover:bg-[#151930] transition-all">
                      <div className="w-14 h-14 bg-dark-bg border border-dark-border rounded-2xl flex items-center justify-center mx-auto mb-8 text-text-muted group-hover:text-primary-blue group-hover:border-primary-blue/30 group-hover:scale-110 transition-all">
                        <use.icon className="w-7 h-7" />
                      </div>
                      <h4 className="font-bold text-lg mb-3">{use.title}</h4>
                      <p className="text-[10px] text-primary-blue uppercase tracking-[0.2em] font-black font-mono">{use.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Testimonials Section */}
              <section className="py-24 lg:py-32">
                <div className="text-center mb-16 lg:mb-24">
                   <span className="glass-tag mb-4 tracking-widest uppercase font-bold text-[10px] py-1 px-3 bg-primary-blue/10 border border-primary-blue/20 rounded-full text-primary-blue">Wall of Love</span>
                   <h2 className="text-4xl lg:text-5xl font-black mb-6">Loved by 10,000+ Creators</h2>
                </div>
                 <div className="grid lg:grid-cols-3 gap-8">
                    {[
                      {
                        name: "Alex Rivera",
                        role: "Tech Reviewer",
                        comment: "The hook logic is insane. My last 3 videos hit the explore page within hours. This is a game changer for content planning.",
                        img: "https://i.pravatar.cc/100?img=33"
                      },
                      {
                        name: "Sarah Chen",
                        role: "Fitness Coach",
                        comment: "I used to spend hours scripting. Now I just drop a topic and I have a full shot-list in seconds. Retention is up by 25%.",
                        img: "https://i.pravatar.cc/100?img=44"
                      },
                      {
                        name: "Jordan Blake",
                        role: "Marketing Agency",
                        comment: "We use ScriptForge for all our client ads. The conversion rates on the CTAs are consistently higher than our manual drafts.",
                        img: "https://i.pravatar.cc/100?img=55"
                      }
                    ].map((t, i) => (
                      <div key={i} className="figma-card flex flex-col gap-6 bg-[#0F1221] hover:-translate-y-2 duration-500">
                         <div className="flex gap-1 text-primary-hover">
                            {[1,2,3,4,5].map(s => <Sparkles key={s} className="w-3 h-3 fill-current" />)}
                         </div>
                         <p className="text-sm leading-relaxed italic text-white/80">"{t.comment}"</p>
                         <div className="flex items-center gap-4 mt-auto">
                            <img src={t.img} className="w-10 h-10 rounded-full border border-primary-blue/30" alt={t.name} />
                            <div>
                               <div className="font-bold text-sm">{t.name}</div>
                               <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest">{t.role}</div>
                            </div>
                         </div>
                      </div>
                    ))}
                 </div>
              </section>

              {/* FAQ Section */}
              <section className="pb-24 max-w-3xl mx-auto">
                 <h2 className="text-3xl font-black mb-12 text-center tracking-tight uppercase">Common Questions</h2>
                 <div className="space-y-4">
                    {[
                      { q: "Is it free to use?", a: "We offer 3 credits for free per month. Premium plans start at $19/mo for unlimited generation." },
                      { q: "Can I use the scripts for commerical work?", a: "Absolutely. You own 100% of the rights to the scripts generated by our platform." },
                      { q: "Which platforms is this best for?", a: "YouTube, Instagram Reels, TikTok, and LinkedIn Video. Optimized formats are available for each." }
                    ].map((item, i) => (
                      <div key={i} className="bg-dark-surface/50 border border-dark-border rounded-2xl p-6">
                        <div className="flex justify-between items-center mb-2">
                           <h4 className="font-bold text-sm uppercase tracking-wide">{item.q}</h4>
                           <ChevronDown className="w-4 h-4 text-text-muted" />
                        </div>
                        <p className="text-xs text-text-muted leading-relaxed">{item.a}</p>
                      </div>
                    ))}
                 </div>
              </section>

              {/* Pricing Section */}
              <section id="pricing" className="py-24 lg:py-32 border-t border-dark-border/30">
                <div className="text-center mb-16 lg:mb-24">
                   <span className="glass-tag mb-4 tracking-widest">Transparent Pricing</span>
                   <h2 className="text-4xl lg:text-5xl font-black mb-6">Choose Your Plan</h2>
                   <p className="text-text-muted max-w-xl mx-auto text-sm lg:text-base">
                     Scale your content creation with the power of localized AI. No hidden fees, just pure value.
                   </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Basic */}
                  <div className="figma-card flex flex-col items-start border-none bg-dark-surface/50 p-10">
                    <span className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-4">Solo Creator</span>
                    <div className="flex items-baseline gap-1 mb-8 text-white">
                       <span className="text-5xl font-black">$0</span>
                       <span className="text-xs text-text-muted font-bold">/ forever</span>
                    </div>
                    <ul className="space-y-5 mb-12 flex-1">
                      {['3 Free Credits / mo', 'Standard Retention Engine', 'Community Support', 'Basic Exports'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-xs text-text-muted">
                           <CheckCircle2 className="w-4 h-4 text-primary-blue/40" />
                           {item}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full py-5 border border-dark-border rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-dark-border transition-colors">Start Free</button>
                  </div>

                  {/* Pro */}
                  <div className="figma-card flex flex-col items-start border-2 border-primary-blue bg-[#12162B] relative p-10 shadow-2xl">
                    <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary-blue text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">Most Popular</div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary-blue mb-4">Professional</span>
                    <div className="flex items-baseline gap-1 mb-8 text-white">
                       <span className="text-5xl font-black">$29</span>
                       <span className="text-xs text-text-muted font-bold">/ month</span>
                    </div>
                    <ul className="space-y-5 mb-12 flex-1">
                      {['Unlimited Credits', 'Advanced Hook Logic', 'Priority 70B Engine', 'Custom Viral Tones', 'Full Scene Directions', '24/7 Priority Support'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-xs text-white/90">
                           <CheckCircle2 className="w-4 h-4 text-primary-blue" />
                           {item}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full py-5 bg-primary-blue rounded-2xl text-[10px] font-black uppercase tracking-widest hover:brightness-110 shadow-xl shadow-primary-blue/20 transition-all">Go Professional</button>
                  </div>

                  {/* Agency */}
                  <div className="figma-card flex flex-col items-start border-none bg-dark-surface/50 p-10">
                    <span className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-4">Agency</span>
                    <div className="flex items-baseline gap-1 mb-8 text-white">
                       <span className="text-5xl font-black">$99</span>
                       <span className="text-xs text-text-muted font-bold">/ month</span>
                    </div>
                    <ul className="space-y-5 mb-12 flex-1">
                      {['All Pro Features', 'Team Workspace', 'Bulk Batch Generation', 'White-labeling', 'API Enterprise Access', 'Dedicated Manager'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-xs text-text-muted">
                           <CheckCircle2 className="w-4 h-4 text-primary-blue/40" />
                           {item}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full py-5 border border-dark-border rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-dark-border transition-colors">Talk to Sales</button>
                  </div>
                </div>
              </section>

              {/* Final Conversion Section */}
              <section className="py-24 lg:py-40">
                 <div className="bg-primary-blue rounded-[4rem] p-12 lg:p-28 text-center relative overflow-hidden shadow-2xl shadow-primary-blue/40 lg:flex lg:items-center lg:text-left gap-20 group">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none transition-transform group-hover:scale-110 duration-1000"></div>
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

                    <div className="flex-1 relative z-10">
                       <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">Ready to break the algorithm?</h2>
                       <p className="text-white/70 text-lg lg:text-xl max-w-xl leading-relaxed">Join 10,000+ creators who are already dominating social media with AI-powered storytelling.</p>
                    </div>

                    <div className="mt-16 lg:mt-0 relative z-10 flex flex-col items-center lg:items-start shrink-0">
                       <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-white text-primary-blue px-12 py-7 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 group">
                          Start For Free
                          <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
                       </button>
                       <p className="text-white/50 text-[10px] font-black uppercase tracking-[0.3em] mt-8">No credit card required • Join in 10s</p>
                    </div>
                 </div>
              </section>


              <footer className="py-24 lg:py-32 border-t border-dark-border/30">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20 text-left">
                  <div className="col-span-2 lg:col-span-1">
                    <div className="flex items-center gap-3 mb-8">
                       <Clapperboard className="w-6 h-6 text-primary-blue" />
                       <span className="font-black text-xl tracking-tighter">ScriptForge AI</span>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed max-w-[240px]">
                      The world's most advanced AI-powered video scripting engine for modern creators.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-white/50 mb-8">Product</h5>
                    <ul className="space-y-4 text-sm font-medium text-text-muted">
                      <li><a href="#" className="hover:text-primary-blue transition-colors">Features</a></li>
                      <li><a href="#" className="hover:text-primary-blue transition-colors">Pricing</a></li>
                      <li><a href="#" className="hover:text-primary-blue transition-colors">API Access</a></li>
                      <li><a href="#" className="hover:text-primary-blue transition-colors">Integrations</a></li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-white/50 mb-8">Resources</h5>
                    <ul className="space-y-4 text-sm font-medium text-text-muted">
                      <li><a href="#" className="hover:text-primary-blue transition-colors">Viral Strategy Blog</a></li>
                      <li><a href="#" className="hover:text-primary-blue transition-colors">Creator Guides</a></li>
                      <li><a href="#" className="hover:text-primary-blue transition-colors">Documentation</a></li>
                      <li><a href="#" className="hover:text-primary-blue transition-colors">Hook Library</a></li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-white/50 mb-8">Company</h5>
                    <ul className="space-y-4 text-sm font-medium text-text-muted">
                      <li><a href="#" className="hover:text-primary-blue transition-colors">About</a></li>
                      <li><a href="#" className="hover:text-primary-blue transition-colors">Terms</a></li>
                      <li><a href="#" className="hover:text-primary-blue transition-colors">Privacy</a></li>
                      <li><a href="#" className="hover:text-primary-blue transition-colors">Contact</a></li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pt-12 border-t border-dark-border/20">
                   <p className="text-[10px] text-text-muted font-black uppercase tracking-[0.4em]">© 2026 ScriptForge AI • Meta-Llama 3.3 Engine</p>
                   <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-text-muted">
                      <a href="#" className="hover:text-white transition-colors">Twitter</a>
                      <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                      <a href="#" className="hover:text-white transition-colors">Instagram</a>
                      <a href="#" className="hover:text-white transition-colors">YouTube</a>
                   </div>
                </div>
              </footer>
            </motion.div>
          ) : null}

          {loading && (
            <motion.div
              key="loading-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-40 gap-8"
            >
              <div className="relative w-20 h-20">
                 <div className="absolute inset-0 border-4 border-primary-blue/20 rounded-full"></div>
                 <div className="absolute inset-0 border-4 border-primary-blue rounded-full border-t-transparent animate-spin"></div>
                 <Sparkles className="absolute inset-0 m-auto w-6 h-6 text-primary-blue animate-pulse" />
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-3xl font-black tracking-tight">{loadingSteps[loadingStep]}</h3>
                <div className="flex flex-col gap-1 items-center">
                  <p className="text-[10px] text-primary-blue font-bold uppercase tracking-[0.4em] animate-pulse">
                    AI AGENT IS PROCESSING
                  </p>
                  <p className="text-[10px] text-text-muted font-bold uppercase tracking-[0.2em]">
                    SambaNova • Llama 3.3 • {platform.toUpperCase()} Optimized
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {script && !loading && (
            <motion.div
              key="script-output"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 lg:mt-12 h-full pb-20"
            >
              <div className="max-w-[700px] mx-auto">
                <div className="flex items-center justify-between mb-8 sticky top-0 bg-dark-bg/80 py-6 z-40 backdrop-blur-xl border-b border-white/5">
                  <div className="flex items-center gap-4">
                    <button onClick={() => setScript(null)} className="flex items-center gap-2 text-text-muted hover:text-white transition-colors group px-2">
                      <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Back to Forge</span>
                    </button>
                    <button onClick={generateScript} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-text-muted hover:text-white">
                      <RotateCcw className="w-4 h-4 text-primary-blue" />
                      <span>Regenerate</span>
                    </button>
                  </div>
                  <div className="flex gap-4">
                     <button onClick={copyAll} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#3031FF] bg-primary-blue/10 px-4 py-2 rounded-full border border-primary-blue/20 hover:bg-primary-blue/20 transition-all">
                        <Copy className="w-3.5 h-3.5" />
                        <span>{copyAllStatus}</span>
                     </button>
                  </div>
                </div>

                <div className="mb-12 space-y-6">
                   <div className="flex items-end justify-between">
                     <div>
                        <h2 className="text-3xl font-black tracking-tight mb-2">"{topic}"</h2>
                        <div className="flex flex-wrap gap-3">
                           <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-white/5 rounded-md border border-white/5">{style}</span>
                           <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-white/5 rounded-md border border-white/5">{duration}</span>
                           <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-primary-blue/20 text-primary-blue rounded-md border border-primary-blue/30 flex items-center gap-1">
                             <Mail className="w-2 h-2" />
                             Synced to {email}
                           </span>
                        </div>
                      </div>
                    </div>

                   <div className="space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-bold">
                        <span className="text-primary-blue flex items-center gap-2">
                           <CheckCircle2 className="w-3 h-3" />
                           VIRAL OPTIMIZATION COMPLETE
                        </span>
                        <span className="font-mono">RETENTION SCORE: 98%</span>
                      </div>
                      <div className="h-1 bg-dark-surface rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.5 }}
                          className="h-full bg-primary-blue shadow-[0_0_10px_#3031FF]"
                        />
                      </div>
                   </div>
                </div>

                <div className="space-y-8">
                  <HookCard
                    visual={script.hook?.visual || "Cinematic wide shot transitioning to a fast-paced zoom to capture attention."}
                    voiceover={script.hook?.voiceover || script.hook}
                    onCopy={() => copyToClipboard(script.hook)}
                  />

                  {script.scenes && script.scenes.map((scene, idx) => (
                    <SceneCard
                      key={idx}
                      label={`Phase 0${idx + 1}: ${idx === 0 ? 'The Pattern Interrupt' : idx === 1 ? 'High-Value Delivery' : 'Strategic Pacing'}`}
                      visual={scene.visual}
                      voiceover={scene.voiceover}
                      onCopy={() => copyToClipboard(`${scene.visual}\n${scene.voiceover}`)}
                    />
                  ))}

                  {/* CTA Block */}
                  <div className="bg-primary-blue p-10 rounded-[2.5rem] relative overflow-hidden group shadow-2xl shadow-primary-blue/20">
                    <div className="absolute -top-10 -right-10 opacity-20 group-hover:scale-110 transition-transform">
                       <Sparkles className="w-40 h-40 text-white" />
                    </div>
                    <div className="relative z-10">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.34em]">Final Conversion</span>
                        <div className="flex gap-4 text-white/50">
                          <button onClick={() => copyToClipboard(script.cta)} className="hover:text-white transition-colors"><Copy className="w-4 h-4" /></button>
                          <button className="hover:text-white transition-colors"><RotateCcw className="w-4 h-4" /></button>
                        </div>
                      </div>
                      <p className="text-2xl font-black uppercase leading-tight italic text-white">"{script.cta}"</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-12 mb-20">
                  <button
                    onClick={() => alert("Cloud Sync coming soon! Your script is saved locally for now.")}
                    className="h-16 border border-dark-border bg-dark-surface rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 hover:border-text-muted transition-colors"
                  >
                    <Save className="w-4.5 h-4.5" />
                    Save Draft
                  </button>
                  <button
                    onClick={() => alert("Auto-Video Export is in Beta. Contact support for early access.")}
                    className="h-16 bg-white text-black rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white/90 transition-all"
                  >
                    <Video className="w-4.5 h-4.5" />
                    Export Project
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lead Generation Modal */}
        <Modal isOpen={showEmailModal} onClose={() => setShowEmailModal(false)}>
           <div className="flex flex-col items-center text-center">
             <div className="w-20 h-20 bg-primary-blue/10 border border-primary-blue/20 rounded-full flex items-center justify-center mb-8">
               <Mail className="w-10 h-10 text-primary-blue" />
             </div>
             <h3 className="text-3xl font-black mb-4">Send to your inbox</h3>
             <p className="text-sm text-text-muted leading-relaxed mb-10 px-6">
               We'll email you the complete shot-ready script, scene descriptions, and AI voiceover prompts for your project.
             </p>

             <div className="w-full relative mb-10 px-4">
               <div className="absolute inset-y-0 left-10 flex items-center pointer-events-none text-text-muted">
                 <text className="text-2xl font-medium">@</text>
               </div>
               <input
                 autoFocus
                 type="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 placeholder="your@email.com"
                 className="w-full h-18 bg-[#1A1F36] border border-dark-border rounded-2xl pl-16 pr-8 text-base text-white outline-none focus:border-primary-blue transition-all"
               />
               {error && <p className="text-[11px] text-red-500 font-bold mt-2 text-left absolute -bottom-6 left-6">{error}</p>}
             </div>

             <button
               onClick={generateScript}
               className="w-full h-18 bg-primary-blue text-white rounded-2xl font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-4 hover:brightness-110 active:scale-[0.98] transition-all px-8 shadow-xl shadow-primary-blue/20"
               disabled={loading}
             >
               {loading ? 'Processing...' : 'Send Script'}
               {!loading && <ArrowRight className="w-5 h-5" />}
             </button>

             <button onClick={() => setShowEmailModal(false)} className="mt-8 text-xs font-bold text-text-muted hover:text-white transition-colors uppercase tracking-widest">
               Maybe Later
             </button>
           </div>
        </Modal>

        <BottomTabNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

const Modal = ({ isOpen, onClose, children }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-[#070912]/90 backdrop-blur-xl"
          onClick={onClose}
        />
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 30 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-[#121626] border border-dark-border rounded-[3.5rem] p-12 lg:p-16 max-w-[500px] w-full relative z-[151] shadow-[0_40px_100px_rgba(0,0,0,1)]"
        >
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-dark-border rounded-full opacity-30"></div>
          {children}
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);
