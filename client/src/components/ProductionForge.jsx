import { motion } from 'framer-motion';
import { BookOpen, ChevronLeft, Clapperboard, Flame, Sparkles, Target, Theater, TrendingUp, Users, Video, Zap } from 'lucide-react';

const StyleItem = ({ name, desc, icon: Icon, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full text-left p-5 rounded-2xl border transition-all flex flex-col gap-3 ${
      active
        ? 'border-primary-blue bg-primary-blue/10 shadow-[0_0_20px_rgba(48,49,255,0.1)] ring-1 ring-primary-blue'
        : 'border-dark-border bg-dark-surface/30 hover:border-text-muted/30'
    }`}
  >
    <div className={`${active ? 'text-primary-blue' : 'text-text-muted'} transition-colors`}>
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <div className="font-extrabold text-sm text-white">{name}</div>
      <div className="text-[11px] text-text-muted leading-tight mt-1">{desc}</div>
    </div>
  </button>
);

const ProductionForge = ({
  topic, setTopic,
  format, setFormat,
  duration, setDuration,
  style, setStyle,
  platform, setPlatform,
  handleInitialSubmit,
  onBack
}) => {
  const formats = [
    { name: 'Short-form Video', icon: Zap, desc: 'TikTok, Reels, Shorts' },
    { name: 'YouTube Long-form', icon: Video, desc: 'Detailed deep-dives' },
    { name: 'Full Story', icon: BookOpen, desc: 'Deep narrative arc' },
    { name: 'Blog Story', icon: Theater, desc: 'Article-style narrative' },
    { name: 'Series of Stories', icon: Target, desc: 'Multi-part collection' },
    { name: 'Movie Script', icon: Clapperboard, desc: 'Cinematic scene' },
  ];

  const durations = ['30 Seconds', '60 Seconds', '90 Seconds', '3 Minutes', '5 Minutes+'];

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto py-12 lg:py-20"
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-text-muted hover:text-white transition-colors mb-10 group"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="text-[10px] font-black uppercase tracking-widest">Exit Studio</span>
      </button>

      <div className="mb-12">
        <h2 className="text-4xl lg:text-5xl font-black mb-4 tracking-tighter">Production Forge</h2>
        <p className="text-text-muted text-lg">Configure your cinematic narrative blueprints.</p>
      </div>

      <div className="bg-dark-surface/20 border border-dark-border rounded-[2.5rem] p-6 lg:p-12 shadow-3xl backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue/5 blur-[120px] pointer-events-none"></div>

        <div className="space-y-12 relative z-10">
          {/* Narrative Concept */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-[12px] font-black text-white uppercase tracking-widest opacity-60">Narrative Concept</label>
              <span className={`text-[10px] font-mono font-bold ${topic.length > 450 ? 'text-red-400' : 'text-text-muted'}`}>
                {topic.length}/500
              </span>
            </div>
            <div className="relative group">
              <textarea
                value={topic}
                onChange={(e) => setTopic(e.target.value.slice(0, 500))}
                placeholder="Describe your production concept in detail..."
                className="w-full h-32 bg-dark-bg/60 border border-dark-border rounded-2xl p-6 text-base text-white placeholder:text-white/10 outline-none focus:border-primary-blue/60 focus:ring-8 ring-primary-blue/5 transition-all resize-none leading-relaxed"
              />
              {topic && (
                <button
                  onClick={() => setTopic('')}
                  className="absolute bottom-6 right-8 text-[11px] font-black uppercase tracking-widest text-text-muted hover:text-white transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Production Format */}
            <div className="space-y-4">
              <label className="text-[12px] font-black text-white uppercase tracking-widest opacity-60">Production Format</label>
              <div className="grid grid-cols-2 gap-3">
                {formats.map((f) => (
                  <button
                    key={f.name}
                    onClick={() => setFormat(f.name)}
                    className={`py-4 px-4 rounded-xl border text-left transition-all flex flex-col gap-2 ${
                      format === f.name
                        ? 'border-primary-blue bg-primary-blue/10 text-white shadow-lg'
                        : 'border-dark-border bg-dark-bg/40 text-text-muted hover:border-white/20'
                    }`}
                  >
                    <f.icon className={`w-5 h-5 ${format === f.name ? 'text-primary-blue' : 'text-text-muted'}`} />
                    <span className="text-[11px] font-black uppercase">{f.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Exhibition Mode */}
            <div className="space-y-4">
              <label className="text-[12px] font-black text-white uppercase tracking-widest opacity-60">Exhibition Mode</label>
              <div className="grid grid-cols-1 gap-3">
                {platforms.map((p) => (
                  <button
                    key={p.name}
                    onClick={() => setPlatform(p.name)}
                    className={`py-4 px-6 rounded-xl border flex items-center justify-between gap-4 transition-all ${
                      platform === p.name
                        ? 'border-primary-blue bg-primary-blue/10 text-white'
                        : 'border-dark-border bg-dark-bg/40 text-text-muted hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <p.icon className={`w-5 h-5 ${platform === p.name ? 'text-primary-blue' : 'text-text-muted'}`} />
                      <span className="text-[11px] font-black uppercase tracking-widest">{p.name}</span>
                    </div>
                    {platform === p.name && <div className="w-2 h-2 bg-primary-blue rounded-full shadow-[0_0_10px_#3031FF]"></div>}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Duration */}
          <div className="space-y-4">
            <label className="text-[12px] font-black text-white uppercase tracking-widest opacity-60">Production Length</label>
            <div className="flex flex-wrap gap-3">
              {durations.map((d) => (
                <button
                  key={d}
                  onClick={() => setDuration(d)}
                  className={`px-6 py-3 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${
                    duration === d
                      ? 'border-primary-blue bg-primary-blue/20 text-white'
                      : 'border-dark-border bg-dark-bg/40 text-text-muted hover:border-white/20'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Style Selection */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <label className="text-[12px] font-black text-white uppercase tracking-widest opacity-60">Cinematic Style</label>
              <button className="text-[10px] font-black uppercase tracking-widest text-primary-blue hover:text-white transition-colors">See all styles</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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

          <div className="pt-10">
            <button
              onClick={handleInitialSubmit}
              className="w-full bg-primary-blue hover:brightness-110 text-white h-16 rounded-xl font-black text-base uppercase tracking-[0.2em] shadow-xl shadow-primary-blue/20 transition-all active:scale-95 flex items-center justify-center gap-4 group"
            >
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Forge Narrative Blueprint
            </button>
            <p className="text-center mt-6 text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">AI processing powered by SambaNova • Llama 3.3 Production Edition</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductionForge;
