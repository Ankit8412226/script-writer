import { FileText, Home, LayoutGrid, Settings } from 'lucide-react';

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

export default BottomTabNav;
