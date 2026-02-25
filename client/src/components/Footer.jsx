import { Clapperboard } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-24 lg:py-32 border-t border-dark-border/30">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20 text-left">
        <div className="col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <Clapperboard className="w-6 h-6 text-primary-blue" />
            <span className="font-black text-xl tracking-tighter">Forge Cinematic AI</span>
          </div>
          <p className="text-sm text-text-muted leading-relaxed max-w-[240px]">
            The world's most advanced Cinematic Intelligence Engine for top-tier creators.
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
        <p className="text-[10px] text-text-muted font-black uppercase tracking-[0.4em]">© 2026 Forge Cinematic AI • Meta-Llama 3.3 Production Engine</p>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-text-muted">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
