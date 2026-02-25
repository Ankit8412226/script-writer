import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const LoadingState = ({ loadingStep, loadingSteps, platform }) => (
  <motion.div
    key="loading-state"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex flex-col items-center justify-center py-40 gap-8"
  >
    <div className="relative w-24 h-24">
      <div className="absolute inset-0 border-4 border-primary-blue/20 rounded-full"></div>
      <div className="absolute inset-0 border-4 border-primary-blue rounded-full border-t-transparent animate-spin ring-offset-4 ring-primary-blue/30 scale-110"></div>
      <Sparkles className="absolute inset-0 m-auto w-8 h-8 text-primary-blue animate-pulse" />
    </div>
    <div className="text-center space-y-4">
      <h3 className="text-4xl font-black tracking-tight bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent italic">
        {loadingSteps[loadingStep]}
      </h3>
      <div className="flex flex-col gap-2 items-center">
        <p className="text-[12px] text-primary-blue font-black uppercase tracking-[0.5em] animate-pulse">
          AI AGENT IS PROCESSING
        </p>
        <div className="h-0.5 w-40 bg-dark-surface rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="h-full w-1/2 bg-gradient-to-r from-transparent via-primary-blue to-transparent"
          />
        </div>
        <p className="text-[10px] text-text-muted font-bold uppercase tracking-[0.2em]">
          SAMBANOVA • LLAMA 3.3 • {platform.toUpperCase()} OPTIMIZED
        </p>
      </div>
    </div>
  </motion.div>
);

export default LoadingState;
