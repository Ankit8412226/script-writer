import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clapperboard, Cpu, Sparkles, TrendingUp, Users, Video, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="figma-card group hover:bg-[#151930] transition-all">
    <div className="w-12 h-12 bg-primary-blue/10 border border-primary-blue/20 rounded-xl flex items-center justify-center mb-6 text-primary-blue group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-bold mb-3">{title}</h3>
    <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
  </div>
);

const LandingPage = ({ onEnterForge }) => {
  return (
    <motion.div
      key="landing-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mt-6 lg:mt-8"
    >
      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[70vh]">
        <div className="lg:pt-0">
          <div className="flex items-center gap-2 mb-6">
            <span className="glass-tag">Bharat's Next-Gen AI</span>
            <span className="text-text-muted text-[10px] font-bold uppercase tracking-widest">Version 2.0 Production Suite</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
            The Ultimate <br />
            <span className="bg-gradient-to-r from-primary-blue to-teal-400 bg-clip-text text-transparent">Cinematic Intelligence</span> <br />
            for Desi Creators.
          </h1>
          <p className="text-base lg:text-lg text-text-muted leading-relaxed max-w-[540px] mb-10">
            Professional-grade production blueprints optimized for the Indian digital landscape. Bridge the gap between idea and viral success.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 items-center lg:items-start">
            <button
              onClick={onEnterForge}
              className="bg-primary-blue text-white px-10 h-16 rounded-xl font-black text-sm uppercase tracking-widest shadow-xl shadow-primary-blue/30 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 group"
            >
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Enter Production Forge
            </button>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-dark-bg bg-dark-surface flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/32?img=${i + 20}`} alt="avatar" />
                  </div>
                ))}
              </div>
              <span className="font-bold text-[10px] uppercase tracking-widest text-text-muted">10k+ Creators</span>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-primary-blue/20 rounded-[4rem] blur-3xl group-hover:bg-primary-blue/30 transition-all"></div>
          <div className="figma-card relative z-10 p-0 overflow-hidden border-2 border-primary-blue/30 shadow-3xl rounded-[3rem]">
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-10"></div>
            <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop" alt="Cinematic Production" className="w-full h-[600px] object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
            <div className="absolute bottom-12 left-12 right-12 z-20">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_red]"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.34em]">Live Production Engine</span>
               </div>
               <p className="text-3xl font-black italic text-white mb-4">"The future of Desi storytelling is here."</p>
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-blue flex items-center justify-center font-bold text-xs uppercase">MK</div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest">Marcus K.</div>
                      <div className="text-[10px] text-text-muted">Production Director</div>
                    </div>
                  </div>
                  <div className="glass-tag">Llama 3.3 70B</div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <section id="features" className="py-24 lg:py-32">
        <div className="text-center mb-16 lg:mb-24">
          <span className="glass-tag mb-4 tracking-widest uppercase font-bold text-[10px] py-1 px-3 bg-primary-blue/10 border border-primary-blue/20 rounded-full text-primary-blue">Core Capabilities</span>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Why ScriptForge AI?</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            We've trained our models on over 100,000 top-tier productions to understand the psychological triggers that keep viewers watching till the end.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard icon={TrendingUp} title="Viral Pacing" desc="Automatic scene breaks and retention loops designed to minimize drop-off rates." />
          <FeatureCard icon={Cpu} title="Forge Processor" desc="Leveraging 70B parameters for human-like creativity with strategic precision." />
          <FeatureCard icon={CheckCircle2} title="Shoot-Ready" desc="Get visual directions, camera angles, and b-roll suggestions in every Scene." />
        </div>
      </section>

      <section id="how-it-works" className="py-24 bg-dark-surface/30 rounded-[3rem] border border-dark-border/50 px-8 lg:px-20 mb-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-black mb-8 leading-tight">Master your workflow <br /> in 3 simple steps.</h2>
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
              <div className="absolute bottom-6 left-6 right-6 bg-dark-bg/60 backdrop-blur-md p-5 rounded-xl border border-white/5">
                <p className="text-xs font-medium italic text-white/90">"Save 10+ hours a week. Engagement up by 40%."</p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary-blue flex items-center justify-center text-[8px] font-bold">MK</div>
                  <div className="text-[9px] font-bold">Marcus K.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="text-center mb-16 lg:mb-24">
          <span className="glass-tag mb-4 tracking-widest uppercase font-bold text-[10px] py-1 px-3 bg-primary-blue/10 border border-primary-blue/20 rounded-full text-primary-blue">Regional Expertise</span>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Built for the Indian Creator</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Reels & Shorts', desc: 'Desi viral mastery', icon: Zap },
            { title: 'Narrative Film', desc: 'Long-form deep dives', icon: Video },
            { title: 'Brand Ads', desc: 'High-converting copy', icon: Clapperboard },
            { title: 'Storytellers', desc: 'Independent cinema', icon: Users },
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

      {/* Coming Soon Section */}
      <section className="py-24 lg:py-32 bg-primary-blue/5 rounded-[4rem] border border-primary-blue/10 px-8 lg:px-20 mb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/10 blur-[100px] pointer-events-none"></div>
        <div className="text-center mb-16 relative z-10">
          <span className="glass-tag mb-4 bg-primary-blue/20 text-primary-blue border-primary-blue/30">Future Roadmap</span>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Revolutionizing <br /> Desi Content Creation</h2>
          <p className="text-text-muted max-w-xl mx-auto">We're building more than just scripts. Get ready for the next phase of Creator Suite.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          <div className="figma-card bg-dark-bg/40 backdrop-blur-xl border border-white/5 p-12 group hover:border-primary-blue/30 transition-all">
            <div className="flex items-center justify-between mb-8">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center text-primary-blue group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white/40">Coming Q2 2026</span>
            </div>
            <h3 className="text-2xl font-black mb-4">Autonomous Character Gen</h3>
            <p className="text-text-muted text-sm leading-relaxed mb-8">Create consistent Indian cinematic avatars for your narratives. From urban Gen-Z to rural legends, maintain visual consistency across all your production cycles.</p>
            <div className="flex items-center gap-2 text-primary-blue text-[11px] font-black uppercase tracking-widest">
              <span>Join Waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          <div className="figma-card bg-dark-bg/40 backdrop-blur-xl border border-white/5 p-12 group hover:border-primary-blue/30 transition-all">
            <div className="flex items-center justify-between mb-8">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center text-primary-blue group-hover:scale-110 transition-transform">
                <Video className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white/40">In Development</span>
            </div>
            <h3 className="text-2xl font-black mb-4">Cinematic Production Director</h3>
            <p className="text-text-muted text-sm leading-relaxed mb-8">Turn your blueprints into cinematic production clips instantly. Our localized engine understands Indian lighting, architecture, and aesthetics for authentic visual storytelling.</p>
            <div className="flex items-center gap-2 text-primary-blue text-[11px] font-black uppercase tracking-widest">
              <span>Notify Me</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
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
              comment: "The hook logic is insane. My last 3 productions trended across the country within hours. This is a game changer for content planning.",
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
                {[1, 2, 3, 4, 5].map(s => <Sparkles key={s} className="w-3 h-3 fill-current" />)}
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
            { q: "Is it free to use in India?", a: "Yes! We offer 3 free credits monthly for all Indian creators. Premium plans are localized for the market." },
            { q: "Does it support Hinglish or regional slang?", a: "Absolutely. Our AI is trained on urban and rural Indian context, supporting Hinglish, local slang (Bantai, Yaar, Jugaad), and cultural nuances." },
            { q: "Can I use these for Bollywood or Short films?", a: "Yes, our 'Cinematic' and 'Storytelling' modes are perfect for independent filmmakers and creators aiming for high production value." }
          ].map((item, i) => (
            <div key={i} className="bg-dark-surface/50 border border-dark-border rounded-2xl p-6">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-sm uppercase tracking-wide">{item.q}</h4>
                <Sparkles className="w-4 h-4 text-text-muted" />
              </div>
              <p className="text-xs text-text-muted leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 lg:py-32 border-t border-dark-border/30">
        <div className="text-center mb-16 lg:mb-24">
          <span className="glass-tag mb-4 tracking-widest uppercase font-bold text-[10px] py-1 px-3 bg-primary-blue/10 border border-primary-blue/20 rounded-full text-primary-blue">Transparent Pricing</span>
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
              <span className="text-5xl font-black">₹0</span>
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
            <button
              onClick={onEnterForge}
              className="w-full py-4 border border-dark-border rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-dark-border transition-colors"
            >
              Start Free
            </button>
          </div>

          {/* Pro */}
          <div className="figma-card flex flex-col items-start border-2 border-primary-blue bg-[#12162B] relative p-10 shadow-2xl">
            <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary-blue text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">Most Popular</div>
            <span className="text-[10px] font-black uppercase tracking-widest text-primary-blue mb-4">Professional</span>
            <div className="flex items-baseline gap-1 mb-8 text-white">
              <span className="text-5xl font-black">₹999</span>
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
            <button
              onClick={onEnterForge}
              className="w-full py-4 bg-primary-blue rounded-xl text-[10px] font-black uppercase tracking-widest hover:brightness-110 shadow-xl shadow-primary-blue/20 transition-all"
            >
              Go Professional
            </button>
          </div>

          {/* Agency */}
          <div className="figma-card flex flex-col items-start border-none bg-dark-surface/50 p-10">
            <span className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-4">Agency</span>
            <div className="flex items-baseline gap-1 mb-8 text-white">
              <span className="text-5xl font-black">₹4,999</span>
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
            <button className="w-full py-4 border border-dark-border rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-dark-border transition-colors">Talk to Sales</button>
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
            <button
              onClick={onEnterForge}
              className="bg-white text-primary-blue px-10 h-16 rounded-xl font-black text-lg shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group"
            >
              Start For Free
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-white/50 text-[10px] font-black uppercase tracking-[0.3em] mt-8">No credit card required • Join in 10s</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default LandingPage;
