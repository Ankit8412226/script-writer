import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  Clapperboard,
  Copy,
  FileText,
  Flame,
  Library,
  Mail,
  RotateCcw,
  Save,
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
import BottomTabNav from './components/BottomTabNav';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import ProductionForge from './components/ProductionForge';
import Toast from './components/Toast';

const StyleItem = ({ name, desc, icon: Icon, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full text-left p-4 rounded-2xl border transition-all flex flex-col gap-3 group cursor-pointer ${
      active
        ? 'border-primary-blue bg-primary-blue/10 shadow-[0_0_20px_rgba(48,49,255,0.1)]'
        : 'border-dark-border bg-dark-surface hover:border-dark-border/80'
    }`}
  >
    <div className={`${active ? 'text-primary-blue' : 'text-text-muted'} group-hover:text-primary-blue transition-colors`}>
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
        <button onClick={onCopy} className="hover:text-white transition-colors cursor-pointer p-1"><Copy className="w-3.5 h-3.5" /></button>
        <button className="hover:text-white transition-colors cursor-pointer p-1"><RotateCcw className="w-3.5 h-3.5" /></button>
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
  const [view, setView] = useState('landing');
  const [activeTab, setActiveTab] = useState('home');
  const [topic, setTopic] = useState('');
  const [format, setFormat] = useState('Short-form Video');
  const [duration, setDuration] = useState('60 Seconds');
  const [style, setStyle] = useState('Storytelling');
  const [platform, setPlatform] = useState('TikTok/Reels');
  const [email, setEmail] = useState(() => localStorage.getItem('user_email') || '');
  const [loading, setLoading] = useState(false);
  const [script, setScript] = useState(null);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [error, setError] = useState('');
  const [loadingStep, setLoadingStep] = useState(0);
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  const loadingSteps = [
    "Analyzing viral potential...",
    "Optimizing pattern interrupts...",
    "Synthesizing visual direction...",
    "Finalizing retention loops..."
  ];

  const formats = [
    { name: 'Short-form Video', icon: Zap, desc: 'TikTok, Reels, Shorts' },
    { name: 'YouTube Long-form', icon: Video, desc: 'Detailed deep-dives' },
    { name: 'Full Story', icon: BookOpen, desc: 'Deep narrative arc' },
    { name: 'Blog Story', icon: FileText, desc: 'Article-style narrative' },
    { name: 'Series of Stories', icon: Library, desc: 'Multi-part collection' },
    { name: 'Movie Script', icon: Clapperboard, desc: 'Cinematic scene' },
  ];

  const durations = [
    '30 Seconds',
    '60 Seconds',
    '90 Seconds',
    '3 Minutes',
    '5 Minutes+',
  ];

  const styles = [
    { name: 'Storytelling', desc: 'Narrative arcs', icon: Video },
    { name: 'Dark Comedy', desc: 'Witty and edgy', icon: Theater },
    { name: 'Cinematic', desc: 'Visual storytelling', icon: Clapperboard },
    { name: 'Motivational', desc: 'Inspiring energy', icon: Zap },
    { name: 'Savage', desc: 'Direct and bold', icon: Flame },
    { name: 'Edu-tainment', desc: 'Fun learning', icon: BookOpen },
    { name: 'Horror/Mystery', desc: 'Dark & Tense', icon: Target },
  ];

  const platforms = [
    { name: 'TikTok/Reels', icon: TrendingUp },
    { name: 'YouTube', icon: Video },
    { name: 'LinkedIn', icon: Users },
  ];

  const validateEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleInitialSubmit = () => {
    if (!topic.trim()) {
      showToast('Please enter a video topic', 'error');
      return;
    }
    const savedEmail = localStorage.getItem('user_email');
    if (savedEmail && validateEmail(savedEmail)) {
      generateScript();
    } else {
      setShowEmailModal(true);
    }
  };

  const generateScript = async () => {
    if (!validateEmail(email)) {
      showToast('Please enter a valid email address', 'error');
      return;
    }

    setLoading(true);
    setLoadingStep(0);
    setShowEmailModal(false);
    setError('');

    const interval = setInterval(() => {
      setLoadingStep(prev => (prev < loadingSteps.length - 1 ? prev + 1 : prev));
    }, 2000);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${apiUrl}/api/generate-script`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, style, duration, platform, format, email })
      });
      const data = await response.json();
      if (data.success) {
        setScript(data.data);
        localStorage.setItem('user_email', email);
        showToast('Script generated successfully!');
      } else {
        const errMsg = data.message || data.error || 'Generation failed';
        showToast(errMsg, 'error');
      }
    } catch {
      showToast('Network error. Please check your connection.', 'error');
    } finally {
      setLoading(false);
      clearInterval(interval);
    }
  };

  const copyToClipboard = (text) => {
    let content = text;
    if (typeof text === 'object' && text !== null) {
      content = `${text.visual || ''}\n${text.voiceover || ''}`;
    }
    navigator.clipboard.writeText(content || JSON.stringify(script));
    showToast('Copied to clipboard!');
  };

  const copyAll = () => {
    if (!script) return;
    const hookText = typeof script.hook === 'object'
      ? `Visual: ${script.hook.visual}\nVoiceover: ${script.hook.voiceover}`
      : `Voiceover: ${script.hook}`;

    const fullText = `TOPIC: ${topic}\nSTYLE: ${style}\nPLATFORM: ${platform}\n\nHOOK:\n${hookText}\n\nSCENES:\n${script.scenes?.map((s, i) => `Scene ${i+1}:\nVisual: ${s.visual}\nVoiceover: ${s.voiceover}`).join('\n\n')}\n\nCTA: ${script.cta}`;
    navigator.clipboard.writeText(fullText);
    showToast('Full script copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white pb-24 font-['Inter'] relative overflow-x-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <Navbar
          onHome={() => setView('landing')}
          onEnterForge={() => setView('forge')}
        />

        <div className="mt-8 mb-12 flex items-center gap-6 overflow-x-auto no-scrollbar py-2">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">Live Trending topics</span>
          </div>
          <div className="flex gap-3">
            {['Mumbai Street Food', 'AI Workflow 2026', 'Startup Pitch Deck', 'Travel Vlog Hinglish', 'Stock Market India'].map((topic) => (
              <button
                key={topic}
                onClick={() => setTopic(topic)}
                className="px-4 py-2 rounded-full border border-dark-border bg-dark-surface/30 text-[10px] font-bold text-white/60 hover:border-primary-blue hover:text-white hover:bg-primary-blue/5 transition-all cursor-pointer whitespace-nowrap"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {toasts.map(toast => (
            <Toast
              key={toast.id}
              message={toast.message}
              type={toast.type}
              onClose={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
            />
          ))}

          {view === 'landing' && !script && !loading && (
            <LandingPage onEnterForge={() => setView('forge')} />
          )}

          {view === 'forge' && !script && !loading && (
            <ProductionForge
              topic={topic} setTopic={setTopic}
              format={format} setFormat={setFormat}
              duration={duration} setDuration={setDuration}
              style={style} setStyle={setStyle}
              platform={platform} setPlatform={setPlatform}
              handleInitialSubmit={handleInitialSubmit}
              onBack={() => setView('landing')}
            />
          )}

          {loading && (
            <LoadingState
              loadingStep={loadingStep}
              loadingSteps={loadingSteps}
              platform={platform}
            />
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
                     <button onClick={copyAll} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white bg-primary-blue px-6 py-3 rounded-full shadow-lg shadow-primary-blue/20 hover:brightness-110 transition-all">
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Full Script</span>
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
                    onClick={() => showToast("Cloud Sync coming soon!", "info")}
                    className="h-14 border border-dark-border bg-dark-surface rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:border-text-muted transition-colors px-6"
                  >
                    <Save className="w-4 h-4" />
                    Save Draft
                  </button>
                  <button
                    onClick={() => showToast("Auto-Video Export is in Beta.", "info")}
                    className="h-14 bg-white text-black rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/90 transition-all px-6"
                  >
                    Generate Video (Beta)
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Modal isOpen={showEmailModal} onClose={() => setShowEmailModal(false)}>
          <div className="text-center">
            <div className="w-20 h-20 bg-primary-blue/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Mail className="w-10 h-10 text-primary-blue" />
            </div>
            <h2 className="text-3xl font-black mb-4 tracking-tight">Claim Your Script</h2>
            <p className="text-text-muted text-sm leading-relaxed mb-10 max-w-[300px] mx-auto">
              Enter your email to receive a high-res PDF copy and viral performance analytics for your script.
            </p>
            <div className="space-y-4">
              <div className="relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="w-full bg-dark-bg border border-dark-border rounded-2xl px-6 py-5 text-sm outline-none focus:border-primary-blue transition-all"
                />
              </div>
              <button
                onClick={generateScript}
                disabled={!validateEmail(email)}
                className="figma-button-primary w-full h-14 rounded-xl disabled:opacity-30 disabled:grayscale transition-all text-xs"
              >
                Send & Generate
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest pt-4">No Spam • One-click Unsubscribe</p>
            </div>
          </div>
        </Modal>

        <Footer />
        <BottomTabNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
