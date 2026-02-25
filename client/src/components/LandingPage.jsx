import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, Clapperboard, Cpu, ShieldCheck, Sparkles, Target, TrendingUp, Users, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="figma-card group hover:bg-[#151930] transition-all">
    <div className="w-12 h-12 bg-primary-blue/10 border border-primary-blue/20 rounded-xl flex items-center justify-center mb-6 text-primary-blue group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-bold mb-3">{title}</h3>
    <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
  </div>
);

const LandingPage = ({ topic, setTopic, handleInitialSubmit }) => {
  return (
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
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-dark-bg bg-dark-surface flex items-center justify-center text-[10px] font-bold overflow-hidden">
                  <img src={`https://i.pravatar.cc/40?img=${i + 10}`} alt="avatar" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm">Joined by 10,000+ Creators</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => <Sparkles key={i} className="w-3 h-3 text-primary-blue fill-primary-blue" />)}
                <span className="text-[10px] text-text-muted font-bold ml-1">4.9/5 Rating</span>
              </div>
            </div>
          </div>

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
        </div>

        {/* This slot will be filled by the Generator component from App.jsx parent */}
        <div id="generator-slot"></div>
      </div>

      <section id="features" className="py-24 lg:py-32">
        <div className="text-center mb-16 lg:mb-24">
          <span className="glass-tag mb-4">Core Capabilities</span>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Why ScriptForge AI?</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            We've trained our models on over 100,000 viral videos to understand the psychological triggers that keep viewers watching till the end.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard icon={TrendingUp} title="Viral Pacing" desc="Automatic scene breaks and retention loops designed to minimize drop-off rates on TikTok and Reels." />
          <FeatureCard icon={Cpu} title="Meta-Llama Engine" desc="Leveraging 70B parameters for human-like creativity with data-driven strategic precision." />
          <FeatureCard icon={Target} title="Topic Analysis" desc="Our AI researches your topic in real-time to provide the most relevant 'Value Bombs' in every script." />
          <FeatureCard icon={ShieldCheck} title="Copyright Safe" desc="All scripts are generated from scratch. No plagiarism, just unique content tailored to your voice." />
          <FeatureCard icon={Users} title="Creator Feedback" desc="Continuously refined based on the performance metrics of thousands of professional creators." />
          <FeatureCard icon={CheckCircle2} title="Ready to shoot" desc="Not just dialogue; you get visual directions, camera angles, and b-roll suggestions in every Scene." />
        </div>
      </section>

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
            <div className="figma-card relative z-10 p-0 overflow-hidden border-2 border-primary-blue/30 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop" alt="Workspace" className="w-full h-full object-cover opacity-80" />
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

      <section className="py-24 lg:py-32">
        <div className="text-center mb-16 lg:mb-24">
          <span className="glass-tag mb-4 tracking-widest uppercase font-bold text-[10px] py-1 px-3 bg-primary-blue/10 border border-primary-blue/20 rounded-full text-primary-blue">Endless Possibilities</span>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Built for Every Creator</h2>
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
    </motion.div>
  );
};

export default LandingPage;
