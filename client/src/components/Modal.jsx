import { AnimatePresence, motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, children }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-6 text-white">
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

export default Modal;
