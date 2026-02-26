import { Bell, Clapperboard } from 'lucide-react';

const Navbar = ({ onHome, onEnterForge }) => {
  return (
    <header className="flex justify-between items-center py-8 lg:py-10">
      <div className="flex items-center gap-3 cursor-pointer group" onClick={onHome}>
        <div className="w-10 h-10 bg-primary-blue rounded-xl flex items-center justify-center shadow-lg shadow-primary-blue/20 group-hover:scale-110 transition-transform">
          <Clapperboard className="w-5 h-5 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="font-extrabold text-xl tracking-tight leading-none group-hover:text-primary-blue transition-colors">Forge Cinematic AI</span>
          <span className="text-[10px] text-primary-blue font-bold uppercase tracking-[0.2em] mt-1">Cinematic Production Suite</span>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-10">
        <nav className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-text-muted">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </nav>

        <div className="h-6 w-px bg-dark-border mx-2"></div>

        <button
          onClick={onEnterForge}
          className="figma-button-outline"
        >
          Enter Forge
        </button>

        <button className="w-11 h-11 bg-dark-surface rounded-full border border-dark-border flex items-center justify-center relative hover:border-text-muted transition-colors">
          <Bell className="w-5 h-5 text-text-muted" />
          <div className="absolute top-3.5 right-3.5 w-2 h-2 bg-primary-blue rounded-full border-2 border-dark-bg"></div>
        </button>
      </div>

      <div className="lg:hidden flex items-center gap-4">
        <button className="w-11 h-11 bg-dark-surface rounded-full border border-dark-border flex items-center justify-center">
          <Bell className="w-5 h-5 text-text-muted" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
