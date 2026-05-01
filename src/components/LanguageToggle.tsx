import { Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleLanguage}
        className="group relative flex items-center justify-center w-14 h-14 bg-[#800000] text-white rounded-full shadow-lg hover:bg-[#600000] hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#800000]/30"
      >
        <Languages className="w-6 h-6" />
        
        {/* Tooltip that pops up on hover */}
        <span className="absolute -top-10 right-0 w-max px-3 py-1 bg-slate-900 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          {language === 'en' ? 'Tukar ke Bahasa Melayu' : 'Switch to English'}
        </span>
      </button>

      {/* A tiny badge showing current language */}
      <div className="absolute -top-2 -right-2 bg-white text-[#800000] border-2 border-[#800000] text-[10px] font-extrabold px-1.5 py-0.5 rounded-full uppercase">
        {language}
      </div>
    </div>
  );
};

export default LanguageToggle;