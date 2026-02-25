import { motion } from 'framer-motion';
import { CheckCircle2, Info, X, XCircle } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose }) => {
  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-green-400" />,
    error: <XCircle className="w-5 h-5 text-red-400" />,
    info: <Info className="w-5 h-5 text-blue-400" />,
  };

  const bgColors = {
    success: 'bg-green-500/10 border-green-500/20',
    error: 'bg-red-500/10 border-red-500/20',
    info: 'bg-blue-500/10 border-blue-500/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`fixed bottom-24 right-6 left-6 md:left-auto md:w-96 z-[200] p-4 rounded-2xl border backdrop-blur-xl ${bgColors[type]} flex items-center justify-between shadow-2xl`}
    >
      <div className="flex items-center gap-3">
        {icons[type]}
        <p className="text-sm font-bold text-white tracking-tight">{message}</p>
      </div>
      <button onClick={onClose} className="text-text-muted hover:text-white transition-colors">
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

export default Toast;
